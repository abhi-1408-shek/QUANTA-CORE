
const ServicesGrid = () => {
  const services = [
    {
      title: "Neural Architecture Design",
      description: "Custom AI models engineered for your specific domain and data patterns.",
      icon: "🧠",
      color: "from-[#00CFFF] to-[#9B30FF]"
    },
    {
      title: "Quantum-Grade Training",
      description: "Advanced training pipelines with federated learning and differential privacy.",
      icon: "⚡",
      color: "from-[#9B30FF] to-[#FF2EF7]"
    },
    {
      title: "Edge Deployment",
      description: "Locally-deployed models ensuring data sovereignty and lightning-fast inference.",
      icon: "🚀",
      color: "from-[#FF2EF7] to-[#B0FF36]"
    },
    {
      title: "Continuous Evolution",
      description: "Self-improving systems that adapt and learn from your unique workflows.",
      icon: "🔄",
      color: "from-[#B0FF36] to-[#00CFFF]"
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration with existing infrastructure and security protocols.",
      icon: "🔗",
      color: "from-[#00CFFF] to-[#FF2EF7]"
    },
    {
      title: "AI Governance",
      description: "Comprehensive monitoring, auditing, and compliance frameworks.",
      icon: "🛡️",
      color: "from-[#9B30FF] to-[#B0FF36]"
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
            Neural-Centric{' '}
            <span className="bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
            Quantum-grade performance meets enterprise reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:border-[#00CFFF]/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
              >
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-orbitron font-bold text-xl text-white mb-4 group-hover:text-[#00CFFF] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-inter text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="text-[#00CFFF] font-inter font-medium hover:text-[#9B30FF] transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
