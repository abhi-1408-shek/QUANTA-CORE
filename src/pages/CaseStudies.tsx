
import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      client: "TechFlow Manufacturing",
      industry: "Industrial Automation",
      title: "LLaMA-Powered Quality Control System",
      challenge: "Traditional quality control systems had 78% accuracy with high false positive rates, causing production delays and waste in semiconductor manufacturing processes.",
      solution: "Fine-tuned LLaMA 2 model on 2M+ manufacturing images and sensor data. Deployed custom vision-language model that understands both visual defects and contextual manufacturing parameters.",
      results: [
        "96.8% defect detection accuracy",
        "73% reduction in false positives", 
        "45% faster inspection cycles",
        "98.5% uptime improvement"
      ],
      technologies: ["LLaMA 2 Fine-tuning", "Computer Vision", "Edge Deployment", "Real-time Inference"],
      baseModel: "LLaMA 2-13B",
      image: "photo-1518770660439-4636190af475",
      color: "from-[#00CFFF] to-[#9B30FF]",
      icon: "🏭"
    },
    {
      client: "MedCore Diagnostics",
      industry: "Healthcare Technology",
      title: "BERT-Based Medical Diagnosis Assistant",
      challenge: "Radiologists spending 4+ hours per case analyzing medical reports. Critical information buried in unstructured clinical notes, leading to diagnostic delays and inconsistencies.",
      solution: "Custom fine-tuned BioBERT on 500K+ medical records and radiology reports. Deployed specialized medical language model that extracts key diagnostic indicators and suggests differential diagnoses.",
      results: [
        "92.3% diagnostic accuracy improvement",
        "68% reduction in analysis time",
        "87% faster report generation",
        "Zero missed critical findings"
      ],
      technologies: ["BioBERT Fine-tuning", "Medical NLP", "Clinical Integration", "HIPAA Compliance"],
      baseModel: "BioBERT-Base",
      image: "photo-1581090464777-f3220bbe1b8b",
      color: "from-[#9B30FF] to-[#FF2EF7]",
      icon: "🏥"
    },
    {
      client: "FinanceCore Analytics",
      industry: "Financial Services",
      title: "GPT-4 Risk Assessment Platform",
      challenge: "Manual risk assessment taking weeks per client. Market volatility analysis limited by traditional statistical models. Compliance reporting consuming 40% of analyst time.",
      solution: "Fine-tuned GPT-4 on proprietary financial datasets, market data, and regulatory documents. Created domain-specific risk assessment model with real-time market sentiment analysis.",
      results: [
        "89% faster risk assessments",
        "94.7% accuracy in market predictions",
        "76% reduction in compliance overhead",
        "$2.3M cost savings annually"
      ],
      technologies: ["GPT-4 Fine-tuning", "Financial APIs", "Real-time Processing", "Regulatory Compliance"],
      baseModel: "GPT-4 Turbo",
      image: "photo-1470813740244-df37b8c1edcb",
      color: "from-[#FF2EF7] to-[#B0FF36]",
      icon: "💰"
    },
    {
      client: "EduTech Innovations",
      industry: "Educational Technology",
      title: "Multi-Modal Learning Assistant",
      challenge: "One-size-fits-all learning approaches failing diverse student needs. 67% of students struggling with personalized content adaptation. Teacher workload increasing by 40% annually.",
      solution: "Fine-tuned combination of BERT for text understanding and Vision Transformer for visual content. Deployed personalized learning model that adapts to individual student learning patterns and preferences.",
      results: [
        "84% improvement in learning outcomes",
        "92% student engagement increase",
        "56% reduction in teacher workload",
        "Personalized content for 10K+ students"
      ],
      technologies: ["BERT Fine-tuning", "Vision Transformers", "Adaptive Learning", "Multi-modal Processing"],
      baseModel: "RoBERTa + ViT-Base",
      image: "photo-1605810230434-7631ac76ec81",
      color: "from-[#B0FF36] to-[#00CFFF]",
      icon: "📚"
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
            Proven{' '}
            <span className="bg-gradient-to-r from-[#00CFFF] via-[#9B30FF] to-[#FF2EF7] bg-clip-text text-transparent animate-pulse">
              AI Solutions
            </span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Real clients. Real fine-tuned models. Real results. 
            <span className="text-[#B0FF36]"> See how we transform existing AI architectures into domain-specific powerhouses.</span>
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`relative mb-20 ${activeCase === index ? 'z-10' : 'z-0'}`}
              onClick={() => setActiveCase(index)}
            >
              <div className={`group relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 cursor-pointer transition-all duration-700 hover:scale-[1.02] ${
                activeCase === index ? 'border-[#00CFFF] shadow-2xl shadow-[#00CFFF]/20' : 'hover:border-[#00CFFF]/50'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="text-5xl mr-6">{study.icon}</div>
                      <div>
                        <h3 className="font-orbitron font-bold text-3xl text-white mb-2">{study.title}</h3>
                        <div className="flex items-center space-x-4">
                          <span className="font-inter text-[#00CFFF] font-semibold">{study.client}</span>
                          <span className="text-gray-500">•</span>
                          <span className="font-inter text-[#B0FF36] text-sm">{study.industry}</span>
                        </div>
                        <div className="mt-2 flex items-center">
                          <span className="text-xs text-[#FF2EF7] font-semibold">BASE MODEL:</span>
                          <span className="ml-2 text-xs text-gray-300">{study.baseModel}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-orbitron font-bold text-xl text-[#FF2EF7] mb-4">The Challenge</h4>
                      <p className="font-inter text-gray-300 leading-relaxed mb-6">{study.challenge}</p>
                      
                      <h4 className="font-orbitron font-bold text-xl text-[#9B30FF] mb-4">Our Solution</h4>
                      <p className="font-inter text-gray-300 leading-relaxed mb-6">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {study.results.map((result, rIndex) => (
                        <div key={rIndex} className="flex items-center">
                          <div className="w-3 h-3 bg-[#B0FF36] rounded-full mr-3 animate-pulse"></div>
                          <span className="font-inter text-white font-semibold text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h5 className="font-inter font-semibold text-[#00CFFF] mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, tIndex) => (
                          <span key={tIndex} className="px-3 py-1 bg-gradient-to-r from-[#00CFFF]/20 to-[#9B30FF]/20 border border-[#00CFFF]/30 rounded-full text-xs font-inter text-[#00CFFF]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="relative group">
                      <img 
                        src={`https://images.unsplash.com/${study.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={study.title}
                        className="w-full h-80 object-cover rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-30 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                      <div className="absolute inset-0 border-2 border-[#00CFFF]/0 group-hover:border-[#00CFFF]/50 rounded-2xl transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron font-bold text-4xl text-white mb-8">
            Ready to Transform Your AI Architecture?
          </h2>
          <p className="font-inter text-xl text-gray-300 mb-12">
            Join the organizations that have leveraged fine-tuned AI models for unprecedented results
          </p>
          <Link 
            to="/contact"
            className="group relative bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-12 py-4 rounded-lg font-inter font-bold text-lg hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-500 transform hover:scale-105 inline-block"
          >
            <span className="relative z-10">Start Your AI Transformation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9B30FF] to-[#FF2EF7] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
