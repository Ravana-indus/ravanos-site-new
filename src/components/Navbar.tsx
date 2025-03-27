
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-ravan-black/80 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-ravan-purple to-ravan-blue rounded-lg shadow-accent flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-white font-display font-semibold text-xl">RavanOS</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="#features" className="nav-link">Features</a>
            <a href="#business" className="nav-link">Business</a>
            <a href="#control" className="nav-link">Control</a>
            <a href="#adaptability" className="nav-link">Adaptability</a>
            <a href="#privacy" className="nav-link">Privacy</a>
          </div>
          <a href="#cta" className="button-primary">
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-ravan-dark border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-4 px-6 py-6">
          <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#business" className="nav-link" onClick={() => setIsMenuOpen(false)}>Business</a>
          <a href="#control" className="nav-link" onClick={() => setIsMenuOpen(false)}>Control</a>
          <a href="#adaptability" className="nav-link" onClick={() => setIsMenuOpen(false)}>Adaptability</a>
          <a href="#privacy" className="nav-link" onClick={() => setIsMenuOpen(false)}>Privacy</a>
          <a href="#cta" className="button-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
