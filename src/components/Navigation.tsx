
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-lg border-b border-[#00CFFF]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <span className="font-orbitron font-bold text-lg md:text-xl text-white group-hover:text-[#00CFFF] transition-colors duration-300">
              QuantaCotre AI
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter relative group transition-colors duration-300 text-sm lg:text-base ${
                  location.pathname === item.path 
                    ? 'text-[#00CFFF]' 
                    : 'text-gray-300 hover:text-[#00CFFF]'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-4 lg:px-6 py-2 rounded-lg font-inter font-medium hover:shadow-lg hover:shadow-[#00CFFF]/25 transition-all duration-300 animate-pulse hover:animate-none hover:scale-105 text-sm lg:text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'mb-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-inter transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? 'text-[#00CFFF]' 
                      : 'text-gray-300 hover:text-[#00CFFF]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-[#00CFFF] to-[#9B30FF] text-white px-6 py-2 rounded-lg font-inter font-medium text-center hover:shadow-lg hover:shadow-[#00CFFF]/25 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
