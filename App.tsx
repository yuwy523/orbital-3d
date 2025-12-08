
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import SolarSystem from './components/SolarSystem';
import Controls from './components/Controls';
import InfoPanel from './components/InfoPanel';
import { PLANETS } from './constants';
import { PlanetPosition, PlanetData } from './types';
import { ChevronUp, ChevronDown } from 'lucide-react';

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
                <span className="text-sm font-bold text-slate-200 group-hover:text-white truncate">
                    {chName}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-indigo-300 transition-colors truncate">
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
  
  // Mobile Bottom Sheet State
  const [isSheetExpanded, setIsSheetExpanded] = useState(false);
  
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

        // DEFAULT COLLAPSED on mobile selection per user request
        setIsSheetExpanded(false);
    } else {
        // Reset Home Panel scroll when returning to list view
        if (homePanelRef.current) {
            homePanelRef.current.scrollTop = 0;
            requestAnimationFrame(() => {
                 if (homePanelRef.current) homePanelRef.current.scrollTop = 0;
            });
        }
    }
    
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
      const a = planet.orbitRadius;
      const e = planet.eccentricity;
      const b = a * Math.sqrt(1 - e * e);

      const xCenter = a * (Math.cos(E) - e);
      const yCenter = b * Math.sin(E);

      // Rotate by Longitude of Perihelion
      const angleRad = (planet.orbitAngle * Math.PI) / 180;
      const xPlane = xCenter * Math.cos(angleRad) - yCenter * Math.sin(angleRad);
      const yPlane = xCenter * Math.sin(angleRad) + yCenter * Math.cos(angleRad);

      // 3. Inclination
      const trueAnomaly = Math.atan2(yPlane, xPlane);
      const inclinationRad = (planet.inclination * Math.PI) / 180;
      const zHeight = planet.orbitRadius * Math.sin(inclinationRad) * Math.sin(trueAnomaly);

      // Initial Local Position (relative to orbit center)
      let finalX = xPlane;
      let finalY = zHeight; 
      let finalZ = yPlane;

      return {
        id: planet.id,
        x: finalX,
        y: finalY, 
        z: finalZ,  
        scale: 1, 
        angle: trueAnomaly, 
        distanceFromSun: Math.sqrt(finalX * finalX + finalZ * finalZ) 
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

  // Handle selection from 3D View
  const handle3DSelection = (id: string) => {
    setSelectedPlanetId(id);
    // Explicitly collapse the sheet on selection
    setIsSheetExpanded(false); 
  };

  // Handle selection from Sidebar List
  const handleSidebarSelection = (id: string) => {
    setSelectedPlanetId(id);
    // Explicitly collapse the sheet on selection
    setIsSheetExpanded(false);
  };
  
  const handleResetCamera = () => {
    setSelectedPlanetId(null);
    setCameraResetTrigger(prev => prev + 1);
    setIsSheetExpanded(false); // Collapse on reset
  };

  // Memoized handlers for InfoPanel
  const toggleAxialTilt = useCallback(() => {
    setShowAxialTilt(prev => !prev);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedPlanetId(null);
  }, []);

  // Helper wrapper for InfoPanel real position calculation
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


  // Logic for Mobile Bottom Sheet Header
  const mobileHeaderTitle = useMemo(() => {
      if (!selectedPlanetId) return "選擇天體";
      if (detailPlanet) {
          return detailPlanet.name; // Use full name for InfoPanel visual match
      }
      return "Loading...";
  }, [selectedPlanetId, detailPlanet]);

  const mobileHeaderSubtitle = useMemo(() => {
      if (!selectedPlanetId || !detailPlanet) return "Default";
      return detailPlanet.type === 'terrestrial' ? '類地行星' : detailPlanet.type === 'gas' ? '氣態巨行星' : detailPlanet.type === 'ice' ? '冰巨行星' : detailPlanet.type === 'moon' ? '衛星' : '恆星';
  }, [selectedPlanetId, detailPlanet]);

  // Dynamic Header Height Calculation
  const headerHeight = selectedPlanetId ? '5.5rem' : '3.5rem';
  
  // Calculate the class for mobile height
  const mobileHeightClass = isSheetExpanded 
    ? 'h-[70dvh]' 
    : (selectedPlanetId ? 'h-[5.5rem]' : 'h-[3.5rem]');
  
  // Dynamic Controls Position Calculation
  // If expanded: 70dvh + 20px
  // If collapsed: headerHeight + 20px
  const controlsMobileBottom = isSheetExpanded 
      ? 'calc(70dvh + 20px)' 
      : `calc(${headerHeight} + 20px)`;


  return (
    <div className="w-full h-[100dvh] flex flex-col md:flex-row bg-[#020617] overflow-hidden text-slate-100 font-sans relative">
      
      {/* 
         SIDEBAR / BOTTOM SHEET CONTAINER
         Desktop: Left Sidebar, Relative (in flow), Full Height
         Mobile: Bottom Sheet, Fixed, Translatable
      */}
      <aside 
        ref={sidebarRef}
        className={`
          flex flex-col
          bg-slate-950/95 backdrop-blur-xl border-slate-800 shadow-2xl
          transition-all duration-300 ease-in-out z-[200]
          
          md:relative md:w-auto md:min-w-[256px] lg:w-[385px] md:border-r md:rounded-none md:translate-y-0
          
          fixed bottom-0 left-0 right-0 w-full border-t
          ${mobileHeightClass} md:h-full
        `}
      >
        {/* MOBILE HEADER HANDLE (Visible only on Mobile) */}
        <div 
            className={`md:hidden flex items-center justify-between px-6 bg-slate-900/80 border-b border-slate-800 cursor-pointer touch-none transition-all duration-300 ${selectedPlanetId ? 'h-24 py-4' : 'h-14 py-3'}`}
            onClick={() => setIsSheetExpanded(!isSheetExpanded)}
        >
            <div className="flex flex-col justify-center gap-1">
                <span className={`${selectedPlanetId ? 'text-xl font-bold text-slate-200' : 'text-base font-bold text-slate-300'}`}>
                    {mobileHeaderTitle}
                </span>
                {selectedPlanetId && (
                    <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-2">
                        {mobileHeaderSubtitle}
                    </span>
                )}
            </div>
            <div className="text-slate-400">
                {isSheetExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </div>
        </div>


        {/* 
            SLIDING VIEW CONTAINER (Content Body)
            Desktop: Standard
            Mobile: Scrollable area below the handle
        */}
        <div className="relative w-full flex-1 overflow-hidden">
            
            {/* VIEW 1: HOME DASHBOARD (Planet List) */}
            <div 
                ref={homePanelRef}
                className={`
                    absolute inset-0 w-full h-full overflow-y-auto custom-scrollbar px-6 pt-2 md:pt-6 pb-8
                    transition-all duration-500 ease-in-out will-change-transform backface-hidden
                    ${selectedPlanetId ? '-translate-x-[20%] opacity-0 pointer-events-none' : 'translate-x-0 opacity-100 pointer-events-auto'}
                `}
                style={{ backfaceVisibility: 'hidden' }}
            >
                <div className="flex flex-col min-h-full">
                    {/* Website Title: Hidden on Mobile as per requirements */}
                    <header className="mb-8 mt-4 md:mt-0 flex-shrink-0 hidden md:block">
                      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">
                        ORBITAL
                      </h1>
                      <p className="text-sm text-slate-400 font-medium tracking-wide">3D Solar Explorer</p>
                    </header>
                    {/* Spacer for Mobile to not stick to top immediately */}
                    <div className="md:hidden h-4"></div>

                    <div className="flex-grow flex flex-col">
                        
                        {/* 1. Stars Section */}
                        {stars.length > 0 && (
                            <div className="mb-8 flex-shrink-0">
                                <div className="flex items-center gap-2 mb-3 border-b border-slate-800/50 pb-2">
                                     <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">恆星 (Stars)</span>
                                </div>
                                {/* GRID LAYOUT UPDATE: 2 cols on mobile, 1 on tablet, 2 on desktop */}
                                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
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
                                {/* GRID LAYOUT UPDATE: 2 cols on mobile, 1 on tablet, 2 on desktop */}
                                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
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
                                {/* GRID LAYOUT UPDATE: 2 cols on mobile, 1 on tablet, 2 on desktop */}
                                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
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
      {/* 
          flex-1: Fills the remaining space next to the sidebar on desktop.
          min-w-0: Allows flex item to shrink below content size if needed (prevents overflow).
          h-full: Fills height.
      */}
      <main className="flex-1 min-w-0 h-full relative bg-[#000000]">
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
           mobileBottomOffset={controlsMobileBottom}
        />
      </main>
    </div>
  );
};

export default App;