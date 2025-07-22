import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ravan-dark py-12 sm:py-16 px-4 sm:px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <a
              href="/"
              className="flex items-center space-x-2 group mb-4 sm:mb-6"
            >
              <img
                src="/RavanOS_Logo.png"
                alt="RavanOS Logo"
                className="h-8 w-auto transform transition-transform duration-500 group-hover:rotate-12"
              />
              <span className="text-white font-display font-semibold text-xl"></span>
            </a>
            <p className="text-white/60 text-sm sm:text-base mb-4 sm:mb-6">
              The AI Operating System for Your Business
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {["X", "In", "Fb", "YT"].map((icon, index) => (
                <Link
                  key={index}
                  to="/login"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-white/80 text-sm">{icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 sm:mb-4 text-base sm:text-lg">
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/features"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="it-support"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  IT Support
                </a>
              </li>
              {/* <li>
                <a
                  href="#control"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Control
                </a>
              </li> */}
              <li>
                <a
                  href="#adaptability"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Adaptability
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Privacy
                </a>
              </li>
              <li>
                <Link
                  to="/early-adopters"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-white font-medium mb-3 sm:mb-4 text-base sm:text-lg">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Documentation', 'API Reference', 'Guides', 'Case Studies', 'Blog', 'Support'].map((item, index) => (
                <li key={index}>
                  <Link to="/login" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
           */}
          <div>
            <h4 className="text-white font-medium mb-3 sm:mb-4 text-base sm:text-lg">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} RavanOS. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 sm:gap-6 md:space-x-8">
            <Link
              to="/privacy-policy"
              className="text-white/50 hover:text-white/80 transition-colors text-xs sm:text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-white/50 hover:text-white/80 transition-colors text-xs sm:text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies-policy"
              className="text-white/50 hover:text-white/80 transition-colors text-xs sm:text-sm"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
