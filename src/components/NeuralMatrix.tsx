
import { useEffect, useRef, useState } from 'react';

const NeuralMatrix = () => {
  const matrixRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (matrixRef.current) {
        setDimensions({
          width: matrixRef.current.offsetWidth,
          height: matrixRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const generateNodes = () => {
    const nodes = [];
    const cols = Math.floor(dimensions.width / 80) || 8;
    const rows = Math.floor(dimensions.height / 80) || 6;
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        nodes.push({
          id: `${i}-${j}`,
          x: (j * 80) + 40,
          y: (i * 80) + 40,
          delay: (i + j) * 0.1
        });
      }
    }
    return nodes;
  };

  const nodes = generateNodes();

  return (
    <div ref={matrixRef} className="relative w-full h-96 overflow-hidden bg-black/20 rounded-2xl">
      {/* Neural connections */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((node, index) => {
          const nextNode = nodes[index + 1];
          if (!nextNode) return null;
          
          return (
            <line
              key={`connection-${index}`}
              x1={node.x}
              y1={node.y}
              x2={nextNode.x}
              y2={nextNode.y}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${node.delay}s` }}
            />
          );
        })}
        
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00CFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#9B30FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF2EF7" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Neural nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute w-3 h-3 bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] rounded-full animate-pulse hover:scale-150 transition-transform duration-300 cursor-pointer"
          style={{
            left: node.x - 6,
            top: node.y - 6,
            animationDelay: `${node.delay}s`
          }}
        >
          <div className="absolute inset-0 bg-white/50 rounded-full animate-ping"></div>
        </div>
      ))}

      {/* Floating data streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-8 bg-gradient-to-b from-transparent via-[#B0FF36] to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NeuralMatrix;
