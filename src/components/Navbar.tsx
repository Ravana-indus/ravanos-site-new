import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    
    // If we're already on the home page, just scroll to the section
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Otherwise navigate to home page with the hash
    // The ScrollToTop component will handle the scrolling after navigation
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 md:py-4 bg-ravan-black/90 backdrop-blur-md shadow-md' : 'py-4 md:py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/RavanOS_Logo.png" 
              alt="RavanOS Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-6">
            <Link to="/pricing" className="nav-link">Pricing</Link>

            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/it-support" className="nav-link">IT Support</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-colors" title="Login">
              <LogIn size={20} />
            </Link>
            <Link to="/early-adopters" className="button-primary">
              Get Early Access
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-1 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 top-[57px] bg-ravan-black z-[100] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col space-y-4 px-6 py-6 max-h-[calc(100vh-57px)] overflow-y-auto bg-ravan-black">
          <Link to="/pricing" className="nav-link text-lg py-3" onClick={() => setIsMenuOpen(false)}>Pricing</Link>

          <Link to="/features" className="nav-link text-lg py-3" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to="/it-support" className="nav-link text-lg py-3" onClick={() => setIsMenuOpen(false)}>IT Support</Link>

          <Link to="/about" className="nav-link text-lg py-3" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" className="nav-link text-lg py-3" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <div className="pt-4 space-y-4">
            <Link to="/login" className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-colors flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <LogIn size={20} />
              <span>Login</span>
            </Link>
            <Link to="/early-adopters" className="button-primary w-full text-center flex items-center justify-center py-4" onClick={() => setIsMenuOpen(false)}>
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
