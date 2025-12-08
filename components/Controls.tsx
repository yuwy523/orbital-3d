import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Gauge, Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  onResetCamera: () => void;
  showOrbits: boolean;
  onToggleOrbits: () => void;
}

// Custom Icon for Orbit (Show) - Solar System Style
const OrbitIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
    <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
  </svg>
);

// Custom Icon for Orbit (Hide) - Solar System Style with Strike
const OrbitOffIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
    <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    {/* Removed text-slate-400 to inherit parent color for uniformity */}
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  onTogglePlay,
  speed,
  onSpeedChange,
  onResetCamera,
  showOrbits,
  onToggleOrbits,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeedMenuOpen, setIsSpeedMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioUrl = "thin_places.mp3";
    
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 1; 

    // Attempt auto-play
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
          setIsMuted(false);
      }).catch(error => {
        // Auto-play was prevented by browser policy
        console.warn("Auto-play prevented by browser policy.", error);
        setIsMuted(true); 
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      setIsMuted(false);
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  // Base scale: 1x = 0.000625 (This is 0.125 * the old 0.005)
  // Options logic scaled accordingly
  
  const getSpeedLabel = (val: number) => {
      if (val <= 0.000625) return "1x";
      if (val <= 0.00125) return "2x";
      if (val <= 0.003125) return "5x";
      if (val <= 0.00625) return "10x";
      if (val <= 0.0125) return "20x";
      return "100x";
  };

  const speedOptions = [
      { label: "1x", value: 0.000625 },
      { label: "2x", value: 0.00125 },
      { label: "5x", value: 0.003125 },
      { label: "10x", value: 0.00625 }, // This was roughly the old 1x
      { label: "20x", value: 0.0125 },
      { label: "100x", value: 0.0625 },
  ];

  return (
    // Wrapper Container: Centers the entire group relative to the visualization area
    // Flex layout aligns the taller control bar and the shorter music button on their vertical centers
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 w-max max-w-[90vw] animate-in fade-in slide-in-from-bottom-6">
      
      {/* Main Control Bar - Model Controls */}
      <div className="flex items-center gap-3 px-3 py-3 bg-slate-950/80 backdrop-blur-2xl border border-slate-800/80 rounded-full shadow-2xl">
        
        {/* 1. Play/Pause (Prominent) */}
        <button
          onClick={onTogglePlay}
          className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg border ${
            isPlaying 
              ? 'bg-indigo-600 border-indigo-500 text-white hover:bg-indigo-500' 
              : 'bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-500'
          }`}
          title={isPlaying ? "暫停" : "播放"}
        >
          {isPlaying ? (
              <Pause size={22} fill="currentColor" />
          ) : (
              // Optically centered triangle
              <Play size={22} fill="currentColor" />
          )}
        </button>

        {/* 2. Speed Control (Pop-up Menu) */}
        <div className="relative">
            {isSpeedMenuOpen && (
                <>
                  <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsSpeedMenuOpen(false)} 
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl flex flex-col min-w-[80px] z-20 animate-in fade-in slide-in-from-bottom-2">
                      {speedOptions.map((opt) => (
                          <button
                              key={opt.label}
                              onClick={() => {
                                  onSpeedChange(opt.value);
                                  setIsSpeedMenuOpen(false);
                              }}
                              className={`px-4 py-2.5 text-sm font-bold font-mono hover:bg-indigo-600 hover:text-white transition-colors ${
                                  Math.abs(speed - opt.value) < 0.000001 ? 'bg-slate-800 text-indigo-400' : 'text-slate-300'
                              }`}
                          >
                              {opt.label}
                          </button>
                      ))}
                  </div>
                </>
            )}
            <button 
              onClick={() => setIsSpeedMenuOpen(!isSpeedMenuOpen)} 
              className={`w-11 h-11 flex flex-col items-center justify-center rounded-full transition-all duration-300 gap-0.5 border ${
                  isSpeedMenuOpen 
                  ? 'bg-slate-800 text-white border-slate-600' 
                  : 'text-slate-200 border-transparent hover:text-white hover:bg-slate-800/50'
              }`}
              title="調整演化速度"
            >
              <Gauge size={18} />
              <span className="text-xs font-medium font-mono leading-none">{getSpeedLabel(speed)}</span>
            </button>
        </div>

        {/* 3. Show/Hide Orbits */}
        <button 
          onClick={onToggleOrbits} 
          className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 border ${
              showOrbits
              ? 'text-indigo-400 bg-indigo-950/30 border-indigo-500/30 hover:bg-indigo-950/50 hover:text-indigo-300' 
              : 'text-slate-200 border-transparent hover:text-white hover:bg-slate-800/50'
          }`}
          title={showOrbits ? "隱藏軌道" : "顯示軌道"}
        >
           {showOrbits ? <OrbitIcon size={20} /> : <OrbitOffIcon size={20} />}
        </button>

        {/* 4. Reset Camera */}
        <button 
          onClick={onResetCamera} 
          className="w-11 h-11 flex items-center justify-center rounded-full text-slate-200 border border-transparent hover:text-white hover:bg-slate-800/50 transition-all duration-300 group"
          title="重置視角"
        >
           <RotateCcw size={20} className="group-hover:-rotate-180 transition-transform duration-500" />
        </button>
      </div>

      {/* 5. Music Toggle - Independent but Aligned */}
      <button 
        onClick={toggleMusic} 
        className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 shadow-2xl backdrop-blur-2xl ${
            !isMuted 
            ? 'bg-indigo-950/80 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-900/80 hover:text-indigo-300' 
            : 'bg-slate-950/80 border border-slate-800/80 text-slate-200 hover:bg-slate-900/90 hover:text-white'
        }`}
        title="背景氛圍"
      >
        {!isMuted ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default Controls;