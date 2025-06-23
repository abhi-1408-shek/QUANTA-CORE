
import { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      connections: number[];
    }> = [];

    // Create nodes
    for (let i = 0; i < 80; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = node.x - nodes[j].x;
        const dy = node.y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150 && Math.random() < 0.3) {
          node.connections.push(j);
        }
      }
    });

    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        node.connections.forEach(connectionIndex => {
          const target = nodes[connectionIndex];
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150;
            const pulseIntensity = Math.sin(time * 2 + i * 0.1) * 0.3 + 0.7;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            
            // Gradient line
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
            gradient.addColorStop(0, `rgba(0, 207, 255, ${opacity * pulseIntensity * 0.6})`);
            gradient.addColorStop(0.5, `rgba(155, 48, 255, ${opacity * pulseIntensity * 0.8})`);
            gradient.addColorStop(1, `rgba(255, 46, 247, ${opacity * pulseIntensity * 0.6})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5 + opacity;
            ctx.stroke();
          }
        });

        // Draw nodes
        const nodeGlow = Math.sin(time * 3 + i * 0.2) * 0.4 + 0.6;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2 + nodeGlow, 0, Math.PI * 2);
        
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 4 + nodeGlow);
        nodeGradient.addColorStop(0, `rgba(0, 207, 255, ${nodeGlow})`);
        nodeGradient.addColorStop(0.7, `rgba(155, 48, 255, ${nodeGlow * 0.8})`);
        nodeGradient.addColorStop(1, 'rgba(155, 48, 255, 0)');
        
        ctx.fillStyle = nodeGradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};

export default NeuralBackground;
