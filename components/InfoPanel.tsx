import React, { useEffect, useState, useRef } from 'react';
import { PlanetData, PlanetPosition } from '../types';
import { getObservationGuide } from '../services/geminiService';
import { Telescope, Sparkles, Loader2, ArrowLeft, Eye, BookOpen, Lightbulb } from 'lucide-react';

interface InfoPanelProps {
  planet: PlanetData;
  calculateRealPosition: (id: string) => PlanetPosition;
  earthRealPosition: PlanetPosition;
  onClose: () => void;
  showAxialTilt: boolean;
  onToggleAxialTilt: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ 
    planet, 
    calculateRealPosition, 
    earthRealPosition, 
    onClose,
    showAxialTilt,
    onToggleAxialTilt
}) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'observation'>('intro');
  const [aiGuide, setAiGuide] = useState<string>("");
  const [isLoadingGuide, setIsLoadingGuide] = useState(false);
  const [hasRequestedGuide, setHasRequestedGuide] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parse Description and Fun Fact
  const [descriptionText, funFactText] = React.useMemo(() => {
      const parts = planet.description.split('【冷知識】');
      return [parts[0].trim(), parts[1]?.trim()];
  }, [planet.description]);

  // Helper: Calculate Heliocentric Longitude (approximate)
  const calculateHeliocentricLongitude = (pos: PlanetPosition) => {
      let angle = Math.atan2(pos.y, pos.x) * (180 / Math.PI);
      if (angle < 0) angle += 360;
      return angle;
  };

  // Helper: Calculate Elongation & Orientation
  const calculateElongation = () => {
     if (planet.id === 'sun' || planet.id === 'earth') return "";
     if (planet.id === 'moon') return "模型幾何計算參考: 月相隨地月日相對位置而變化";

     const planetPos = calculateRealPosition(planet.id);
     const earthPos = earthRealPosition;

     const l_planet = calculateHeliocentricLongitude(planetPos);
     const l_earth = calculateHeliocentricLongitude(earthPos);
     
     // Difference
     let diff = l_planet - l_earth;
     if (diff < 0) diff += 360;
     
     // Earth orbit is 2500, anything smaller is inner
     const isInner = planet.orbitRadius < 2490; 
     let relativeDesc = "";
     
     if (isInner) {
         // Vector Earth->Sun
         const esX = -earthPos.x;
         const esY = -earthPos.y;
         // Vector Earth->Planet
         const epX = planetPos.x - earthPos.x;
         const epY = planetPos.y - earthPos.y;
         
         const cross = esX * epY - esY * epX;
         
         if (cross > 0) relativeDesc = "東大距側 (昏星/日落後可見)";
         else relativeDesc = "西大距側 (晨星/日出前可見)";
     } else {
         if (Math.abs(diff - 180) < 20) relativeDesc = "衝 (Opposition) - 整夜可見，最亮";
         else if (diff < 20 || diff > 340) relativeDesc = "合 (Conjunction) - 接近太陽，不可見";
         else relativeDesc = "一般觀測期";
     }

     return `模型幾何計算參考: 行星位於太陽${relativeDesc}`;
  };

  // Helper for inclination text context
  const getInclinationSuffix = () => {
      if (planet.parentId === 'jupiter') return '(對木星赤道)';
      if (planet.parentId === 'saturn') return '(對土星赤道)';
      return '(對黃道)';
  };

  // Helper: Format Angle (At least 2 decimal places unless exactly 0)
  const formatAngle = (val: number) => {
      if (val === 0) return "0";
      const s = val.toString();
      // If it has no decimal point or fewer than 2 decimal places, pad it
      if (!s.includes('.')) return val.toFixed(2);
      const decimals = s.split('.')[1].length;
      return decimals < 2 ? val.toFixed(2) : s;
  };

  // Reset state when planet changes
  useEffect(() => {
      setAiGuide("");
      setIsLoadingGuide(false);
      setHasRequestedGuide(false);
      setActiveTab('intro'); // Reset to Intro tab on planet switch
      
      // Scroll to top of content when planet changes
      if (contentRef.current) {
          contentRef.current.scrollTop = 0;
      }
  }, [planet.id]);

  const handleFetchGuide = () => {
      setHasRequestedGuide(true);
      setIsLoadingGuide(true);
      const todayStr = new Date().toLocaleDateString('zh-HK', { year: 'numeric', month: 'long', day: 'numeric' });
      const astronomyContext = calculateElongation();

      getObservationGuide(planet.name, todayStr, astronomyContext).then((guide) => {
          setAiGuide(guide);
          setIsLoadingGuide(false);
      });
  };

  const StatRow = ({ label, value, isLast = false, action }: { label: string, value: string | number, isLast?: boolean, action?: React.ReactNode }) => (
      <div className={`flex justify-between py-4 mr-5 ml-5 ${!isLast ? 'border-b border-slate-800' : ''}`}>
          <span className="text-base font-medium text-slate-400 tracking-wide break-keep pr-3">{label}</span>
          <div className="flex md:flex-wrap-reverse text-right items-center gap-3 ml-auto">
            {action}
            <span className="text-base font-mono font-bold text-slate-300 text-right ml-auto">{value}</span>
          </div>
      </div>
  );

  const showObservationTab = planet.id !== 'earth' && planet.id !== 'sun';

  return (
    // Changed: Full height container with fixed layout
    <div className="w-full font-sans h-full relative flex flex-col overflow-hidden">
      
      {/* Navigation Header - Fixed at Top (Static, not Sticky) */}
      <div className="flex-shrink-0 z-30 bg-slate-950 border-b border-slate-800/50 pt-6 shadow-2xl transition-all duration-300 relative">
        
        {/* Added px-6 to the inner content container */}
        <div className={`flex flex-col gap-5 px-6 ${showObservationTab ? 'mb-5' : ''}`}>
             <button 
                onClick={onClose}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group w-max"
            >
                <div className="flex items-center justify-center rounded-full shadow-md transition-all duration-300">
                    <ArrowLeft size={20} />
                </div>
                <span className="text-base font-bold uppercase tracking-wide">返回</span>
            </button>

            <div>
                <h2 className="text-xl font-bold text-slate-200 flex items-center gap-3 leading-7">
                    <span>{planet.name}</span>
                </h2>
                <p className="text-indigo-400 text-base font-bold uppercase tracking-widest mt-1.5">
                     {planet.type === 'terrestrial' ? '類地行星' : planet.type === 'gas' ? '氣態巨行星' : planet.type === 'ice' ? '冰巨行星' : planet.type === 'moon' ? '衛星' : '恆星'}
                </p>
            </div>
        </div>

        {/* Divider above tabs */}
        {showObservationTab && <div className="w-full h-px bg-slate-800/50" />}

        {/* Tabs - Full Width */}
        {showObservationTab && (
            <div className="relative flex w-full">
                <button
                    onClick={() => setActiveTab('intro')}
                    className={`flex-1 py-3 text-base font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2 ${
                        activeTab === 'intro' 
                        ? 'text-indigo-400' 
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                >
                    <BookOpen size={16} className={`transition-opacity duration-300 ${activeTab === 'intro' ? 'opacity-100' : 'opacity-70'}`} />
                    簡介
                </button>
                <button
                    onClick={() => setActiveTab('observation')}
                    className={`flex-1 py-3 text-base font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2 ${
                        activeTab === 'observation' 
                        ? 'text-indigo-400' 
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                >
                    <Telescope size={16} className={`transition-opacity duration-300 ${activeTab === 'observation' ? 'opacity-100' : 'opacity-70'}`} />
                    觀測指南
                </button>
                
                {/* Sliding Indicator */}
                <div 
                    className="absolute bottom-0 h-[2px] bg-indigo-500 transition-all duration-300 ease-out shadow-[0_-1px_6px_rgba(99,102,241,0.5)]"
                    style={{ 
                        left: activeTab === 'intro' ? '0%' : '50%',
                        width: '50%'
                    }}
                />
            </div>
        )}
        {!showObservationTab && <div className="pb-5" />}
      </div>

      {/* Main Content Area - Scrollable */}
      <div 
        ref={contentRef}
        className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-8 pt-6 [scrollbar-gutter:stable] animate-in fade-in slide-in-from-bottom-2 duration-500"
      >
          
          {/* TAB CONTENT: INTRODUCTION */}
          {activeTab === 'intro' && (
              <div className="space-y-8">
                  {/* Description Section */}
                  <div className="space-y-6">
                    <p className="text-slate-300 text-base font-normal leading-6 text-justify whitespace-pre-line">
                        {descriptionText}
                    </p>

                    {funFactText && (
                        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/40 to-purple-900/10 border border-indigo-500/30 rounded-xl p-5 shadow-inner">
                            {/* Decorative background icon */}
                            <div className="absolute -bottom-4 -right-4 text-indigo-500/5 transform rotate-12 pointer-events-none">
                                <Lightbulb size={100} />
                            </div>
                            
                            <div className="relative z-10 space-y-2">
                                <h4 className="text-base text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Lightbulb size={14} className="text-indigo-400" />
                                    星際冷知識
                                </h4>
                                <p className="text-slate-300 text-base font-normal leading-6 text-justify">
                                    {funFactText}
                                </p>
                            </div>
                        </div>
                    )}
                  </div>

                  {/* Stats Section */}
                  <div>
                      <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden">
                          {/* 1. Orbital Period */}
                          {planet.id !== 'sun' && (
                            <StatRow label="公轉週期" value={planet.period === 0 ? 'N/A' : `${planet.period} 年`} />
                          )}
                          
                          {/* 2. Rotation Period */}
                          <StatRow label="自轉週期" value={planet.rotationPeriod} />
                          
                          {/* 3. Axial Tilt */}
                          <StatRow 
                             label="轉軸傾角" 
                             value={`${formatAngle(planet.axialTilt)}°`} 
                             action={
                                planet.id !== 'sun' && planet.axialTilt >= 1 ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleAxialTilt();
                                        }}
                                        className={`px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs font-medium border ml-auto -mt-1 -mb-1 ${
                                            showAxialTilt 
                                            ? 'bg-indigo-600 text-white border-transparent shadow-[0_0_10px_rgba(79,70,229,0.5)]' 
                                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-indigo-400 hover:border-indigo-500/50'
                                        }`}
                                        title={showAxialTilt ? "隱藏轉軸" : "顯示轉軸"}
                                    >
                                        <span>{showAxialTilt ? "隱藏轉軸" : "顯示轉軸"}</span>
                                    </button>
                                ) : undefined
                             }
                          />

                          {/* 4. Orbital Inclination */}
                          {planet.id !== 'sun' && (
                            <StatRow label="軌道傾角" value={`${formatAngle(planet.inclination)}° ${getInclinationSuffix()}`} />
                          )}

                          {/* 5. Volume */}
                          {planet.volume && (
                            <StatRow label="體積" value={planet.volume} />
                          )}

                          {/* 6. Mass */}
                          {planet.mass && (
                            <StatRow label="質量" value={planet.mass} />
                          )}

                          {/* 7. Temperature */}
                          <StatRow 
                            label="表面溫度" 
                            value={planet.temperature} 
                          />

                          {/* 8. Surface Gravity */}
                          {planet.gravity && (
                             <StatRow label="表面重力" value={planet.gravity} />
                          )}

                          {/* 9. Magnitude */}
                          {planet.id !== 'earth' && (
                            <StatRow label="視星等" value={planet.magnitude} />
                          )}

                          {/* 10. Known Moons */}
                          {planet.type !== 'moon' && planet.id !== 'sun' && (
                            <StatRow label="已知衛星數目" value={planet.moons} isLast />
                          )}
                      </div>
                  </div>
              </div>
          )}

          {/* TAB CONTENT: OBSERVATION */}
          {activeTab === 'observation' && showObservationTab && (
             <div className="space-y-8">
                {/* Observation Text */}
                <div>
                    {planet.observationInfo ? (
                        <p className="text-slate-300 text-base font-normal leading-6 text-justify whitespace-pre-line">
                            {planet.observationInfo}
                        </p>
                    ) : (
                        <p className="text-slate-400 italic">暫無詳細觀測資料。</p>
                    )}
                </div>

                {/* AI Guide */}
                <div>
                    {!hasRequestedGuide ? (
                        <button 
                            onClick={handleFetchGuide}
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-slate-200 text-base font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 active:scale-[0.98]"
                        >
                            <Telescope size={18} />
                            獲取今日香港觀測詳情
                        </button>
                    ) : isLoadingGuide ? (
                        <div className="flex flex-col items-center gap-3 text-slate-300 text-base py-8 justify-center bg-slate-950/50 rounded-xl border border-slate-800/50">
                            <Loader2 className="animate-spin text-indigo-400" size={24} />
                            <span>正在分析天體位置與實時數據...</span>
                        </div>
                    ) : (
                        <div className="text-base text-slate-300 space-y-3 whitespace-pre-wrap leading-6 animate-in fade-in slide-in-from-bottom-2 bg-slate-950/50 p-5 rounded-xl border border-slate-800/60">
                            {aiGuide}
                            <div className="mt-4 pt-3 border-t border-slate-800/50 text-sm text-slate-400 text-right flex items-center justify-end gap-1.5">
                                <Sparkles size={14} className="text-indigo-400" /> 
                                <span>Powered by AI (Demo Simulation)</span>
                            </div>
                        </div>
                    )}
                </div>
             </div>
          )}
      </div>
    </div>
  );
};

export default React.memo(InfoPanel);