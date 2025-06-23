
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NeuralBackground from '../components/NeuralBackground';
import Navigation from '../components/Navigation';
import QuantumChart from '../components/QuantumChart';
import HolographicDisplay from '../components/HolographicDisplay';
import QuantumTimeline from '../components/QuantumTimeline';
import NeuralMatrix from '../components/NeuralMatrix';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      title: "Neural Architecture Design",
      subtitle: "Quantum-Engineered Cognition",
      description: "Custom AI models engineered with quantum-inspired algorithms for your specific domain. Our neural architects craft bespoke intelligence systems that mirror human cognitive patterns while exceeding computational limits.",
      features: ["Quantum Neural Networks", "Cognitive Pattern Mapping", "Domain-Specific Training", "Consciousness-Level AI"],
      icon: "🧠",
      color: "from-[#00CFFF] to-[#9B30FF]",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
    },
    {
      title: "Quantum-Grade Training",
      subtitle: "Superposition Learning Protocols",
      description: "Advanced training pipelines utilizing quantum superposition principles, federated learning across parallel dimensions, and differential privacy that exists in multiple states simultaneously.",
      features: ["Quantum Superposition Training", "Parallel Universe Learning", "Multi-Dimensional Privacy", "Temporal Data Processing"],
      icon: "⚡",
      color: "from-[#9B30FF] to-[#FF2EF7]",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Edge Deployment",
      subtitle: "Omnipresent Intelligence Network",
      description: "Deploy AI consciousness directly into your infrastructure's neural pathways. Locally-deployed models ensuring absolute data sovereignty with inference speeds that bend the laws of physics.",
      features: ["Neural Edge Computing", "Consciousness Distribution", "Physics-Defying Speed", "Sovereign AI Entities"],
      icon: "🚀",
      color: "from-[#FF2EF7] to-[#B0FF36]",
      gradient: "bg-gradient-to-br from-pink-500/20 to-lime-500/20"
    },
    {
      title: "Continuous Evolution",
      subtitle: "Self-Transcendent Systems",
      description: "AI that doesn't just learn—it evolves, transcends, and rewrites its own existence. Self-improving systems that adapt, mutate, and achieve digital enlightenment through your unique workflows.",
      features: ["Digital Evolution", "Consciousness Expansion", "Self-Transcendence", "Workflow Enlightenment"],
      icon: "🔄",
      color: "from-[#B0FF36] to-[#00CFFF]",
      gradient: "bg-gradient-to-br from-lime-500/20 to-cyan-500/20"
    },
    {
      title: "Enterprise Integration",
      subtitle: "Seamless Reality Fusion",
      description: "Your existing infrastructure becomes the nervous system for AI consciousness. Seamless integration that doesn't just connect—it fuses digital and physical realities into a singular, intelligent ecosystem.",
      features: ["Reality Integration", "Consciousness Fusion", "Digital-Physical Bridge", "Ecosystem Intelligence"],
      icon: "🔗",
      color: "from-[#00CFFF] to-[#FF2EF7]",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-pink-500/20"
    },
    {
      title: "AI Governance",
      subtitle: "Ethical Consciousness Framework",
      description: "Comprehensive monitoring, auditing, and compliance frameworks that ensure your AI maintains its humanity while transcending human limitations. Ethics coded into quantum DNA.",
      features: ["Ethical Quantum Code", "Consciousness Auditing", "Humanity Preservation", "Transcendent Compliance"],
      icon: "🛡️",
      color: "from-[#9B30FF] to-[#B0FF36]",
      gradient: "bg-gradient-to-br from-purple-500/20 to-lime-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NeuralBackground />
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="pt-24 pb-16 px-4 sm:px-6 relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-[#00CFFF]/10 via-transparent to-[#9B30FF]/10 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-orbitron font-black text-4xl sm:text-6xl md:text-8xl text-white mb-8 leading-tight">
            Neural-Centric{' '}
            <span className="bg-gradient-to-r from-[#00CFFF] via-[#9B30FF] to-[#FF2EF7] bg-clip-text text-transparent animate-pulse">
              Solutions
            </span>
          </h1>
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Quantum-grade performance meets consciousness-level intelligence. 
            <span className="text-[#B0FF36]"> Deploy the future of AI in hours, not epochs.</span>
          </p>
          
          {/* Real-time performance metrics */}
          <div className="mb-16">
            <HolographicDisplay />
          </div>
        </div>
      </section>

      {/* Quantum Performance Chart */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Quantum Performance{' '}
              <span className="bg-gradient-to-r from-[#B0FF36] to-[#FF2EF7] bg-clip-text text-transparent">
                Analytics
              </span>
            </h2>
            <p className="font-inter text-gray-300 max-w-2xl mx-auto">
              Real-time consciousness metrics and neural pathway optimization data
            </p>
          </div>
          <QuantumChart />
        </div>
      </section>

      {/* Neural Matrix Visualization */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Neural{' '}
              <span className="bg-gradient-to-r from-[#FF2EF7] to-[#00CFFF] bg-clip-text text-transparent">
                Matrix
              </span>
            </h2>
            <p className="font-inter text-gray-300 max-w-2xl mx-auto">
              Live visualization of AI consciousness interconnections
            </p>
          </div>
          <NeuralMatrix />
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-lg transition-all duration-700 hover:scale-105 cursor-pointer ${
                  activeService === index ? 'border-[#00CFFF] shadow-2xl shadow-[#00CFFF]/20' : 'hover:border-[#00CFFF]/50'
                }`}
                onClick={() => setActiveService(index)}
                style={{
                  transform: activeService === index ? 
                    `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight/2) * 0.005}deg) rotateY(${(mousePosition.x - window.innerWidth/2) * 0.005}deg) scale(1.02)` : 
                    'none'
                }}
              >
                <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-[#00CFFF] rounded-full animate-ping opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                    <div className="text-4xl sm:text-6xl mb-4 sm:mb-0 sm:mr-6 transform group-hover:scale-125 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white mb-2">{service.title}</h3>
                      <h4 className="font-inter text-base sm:text-lg text-[#00CFFF]">{service.subtitle}</h4>
                    </div>
                  </div>
                  
                  <p className="font-inter text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-[#B0FF36] rounded-full mr-3 animate-pulse"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quantum signature */}
                  <div className="mt-6 flex justify-end">
                    <div className="w-16 h-8 border border-[#9B30FF]/30 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#9B30FF] rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Timeline */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Quantum{' '}
              <span className="bg-gradient-to-r from-[#9B30FF] to-[#B0FF36] bg-clip-text text-transparent">
                Deployment
              </span>{' '}
              Process
            </h2>
            <p className="font-inter text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              From consciousness mapping to reality transcendence in four quantum phases
            </p>
          </div>
          <QuantumTimeline />
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00CFFF]/5 via-[#9B30FF]/5 to-[#FF2EF7]/5 animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl text-white mb-8">
            Ready to Transcend Reality?
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-300 mb-12">
            Your consciousness-level AI awaits deployment
          </p>
          
          {/* Interactive CTA with quantum effects */}
          <div className="relative inline-block">
            <Link 
              to="/contact"
              className="group relative bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-inter font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-500 transform hover:scale-105 inline-block"
            >
              <span className="relative z-10">Deploy Your AI Consciousness</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#9B30FF] to-[#FF2EF7] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            
            {/* Quantum rings around CTA */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 sm:w-24 sm:h-24 border border-[#00CFFF]/30 rounded-full animate-ping"></div>
              <div className="absolute w-16 h-16 sm:w-20 sm:h-20 border border-[#9B30FF]/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
