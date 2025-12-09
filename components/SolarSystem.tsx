

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PLANETS } from '../constants';
import { PlanetPosition } from '../types';

// ==========================================
// 鏡頭與操作設定 (Camera & Controls)
// ==========================================
const CAMERA_CONFIG = {
    FOV: 35,
    NEAR: 0.001,
    FAR: 5000000,
    // Zoom out 的最大距離
    MAX_DISTANCE: 500000, 
    MIN_DISTANCE: 0.0001,
    INITIAL_POS: { x: 0, y: 30000, z: 60000 },
    // 預設注視點 (y:0 為中心)
    INITIAL_TARGET: { x: 0, y: 0, z: 0 }
};

// ==========================================
// 鏡頭縮放控制設定 (Zoom Configuration)
// ==========================================

// 1. 電腦版畫面佔比 (0.1 ~ 1.0)
// 數值越大，行星在畫面中佔比越大 (鏡頭越近)
const ZOOM_TARGET_FILL_DESKTOP = 0.45;

// 2. 手機版畫面佔比 (0.1 ~ 1.0)
// 通常手機螢幕較窄，可以設稍微小一點，保留更多呼吸空間
const ZOOM_TARGET_FILL_MOBILE = 0.6;

// 3. 環系統放大倍率 (針對土星、天王星、海王星)
// 由於光環很寬，我們需要將行星視為原本的 N 倍大來計算距離，以免光環被切掉。
// 注意：現在此數值會根據不同行星的環系統大小動態調整，此為預設值
const RING_SYSTEM_SCALE_FACTOR = 1.6;

// ==========================================
// 軌道視覺設定 (Orbit Visuals)
// ==========================================
const ORBIT_VISUAL_CONFIG = {
    // 顏色飽和度混合 (0.0 = 行星原色, 1.0 = 純白)
    COLOR_DESATURATION: 0.2, 

    // 軌道顯示長度 (0.0 ~ 1.0)
    // 設為 1.0 可顯示完整圓圈
    VISIBLE_FRACTION: 0.9, 

    // 漸層柔和度 (Power Function)
    FADE_POWER: 0.5,

    // 基礎不透明度 (最暗的地方)
    BASE_OPACITY: 0, 

    // 峰值不透明度 (最亮的地方)
    PEAK_OPACITY: 1.0 
};

// ==========================================
// 太陽視覺效果設定 (Sun Visual Configuration)
// ==========================================
const SUN_CONFIG = {
    // 1. 表面顏色 (Surface Shader)
    // 核心顏色 (RGB: 0.0 ~ 1.0) - 較亮、較熱的黃白色
    CORE_COLOR: { r: 1.0, g: 0.8, b: 0.6 }, 
    // 邊緣顏色 (RGB: 0.0 ~ 1.0) - 較柔和的白色
    EDGE_COLOR: { r: 1.0, g: 0.9, b: 0.6 },
    // 紋理亮度倍率 (數字越大越亮，用來對抗 ToneMapping 的變暗效果)
    SURFACE_BRIGHTNESS: 2.5,

    // 2. 光暈特效 (Glow Sprites)
    // 內層光暈 (金黃色)
    INNER_GLOW_COLOR: 0xFFAA00,
    INNER_GLOW_OPACITY: 0.5,
    INNER_GLOW_SIZE_MULT: 15.0, // 太陽半徑的倍數 (大小)

    // 外層日冕 (橘紅色)
    OUTER_GLOW_COLOR: 0xFF8D00,
    OUTER_GLOW_OPACITY: 0.5,
    OUTER_GLOW_SIZE_MULT: 40.0, // 太陽半徑的倍數 (大小)

    // 3. 光照強度 (Lighting)
    // 遠景時的強度 (數值越大，照亮整個太陽系越強)
    INTENSITY_FAR: 3.0,
    // 近景/選取時的強度 (數值越小，避免近距離看太陽時過曝)
    INTENSITY_NEAR: 0.3,
};

// ==========================================
// 背景星空設定 (Star Background)
// ==========================================
const STAR_CONFIG = {
    // 星球分佈半徑：
    RADIUS: 2000000, 
    
    // 微塵星數量
    DUST_COUNT: 50000,
    // 微塵星大小 (隨距離調整，避免看起來像大方塊)
    DUST_SIZE: 6000, 

    // 亮星數量
    BRIGHT_COUNT: 8000,
    // 亮星大小
    BRIGHT_SIZE: 12000,
};

// ==========================================

interface SolarSystemProps {
  positions: PlanetPosition[];
  selectedPlanetId: string | null;
  onSelectPlanet: (id: string) => void;
  showOrbits: boolean;
  solveKepler: (M: number, e: number) => number;
  speed: number;
  cameraResetTrigger?: number;
  showAxialTilt?: boolean;
}

// --- Shader Definitions ---

// Helper to generate dynamic orbit shader so config changes take effect
const getOrbitFragmentShader = () => `
  uniform vec3 color;
  uniform float currentAngle;
  uniform float hoverState; // 0.0 = Normal, 1.0 = Hover/Selected
  varying float vLineAngle;
  
  #include <common>
  #include <logdepthbuf_pars_fragment>
  
  void main() {
    #include <logdepthbuf_fragment>

    float cAngle = currentAngle;
    float vAngle = vLineAngle;
    
    // Calculate angular difference
    float diff = cAngle - vAngle;
    
    // Normalize diff to [0, 2PI) range
    diff = mod(diff, 2.0 * PI);
    
    // Normalize distance along the trail (0.0 at planet, 1.0 at tail end)
    float dist = diff / (2.0 * PI);
    
    // --- Config Injected via Template Literals ---
    float visibleFraction = ${ORBIT_VISUAL_CONFIG.VISIBLE_FRACTION.toFixed(2)};
    float alpha = 0.0;

    if (dist < visibleFraction) {
        // Renormalize distance within the visible segment (0.0 to 1.0)
        float localDist = dist / visibleFraction;
        
        // Gradient Logic:
        // When localDist is 0 (at planet), intensity is 1.
        // When localDist is 1 (at tail), intensity is 0.
        float intensity = pow(1.0 - localDist, ${ORBIT_VISUAL_CONFIG.FADE_POWER.toFixed(2)});
        
        // Base Opacity + Dynamic Range
        float baseOp = ${ORBIT_VISUAL_CONFIG.BASE_OPACITY.toFixed(2)};
        float peakOp = ${ORBIT_VISUAL_CONFIG.PEAK_OPACITY.toFixed(2)};
        
        // Interpolate
        alpha = baseOp + (peakOp - baseOp) * intensity;
        
        // --- HOVER GLOW EFFECT ---
        if (hoverState > 0.0) {
            alpha = min(1.0, alpha * 2.0); 
        }
    } else {
        // Respect base opacity even outside visible fraction if fraction is < 1.0
        // But if VISIBLE_FRACTION is 1.0, we just want full loop.
        alpha = 0.0; 
    }
    
    // Mix color with white for "Glow" effect when hovered
    vec3 finalColor = mix(color, vec3(1.0, 1.0, 1.0), hoverState * 0.4);

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

const orbitVertexShader = `
  attribute float lineAngle;
  varying float vLineAngle;
  
  #include <common>
  #include <logdepthbuf_pars_vertex>

  void main() {
    vLineAngle = lineAngle;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    #include <logdepthbuf_vertex>
  }
