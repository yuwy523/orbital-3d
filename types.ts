
export interface Coordinates {
  x: number;
  y: number;
}

export interface PlanetData {
  id: string;
  parentId?: string; // ID of the parent planet (e.g., 'earth' for 'moon')
  name: string;
  color: string;
  texture: string; // URL to texture image
  ringTexture?: string; // URL to ring texture (Saturn)
  cloudTexture?: string; // URL to cloud texture (Earth)
  radius: number; // Visual radius in pixels
  orbitRadius: number; // Semi-major axis (a) in scaled pixels
  eccentricity: number; // 0 = circle, < 1 = ellipse
  orbitAngle: number; // Longitude of perihelion (rotation of the orbit) in degrees
  inclination: number; // Orbital inclination in degrees relative to Ecliptic
  axialTilt: number; // Axial tilt in degrees (obliquity)
  period: number; // Orbital period in Earth years
  rotationPeriod: string; // Display string for rotation period (e.g., "24 hours")
  rotationSpeed: number; // Relative rotation speed for visual spinning
  description: string;
  observationInfo?: string; // Brief guide on visibility, brightness reasons, and timing
  realDistanceAU: number;
  type: 'terrestrial' | 'gas' | 'ice' | 'star' | 'moon';
  moons: number; // Known satellite count
  magnitude: string; // Apparent magnitude description (e.g., "Max: -2.9")
  temperature: string; // Surface temperature description (e.g., "-100°C ~ 20°C")
  volume?: string; // Volume comparison or value
  mass?: string; // Mass comparison or value
  gravity?: string; // Surface gravity
}

export interface SimulationState {
  speed: number;
  isPlaying: boolean;
  selectedPlanetId: string | null;
  showOrbits: boolean;
  showLabels: boolean;
  day: number; // Simulation day counter
}

export interface PlanetPosition {
  id: string;
  x: number; // Screen X
  y: number; // Screen Y (projected)
  z: number; // Depth (for z-indexing)
  scale: number; // Visual scale based on depth
  angle: number; // in radians
  distanceFromSun: number; // needed for speed/brightness calcs
}