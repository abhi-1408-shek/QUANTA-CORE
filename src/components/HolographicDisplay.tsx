
import { useEffect, useRef, useState } from 'react';

const HolographicDisplay = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const stats = [
    { label: 'AI Models Deployed', value: '2,847', color: 'from-[#00CFFF] to-[#9B30FF]' },
    { label: 'Quantum Accuracy', value: '99.7%', color: 'from-[#9B30FF] to-[#FF2EF7]' },
    { label: 'Neural Networks', value: '156K', color: 'from-[#FF2EF7] to-[#B0FF36]' },
    { label: 'Reality Bridges', value: '834', color: 'from-[#B0FF36] to-[#00CFFF]' }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative p-8 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 10}deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`
      }}
    >
      {/* Holographic grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i}
              className="border border-[#00CFFF]/30 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="group relative text-center transform hover:scale-110 transition-all duration-500"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500`}></div>
            
            <div className="relative z-10 p-4">
              <div className={`text-3xl lg:text-4xl font-orbitron font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 font-inter text-sm">{stat.label}</div>
              
              {/* Quantum particle effects */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-2 h-2 bg-[#00CFFF] rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating holographic elements */}
      <div className="absolute top-4 right-4 w-16 h-16 border border-[#9B30FF]/50 rounded-full animate-spin" style={{ animationDuration: '8s' }}>
        <div className="absolute inset-2 border border-[#FF2EF7]/50 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
          <div className="absolute inset-2 border border-[#B0FF36]/50 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HolographicDisplay;
