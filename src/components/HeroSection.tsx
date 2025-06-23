
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          AI That{' '}
          <span className="bg-gradient-to-r from-[#00CFFF] via-[#9B30FF] to-[#FF2EF7] bg-clip-text text-transparent animate-pulse">
            Thinks Like You
          </span>
        </h1>
        
        <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-white mb-4">
          Trained For You
        </h2>
        
        <p className="font-inter text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Bespoke, locally-deployed neural models for enterprise. 
          <span className="text-[#B0FF36]"> Deploy intelligence in hours, not months.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-500 transform hover:scale-105">
            <span className="relative z-10">Talk to an AI Architect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9B30FF] to-[#FF2EF7] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button className="group border-2 border-[#00CFFF] text-[#00CFFF] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#00CFFF]/10 hover:shadow-lg hover:shadow-[#00CFFF]/25 transition-all duration-300">
            View Demo
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-[#9B30FF]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-[#00CFFF]/30 rounded-lg rotate-45 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#B0FF36] rounded-full animate-ping"></div>
    </section>
  );
};

export default HeroSection;
