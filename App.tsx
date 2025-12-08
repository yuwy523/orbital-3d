import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import SolarSystem from './components/SolarSystem';
import Controls from './components/Controls';
import InfoPanel from './components/InfoPanel';
import { PLANETS } from './constants';
import { PlanetPosition, PlanetData } from './types';
import { Menu, X } from 'lucide-react';

// Helper Component for Sidebar Item to avoid code duplication
const SidebarPlanetItem: React.FC<{ p: PlanetData, onClick: (id: string) => void }> = ({ p, onClick }) => {
    const engName = p.name.split('(')[1]?.replace(')', '') || '';
    const chName = p.name.split(' ')[0];
    
    return (
        <button
        onClick={() => onClick(p.id)}
        className="group relative flex flex-col justify-center p-3 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden text-left shadow-sm hover:shadow-lg hover:shadow-indigo-900/20"
        >
        <div className="flex items-center gap-3 relative z-10">
            <div 
                className="w-10 h-10 rounded-full flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500 border border-white/10"
                style={{ 
                    background: `radial-gradient(circle at 30% 30%, ${p.color}, #1a1a1a)`,
                    boxShadow: `0 0 10px ${p.color}40`
                }}
            />
            <div className="flex flex-col min-w-0">
                <span className="text-base font-bold text-slate-200 group-hover:text-white truncate">
                    {chName}
                </span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider group-hover:text-indigo-300 transition-colors truncate">
                    {engName}
                </span>
            </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/10 transition-all duration-500" />
        </button>
    );
};

