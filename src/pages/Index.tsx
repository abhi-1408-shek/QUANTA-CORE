
import NeuralBackground from '../components/NeuralBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NeuralBackground />
      <Navigation />
      <HeroSection />
      
      {/* Enhanced Services Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
            Custom AI Model{' '}
            <span className="bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] bg-clip-text text-transparent">
              Fine-tuning
            </span>
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We specialize in fine-tuning existing AI architectures like GPT, BERT, and LLaMA to meet your 
            specific domain requirements. Transform powerful base models into specialized solutions.
          </p>
          <Link 
            to="/services"
            className="inline-flex items-center font-inter text-[#00CFFF] hover:text-[#9B30FF] transition-colors duration-300 group"
          >
            Explore Our AI Model Services
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>
      
      <ServicesGrid />
      
      {/* Process Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
              AI Model{' '}
              <span className="bg-gradient-to-r from-[#FF2EF7] to-[#B0FF36] bg-clip-text text-transparent">
                Transformation Process
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From requirements analysis to model deployment. See how we fine-tune existing AI architectures 
              to create domain-specific powerhouses in our proven 5-phase process.
            </p>
            <Link 
              to="/process"
              className="group relative bg-gradient-to-r from-[#FF2EF7] to-[#B0FF36] text-black px-8 py-3 rounded-lg font-inter font-bold hover:shadow-2xl hover:shadow-[#FF2EF7]/30 transition-all duration-500 transform hover:scale-105 inline-block"
            >
              <span className="relative z-10">Discover Our Process</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Case Studies Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
              Proven{' '}
              <span className="bg-gradient-to-r from-[#9B30FF] to-[#00CFFF] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real clients achieving extraordinary results with our fine-tuned AI models. 
              <span className="text-[#B0FF36]">See how we transform existing architectures into specialized solutions.</span>
            </p>
            <Link 
              to="/case-studies"
              className="group relative bg-gradient-to-r from-[#9B30FF] to-[#00CFFF] text-white px-8 py-3 rounded-lg font-inter font-bold hover:shadow-2xl hover:shadow-[#9B30FF]/30 transition-all duration-500 transform hover:scale-105 inline-block"
            >
              <span className="relative z-10">Explore Our Case Studies</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Team Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-[#B0FF36] to-[#FF2EF7] bg-clip-text text-transparent">
                AI Specialists
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert AI engineers and data scientists who specialize in fine-tuning and deploying 
              cutting-edge AI models for enterprise solutions.
            </p>
            <Link 
              to="/team"
              className="group relative bg-gradient-to-r from-[#B0FF36] to-[#FF2EF7] text-black px-8 py-3 rounded-lg font-inter font-bold hover:shadow-2xl hover:shadow-[#B0FF36]/30 transition-all duration-500 transform hover:scale-105 inline-block"
            >
              <span className="relative z-10">Meet Our Team</span>
            </Link>
          </div>
        </div>
      </section>
      
      <ContactForm />
      
      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                </div>
                <span className="font-orbitron font-bold text-2xl text-white">
                  QuantaCotre AI Solutions
                </span>
              </div>
              
              <p className="font-inter text-gray-400 mb-6 max-w-md">
                Specializing in fine-tuning and deploying existing AI architectures like GPT, BERT, and LLaMA 
                for domain-specific enterprise solutions. Transform powerful base models into specialized tools.
              </p>
              
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'GitHub', 'Medium'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00CFFF] hover:border-[#00CFFF]/50 transition-all duration-300"
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Navigation Links */}
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4">Solutions Hub</h4>
              <div className="space-y-3">
                {[
                  { name: 'Services', path: '/services' },
                  { name: 'Process', path: '/process' },
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Team', path: '/team' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block font-inter text-gray-400 hover:text-[#00CFFF] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4">Connect</h4>
              <div className="space-y-3">
                <p className="font-inter text-gray-400">
                  <span className="text-[#00CFFF]">Business Inquiries:</span><br />
                  +1 (555) AI-MODELS
                </p>
                <p className="font-inter text-gray-400">
                  <span className="text-[#9B30FF]">Technical Support:</span><br />
                  solutions@quantacotre.ai
                </p>
                <p className="font-inter text-gray-400">
                  <span className="text-[#FF2EF7]">Headquarters:</span><br />
                  AI District, San Francisco
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} QuantaCotre AI Solutions. All rights reserved.
            </p>
            
            <div className="flex space-x-8">
              {['Privacy Policy', 'Terms of Service', 'AI Ethics'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-[#00CFFF] transition-colors duration-300 font-inter text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
