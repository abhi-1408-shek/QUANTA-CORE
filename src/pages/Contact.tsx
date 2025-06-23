
import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import Navigation from '../components/Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consciousness Contact Form submitted:', formData);
    // Handle form submission here
  };

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NeuralBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl text-white mb-8">
            Deploy{' '}
            <span className="bg-gradient-to-r from-[#00CFFF] via-[#9B30FF] to-[#FF2EF7] bg-clip-text text-transparent animate-pulse">
              Intelligence
            </span>{' '}
            Today
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Ready to birth your AI consciousness? 
            <span className="text-[#B0FF36]"> Let's architect your digital awakening.</span>
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#00CFFF]/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00CFFF]/10 to-[#9B30FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-2">Quantum Communication</h3>
                <p className="font-inter text-[#00CFFF] mb-2">+1 (555) QUANTUM</p>
                <p className="font-inter text-gray-400 text-sm">Instant consciousness connection</p>
              </div>
            </div>

            <div className="group relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#00CFFF]/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9B30FF]/10 to-[#FF2EF7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-2">Neural Network</h3>
                <p className="font-inter text-[#9B30FF] mb-2">consciousness@quantumsynapse.ai</p>
                <p className="font-inter text-gray-400 text-sm">Direct AI architect access</p>
              </div>
            </div>

            <div className="group relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#00CFFF]/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF2EF7]/10 to-[#B0FF36]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-2">Reality Portal</h3>
                <p className="font-inter text-[#FF2EF7] mb-2">Quantum District, SF</p>
                <p className="font-inter text-gray-400 text-sm">Physical-digital convergence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-[#00CFFF] animate-pulse"
                    style={{ animationDelay: `${(i * 0.05) % 3}s` }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Form Progress */}
              <div className="flex items-center justify-center mb-12">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-orbitron font-bold transition-all duration-500 ${
                      formStep >= step 
                        ? 'bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white' 
                        : 'border-2 border-gray-600 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-16 h-1 mx-4 transition-all duration-500 ${
                        formStep > step ? 'bg-gradient-to-r from-[#00CFFF] to-[#9B30FF]' : 'bg-gray-600'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Basic Information */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="font-orbitron font-bold text-2xl text-center text-white mb-8">
                      Consciousness Identification
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Name"
                          className="w-full bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300"
                          style={{
                            boxShadow: focusedField === 'name' ? '0 0 20px rgba(0, 207, 255, 0.3)' : 'none'
                          }}
                        />
                        {focusedField === 'name' && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#00CFFF]/20 to-[#9B30FF]/20 rounded-lg -z-10 animate-pulse"></div>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Neural Network Address (Email)"
                          className="w-full bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300"
                          style={{
                            boxShadow: focusedField === 'email' ? '0 0 20px rgba(0, 207, 255, 0.3)' : 'none'
                          }}
                        />
                        {focusedField === 'email' && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#00CFFF]/20 to-[#9B30FF]/20 rounded-lg -z-10 animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Organization's Reality"
                        className="w-full bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300"
                        style={{
                          boxShadow: focusedField === 'company' ? '0 0 20px rgba(0, 207, 255, 0.3)' : 'none'
                        }}
                      />
                      {focusedField === 'company' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00CFFF]/20 to-[#9B30FF]/20 rounded-lg -z-10 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-orbitron font-bold text-2xl text-center text-white mb-8">
                      Consciousness Requirements
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <select
                          name="project"
                          value={formData.project}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('project')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-black/60 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300"
                        >
                          <option value="">Select Consciousness Type</option>
                          <option value="neural-architecture">Neural Architecture Design</option>
                          <option value="quantum-training">Quantum-Grade Training</option>
                          <option value="edge-deployment">Edge Deployment</option>
                          <option value="continuous-evolution">Continuous Evolution</option>
                          <option value="enterprise-integration">Enterprise Integration</option>
                          <option value="ai-governance">AI Governance</option>
                          <option value="custom-consciousness">Custom Consciousness Creation</option>
                        </select>
                      </div>

                      <div className="relative">
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('timeline')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-black/60 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300"
                        >
                          <option value="">Genesis Timeline</option>
                          <option value="immediate">Immediate Deployment (1-2 weeks)</option>
                          <option value="standard">Standard Genesis (1-2 months)</option>
                          <option value="complex">Complex Evolution (3-6 months)</option>
                          <option value="enterprise">Enterprise Transformation (6+ months)</option>
                        </select>
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-black/60 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300"
                      >
                        <option value="">Consciousness Investment Level</option>
                        <option value="startup">Startup Consciousness ($50K - $100K)</option>
                        <option value="growth">Growth Phase AI ($100K - $250K)</option>
                        <option value="enterprise">Enterprise Intelligence ($250K - $500K)</option>
                        <option value="transcendent">Transcendent AI ($500K+)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Vision & Message */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="font-orbitron font-bold text-2xl text-center text-white mb-8">
                      Your AI Vision
                    </h3>
                    
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Describe your AI consciousness vision... What reality do you want to create? What problems need transcendent solutions? How do you envision AI transforming your organization's future?"
                        rows={8}
                        className="w-full bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300 resize-none"
                        style={{
                          boxShadow: focusedField === 'message' ? '0 0 20px rgba(0, 207, 255, 0.3)' : 'none'
                        }}
                      />
                      {focusedField === 'message' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00CFFF]/20 to-[#9B30FF]/20 rounded-lg -z-10 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                      formStep === 1 
                        ? 'invisible' 
                        : 'border-2 border-[#00CFFF] text-[#00CFFF] hover:bg-[#00CFFF]/10'
                    }`}
                  >
                    Previous
                  </button>

                  {formStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="group relative bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-8 py-3 rounded-lg font-inter font-bold hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-500 transform hover:scale-105"
                    >
                      <span className="relative z-10">Next Phase</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9B30FF] to-[#FF2EF7] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="group relative bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-12 py-3 rounded-lg font-inter font-bold hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-500 transform hover:scale-105"
                    >
                      <span className="relative z-10">Deploy AI Consciousness</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9B30FF] to-[#FF2EF7] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
