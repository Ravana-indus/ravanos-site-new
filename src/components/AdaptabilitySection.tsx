
import React from 'react';
import { Puzzle, Zap, BarChart3, ShoppingCart, Briefcase, Building, HeartPulse, Laptop } from 'lucide-react';

const AdaptabilitySection = () => {
  const industries = [
    { icon: <BarChart3 className="h-6 w-6" />, name: "Finance", color: "bg-blue-500/20 text-blue-400" },
    { icon: <ShoppingCart className="h-6 w-6" />, name: "Retail", color: "bg-green-500/20 text-green-400" },
    { icon: <Briefcase className="h-6 w-6" />, name: "Professional Services", color: "bg-purple-500/20 text-purple-400" },
    { icon: <Building className="h-6 w-6" />, name: "Real Estate", color: "bg-yellow-500/20 text-yellow-400" },
    { icon: <HeartPulse className="h-6 w-6" />, name: "Healthcare", color: "bg-red-500/20 text-red-400" },
    { icon: <Laptop className="h-6 w-6" />, name: "Technology", color: "bg-indigo-500/20 text-indigo-400" },
  ];

  return (
    <section id="adaptability" className="section-padding bg-ravan-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 w-80 h-80 bg-ravan-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-ravan-purple/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="content-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="animate-fade-in-up">
              <h2 className="section-title mb-6">Modular Build for <span className="text-gradient">Adaptability</span></h2>
              <p className="section-subtitle mb-8">
                Designed for easy adoption, with custom domains for different sectors and system customization through simple requests. RavanOS adapts to your business, not the other way around.
              </p>
              
              <div className="space-y-6 mt-12">
                <div className="glass-card p-5 rounded-xl flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-ravan-purple/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <Puzzle className="h-6 w-6 text-ravan-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Modular Architecture</h4>
                    <p className="text-white/70 mt-2">Use only the components you need. Add or remove functionality as your business evolves, without disrupting operations.</p>
                  </div>
                </div>
                
                <div className="glass-card p-5 rounded-xl flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-ravan-blue/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <Zap className="h-6 w-6 text-ravan-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Rapid Implementation</h4>
                    <p className="text-white/70 mt-2">Deploy and integrate in days, not months. Simple API-first approach connects to your existing tools and infrastructure with minimal effort.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-ravan-purple/20 via-ravan-accent/20 to-ravan-blue/20 rounded-full blur-2xl"></div>
                <h3 className="text-white font-medium text-xl mb-8">Industry-Specific Solutions</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex flex-col items-center text-center glass-card p-4 rounded-xl hover:scale-105 transition-transform duration-300">
                      <div className={`w-12 h-12 rounded-full ${industry.color} flex items-center justify-center mb-3`}>
                        {industry.icon}
                      </div>
                      <span className="text-white text-sm">{industry.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-white font-medium mb-4">Customization Ease</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Quick Setup", value: 95 },
                      { label: "Integration Flexibility", value: 85 },
                      { label: "Adaptation to Business Needs", value: 90 }
                    ].map((metric, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">{metric.label}</span>
                          <span className="text-white">{metric.value}%</span>
                        </div>
                        <div className="w-full bg-ravan-gray/50 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-ravan-purple to-ravan-blue h-1.5 rounded-full" style={{width: `${metric.value}%`}}></div>
                        </div>
                      </div>
                    ))}
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

export default AdaptabilitySection;
