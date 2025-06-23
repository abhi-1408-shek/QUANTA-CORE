
import { useEffect, useRef, useState } from 'react';

const QuantumChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Quantum data visualization
      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const centerY = canvas.height / (2 * window.devicePixelRatio);
      
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time;
        const radius = 60 + Math.sin(time * 2 + i) * 20;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        // Quantum bars
        const barHeight = 40 + Math.sin(time * 3 + i) * 30;
        const gradient = ctx.createLinearGradient(x, y, x, y - barHeight);
        gradient.addColorStop(0, `rgba(0, 207, 255, ${0.8 + Math.sin(time + i) * 0.2})`);
        gradient.addColorStop(0.5, `rgba(155, 48, 255, ${0.6 + Math.sin(time + i) * 0.3})`);
        gradient.addColorStop(1, `rgba(255, 46, 247, ${0.4 + Math.sin(time + i) * 0.2})`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - 3, y, 6, -barHeight);
        
        // Connecting quantum lines
        if (i > 0) {
          const prevAngle = ((i - 1) / 8) * Math.PI * 2 + time;
          const prevRadius = 60 + Math.sin(time * 2 + (i - 1)) * 20;
          const prevX = centerX + Math.cos(prevAngle) * prevRadius;
          const prevY = centerY + Math.sin(prevAngle) * prevRadius;
          
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(176, 255, 54, ${0.3 + Math.sin(time) * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  return (
    <div className="relative w-full h-48">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00CFFF]/10 to-transparent animate-pulse"></div>
    </div>
  );
};

export default QuantumChart;
