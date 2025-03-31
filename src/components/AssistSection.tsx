import React, { useEffect, useRef } from 'react';
import { Bot, MessageSquare, Zap, ArrowRight } from 'lucide-react';

const AssistSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = sectionRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      sectionRef.current.style.setProperty('--mouse-x', `${x}`);
      sectionRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="agents" className="section-padding bg-ravan-black relative overflow-hidden" style={{ 
      backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(119, 97, 255, 0.15), transparent 40%)',
    }}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-ravan-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -right-12 w-72 h-72 bg-ravan-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-12 left-1/4 w-48 h-48 bg-ravan-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-on-scroll animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="py-1 px-3 text-xs font-medium text-white/90 rounded-full bg-ravan-accent/20 border border-ravan-accent/30">
              Intelligent AI Agents
            </span>
          </div>
          <h2 className="section-title">Assist, Agent, <span className="text-gradient">Comms</span></h2>
          <p className="section-subtitle mx-auto">
            The right AI agent for every scenario—whether you need assistance, autonomous action, or advanced communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 animate-on-scroll animate-fade-in-up hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5 blur-xl opacity-30"></div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5 border border-ravan-purple/30 p-3 mb-5 backdrop-blur-sm">
                <Bot className="w-8 h-8 text-ravan-purple" />
              </div>
              <h3 className="feature-title">AI Assistance</h3>
              <p className="feature-description">
                Get immediate help with information retrieval, research, and guidance from AI assistants designed to augment your capabilities.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll animate-fade-in-up hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5 blur-xl opacity-30"></div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5 border border-ravan-accent/30 p-3 mb-5 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-ravan-accent" />
              </div>
              <h3 className="feature-title">Autonomous Agents</h3>
              <p className="feature-description">
                Deploy autonomous AI agents that can perform complex tasks, make decisions, and execute workflows without constant supervision.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll animate-fade-in-up hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5 blur-xl opacity-30"></div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5 border border-ravan-blue/30 p-3 mb-5 backdrop-blur-sm">
                <MessageSquare className="w-8 h-8 text-ravan-blue" />
              </div>
              <h3 className="feature-title">Advanced Communication</h3>
              <p className="feature-description">
                Facilitate seamless customer interactions and internal communications with AI agents that understand context and provide meaningful responses.
              </p>
            </div>
          </div>
        </div>

        {/* UI Presentation Section */}
        <div className="mt-24 animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-ravan-purple/20 via-ravan-accent/20 to-ravan-blue/20 rounded-full blur-2xl"></div>
            
            <div className="relative w-full aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-ravan-purple/30 to-ravan-blue/30 rounded-3xl blur-2xl animate-subtle-pulse"></div>
              <div className="glass-card relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
                <img 
                  src="/ui-img.png" 
                  alt="RavanOS UI Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistSection;
