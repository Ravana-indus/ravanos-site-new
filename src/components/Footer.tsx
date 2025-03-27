
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ravan-dark py-16 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" className="flex items-center space-x-2 group mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-ravan-purple to-ravan-blue rounded-lg shadow-accent flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-display font-semibold text-xl">RavanOS</span>
            </a>
            <p className="text-white/60 mb-6">The AI Operating System for Your Business</p>
            <div className="flex space-x-4">
              {['X', 'In', 'Fb', 'YT'].map((icon, index) => (
                <a key={index} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-white/80 text-sm">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-lg">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Business', 'Control', 'Adaptability', 'Privacy', 'Pricing'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Guides', 'Case Studies', 'Blog', 'Support'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {['About', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© 2023 RavanOS. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            {['Privacy Policy', 'Terms of Service', 'Cookies Policy'].map((item, index) => (
              <a key={index} href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
