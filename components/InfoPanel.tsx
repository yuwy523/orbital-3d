
import React, { useEffect, useState, useRef } from 'react';
import { PlanetData } from '../types';
import { getObservationGuide } from '../services/geminiService';
import { Telescope, Sparkles, Loader2, ArrowLeft, BookOpen, Lightbulb } from 'lucide-react';

interface InfoPanelProps {
  planet: PlanetData;
  onClose: () => void;
  showAxialTilt: boolean;
  onToggleAxialTilt: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ 
    planet, 
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

  // Helper: Format Orbital Period (Dynamic units & decimal places)
  // Logic: 
  // 1. Convert to appropriate unit (Year -> Day -> Hour)
  // 2. Format to 2 decimal places fixed
  // 3. Parse back to float to remove trailing zeros (e.g. "1.00" -> 1, "24.50" -> 24.5)
  const formatOrbitalPeriod = (periodInYears: number) => {
      const years = Number(periodInYears);
      if (isNaN(years) || years === 0) return 'N/A';
      
      // If strictly less than 1 year, convert to days
      if (years < 1) {
          const days = years * 365.25;
          
          // If strictly less than 1 day (24 hours), convert to hours
          if (days < 1) {
              const hours = days * 24;
              return `${parseFloat(hours.toFixed(1))} 小時`;
          }
          
          // Otherwise show in days
          return `${parseFloat(days.toFixed(1))} 天`;
      }
      
      // If 1 year or more, show in years
      return `${parseFloat(years.toFixed(1))} 年`;
  };

  // Helper: Format Rotation Period String to dynamic decimals
  const formatRotationString = (str: string) => {
      // Find the first occurrence of a number (integer or float) and format it
      // This preserves text like " (逆行)" while formatting the number "17.2"
      return str.replace(/(\d+(\.\d+)?)/, (match) => {
          return parseFloat(parseFloat(match).toFixed(1)).toString();
      });
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

  // Scroll to top when activeTab changes
  useEffect(() => {
      if (contentRef.current) {
          contentRef.current.scrollTop = 0;
      }
  }, [activeTab]);

  const handleFetchGuide = () => {
      setHasRequestedGuide(true);
      setIsLoadingGuide(true);
      const todayStr = new Date().toLocaleDateString('zh-HK', { year: 'numeric', month: 'long', day: 'numeric' });
      
      // Removed calculateElongation context since the mock service ignores it.
      const astronomyContext = "";

      getObservationGuide(planet.name, todayStr, astronomyContext).then((guide) => {
          setAiGuide(guide);
          setIsLoadingGuide(false);
      });
  };

  const StatRow = ({ label, value, isLast = false, action }: { label: string, value: string | number, isLast?: boolean, action?: React.ReactNode }) => (
      <div className={`flex justify-between py-4 mr-5 ml-5 ${!isLast ? 'border-b border-slate-800' : ''}`}>
          <span className="text-sm font-medium text-slate-400 tracking-wide break-keep pr-3">{label}</span>
          <div className="flex md:flex-wrap-reverse text-right items-center gap-3 ml-auto">
            {action}
            <span className="text-sm font-mono font-bold text-slate-300 text-right ml-auto">{value}</span>
          </div>
      </div>
  );

  const showObservationTab = planet.id !== 'earth' && planet.id !== 'sun';

  return (
    // Changed: Full height container with fixed layout
    <div className="w-full font-sans h-full relative flex flex-col overflow-hidden">
      
      {/* Navigation Header - Fixed at Top (Static, not Sticky) */}
      {/* CHANGED: pt-0 on mobile, md:pt-6 on desktop. Hidden header content on mobile. */}
      <div className="flex-shrink-0 z-30 bg-slate-950 border-b border-slate-800/50 pt-0 md:pt-6 shadow-2xl transition-all duration-300 relative">
        
        {/* CHANGED: Hidden on Mobile. Mobile uses the Bottom Sheet handle for this info. */}
        <div className={`hidden md:flex flex-col gap-5 px-6 ${showObservationTab ? 'mb-5' : ''}`}>
             
             {/* Back button */}
             <button 
                onClick={onClose}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group w-max"
            >
                <div className="flex items-center justify-center rounded-full shadow-md transition-all duration-300">
                    <ArrowLeft size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-wide">返回</span>
            </button>
            
            <div>
                <h2 className="text-xl font-bold text-slate-200 flex items-center gap-3 leading-7">
                    <span>{planet.name}</span>
                </h2>
                <p className="text-indigo-400 text-sm font-bold uppercase tracking-widest mt-1.5">
                     {planet.type === 'terrestrial' ? '類地行星' : planet.type === 'gas' ? '氣態巨行星' : planet.type === 'ice' ? '冰巨行星' : planet.type === 'moon' ? '衛星' : '恆星'}
                </p>
            </div>
        </div>

        {/* Divider above tabs (Desktop only) */}
        {showObservationTab && <div className="hidden md:block w-full h-px bg-slate-800/50" />}

        {/* Tabs - Full Width */}
        {showObservationTab && (
            <div className="relative flex w-full">
                <button
                    onClick={() => setActiveTab('intro')}
                    className={`flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2 ${
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
                    className={`flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2 ${
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
        {!showObservationTab && <div className="hidden md:block pb-5" />}
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
                    <p className="text-slate-300 text-sm font-normal leading-6 text-justify whitespace-pre-line">
                        {descriptionText}
                    </p>

                    {funFactText && (
                        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/40 to-purple-900/10 border border-indigo-500/30 rounded-xl p-5 shadow-inner">
                            {/* Decorative background icon */}
                            <div className="absolute -bottom-4 -right-4 text-indigo-500/5 transform rotate-12 pointer-events-none">
                                <Lightbulb size={100} />
                            </div>
                            
                            <div className="relative z-10 space-y-2">
                                <h4 className="text-sm text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Lightbulb size={14} className="text-indigo-400" />
                                    星際冷知識
                                </h4>
                                <p className="text-slate-300 text-sm font-normal leading-6 text-justify">
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
                            <StatRow label="公轉週期" value={formatOrbitalPeriod(planet.period)} />
                          )}
                          
                          {/* 2. Rotation Period */}
                          <StatRow label="自轉週期" value={formatRotationString(planet.rotationPeriod)} />
                          
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
                        <p className="text-slate-300 text-sm font-normal leading-6 text-justify whitespace-pre-line">
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
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-slate-200 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 active:scale-[0.98]"
                        >
                            <Telescope size={18} />
                            獲取今日香港觀測詳情
                        </button>
                    ) : isLoadingGuide ? (
                        <div className="flex flex-col items-center gap-3 text-slate-300 text-sm py-8 justify-center bg-slate-950/50 rounded-xl border border-slate-800/50">
                            <Loader2 className="animate-spin text-indigo-400" size={24} />
                            <span>正在分析天體位置與實時數據...</span>
                        </div>
                    ) : (
                        <div className="text-sm text-slate-300 space-y-3 whitespace-pre-wrap leading-6 animate-in fade-in slide-in-from-bottom-2 bg-slate-950/50 p-5 rounded-xl border border-slate-800/60">
                            {aiGuide}
                            <div className="mt-4 pt-3 border-t border-slate-800/50 text-xs text-slate-400 text-right flex items-center justify-end gap-1.5">
                                <Sparkles size={14} className="text-indigo-400" /> 
                                <span>Powered by AI (demo only)</span>
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