`;

// --- Sun Custom Shaders ---

const sunSurfaceVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  #include <common>
  #include <logdepthbuf_pars_vertex>

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    
    #include <logdepthbuf_vertex>
  }
`;

const sunSurfaceFragmentShader = `
  uniform sampler2D map;
  uniform float time;
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  #include <common>
  #include <logdepthbuf_pars_fragment>

  void main() {
    #include <logdepthbuf_fragment>

    vec3 viewDir = normalize(-vPosition);
    vec3 normal = normalize(vNormal);
    vec4 texColor = texture2D(map, vUv);
    
    // N dot V: 1.0 at center, 0.0 at edge
    float viewDot = dot(normal, viewDir);
    float limb = max(0.0, viewDot);
    
    // --- Config (Injected from constants) ---
    vec3 coreColor = vec3(${SUN_CONFIG.CORE_COLOR.r}, ${SUN_CONFIG.CORE_COLOR.g}, ${SUN_CONFIG.CORE_COLOR.b}); 
    vec3 edgeColor = vec3(${SUN_CONFIG.EDGE_COLOR.r}, ${SUN_CONFIG.EDGE_COLOR.g}, ${SUN_CONFIG.EDGE_COLOR.b});
    
    // Transition:
    // Reduced power from 3.0 to 2.0 to create a smoother, wider gradient
    float rimFactor = pow(1.0 - limb, 2.0); 
    
    // Texture Brightness Boost:
    vec3 baseSurface = texColor.rgb * ${SUN_CONFIG.SURFACE_BRIGHTNESS.toFixed(1)};
    
    // Mix:
    vec3 finalColor = mix(baseSurface * coreColor, edgeColor, rimFactor * 0.85);
    
    // Add subtle extra rim definition
    finalColor += edgeColor * 0.4 * pow(1.0 - limb, 4.0);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// --- Texture Helpers ---

const createSolidWhiteTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0,0,1,1);
    }
    return new THREE.CanvasTexture(canvas);
};
const solidWhiteTexture = createSolidWhiteTexture();

const generateRingTexture = (planetId: string) => {
    // Increased resolution to 2048 to reduce Moiré patterns and aliasing
    const size = 2048;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const cx = size / 2;
    const cy = size / 2;

    ctx.clearRect(0, 0, size, size);

    // Helper to draw a band
    const drawBand = (r: number, width: number, color: string, opacity: number) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.globalAlpha = opacity;
        ctx.stroke();
    };
    
    // Determine configuration based on planet
    const isUranus = planetId === 'uranus';
    const isNeptune = planetId === 'neptune';

    let innerMeshRadius, outerMeshRadius;

    if (isNeptune) {
        innerMeshRadius = 1.5;
        outerMeshRadius = 2.8;
    } else if (isUranus) {
        innerMeshRadius = 1.1; // Extended inward slightly for Zeta fade
        outerMeshRadius = 3.9; // Extended outward for Mu
    } else {
        // Saturn
        innerMeshRadius = 1.3;
        outerMeshRadius = 2.3;
    }
    
    const maxCanvasRadius = size * 0.5;
    const minCanvasRadius = maxCanvasRadius * (innerMeshRadius / outerMeshRadius);

    const startR = minCanvasRadius - 2;
    const endR = maxCanvasRadius - 1;
    const range = endR - startR;

    if (isNeptune) {
        // --- NEPTUNE RINGS (Real Scale) ---
        const getRad = (relativeR: number) => {
             const t = (relativeR - innerMeshRadius) / (outerMeshRadius - innerMeshRadius);
             return startR + range * t;
        };

        // Ring Colors: Dark dust (greyish)
        const ringColor = '#8fa0b5';

        // 1. Galle Ring (Inner, Broad, Faint) - ~1.7R
        drawBand(getRad(1.7), 80, ringColor, 0.15);

        // 2. Le Verrier Ring (Narrow, Distinct) - ~2.16R
        drawBand(getRad(2.16), 3, ringColor, 0.5);

        // 3. Lassell Ring (Sheet between Le Verrier and Arago)
        const lassellStart = getRad(2.16);
        const lassellEnd = getRad(2.32);
        const lassellWidth = lassellEnd - lassellStart;
        const lassellMid = lassellStart + lassellWidth / 2;
        drawBand(lassellMid, lassellWidth, ringColor, 0.08);

        // 4. Arago Ring (Outer edge of Lassell) - ~2.32R
        drawBand(getRad(2.32), 3, ringColor, 0.4);

        // 5. Adams Ring (Outer, Brightest) - ~2.56R
        drawBand(getRad(2.56), 4, '#aabccd', 0.7);

    } else if (isUranus) {
        // --- URANUS RINGS (Updated with Nu and Mu, Refined Zeta) ---
        const getRad = (relativeR: number) => {
             const t = (relativeR - innerMeshRadius) / (outerMeshRadius - innerMeshRadius);
             return startR + range * t;
        };

        const baseColor = '#aaaaaa';
        const brightColor = '#ffffff';
        // Distinct colors for outer rings
        const nuColor = '#691616'; // Reddish for Nu
        const muColor = '#17176e'; // Bluish for Mu

        // 1. Zeta Ring (Inner) - ~1.2R to 1.62R
        const zetaEnd = getRad(1.62); // Just inside the main group
        const zetaStart = getRad(1.2); 
        
        const gradient = ctx.createRadialGradient(cx, cy, zetaStart, cx, cy, zetaEnd);
        gradient.addColorStop(0, 'rgba(150, 150, 150, 0.0)');   // Inner: Fully Transparent
        gradient.addColorStop(0.5, 'rgba(150, 150, 150, 0.1)'); // Mid: Fading in
        gradient.addColorStop(1, 'rgba(150, 150, 150, 0.15)');  // Outer: Sharp edge

        ctx.beginPath();
        ctx.arc(cx, cy, zetaEnd, 0, Math.PI * 2);
        ctx.arc(cx, cy, zetaStart, 0, Math.PI * 2, true); // Create hole
        ctx.fillStyle = gradient;
        ctx.fill();

        // 2. Main Group (6, 5, 4, Alpha, Beta, Eta, Gamma, Delta, Lambda) - ~1.65R to 1.95R
        // Distinct thin rings
        drawBand(getRad(1.65), 1, baseColor, 0.4); // Ring 6
        drawBand(getRad(1.67), 1, baseColor, 0.4); // Ring 5
        drawBand(getRad(1.69), 1, baseColor, 0.4); // Ring 4
        
        drawBand(getRad(1.76), 1.5, baseColor, 0.6); // Alpha
        drawBand(getRad(1.79), 1.5, baseColor, 0.6); // Beta
        
        drawBand(getRad(1.86), 1.3, baseColor, 0.6); // Eta
        drawBand(getRad(1.89), 1, baseColor, 0.4); // Gamma
        drawBand(getRad(1.92), 1.3, baseColor, 0.6); // Delta

        drawBand(getRad(1.97), 1.3, baseColor, 0.6); // Lambda
        
        // 3. Epsilon Ring (The Brightest) - ~2.01R
        drawBand(getRad(2.01), 1.8, brightColor, 0.8);

        // 4. Nu (Nu) Ring - ~2.6R - 2.8R
        // Broad, faint, Reddish
        const nuStart = getRad(2.65);
        const nuEnd = getRad(2.8);
        const nuWidth = nuEnd - nuStart;
        const nuMid = nuStart + nuWidth / 2;
        drawBand(nuMid, nuWidth, nuColor, 0.14); // Wide

        // 5. Mu (Mu) Ring - ~3.8R - 4.2R
        // Very Broad, Very Faint, Bluish
        const muStart = getRad(3.35);
        const muEnd = getRad(3.9);
        const muWidth = muEnd - muStart;
        const muMid = muStart + muWidth / 2;
        drawBand(muMid, muWidth, muColor, 0.1); // Very wide, very faint

    } else {
        // --- SATURN RINGS ---
        const colors = ['#d3b589', '#c2a278', '#a49174', '#8a7b63', '#e0d0b0'];
        
        const step = 1.5; 
        let prevAlpha = 0.8;
        let prevColorIndex = 0;
        
        for (let r = startR; r < endR; r += step) {
            const t = (r - startR) / (endR - startR);
            let targetAlpha = 0.8; 
            let colorIndex = prevColorIndex;

            if (Math.random() > 0.95) {
               colorIndex = Math.floor(Math.random() * colors.length);
            }
            let color = colors[colorIndex];

            // Zones
            if (t < 0.15) { // C Ring
                 color = '#5b5b6b';
                 targetAlpha = 0.15 + Math.random() * 0.1; 
            }
            else if (t < 0.60) { // B Ring
                 targetAlpha = 0.9;
                 if (Math.random() < 0.02) targetAlpha = 0.6; 
            }
            else if (t < 0.65) { // Cassini Division
                 color = '#000000';
                 targetAlpha = 0.0; 
            }
            else { // A Ring
                 targetAlpha = 0.6;
                 if (t > 0.90 && t < 0.92) {
                     targetAlpha = 0.05; // Encke Gap
                     color = '#111111';
                 }
            }

            let finalAlpha = prevAlpha * 0.8 + targetAlpha * 0.2 + (Math.random() - 0.5) * 0.05;
            finalAlpha = Math.max(0, Math.min(1, finalAlpha)); 

            let width = step + Math.random() * 0.5;

            drawBand(r, width, color, finalAlpha);
            
            prevAlpha = finalAlpha;
            prevColorIndex = colorIndex;
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
};

const generateGlowTexture = () => {
  const size = 1024; 
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if(!context) return null;
  
  const center = size / 2;
  const maxRadius = size / 2;
  
  context.clearRect(0, 0, size, size);
  
  const imageData = context.createImageData(size, size);
  const data = imageData.data;
  
  for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
          const dx = x - center;
          const dy = y - center;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const ratio = distance / maxRadius;
          
          if (ratio < 1.0) {
              const safeRatio = Math.min(1.0, ratio / 0.7); 
              let alpha = 0;
              if (safeRatio < 1.0) {
                  alpha = Math.pow(1.0 - safeRatio, 2.5); 
              }
              const index = (y * size + x) * 4;
              data[index] = 255;     
              data[index + 1] = 255; 
              data[index + 2] = 255; 
              data[index + 3] = alpha * 255; 
          }
      }
  }
  
  context.putImageData(imageData, 0, 0);
  return new THREE.CanvasTexture(canvas);
}

const generateStarTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if(!ctx) return null;

    const center = 32;
    const gradient = ctx.createRadialGradient(center, center, 0, center, center, 32);
    
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.9)'); 
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)'); 
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.0)'); 

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
};

const SolarSystem: React.FC<SolarSystemProps> = ({
  positions,
  selectedPlanetId,
  onSelectPlanet,
  showOrbits,
  solveKepler,
  speed,
  cameraResetTrigger = 0,
  showAxialTilt = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelContainerRef = useRef<HTMLDivElement>(null);
  
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const planetsRef = useRef<{ [key: string]: any }>({});
  const tiltsRef = useRef<{ [key: string]: any }>({}); 
  const orbitsRef = useRef<{ [key: string]: any }>({});
  const planetLabelsRef = useRef<{ [key: string]: HTMLDivElement }>({});
  const earthCloudsRef = useRef<any>(null);
  
  const axisLinesRef = useRef<{ [key: string]: any }>({});
  const perpLinesRef = useRef<{ [key: string]: any }>({});
  
  const focusLightRef = useRef<any>(null);
  const sunLightRef = useRef<any>(null); 
  const sunUniformsRef = useRef<any>(null); 

  const interactableRef = useRef<any[]>([]); 
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());

  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const animationFrameIdRef = useRef<number | null>(null);
  
  const previousTargetPosRef = useRef<any>(null);
  const selectedPlanetIdRef = useRef(selectedPlanetId);
  const prevSelectedIdRef = useRef<string | null>(null);
  const hoveredPlanetIdRef = useRef<string | null>(null);
  const isResettingRef = useRef(false);
  const shouldAutoZoomRef = useRef(false); 
  
  const speedRef = useRef(speed);
  useEffect(() => { speedRef.current = speed; }, [speed]);

  const pointerDownPosRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);

  useEffect(() => { selectedPlanetIdRef.current = selectedPlanetId; }, [selectedPlanetId]);

  useEffect(() => {
    if (cameraResetTrigger > 0) {
        isResettingRef.current = true;
        shouldAutoZoomRef.current = false;
        previousTargetPosRef.current = null;
    }
  }, [cameraResetTrigger]);

  const onSelectPlanetRef = useRef(onSelectPlanet);
  useEffect(() => { onSelectPlanetRef.current = onSelectPlanet; }, [onSelectPlanet]);
  
  useEffect(() => {
      Object.keys(axisLinesRef.current).forEach(id => {
          const axisLine = axisLinesRef.current[id];
          const perpLine = perpLinesRef.current[id];
          const isActive = showAxialTilt && (selectedPlanetId === id);
          
          if (axisLine) axisLine.visible = isActive;
          if (perpLine) perpLine.visible = isActive;
      });
  }, [showAxialTilt, selectedPlanetId]);

  useEffect(() => {
    if (!containerRef.current) return;

    interactableRef.current = [];

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // USE CAMERA_CONFIG
    const camera = new THREE.PerspectiveCamera(
        CAMERA_CONFIG.FOV, 
        containerRef.current.clientWidth / containerRef.current.clientHeight, 
        CAMERA_CONFIG.NEAR, 
        CAMERA_CONFIG.FAR
    );
    
    // USE CAMERA_CONFIG INITIAL POS
    camera.position.set(CAMERA_CONFIG.INITIAL_POS.x, CAMERA_CONFIG.INITIAL_POS.y, CAMERA_CONFIG.INITIAL_POS.z); 
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true, 
        powerPreference: "high-performance",
        logarithmicDepthBuffer: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
    
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2; 
    
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    // USE CAMERA_CONFIG DISTANCES
    controls.minDistance = CAMERA_CONFIG.MIN_DISTANCE; 
    controls.maxDistance = CAMERA_CONFIG.MAX_DISTANCE; 
    
    // Set initial target with offset based on viewport
    // If mobile (<768px), move target down (Y=-1800) to effectively move camera up relative to model
    const initialYOffset = window.innerWidth < 768 ? -1800 : 0;

    controls.target.set(
        CAMERA_CONFIG.INITIAL_TARGET.x,
        CAMERA_CONFIG.INITIAL_TARGET.y + initialYOffset,
        CAMERA_CONFIG.INITIAL_TARGET.z
    );

    controlsRef.current = controls;

    controls.addEventListener('start', () => {
        shouldAutoZoomRef.current = false;
        isResettingRef.current = false;
    });

    const sunLight = new THREE.PointLight(0xffffff, SUN_CONFIG.INTENSITY_FAR, 0, 0); 
    sunLight.position.set(0, 0, 0);
    sunLight.castShadow = false; 
    scene.add(sunLight);
    sunLightRef.current = sunLight;
    
    const ambient = new THREE.AmbientLight(0xffffff, 0.5); 
    scene.add(ambient);

    const focusLight = new THREE.DirectionalLight(0xffffff, 4.0);
    focusLight.castShadow = true;
    focusLight.shadow.mapSize.width = 4096;
    focusLight.shadow.mapSize.height = 4096;
    focusLight.shadow.bias = -0.0001; 
    focusLight.shadow.radius = 3.5; 
    focusLight.visible = false; 
    
    scene.add(focusLight);
    scene.add(focusLight.target);
    focusLightRef.current = focusLight;

    const starGroup = new THREE.Group();
    scene.add(starGroup);

    const starTexture = generateStarTexture();

    // --- STARS GENERATION USING STAR_CONFIG ---
    const dustCount = STAR_CONFIG.DUST_COUNT; 
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    const starDist = STAR_CONFIG.RADIUS; 

    for(let i=0; i<dustCount; i++) {
        const r = starDist * (0.6 + Math.random() * 0.4); 
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        dustPos[i*3] = x;
        dustPos[i*3+1] = y;
        dustPos[i*3+2] = z;
    }
    
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
        color: 0xffffff, 
        size: STAR_CONFIG.DUST_SIZE, // Scaled Size
        map: starTexture, 
        transparent: true, 
        opacity: 1.0,  
        sizeAttenuation: true,
        depthWrite: false, 
        blending: THREE.AdditiveBlending 
    });
    const dustStars = new THREE.Points(dustGeo, dustMat);
    
    dustStars.renderOrder = -10; 
    starGroup.add(dustStars);

    const brightCount = STAR_CONFIG.BRIGHT_COUNT; 
    const brightGeo = new THREE.BufferGeometry();
    const brightPosArray = new Float32Array(brightCount * 3);
    const brightColorArray = new Float32Array(brightCount * 3);

    const starColors = [
        new THREE.Color('#FFFFFF'), 
        new THREE.Color('#AABFFF'), 
        new THREE.Color('#FFDDAA'), 
        new THREE.Color('#FFBB88'), 
    ];

    for(let i=0; i<brightCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const r = starDist * (0.8 + Math.random() * 0.4); 

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        brightPosArray[i*3] = x;
        brightPosArray[i*3+1] = y;
        brightPosArray[i*3+2] = z;

        const color = starColors[Math.floor(Math.random() * starColors.length)];
        brightColorArray[i*3] = color.r;
        brightColorArray[i*3+1] = color.g;
        brightColorArray[i*3+2] = color.b;
    }
    brightGeo.setAttribute('position', new THREE.BufferAttribute(brightPosArray, 3));
    brightGeo.setAttribute('color', new THREE.BufferAttribute(brightColorArray, 3));
    
    const brightMat = new THREE.PointsMaterial({
        size: STAR_CONFIG.BRIGHT_SIZE, // Scaled Size
        map: starTexture, 
        transparent: true, 
        opacity: 1.0, 
        vertexColors: true, 
        sizeAttenuation: true,
        depthWrite: false, 
        blending: THREE.AdditiveBlending
    });
    const brightStars = new THREE.Points(brightGeo, brightMat);
    brightStars.renderOrder = -10; 
    starGroup.add(brightStars);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';

    PLANETS.forEach(data => {
        let mesh;
        let tiltGroup = new THREE.Group();

        let mat: any;
        
        if (data.id === 'sun') {
             const uniforms = {
                 map: { value: solidWhiteTexture },
                 time: { value: 0.0 }
             };
             mat = new THREE.ShaderMaterial({
                 uniforms: uniforms,
                 vertexShader: sunSurfaceVertexShader,
                 fragmentShader: sunSurfaceFragmentShader,
                 transparent: false, 
                 depthWrite: true, 
             });
             sunUniformsRef.current = uniforms;
        } else {
             mat = new THREE.MeshStandardMaterial({ 
                 color: data.color,
                 map: null, 
                 roughness: 1.0, 
                 metalness: 0.0,
                 emissive: 0x000000 
             });
        }

        if (data.texture && data.texture.length > 0) {
            textureLoader.load(
                data.texture,
                (loadedTex: any) => {
                    loadedTex.colorSpace = THREE.SRGBColorSpace;
                    loadedTex.anisotropy = maxAnisotropy;
                    
                    if (data.id === 'sun') {
                         mat.uniforms.map.value = loadedTex;
                    } else {
                         mat.map = loadedTex;
                         mat.color.setHex(0xffffff);
                         mat.needsUpdate = true;
                    }
                },
                undefined,
                (err: any) => console.warn(`Texture failed for ${data.id}`)
            );
        }

        if (data.id === 'sun') {
            const geo = new THREE.SphereGeometry(data.radius, 64, 64);
            mesh = new THREE.Mesh(geo, mat);
            mesh.name = 'planetMesh';
            mesh.userData = { id: data.id };
            interactableRef.current.push(mesh);
            
            const glowTex = generateGlowTexture();
            
            const spriteMat2 = new THREE.SpriteMaterial({ 
                map: glowTex, 
                color: SUN_CONFIG.INNER_GLOW_COLOR, 
                transparent: true, 
                opacity: SUN_CONFIG.INNER_GLOW_OPACITY, 
                blending: THREE.AdditiveBlending, 
                depthWrite: false 
            });
            const sprite2 = new THREE.Sprite(spriteMat2);
            sprite2.scale.set(data.radius * SUN_CONFIG.INNER_GLOW_SIZE_MULT, data.radius * SUN_CONFIG.INNER_GLOW_SIZE_MULT, 1.0); 
            mesh.add(sprite2);

            const spriteMat3 = new THREE.SpriteMaterial({ 
                map: glowTex, 
                color: SUN_CONFIG.OUTER_GLOW_COLOR, 
                transparent: true, 
                opacity: SUN_CONFIG.OUTER_GLOW_OPACITY, 
                blending: THREE.AdditiveBlending, 
                depthWrite: false 
            });
            const sprite3 = new THREE.Sprite(spriteMat3);
            sprite3.scale.set(data.radius * SUN_CONFIG.OUTER_GLOW_SIZE_MULT, data.radius * SUN_CONFIG.OUTER_GLOW_SIZE_MULT, 1.0);
            mesh.add(sprite3);
            
            scene.add(mesh);
            planetsRef.current[data.id] = mesh;

        } else {
            const orbitGroup = new THREE.Group();
            
            let parentObj: THREE.Object3D = scene;
            
            if (data.parentId && data.id !== 'moon') {
                 if (tiltsRef.current[data.parentId]) {
                     parentObj = tiltsRef.current[data.parentId];
                 } else if (planetsRef.current[data.parentId]) {
                     parentObj = planetsRef.current[data.parentId];
                 }
            } else if (data.parentId) {
                 if (planetsRef.current[data.parentId]) {
                     parentObj = planetsRef.current[data.parentId];
                 }
            }

            parentObj.add(orbitGroup);
            planetsRef.current[data.id] = orbitGroup; 

            tiltGroup.rotation.z = data.axialTilt * (Math.PI / 180);
            orbitGroup.add(tiltGroup);
            tiltsRef.current[data.id] = tiltGroup;

            const geo = new THREE.SphereGeometry(data.radius, 64, 64); 
            mesh = new THREE.Mesh(geo, mat);
            mesh.name = 'planetMesh'; 
            mesh.userData = { id: data.id };
            interactableRef.current.push(mesh);
            
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            tiltGroup.add(mesh);

            // --- AXIAL TILT VISUALIZATION ---
            const axisLength = data.radius * 1.5; 
            const axisPoints = [
                new THREE.Vector3(0, -axisLength, 0),
                new THREE.Vector3(0, axisLength, 0)
            ];
            const axisGeo = new THREE.BufferGeometry().setFromPoints(axisPoints);
            const axisMat = new THREE.LineBasicMaterial({ 
                color: 0xffffff,
                depthTest: false, 
                transparent: true,
                opacity: 1.0
            });
            const axisLine = new THREE.Line(axisGeo, axisMat);
            axisLine.visible = false; 
            axisLine.renderOrder = 999;
            tiltGroup.add(axisLine);
            axisLinesRef.current[data.id] = axisLine;

            const perpPoints = [
                new THREE.Vector3(0, -axisLength, 0),
                new THREE.Vector3(0, axisLength, 0)
            ];
            const perpGeo = new THREE.BufferGeometry().setFromPoints(perpPoints);
            
            const perpMat = new THREE.LineDashedMaterial({ 
                color: 0xffffff,
                dashSize: data.radius * 0.025,
                gapSize: data.radius * 0.025,
                transparent: true, 
                opacity: 1.0,
                depthTest: false 
            });
            const perpLine = new THREE.Line(perpGeo, perpMat);
            perpLine.computeLineDistances();
            perpLine.visible = false; 
            perpLine.renderOrder = 998;
            
            orbitGroup.add(perpLine); 
            perpLinesRef.current[data.id] = perpLine;


            if (data.id === 'earth') {
                 const cloudGeo = new THREE.SphereGeometry(data.radius * 1.02, 64, 64);
                 const cloudMat = new THREE.MeshStandardMaterial({
                     map: null, 
                     transparent: true,
                     opacity: 0.0, 
                     side: THREE.DoubleSide,
                     blending: THREE.AdditiveBlending,
                     depthWrite: false,
                     roughness: 1.0, 
                     emissive: 0x000000
                 });

                 if (data.cloudTexture) {
                    textureLoader.load(data.cloudTexture, (tex: any) => {
                        tex.colorSpace = THREE.SRGBColorSpace;
                        tex.anisotropy = maxAnisotropy;
                        cloudMat.alphaMap = tex;
                        cloudMat.color.setHex(0xffffff); 
                        cloudMat.blending = THREE.NormalBlending;
                        cloudMat.opacity = 0.9;
                        cloudMat.needsUpdate = true;
                    });
                 }
                 
                 const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
                 mesh.add(cloudMesh);
                 earthCloudsRef.current = cloudMesh;
            }

            if (data.id === 'saturn' || data.id === 'uranus' || data.id === 'neptune') {
                const isUranus = data.id === 'uranus';
                const isNeptune = data.id === 'neptune';
                
                let innerR, outerR;
                
                if (isNeptune) {
                    // Neptune rings are significantly larger relative to the planet's radius
                    innerR = data.radius * 1.5; 
                    outerR = data.radius * 2.8;
                } else if (isUranus) {
                    // Expanded to include Mu ring which is far out (~4.2 R)
                    innerR = data.radius * 1.3;
                    outerR = data.radius * 3.9;
                } else {
                    // Saturn
                    innerR = data.radius * 1.3;
                    outerR = data.radius * 2.3;
                }

                const ringGeo = new THREE.RingGeometry(innerR, outerR, 256);
                const ringMat = new THREE.MeshStandardMaterial({
                    color: 0xffffff, 
                    side: THREE.DoubleSide, 
                    shadowSide: THREE.DoubleSide, 
                    transparent: true, 
                    opacity: 0.95,
                    roughness: 0.4, 
                    metalness: 0.1,
                    emissive: 0x000000, 
                    alphaTest: 0.05 
                });

                const ringDepthMat = new THREE.MeshDepthMaterial({
                    depthPacking: THREE.RGBADepthPacking,
                    map: null, 
                    alphaTest: 0.05
                });
                
                if (data.ringTexture) {
                    textureLoader.load(data.ringTexture, (tex: any) => {
                        tex.anisotropy = maxAnisotropy;
                        ringMat.map = tex;
                        ringMat.needsUpdate = true;
                        
                        ringDepthMat.map = tex; 
                        ringDepthMat.needsUpdate = true;
                    }, undefined, () => {
                        const procTex = generateRingTexture(data.id);
                        if (procTex) {
                            procTex.anisotropy = maxAnisotropy;
                            ringMat.map = procTex;
                            ringMat.needsUpdate = true;
                            
                            ringDepthMat.map = procTex;
                            ringDepthMat.needsUpdate = true;
                        }
                    });
                } else {
                    const procTex = generateRingTexture(data.id);
                    if (procTex) {
                        procTex.anisotropy = maxAnisotropy;
                        ringMat.map = procTex;
                        ringDepthMat.map = procTex;
                    }
                }
                
                const pos = ringGeo.attributes.position;
                const uv = ringGeo.attributes.uv;
                for (let i = 0; i < pos.count; i++) {
                     const x = pos.getX(i);
                     const y = pos.getY(i);
                     const maxR = outerR;
                     const u = (x / maxR) * 0.5 + 0.5;
                     const v = (y / maxR) * 0.5 + 0.5;
                     uv.setXY(i, u, v);
                }

                const ring = new THREE.Mesh(ringGeo, ringMat);
                ring.customDepthMaterial = ringDepthMat; 
                ring.rotation.x = -Math.PI / 2; 
                
                ring.castShadow = false; 
                ring.receiveShadow = true; 
                
                tiltGroup.add(ring); 
            }
        }
        
        if (data.id !== 'sun') {
            const points = [];
            const lineAngles = [];
            const segments = Math.min(20000, Math.max(256, Math.floor(data.orbitRadius))); 
            
            let previousAngle = 0; 

            for (let i = 0; i <= segments; i++) {
                const M = (i / segments) * 2 * Math.PI;
                const E = solveKepler(M, data.eccentricity);
                const a = data.orbitRadius;
                const e = data.eccentricity;
                const b = a * Math.sqrt(1 - e * e);
                const xCenter = a * (Math.cos(E) - e);
                const yCenter = b * Math.sin(E);
                
                const angleRad = (data.orbitAngle * Math.PI) / 180;
                const x = xCenter * Math.cos(angleRad) - yCenter * Math.sin(angleRad);
                // FIX: Invert Z to match new coordinate system (-yPlane)
                const z = -(xCenter * Math.sin(angleRad) + yCenter * Math.cos(angleRad));
                
                // atan2(y, x) -> atan2(-z, x) because z was -yPlane
                let vAngle = Math.atan2(-z, x);

                if (i > 0) {
                     let delta = vAngle - previousAngle;
                     while (delta <= -Math.PI) delta += 2 * Math.PI;
                     while (delta > Math.PI) delta -= 2 * Math.PI;
                     vAngle = previousAngle + delta;
                }
                previousAngle = vAngle;

                const inclRad = (data.inclination * Math.PI) / 180;
                const y = data.orbitRadius * Math.sin(inclRad) * Math.sin(vAngle);

                points.push(new THREE.Vector3(x, y, z));
                lineAngles.push(vAngle);
            }
            
            const orbitGeo = new THREE.BufferGeometry().setFromPoints(points);
            orbitGeo.setAttribute('lineAngle', new THREE.Float32BufferAttribute(lineAngles, 1));
            
            const orbitFragmentShader = getOrbitFragmentShader();

            // USE ORBIT_VISUAL_CONFIG for Color
            const orbitColor = new THREE.Color(data.color).lerp(new THREE.Color(0xffffff), ORBIT_VISUAL_CONFIG.COLOR_DESATURATION);

            const orbitMat = new THREE.ShaderMaterial({
                uniforms: {
                    color: { value: orbitColor },
                    currentAngle: { value: 0.0 },
                    hoverState: { value: 0.0 }
                },
                vertexShader: orbitVertexShader,
                fragmentShader: orbitFragmentShader,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            });

            const orbitLine = new THREE.Line(orbitGeo, orbitMat);

            if (data.parentId && data.id !== 'moon' && tiltsRef.current[data.parentId]) {
                 tiltsRef.current[data.parentId].add(orbitLine);
            } else if (data.parentId && planetsRef.current[data.parentId]) {
                const parentGroup = planetsRef.current[data.parentId];
                parentGroup.add(orbitLine);
            } else {
                scene.add(orbitLine);
            }
            
            orbitsRef.current[data.id] = orbitLine;
        }

        if (labelContainerRef.current) {
            const label = document.createElement('div');
            label.className = 'planet-label';
            label.textContent = data.name.split(' ')[0];
            label.onclick = () => onSelectPlanetRef.current(data.id);
            label.onmouseenter = () => { hoveredPlanetIdRef.current = data.id; };
            label.onmouseleave = () => { hoveredPlanetIdRef.current = null; };
            
            const yOffset = data.id === 'moon' ? '50%' : '-120%';
            label.style.transform = `translate(-50%, ${yOffset})`;

            labelContainerRef.current.appendChild(label);
            planetLabelsRef.current[data.id] = label;
        }
    });

    const updateVisibility = () => {
        Object.keys(axisLinesRef.current).forEach(id => {
            const axisLine = axisLinesRef.current[id];
            const perpLine = perpLinesRef.current[id];
        });
    };
    updateVisibility();

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.target === containerRef.current && cameraRef.current && rendererRef.current) {
                const width = entry.contentRect.width;
                const height = entry.contentRect.height;
                cameraRef.current.aspect = width / height;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(width, height);
            }
        }
    });
    resizeObserver.observe(containerRef.current);

    const onPointerDown = (event: PointerEvent) => {
        isDraggingRef.current = false;
        pointerDownPosRef.current = { x: event.clientX, y: event.clientY };
    };

    const onPointerMove = (event: PointerEvent) => {
        const dx = event.clientX - pointerDownPosRef.current.x;
        const dy = event.clientY - pointerDownPosRef.current.y;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            isDraggingRef.current = true;
        }

        if (event.pointerType === 'mouse' && containerRef.current && cameraRef.current) {
            const rect = rendererRef.current.domElement.getBoundingClientRect();
            mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            
            raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
            const intersects = raycasterRef.current.intersectObjects(interactableRef.current, false);
            
            containerRef.current.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
            hoveredPlanetIdRef.current = intersects.length > 0 ? intersects[0].object.userData.id : null;
        }
    };

    const onPointerUp = (event: PointerEvent) => {
        if (isDraggingRef.current) return;
        if (!containerRef.current || !cameraRef.current) return;

        const rect = rendererRef.current.domElement.getBoundingClientRect();
        mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(interactableRef.current, false);
        
        if (intersects.length > 0) {
            onSelectPlanetRef.current(intersects[0].object.userData.id); 
        }
    };

    if (rendererRef.current?.domElement) {
        rendererRef.current.domElement.addEventListener('pointerdown', onPointerDown);
        rendererRef.current.domElement.addEventListener('pointermove', onPointerMove);
        rendererRef.current.domElement.addEventListener('pointerup', onPointerUp);
        rendererRef.current.domElement.style.touchAction = 'none';
    }

    const animate = () => {
        if (!containerRef.current) return;
        
        animationFrameIdRef.current = requestAnimationFrame(animate);

        const dt = clockRef.current.getDelta(); 
        const currentSelectedId = selectedPlanetIdRef.current;
        const prevSelectedId = prevSelectedIdRef.current;
        const hoveredId = hoveredPlanetIdRef.current;
        
        if (sunUniformsRef.current) {
            sunUniformsRef.current.time.value += dt;
        }

        if (currentSelectedId && currentSelectedId !== 'sun') {
             if (sunLightRef.current) sunLightRef.current.intensity = SUN_CONFIG.INTENSITY_NEAR;
             if (focusLightRef.current) focusLightRef.current.visible = true;
        } else {
             if (sunLightRef.current) sunLightRef.current.intensity = SUN_CONFIG.INTENSITY_FAR; 
             if (focusLightRef.current) focusLightRef.current.visible = false;
        }

        if (currentSelectedId && currentSelectedId !== 'sun' && focusLightRef.current) {
            const targetObj = planetsRef.current[currentSelectedId];
            
            if (targetObj) {
                const targetPos = new THREE.Vector3();
                const tiltGroup = tiltsRef.current[currentSelectedId];
                const mesh = tiltGroup ? tiltGroup.children.find((c:any) => c.name === 'planetMesh') : null;
                
                if (mesh) mesh.getWorldPosition(targetPos);
                else targetObj.getWorldPosition(targetPos);
                
                const toSunVec = targetPos.clone().normalize().negate();
                const pData = PLANETS.find(p => p.id === currentSelectedId);
                const r = pData ? pData.radius : 1;
                
                const lightDist = Math.max(2, r * 10); 

                focusLightRef.current.position.copy(targetPos).add(toSunVec.multiplyScalar(lightDist));
                focusLightRef.current.target.position.copy(targetPos);
                
                const camSize = Math.max(0.1, r * 5.0); 
                focusLightRef.current.shadow.camera.left = -camSize;
                focusLightRef.current.shadow.camera.right = camSize;
                focusLightRef.current.shadow.camera.top = camSize;
                focusLightRef.current.shadow.camera.bottom = -camSize;
                focusLightRef.current.shadow.camera.near = 0.01;
                focusLightRef.current.shadow.camera.far = lightDist * 3;
                focusLightRef.current.shadow.camera.updateProjectionMatrix();
            }
        }

        PLANETS.forEach(p => {
             const isHighlighted = (p.id === currentSelectedId || p.id === hoveredId);
             
             if (orbitsRef.current[p.id]) {
                 const line = orbitsRef.current[p.id];
                 if (line.material.uniforms.hoverState) {
                     line.material.uniforms.hoverState.value = isHighlighted ? 1.0 : 0.0;
                 }
             }

             if (planetLabelsRef.current[p.id]) {
                 const label = planetLabelsRef.current[p.id];
                 if (isHighlighted) {
                     label.style.color = '#ffffff';
                     label.style.textShadow = `0 0 15px ${p.color}, 0 0 30px ${p.color}`;
                     label.style.opacity = '1.0';
                     label.style.fontWeight = '700';
                     label.style.zIndex = '100';
                 } else {
                     label.style.color = 'rgba(255, 255, 255, 0.9)';
                     label.style.textShadow = '0 2px 4px rgba(0,0,0,0.8)';
                     label.style.opacity = '0.9';
                     label.style.fontWeight = '500';
                     label.style.zIndex = '1';
                 }
             }
        });

        if (earthCloudsRef.current) {
            earthCloudsRef.current.rotation.y += 0.00005;
        }

        let desiredTarget = new THREE.Vector3(0,0,0); 
        let hasTarget = false;
        
        if (prevSelectedId && !currentSelectedId) {
             isResettingRef.current = true;
             shouldAutoZoomRef.current = false;
             previousTargetPosRef.current = null;
        }
        if (currentSelectedId) {
             isResettingRef.current = false;
             if (currentSelectedId !== prevSelectedId) {
                 shouldAutoZoomRef.current = true;
                 previousTargetPosRef.current = null;
             }
        }

        if (currentSelectedId) {
            if (planetsRef.current[currentSelectedId]) {
                const targetObj = planetsRef.current[currentSelectedId];
                if (currentSelectedId === 'sun') {
                    targetObj.getWorldPosition(desiredTarget);
                    hasTarget = true;
                } else {
                     const tiltGroup = tiltsRef.current[currentSelectedId];
                     const mesh = tiltGroup ? tiltGroup.children.find((c:any) => c.name === 'planetMesh') : null;
                     if (mesh) {
                         mesh.getWorldPosition(desiredTarget);
                         hasTarget = true;
                     }
                }
            }
        }

        if (hasTarget && currentSelectedId && !isResettingRef.current) {
            // Apply Dynamic Mobile Offset when zooming into a planet
            // This ensures the planet appears higher on screen (clearing the bottom sheet)
            // Use window.innerWidth to correctly detect mobile viewport for camera offset
            if (window.innerWidth < 768) {
                 const pData = PLANETS.find(p => p.id === currentSelectedId);
                 if (pData) {
                     let r = pData.radius;
                     if (['saturn', 'uranus', 'neptune'].includes(pData.id)) r *= RING_SYSTEM_SCALE_FACTOR;
                     if (pData.id === 'sun') r *= 1.2;
                     
                     // Decrease Y target to make camera look lower -> Planet appears higher
                     desiredTarget.y -= r * 0.45;
                 }
            }

            if (previousTargetPosRef.current) {
                 const delta = new THREE.Vector3().subVectors(desiredTarget, previousTargetPosRef.current);
                 controlsRef.current!.target.add(delta);
                 cameraRef.current!.position.add(delta);
            }
            if (!previousTargetPosRef.current) previousTargetPosRef.current = new THREE.Vector3();
            previousTargetPosRef.current.copy(desiredTarget);
        }

        const dampFactor = 1 - Math.exp(-4.0 * dt);

        if (isResettingRef.current) {
            // Apply Initial Target Offset on Reset (Responsive)
            // Mobile (<768px): Y = -2500 (Move model up)
            // Desktop: Y = 0 (Center)
            // Use window.innerWidth to correctly detect mobile viewport for camera offset
            const isMobile = window.innerWidth < 768;
            const offsetY = isMobile ? -2500 : 0;
            
            const defaultTarget = new THREE.Vector3(
                CAMERA_CONFIG.INITIAL_TARGET.x,
                CAMERA_CONFIG.INITIAL_TARGET.y + offsetY,
                CAMERA_CONFIG.INITIAL_TARGET.z
            );
            // USE CAMERA_CONFIG DEFAULT POS
            const defaultCamPos = new THREE.Vector3(CAMERA_CONFIG.INITIAL_POS.x, CAMERA_CONFIG.INITIAL_POS.y, CAMERA_CONFIG.INITIAL_POS.z); 

            controlsRef.current!.target.lerp(defaultTarget, dampFactor);
            cameraRef.current!.position.lerp(defaultCamPos, dampFactor);
            
            const distTarget = controlsRef.current!.target.distanceTo(defaultTarget);
            const distCam = cameraRef.current!.position.distanceTo(defaultCamPos);

            if (distTarget < 1.0 && distCam < 5.0) {
                controlsRef.current!.target.copy(defaultTarget);
                cameraRef.current!.position.copy(defaultCamPos);
                isResettingRef.current = false;
            }

        } else if (currentSelectedId) {
            const currentTarget = controlsRef.current!.target;
            const distToDesired = currentTarget.distanceTo(desiredTarget);

            if (distToDesired > 0.001) {
                currentTarget.lerp(desiredTarget, dampFactor);
            } else {
                currentTarget.copy(desiredTarget);
            }

            if (shouldAutoZoomRef.current) {
                const pData = PLANETS.find(p => p.id === currentSelectedId);
                if (pData) {
                    const fovRad = (cameraRef.current!.fov * Math.PI) / 180;
                    
                    let visualRadius = pData.radius;
                    // Updated: Use standard scaling factor for all ringed planets (Saturn, Uranus, Neptune)
                    // This ensures consistent planet body size, even if Uranus outer rings (Nu/Mu) are cropped.
                    if (pData.id === 'saturn' || pData.id === 'uranus' || pData.id === 'neptune') {
                        visualRadius *= RING_SYSTEM_SCALE_FACTOR;
                    }
                    if (pData.id === 'sun') visualRadius *= 1.1;

                    const isMobile = containerRef.current.clientWidth < 768;
                    const targetFill = isMobile ? ZOOM_TARGET_FILL_MOBILE : ZOOM_TARGET_FILL_DESKTOP;
                    const aspect = cameraRef.current!.aspect;

                    const distVertical = visualRadius / (Math.tan(fovRad / 2) * targetFill);

                    const distHorizontal = visualRadius / (Math.tan((fovRad * aspect) / 2) * targetFill);

                    let idealDist = Math.max(distVertical, distHorizontal);

                    const minSafeDist = pData.radius * 1.2; 
                    idealDist = Math.max(idealDist, minSafeDist);

                    if (pData.id !== 'sun') {
                        const sunPos = new THREE.Vector3(0, 0, 0);
                        const vecCamRel = new THREE.Vector3().subVectors(cameraRef.current!.position, currentTarget).normalize();
                        const vecSunRel = new THREE.Vector3().subVectors(sunPos, currentTarget).normalize();
                        const alignment = vecCamRel.dot(vecSunRel);

                        if (alignment > 0.8) {
                             const up = new THREE.Vector3(0, 1, 0);
                             let side = new THREE.Vector3().crossVectors(vecSunRel, up).normalize();
                             if (side.lengthSq() < 0.1) side.set(1, 0, 0);

                             const offset = side.multiplyScalar(idealDist).add(new THREE.Vector3(0, idealDist * 0.4, 0));
                             const safePos = new THREE.Vector3().addVectors(currentTarget, offset);
                             
                             cameraRef.current!.position.lerp(safePos, dampFactor);

                             if (cameraRef.current!.position.distanceTo(safePos) < pData.radius * 0.5) {
                                 shouldAutoZoomRef.current = false;
                             }
                             controlsRef.current!.update();
                             rendererRef.current!.render(sceneRef.current!, cameraRef.current!);
                        }
                    }

                    const camVec = new THREE.Vector3().subVectors(cameraRef.current!.position, currentTarget);
                    const currentDist = camVec.length();
                    
                    const zoomThreshold = Math.max(pData.radius * 0.01, 0.0001);

                    if (Math.abs(currentDist - idealDist) > zoomThreshold) {
                        const newDist = THREE.MathUtils.lerp(currentDist, idealDist, dampFactor);
                        camVec.setLength(newDist);
                        cameraRef.current!.position.copy(currentTarget).add(camVec);
                    } else {
                        shouldAutoZoomRef.current = false; 
                    }
                }
            }
        }

        prevSelectedIdRef.current = currentSelectedId;

        controlsRef.current!.update();
        rendererRef.current!.render(sceneRef.current!, cameraRef.current!);
        
        if (planetsRef.current['sun']) {
            const sunData = PLANETS.find(p => p.id === 'sun');
            const baseSpeed = 0.000625; 
            const rotationScale = speedRef.current / baseSpeed;
            planetsRef.current['sun'].rotation.y += 0.01 * (sunData?.rotationSpeed || 0.037) * rotationScale;
        }

        const screenCoords: Record<string, { x: number, y: number, z: number }> = {};
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        PLANETS.forEach(p => {
             const obj = planetsRef.current[p.id];
             if (obj) {
                 const vec = new THREE.Vector3();
                 if (p.id === 'sun') {
                    obj.getWorldPosition(vec);
                 } else {
                     const tiltGroup = tiltsRef.current[p.id];
                     const mesh = tiltGroup ? tiltGroup.children.find((c:any) => c.name === 'planetMesh') : null;
                     if (mesh) mesh.getWorldPosition(vec);
                     else obj.getWorldPosition(vec);
                 }

                 vec.y += p.radius * 1.5; 
                 vec.project(cameraRef.current!);

                 const x = (vec.x * .5 + .5) * containerWidth;
                 const y = (-(vec.y * .5) + .5) * containerHeight;
                 
                 screenCoords[p.id] = { x, y, z: vec.z };
             }
        });

        const jup = screenCoords['jupiter'];
        const cal = screenCoords['callisto'];
        let hideMoons = false;

        const MOON_VISIBILITY_THRESHOLD = 90; 

        if (jup && cal && jup.z < 1 && cal.z < 1) { 
             const dist = Math.sqrt(Math.pow(jup.x - cal.x, 2) + Math.pow(jup.y - cal.y, 2));
             if (dist < MOON_VISIBILITY_THRESHOLD) {
                 hideMoons = true;
             }
        }

        const sat = screenCoords['saturn'];
        const titan = screenCoords['titan'];
        let hideTitan = false;
        
        if (sat && titan && sat.z < 1 && titan.z < 1) {
            const dist = Math.sqrt(Math.pow(sat.x - titan.x, 2) + Math.pow(sat.y - titan.y, 2));
            if (dist < MOON_VISIBILITY_THRESHOLD) {
                hideTitan = true;
            }
        }
        
        const earth = screenCoords['earth'];
        const moon = screenCoords['moon'];
        let hideEarthMoon = false;
        
        if (earth && moon && earth.z < 1 && moon.z < 1) {
            const dist = Math.sqrt(Math.pow(earth.x - moon.x, 2) + Math.pow(earth.y - moon.y, 2));
            if (dist < MOON_VISIBILITY_THRESHOLD) {
                hideEarthMoon = true;
            }
        }

        const galileanMoons = ['io', 'europa', 'ganymede', 'callisto'];
        
        PLANETS.forEach(p => {
            const label = planetLabelsRef.current[p.id];
            const coords = screenCoords[p.id];
            
            if (label && coords) {
                let isVisible = true;

                if (coords.z > 1 || Math.abs(coords.x - containerWidth/2) > containerWidth/2 + 100 || Math.abs(coords.y - containerHeight/2) > containerHeight/2 + 100) {
                    isVisible = false;
                }
                
                if (isVisible && galileanMoons.includes(p.id) && hideMoons) {
                    isVisible = false;
                }

                if (isVisible && p.id === 'titan' && hideTitan) {
                    isVisible = false;
                }

                if (isVisible && p.id === 'moon' && hideEarthMoon) {
                    isVisible = false;
                }

                if (!isVisible) {
                    label.style.display = 'none';
                } else {
                    label.style.display = 'block';
                    
                    let yOffset = '-120%';
                    let xOffset = '-50%';
                    
                    if (p.id === 'moon') {
                        yOffset = '50%'; 
                    }

                    label.style.transform = `translate(${xOffset}, ${yOffset}) translate3d(${coords.x}px, ${coords.y}px, 0)`;
                    label.style.left = '0px'; 
                    label.style.top = '0px';
                }
            }
        });
    };
    animate();

    return () => {
        if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
        resizeObserver.disconnect();
        if (rendererRef.current?.domElement) {
             rendererRef.current.domElement.removeEventListener('pointerdown', onPointerDown);
             rendererRef.current.domElement.removeEventListener('pointermove', onPointerMove);
             rendererRef.current.domElement.removeEventListener('pointerup', onPointerUp);
        }
        containerRef.current?.removeChild(rendererRef.current.domElement);
        if (labelContainerRef.current) labelContainerRef.current.innerHTML = '';
    };
  }, []);

  useEffect(() => {
    positions.forEach(pos => {
        const obj = planetsRef.current[pos.id];
        if (obj) {
            obj.position.set(pos.x, pos.y, pos.z);
            if (pos.id !== 'sun') {
               const tiltGroup = tiltsRef.current[pos.id];
               if (tiltGroup) {
                   const planetBody = tiltGroup.children.find((c: any) => c.name === 'planetMesh');
                   if (planetBody) {
                       if (pos.id === 'moon' || ['io', 'europa', 'ganymede', 'callisto', 'titan'].includes(pos.id)) {
                           // Adjusted for tidal locking: 
                           // Use POSITIVE angle (since orbit is counter-clockwise)
                           // Subtract PI/2 to align front face to parent
                           planetBody.rotation.y = pos.angle + Math.PI;
                       } else {
                           const speedFactor = PLANETS.find(p => p.id === pos.id)?.rotationSpeed || 1;
                           const baseSpeed = 0.000625; 
                           const rotationScale = speed / baseSpeed;
                           planetBody.rotation.y += 0.01 * speedFactor * rotationScale;
                       }
                   }
               }

               const orbitLine = orbitsRef.current[pos.id];
               if (orbitLine && orbitLine.material.uniforms) {
                    orbitLine.material.uniforms.currentAngle.value = pos.angle;
               }
            }
        }
    });
  }, [positions, speed]);
  
  useEffect(() => {
      Object.values(orbitsRef.current).forEach((line: any) => {
          line.visible = showOrbits;
      });
  }, [showOrbits]);

  return (
    <div className="w-full h-full relative bg-black">
      <div ref={containerRef} className="w-full h-full" />
      <div ref={labelContainerRef} id="label-container" />
    </div>
  );
};

export default React.memo(SolarSystem);
