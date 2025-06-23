
import { useState, useEffect } from 'react';

const QuantumTimeline = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phases = [
    { 
      title: "Neural Scan", 
      description: "Quantum consciousness mapping",
      icon: "🧠",
      color: "from-[#00CFFF] to-[#9B30FF]",
      particles: 12
    },
    { 
      title: "Quantum Design", 
      description: "Reality architecture synthesis",
      icon: "⚛️",
      color: "from-[#9B30FF] to-[#FF2EF7]",
      particles: 16
    },
    { 
      title: "AI Genesis", 
      description: "Digital consciousness birth",
      icon: "🌟",
      color: "from-[#FF2EF7] to-[#B0FF36]",
      particles: 20
    },
    { 
      title: "Reality Merge", 
      description: "Dimensional integration",
      icon: "🔮",
      color: "from-[#B0FF36] to-[#00CFFF]",
      particles: 18
    }
  ];

  return (
    <div className="relative py-16 px-4">
      {/* Quantum pathway */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00CFFF] via-[#9B30FF] to-[#FF2EF7] opacity-60">
        <div 
          className="w-full bg-gradient-to-b from-[#B0FF36] to-[#00CFFF] transition-all duration-1000 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            onMouseEnter={() => setActiveNode(index)}
          >
            {/* Content Card */}
            <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'pr-4 sm:pr-8' : 'pl-4 sm:pl-8'}`}>
              <div className={`group relative bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:scale-105 ${
                activeNode === index ? 'border-[#00CFFF] shadow-2xl shadow-[#00CFFF]/30' : 'hover:border-[#00CFFF]/50'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl sm:text-5xl mr-4 animate-pulse">{phase.icon}</div>
                    <div>
                      <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white mb-1">{phase.title}</h3>
                      <p className="text-[#B0FF36] font-inter text-sm sm:text-base">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Particle system */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    {Array.from({ length: phase.particles }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#00CFFF] rounded-full animate-ping opacity-40"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Central Quantum Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
              <div 
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-lg sm:text-2xl border-4 border-black transition-all duration-500 hover:scale-125 cursor-pointer ${
                  activeNode === index ? 'animate-pulse shadow-2xl' : ''
                }`}
                onClick={() => setActiveNode(index)}
              >
                {phase.icon}
              </div>
              
              {/* Quantum rings */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#00CFFF]/30 rounded-full"></div>
              </div>
              <div className="absolute inset-1 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                <div className="w-14 h-14 sm:w-18 sm:h-18 border border-[#9B30FF]/30 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuantumTimeline;
