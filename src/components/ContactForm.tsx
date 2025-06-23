
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
            Deploy Intelligence{' '}
            <span className="bg-gradient-to-r from-[#00CFFF] to-[#FF2EF7] bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="font-inter text-xl text-gray-300">
            Ready to transform your business with quantum-grade AI?
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Neural grid background */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-[#00CFFF] animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
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
                  placeholder="Your Email"
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
                placeholder="Your Company"
                className="w-full bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300"
                style={{
                  boxShadow: focusedField === 'company' ? '0 0 20px rgba(0, 207, 255, 0.3)' : 'none'
                }}
              />
              {focusedField === 'company' && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00CFFF]/20 to-[#9B30FF]/20 rounded-lg -z-10 animate-pulse"></div>
              )}
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder="Tell us about your AI vision..."
                rows={6}
                className="w-full bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-[#00CFFF] transition-all duration-300 resize-none"
                style={{
                  boxShadow: focusedField === 'message' ? '0 0 20px rgba(0, 207, 255, 0.3)' : 'none'
                }}
              />
              {focusedField === 'message' && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00CFFF]/20 to-[#9B30FF]/20 rounded-lg -z-10 animate-pulse"></div>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="group relative bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-12 py-4 rounded-lg font-inter font-bold text-lg hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative z-10">Launch Your AI Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#9B30FF] to-[#FF2EF7] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