const App: React.FC = () => {
  // State
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(0.000625); // New Default speed (Was 0.005, now 1/8th of that)
  const [day, setDay] = useState(0); // Simulation day
  const [realWorldDay, setRealWorldDay] = useState(0); // For Ephemeris
  const [selectedPlanetId, setSelectedPlanetId] = useState<string | null>(null);
  const [showOrbits, setShowOrbits] = useState(true);
  const [cameraResetTrigger, setCameraResetTrigger] = useState(0);
  
  // Visual Toggles
  const [showAxialTilt, setShowAxialTilt] = useState(false);
  
  // Cache the selected planet object for the Detail View to use
  // This ensures content persists during the "slide-out" animation even after selectedPlanetId becomes null
  const [detailPlanet, setDetailPlanet] = useState<PlanetData | null>(null);
  
  // Mobile Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Refs for animation loop
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const speedRef = useRef(speed);
  const isPlayingRef = useRef(isPlaying);
  const sidebarRef = useRef<HTMLElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null); // Ref for scrolling to top
  const homePanelRef = useRef<HTMLDivElement>(null); // Ref for Home Dashboard scrolling
  
  // Sync refs
  useEffect(() => { speedRef.current = speed; }, [speed]);
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);

  // Update Detail Planet when selection changes
  useEffect(() => {
    if (selectedPlanetId) {
        const p = PLANETS.find(p => p.id === selectedPlanetId) || null;
        if (p) setDetailPlanet(p);

        // Scroll logic moved to InfoPanel component for internal content
    } else {
        // Reset Home Panel scroll when returning to list view
        if (homePanelRef.current) {
            homePanelRef.current.scrollTop = 0;
            requestAnimationFrame(() => {
                 if (homePanelRef.current) homePanelRef.current.scrollTop = 0;
            });
        }
    }
    // Note: We intentionally DO NOT clear detailPlanet when selectedPlanetId becomes null
    // This allows the panel to slide out while still showing the old data
    
    // Reset Axial Tilt visualization when planet changes
    setShowAxialTilt(false);
  }, [selectedPlanetId]);

  // Calculate Real World Days since J2000 (Jan 1 2000 12:00 UTC)
  useEffect(() => {
    const j2000 = new Date('2000-01-01T12:00:00Z').getTime();
    const now = new Date().getTime();
    const daysSince = (now - j2000) / (1000 * 60 * 60 * 24);
    setRealWorldDay(daysSince);
  }, []);

  // Solve Kepler's Equation
  const solveKepler = useCallback((meanAnomaly: number, eccentricity: number): number => {
    let E = meanAnomaly; 
    const tolerance = 1e-6;
    for (let i = 0; i < 5; i++) {
      const delta = E - eccentricity * Math.sin(E) - meanAnomaly;
      const derivative = 1 - eccentricity * Math.cos(E);
      E = E - delta / derivative;
      if (Math.abs(delta) < tolerance) break;
    }
    return E;
  }, []);

  /**
   * Calculates the 3D position in Space.
   * NOTE: For moons (Titan, Galilean), this returns LOCAL coordinates (relative to parent).
   * The SolarSystem component handles parenting logic to ensure they follow Axial Tilt.
   */
  const calculatePlanetPosition = useCallback((planetId: string, currentDay: number): PlanetPosition => {
      const planet = PLANETS.find(p => p.id === planetId)!;
      
      if (planet.id === 'sun') {
        return { id: planet.id, x: 0, y: 0, z: 0, scale: 1, angle: 0, distanceFromSun: 0 };
      }

      // 1. Orbital Physics (Kepler)
      const periodInDays = planet.period * 365.25;
      const meanMotion = (2 * Math.PI) / periodInDays;
      const M = meanMotion * currentDay;
      const E = solveKepler(M, planet.eccentricity);

      // 2. Heliocentric Coordinates (Orbital Plane)
      // Note: If planet has parentId, this is relative to parent's center
      const a = planet.orbitRadius;
      const e = planet.eccentricity;
      const b = a * Math.sqrt(1 - e * e);

      const xCenter = a * (Math.cos(E) - e);
      const yCenter = b * Math.sin(E);

      // Rotate by Longitude of Perihelion
      const angleRad = (planet.orbitAngle * Math.PI) / 180;
      const xPlane = xCenter * Math.cos(angleRad) - yCenter * Math.sin(angleRad);
      const yPlane = xCenter * Math.sin(angleRad) + yCenter * Math.cos(angleRad);

      // 3. Inclination (Vertical Z-height in physics, Y in Three.js)
      const trueAnomaly = Math.atan2(yPlane, xPlane);
      const inclinationRad = (planet.inclination * Math.PI) / 180;
      const zHeight = planet.orbitRadius * Math.sin(inclinationRad) * Math.sin(trueAnomaly);

      // Initial Local Position (relative to orbit center)
      let finalX = xPlane;
      let finalY = zHeight; // Inclination is Up/Down (Y in ThreeJS)
      let finalZ = yPlane;  // Orbital 'y' is depth (Z in ThreeJS)

      // 4. Handle Parent (Moons)
      // UPDATE: We do NOT add parent position here for rendering.
      // SolarSystem.tsx uses Three.js scene graph parenting for moons to handle Axial Tilt correctly.
      // Thus, we return LOCAL coordinates for children.
      if (planet.parentId) {
         // No-op for position summation.
         // However, Earth's Moon might be an exception depending on SolarSystem logic.
         // Given SolarSystem now handles parenting for everyone, we keep it consistent.
         // BUT check: Earth's Moon is parented to OrbitGroup (untilted), Titan to TiltGroup (tilted).
         // In both cases, Local Coords are expected.
      }

      return {
        id: planet.id,
        x: finalX,
        y: finalY, 
        z: finalZ,  
        scale: 1, 
        angle: trueAnomaly, 
        distanceFromSun: Math.sqrt(finalX * finalX + finalZ * finalZ) // Approx for moons
      };
  }, [solveKepler]);

  const positions = PLANETS.map(p => calculatePlanetPosition(p.id, day));

  // Animation Loop
  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      if (isPlayingRef.current) {
        setDay(prevDay => prevDay + (deltaTime * speedRef.current * 0.5)); 
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  // Handle selection from 3D View (with Mobile Delay)
  const handle3DSelection = (id: string) => {
    setSelectedPlanetId(id);
    
    // Check if mobile (Tailwind md breakpoint is 768px)
    if (window.innerWidth < 768) {
        // Delay opening sidebar to allow 3D transition to be seen
        setTimeout(() => {
            setIsSidebarOpen(true);
        }, 2800); 
    } else {
        // Desktop: Immediate
        setIsSidebarOpen(true);
    }
  };

  // Handle selection from Sidebar List
  const handleSidebarSelection = (id: string) => {
    setSelectedPlanetId(id);
    // If not visible on mobile, open it. If on desktop, it's always open (relative).
    setIsSidebarOpen(true);
  };
  
  const handleResetCamera = () => {
    setSelectedPlanetId(null);
    setCameraResetTrigger(prev => prev + 1);
  };

  // Shared button style for Floating Action Buttons (FABs)
  const fabStyle = "w-11 h-11 flex items-center justify-center rounded-full bg-slate-800/90 backdrop-blur-md border border-slate-700 text-slate-200 shadow-lg hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300";

  // Memoized handlers for InfoPanel to prevent re-renders on every frame (animation loop)
  const toggleAxialTilt = useCallback(() => {
    setShowAxialTilt(prev => !prev);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedPlanetId(null);
  }, []);

  // Helper to reconstruct World Position for UI (InfoPanel)
  // Since positions state is now Local-Only for moons, we must sum manually for the UI.
  // Note: This simple sum ignores the Parent's Axial Tilt rotation, but for "Distance to Earth" text,
  // the error (< 0.1%) is acceptable vs the complexity of reimplementing Matrix4 logic here.
  const calcRealPosWrapper = useCallback((pid: string) => {
      const localPos = calculatePlanetPosition(pid, realWorldDay);
      const pData = PLANETS.find(p => p.id === pid);
      
      if (pData?.parentId) {
          const parentPos = calculatePlanetPosition(pData.parentId, realWorldDay);
          return {
              ...localPos,
              x: localPos.x + parentPos.x,
              y: localPos.y + parentPos.y,
              z: localPos.z + parentPos.z
          };
      }
      return localPos;
  }, [calculatePlanetPosition, realWorldDay]);

  const earthRealPos = useMemo(() => {
    return calculatePlanetPosition('earth', realWorldDay);
  }, [calculatePlanetPosition, realWorldDay]);

  // Grouped Planets for Sidebar
  const stars = useMemo(() => PLANETS.filter(p => p.type === 'star'), []);
  const planetsList = useMemo(() => PLANETS.filter(p => ['terrestrial', 'gas', 'ice'].includes(p.type)), []);
  const moons = useMemo(() => PLANETS.filter(p => p.type === 'moon'), []);


  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-[#020617] overflow-hidden text-slate-100 font-sans relative">
      
      {/* Mobile Menu Button (Visible only when closed) */}
      {!isSidebarOpen && (
        <button 
            className={`md:hidden absolute top-4 left-4 z-50 animate-in fade-in ${fabStyle}`}
            onClick={() => {
                // Use rAF to ensure smooth UI update start
                requestAnimationFrame(() => setIsSidebarOpen(true));
            }}
            aria-label="Open Menu"
        >
            <Menu size={24} />
        </button>
      )}

      {/* Mobile Close Button (Visible only when open, floating NEXT TO the sidebar) */}
      {isSidebarOpen && (
        <button 
            className={`md:hidden fixed top-4 z-[210] animate-in fade-in slide-in-from-left duration-300 ${fabStyle}`}
            style={{ 
                // Position it dynamically based on sidebar width: min(20rem, 85vw) + slight gap
                left: 'calc(min(20rem, 85vw) + 12px)' 
            }}
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close Menu"
        >
            <X size={24} />
        </button>
      )}

      {/* Mobile Overlay - Closes sidebar when clicking outside */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-[190] bg-black/60 backdrop-blur-[2px] md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        ref={sidebarRef}
        className={`
          fixed md:relative top-0 left-0 z-[200] md:z-40 h-full
          w-80 lg:w-[385px] md:max-w-none flex-shrink-0
          bg-slate-950/95 backdrop-blur-xl border-r border-slate-800 shadow-2xl
          transition-transform duration-300 ease-in-out
          flex flex-col
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* 
            SLIDING VIEW CONTAINER 
        */}
        <div className="relative w-full h-full overflow-hidden">
            
            {/* VIEW 1: HOME DASHBOARD (Planet List) */}
            <div 
                ref={homePanelRef}
                className={`
                    absolute inset-0 w-full h-full overflow-y-auto custom-scrollbar px-6 pt-6 pb-8
                    transition-all duration-500 ease-in-out will-change-transform backface-hidden
                    ${selectedPlanetId ? '-translate-x-[20%] opacity-0 pointer-events-none' : 'translate-x-0 opacity-100 pointer-events-auto'}
                `}
                style={{ backfaceVisibility: 'hidden' }}
            >
                <div className="flex flex-col min-h-full">
                    <header className="mb-8 mt-4 md:mt-0 flex-shrink-0">
                      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">
                        ORBITAL
                      </h1>
                      <p className="text-base text-slate-400 font-medium tracking-wide">3D Solar Explorer</p>
                    </header>

                    <div className="flex-grow flex flex-col">
                        
                        {/* 1. Stars Section */}
                        {stars.length > 0 && (
                            <div className="mb-8 flex-shrink-0">
                                <div className="flex items-center gap-2 mb-3 border-b border-slate-800/50 pb-2">
                                     <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">恆星 (Stars)</span>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    {stars.map(p => (
                                        <SidebarPlanetItem key={p.id} p={p} onClick={handleSidebarSelection} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 2. Planets Section */}
                        {planetsList.length > 0 && (
                            <div className="mb-8 flex-shrink-0">
                                <div className="flex items-center gap-2 mb-3 border-b border-slate-800/50 pb-2">
                                     <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">行星 (Planets)</span>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    {planetsList.map(p => (
                                        <SidebarPlanetItem key={p.id} p={p} onClick={handleSidebarSelection} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. Moons Section */}
                        {moons.length > 0 && (
                            <div className="mb-8 flex-shrink-0">
                                <div className="flex items-center gap-2 mb-3 border-b border-slate-800/50 pb-2">
                                     <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">衛星 (Moons)</span>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    {moons.map(p => (
                                        <SidebarPlanetItem key={p.id} p={p} onClick={handleSidebarSelection} />
                                    ))}
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>

            {/* VIEW 2: SELECTED PLANET DETAIL */}
            {/* Removed overflow-y-auto, custom-scrollbar and scrollbar-gutter from container */}
            {/* InfoPanel now manages its own internal scrolling to support fixed header */}
            <div 
                ref={detailPanelRef}
                className={`
                    absolute inset-0 w-full h-full bg-slate-950/95
                    transition-all duration-500 ease-in-out will-change-transform backface-hidden overflow-hidden
                    ${selectedPlanetId ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}
                `}
                style={{ backfaceVisibility: 'hidden' }}
            >
                {detailPlanet && (
                  <InfoPanel 
                    planet={detailPlanet} 
                    calculateRealPosition={calcRealPosWrapper}
                    earthRealPosition={earthRealPos}
                    onClose={handleCloseDetail} 
                    showAxialTilt={showAxialTilt}
                    onToggleAxialTilt={toggleAxialTilt}
                  />
                )}
            </div>

        </div>
      </aside>

      {/* Main Visualization Area */}
      <main className="flex-grow w-full h-full relative bg-[#000000]">
        <SolarSystem 
          positions={positions}
          selectedPlanetId={selectedPlanetId}
          onSelectPlanet={handle3DSelection}
          showOrbits={showOrbits}
          solveKepler={solveKepler}
          speed={speed}
          cameraResetTrigger={cameraResetTrigger}
          showAxialTilt={showAxialTilt}
        />
        
        {/* Consolidated Controls */}
        <Controls 
           isPlaying={isPlaying}
           onTogglePlay={() => setIsPlaying(!isPlaying)}
           speed={speed}
           onSpeedChange={setSpeed}
           onResetCamera={handleResetCamera}
           showOrbits={showOrbits}
           onToggleOrbits={() => setShowOrbits(!showOrbits)}
        />
      </main>
    </div>
  );
};

export default App;