
import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      phase: "01",
      title: "Requirements Analysis",
      subtitle: "Domain-Specific Understanding",
      description: "We dive deep into your business domain, analyzing data patterns, use cases, and specific requirements. Our AI specialists map your unique challenges to determine the optimal base architecture (GPT, BERT, LLaMA, etc.) for fine-tuning.",
      duration: "3-5 Days",
      deliverables: ["Domain Analysis Report", "Architecture Recommendation", "Data Assessment", "Performance Benchmarks"],
      icon: "🔍",
      color: "from-[#00CFFF] to-[#9B30FF]"
    },
    {
      phase: "02", 
      title: "Model Architecture Design",
      subtitle: "Custom AI Blueprint Creation",
      description: "Based on your requirements, we design the custom fine-tuning strategy. We select the most suitable base model (GPT-4, LLaMA 2, BERT, etc.) and create the architecture modifications needed for your domain-specific performance.",
      duration: "1-2 Weeks",
      deliverables: ["Custom Architecture Design", "Fine-tuning Strategy", "Training Protocol", "Performance Targets"],
      icon: "🏗️",
      color: "from-[#9B30FF] to-[#FF2EF7]"
    },
    {
      phase: "03",
      title: "Model Fine-tuning",
      subtitle: "Specialized Training Process",
      description: "We fine-tune your selected base model using your domain-specific data. Our advanced training protocols ensure optimal performance while maintaining the powerful capabilities of the original architecture.",
      duration: "1-3 Weeks",
      deliverables: ["Fine-tuned Model", "Training Metrics", "Performance Validation", "Quality Assurance"],
      icon: "🧠",
      color: "from-[#FF2EF7] to-[#B0FF36]"
    },
    {
      phase: "04",
      title: "Deployment & Integration",
      subtitle: "Production Implementation",
      description: "Your fine-tuned AI model is deployed to your infrastructure with seamless integration. We ensure optimal performance, scalability, and compatibility with your existing systems.",
      duration: "1-2 Weeks",
      deliverables: ["Production Deployment", "API Integration", "Performance Optimization", "Security Implementation"],
      icon: "🚀",
      color: "from-[#B0FF36] to-[#00CFFF]"
    },
    {
      phase: "05",
      title: "Monitoring & Support",
      subtitle: "Continuous Optimization",
      description: "We provide ongoing monitoring and support for your fine-tuned model. Continuous performance tracking ensures your AI solution evolves with your business needs and maintains peak performance.",
      duration: "Ongoing",
      deliverables: ["Performance Dashboard", "Health Monitoring", "Update Management", "Technical Support"],
      icon: "📊",
      color: "from-[#00CFFF] to-[#FF2EF7]"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NeuralBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl text-white mb-8">
            Our{' '}
            <span className="bg-gradient-to-r from-[#00CFFF] via-[#9B30FF] to-[#FF2EF7] bg-clip-text text-transparent animate-pulse">
              Fine-tuning
            </span>{' '}
            Process
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
            From requirements to deployment. 
            <span className="text-[#B0FF36]"> See how we transform existing AI architectures into domain-specific solutions.</span>
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Central Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00CFFF] via-[#9B30FF] to-[#FF2EF7] opacity-30"></div>
            
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                onClick={() => setActiveStep(index)}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`group relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-700 hover:scale-105 ${
                    activeStep === index ? 'border-[#00CFFF] shadow-2xl shadow-[#00CFFF]/20' : 'hover:border-[#00CFFF]/50'
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <span className="font-orbitron font-black text-3xl md:text-4xl text-[#00CFFF] mr-4">{step.phase}</span>
                        <div className="text-3xl md:text-4xl">{step.icon}</div>
                      </div>
                      
                      <h3 className="font-orbitron font-bold text-xl md:text-2xl text-white mb-2">{step.title}</h3>
                      <h4 className="font-inter text-base md:text-lg text-[#B0FF36] mb-4">{step.subtitle}</h4>
                      
                      <p className="font-inter text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{step.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-[#FF2EF7] rounded-full mr-3"></div>
                          <span className="font-inter font-semibold text-white text-sm md:text-base">Duration: {step.duration}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-inter font-semibold text-[#00CFFF] mb-3 text-sm md:text-base">Key Deliverables:</h5>
                        {step.deliverables.map((deliverable, dIndex) => (
                          <div key={dIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-[#B0FF36] rounded-full mr-3 animate-pulse"></div>
                            <span className="text-gray-400 text-xs md:text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#00CFFF] to-[#9B30FF] rounded-full flex items-center justify-center text-lg md:text-2xl border-4 border-black z-10 transition-all duration-500 hover:scale-125 cursor-pointer">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white mb-8">
            Ready to Fine-tune Your AI Solution?
          </h2>
          <p className="font-inter text-lg md:text-xl text-gray-300 mb-12">
            From requirements analysis to deployment in just weeks
          </p>
          <Link 
            to="/contact"
            className="group relative bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-inter font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-500 transform hover:scale-105 inline-block"
          >
            <span className="relative z-10">Start Your AI Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9B30FF] to-[#FF2EF7] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] rounded-lg flex items-center justify-center">
                  <div className="w-4 md:w-5 h-4 md:h-5 border-2 border-white rounded-sm"></div>
                </div>
                <span className="font-orbitron font-bold text-xl md:text-2xl text-white">
                  QuantaCotre AI Solutions
                </span>
              </div>
              
              <p className="font-inter text-gray-400 mb-6 max-w-md text-sm md:text-base">
                Specializing in fine-tuning and deploying existing AI architectures like GPT, BERT, and LLaMA 
                for domain-specific enterprise solutions. Transform powerful base models into specialized tools.
              </p>
              
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'GitHub', 'Medium'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 md:w-10 h-8 md:h-10 border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00CFFF] hover:border-[#00CFFF]/50 transition-all duration-300 text-xs md:text-sm"
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Navigation Links */}
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4 text-sm md:text-base">Solutions</h4>
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
                    className="block font-inter text-gray-400 hover:text-[#00CFFF] transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4 text-sm md:text-base">Connect</h4>
              <div className="space-y-3">
                <p className="font-inter text-gray-400 text-xs md:text-sm">
                  <span className="text-[#00CFFF]">Business Inquiries:</span><br />
                  Coming Soon
                </p>
                <p className="font-inter text-gray-400 text-xs md:text-sm">
                  <span className="text-[#9B30FF]">Technical Support:</span><br />
                  Coming Soon
                </p>
                <p className="font-inter text-gray-400 text-xs md:text-sm">
                  <span className="text-[#FF2EF7]">Headquarters:</span><br />
                  Location TBD
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-500 text-xs md:text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} QuantaCotre AI Solutions. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
              {['Privacy Policy', 'Terms of Service', 'AI Ethics'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-[#00CFFF] transition-colors duration-300 font-inter text-xs md:text-sm"
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

export default Process;
