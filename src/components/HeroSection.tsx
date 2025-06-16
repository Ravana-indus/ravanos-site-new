import React, { useEffect, useRef } from 'react';
import { ArrowRight, Bot, Cpu, Server } from 'lucide-react';
import ravanosLogo from '../RavanOS_Logo_wt.png';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center section-padding pt-32 md:pt-24 overflow-hidden bg-ravan-black" style={{ 
      backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(119, 97, 255, 0.15), transparent 40%)',
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-ravan-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -right-12 w-72 h-72 bg-ravan-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-12 left-1/4 w-48 h-48 bg-ravan-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="content-container z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          <div className="flex-1 space-y-8 animate-fade-in">
            <div>
              <div className="inline-block mb-4">
                <span className="py-1 px-3 text-xs font-medium text-white/90 rounded-full bg-ravan-accent/20 border border-ravan-accent/30">
                  Designed in Germany 🇩🇪, Built in Sri Lanka 🇱🇰
                </span>
              </div>
              <h1 className="section-title">
                <img src={ravanosLogo} alt="RavanOS Logo" className="h-15" /> <br />
                The AI Operating System <br />
                for Your Business
              </h1>
              <p className="section-subtitle">
                A seamless fusion of AI agents and a superior business management platform. 
                Transform how your business operates with intelligent automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="button-primary flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={16} />
              </a>
              <a href="/features" className="button-secondary flex items-center justify-center gap-2">
                Explore Features
              </a>
            </div>
            
            <div className="pt-4 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-ravan-purple/20 flex items-center justify-center mb-2">
                  <Bot size={24} className="text-ravan-purple" />
                </div>
                <p className="text-white/70 text-center text-sm">Intelligent AI Agents</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-ravan-blue/20 flex items-center justify-center mb-2">
                  <Server size={24} className="text-ravan-blue" />
                </div>
                <p className="text-white/70 text-center text-sm">Business Integration</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-ravan-green/20 flex items-center justify-center mb-2">
                  <Cpu size={24} className="text-ravan-green" />
                </div>
                <p className="text-white/70 text-center text-sm">Secure & Private</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-in-up-slow">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-ravan-purple/30 to-ravan-blue/30 rounded-3xl blur-2xl animate-subtle-pulse"></div>
              <div className="glass-card relative h-full w-full overflow-hidden rounded-3xl border border-white/10 p-2">
                <div className="absolute top-0 left-0 right-0 h-8 bg-ravan-dark/80 rounded-t-3xl flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-white/60 text-xs">RavanOS Interface</div>
                </div>
                <div className="h-full pt-8 rounded-3xl bg-ravan-dark/90 overflow-hidden">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 p-4 space-y-4 overflow-hidden">
                      <div className="flex space-x-4 animate-slide-in-left" style={{animationDelay: '0.5s'}}>
                        <div className="w-8 h-8 rounded-full bg-ravan-purple/20 flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs font-medium text-ravan-purple">U</span>
                        </div>
                        <div className="glass-card p-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                          <p className="text-white/90 text-sm">Schedule a meeting with all department heads for next Thursday.</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4 justify-end animate-slide-in-right" style={{animationDelay: '1s'}}>
                        <div className="glass-card p-3 rounded-2xl rounded-tr-sm bg-ravan-purple/20 max-w-[80%]">
                          <p className="text-white/90 text-sm">I've scheduled the meeting for next Thursday at 10:00 AM. All department heads have been notified and it's been added to your calendar.</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-ravan-accent flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs font-medium text-white">R</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4 animate-slide-in-left" style={{animationDelay: '1.5s'}}>
                        <div className="w-8 h-8 rounded-full bg-ravan-purple/20 flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs font-medium text-ravan-purple">U</span>
                        </div>
                        <div className="glass-card p-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                          <p className="text-white/90 text-sm">Generate a report on Q2 sales performance.</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4 justify-end animate-slide-in-right" style={{animationDelay: '2s'}}>
                        <div className="glass-card p-3 rounded-2xl rounded-tr-sm bg-ravan-purple/20 max-w-[80%]">
                          <p className="text-white/90 text-sm">Generating report... I've analyzed the sales data and created a comprehensive report. Q2 sales are up 23% compared to Q1, with the strongest performance in the North region.</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-ravan-accent flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs font-medium text-white">R</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-ravan-gray/50 p-4 border-t border-white/5">
                      <div className="glass-card p-2 px-4 rounded-full flex items-center text-white/70">
                        <input type="text" placeholder="Type your request..." className="bg-transparent border-none focus:outline-none w-full text-sm" />
                        <button className="w-8 h-8 rounded-full bg-ravan-accent flex items-center justify-center flex-shrink-0">
                          <ArrowRight size={14} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
