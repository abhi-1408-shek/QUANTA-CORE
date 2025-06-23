
import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Team = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Architect",
      specialty: "Large Language Model Fine-tuning",
      bio: "Leading AI researcher with expertise in transformer architectures and domain-specific model adaptation. Dr. Chen will spearhead our fine-tuning methodologies for GPT, BERT, and LLaMA models.",
      expertise: [
        "PhD in Machine Learning",
        "10+ years in AI research", 
        "Expert in transformer architectures",
        "Published researcher in model fine-tuning"
      ],
      focus: "Model Architecture",
      level: "Senior",
      image: "photo-1507003211169-0a1dd7228f2d",
      gradient: "from-[#00CFFF] to-[#9B30FF]",
      icon: "🧠"
    },
    {
      name: "Maya Rodriguez",
      role: "AI Engineering Lead",
      specialty: "Production AI Deployment",
      bio: "Full-stack AI engineer specializing in scalable model deployment and infrastructure. Maya will ensure our fine-tuned models perform optimally in production environments.",
      expertise: [
        "MS in Computer Science",
        "Expert in MLOps and deployment",
        "Cloud infrastructure specialist",
        "Scalable AI systems architect"
      ],
      focus: "Deployment Systems",
      level: "Senior",
      image: "photo-1494790108755-2616b88a5bf2",
      gradient: "from-[#9B30FF] to-[#FF2EF7]",
      icon: "🚀"
    },
    {
      name: "Alex Thompson",
      role: "Data Science Director",
      specialty: "Domain-Specific Training",
      bio: "Data scientist with deep experience in industry-specific AI applications. Alex will lead our domain adaptation strategies and ensure optimal training data preparation.",
      expertise: [
        "MS in Data Science",
        "Industry AI applications expert",
        "Advanced training methodologies",
        "Domain adaptation specialist"
      ],
      focus: "Training Optimization",
      level: "Senior",
      image: "photo-1472099645785-5658abf4ff4e",
      gradient: "from-[#FF2EF7] to-[#B0FF36]",
      icon: "📊"
    },
    {
      name: "Zara Kim",
      role: "AI Research Scientist",
      specialty: "Model Performance Optimization",
      bio: "Research scientist focused on AI model efficiency and performance optimization. Zara will drive our research initiatives in advanced fine-tuning techniques and model compression.",
      expertise: [
        "PhD in AI Research",
        "Model optimization expert",
        "Performance analysis specialist",
        "Research methodology leader"
      ],
      focus: "Research & Innovation",
      level: "Senior",
      image: "photo-1438761681033-6461ffad8d80",
      gradient: "from-[#B0FF36] to-[#00CFFF]",
      icon: "🔬"
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI fine-tuning, constantly exploring new methodologies and approaches to deliver cutting-edge solutions.",
      icon: "💡",
      color: "from-[#00CFFF] to-[#9B30FF]"
    },
    {
      title: "Domain Expertise",
      description: "Deep understanding of industry-specific requirements allows us to create truly specialized AI models that solve real business challenges.",
      icon: "🎯", 
      color: "from-[#9B30FF] to-[#FF2EF7]"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and validation ensure every fine-tuned model meets the highest standards of performance and reliability.",
      icon: "✅",
      color: "from-[#FF2EF7] to-[#B0FF36]"
    },
    {
      title: "Client Partnership",
      description: "We work closely with clients throughout the entire process, ensuring solutions are perfectly aligned with their specific needs and goals.",
      icon: "🤝",
      color: "from-[#B0FF36] to-[#00CFFF]"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NeuralBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-orbitron font-black text-5xl md:text-8xl text-white mb-8">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-[#00CFFF] via-[#9B30FF] to-[#FF2EF7] bg-clip-text text-transparent animate-pulse">
              AI Experts
            </span>
          </h1>
          <p className="font-inter text-lg md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
            The specialists who will transform existing AI architectures into your domain-specific solutions. 
            <span className="text-[#B0FF36]"> Meet the team that makes AI work for your business.</span>
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-700 hover:scale-105 ${
                  activeTeamMember === index ? 'border-[#00CFFF] shadow-2xl shadow-[#00CFFF]/20' : 'hover:border-[#00CFFF]/50'
                }`}
                onClick={() => setActiveTeamMember(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  {/* Profile Image & Icon */}
                  <div className="flex items-center mb-6">
                    <div className="relative mr-4 md:mr-6">
                      <img 
                        src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=150&q=80`}
                        alt={member.name}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#00CFFF]/50 group-hover:border-[#00CFFF] transition-all duration-500"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#00CFFF] to-[#9B30FF] rounded-full flex items-center justify-center text-xs md:text-sm">
                        {member.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-orbitron font-bold text-xl md:text-2xl text-white mb-1">{member.name}</h3>
                      <h4 className="font-inter text-base md:text-lg text-[#00CFFF] mb-1">{member.role}</h4>
                      <span className="font-inter text-xs md:text-sm text-[#B0FF36]">{member.specialty}</span>
                    </div>
                  </div>
                  
                  <p className="font-inter text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{member.bio}</p>
                  
                  {/* Expertise Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/30 rounded-lg p-3">
                      <span className="text-xs text-[#00CFFF] font-semibold">FOCUS AREA</span>
                      <p className="text-xs md:text-sm text-white">{member.focus}</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <span className="text-xs text-[#FF2EF7] font-semibold">LEVEL</span>
                      <p className="text-xs md:text-sm text-white">{member.level}</p>
                    </div>
                  </div>
                  
                  {/* Expertise */}
                  <div className="space-y-2">
                    <h5 className="font-inter font-semibold text-[#9B30FF] mb-3 text-sm md:text-base">Expertise:</h5>
                    {member.expertise.map((skill, sIndex) => (
                      <div key={sIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#B0FF36] rounded-full mr-3 animate-pulse"></div>
                        <span className="text-gray-400 text-xs md:text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl md:text-5xl text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our AI fine-tuning approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#00CFFF]/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  
                  <h3 className="font-orbitron font-bold text-lg md:text-xl text-white mb-4">{value.title}</h3>
                  
                  <p className="font-inter text-gray-300 text-xs md:text-sm leading-relaxed">{value.description}</p>
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
            Ready to Work with Our Team?
          </h2>
          <p className="font-inter text-lg md:text-xl text-gray-300 mb-12">
            Let our AI specialists create your custom fine-tuned solution
          </p>
          <Link 
            to="/contact"
            className="group relative bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-inter font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-500 transform hover:scale-105 inline-block"
          >
            <span className="relative z-10">Get Started Today</span>
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

export default Team;
