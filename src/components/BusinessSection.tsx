import React from 'react';
import { CheckCircle } from 'lucide-react';

const BusinessSection = () => {
  return (
    <section id="business" className="section-padding bg-ravan-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-ravan-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-ravan-blue/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="content-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 animate-on-scroll">
            <h2 className="section-title mb-6">Connected Across Your <span className="text-gradient">Entire Business</span></h2>
            <p className="section-subtitle mb-8">
              Links every department inside your business, supply chain, customers, and beyond. AI agents with a complete view of your operations — something the world has never seen before.
            </p>
            
            <div className="space-y-4">
              {[
                "Seamless integration with existing business tools",
                "Real-time data flow across departments",
                "Centralized AI management for consistent operations",
                "Automated workflows connecting internal and external systems",
                "360-degree visibility of your entire business ecosystem"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-ravan-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 animate-fade-in animate-fade-in-up visible" data-lov-id="src/components/BusinessSection.tsx:30:4" style={{opacity: '1 !important', transform: 'translateY(0) !important'}}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ravan-purple/30 to-ravan-blue/30 rounded-3xl blur-xl animate-subtle-pulse"></div>
              <div className="glass-card relative rounded-3xl border border-white/10 overflow-hidden shadow-accent">
                <div className="absolute top-0 left-0 right-0 h-10 bg-ravan-dark/90 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-white/60 text-xs">RavanOS Business Integration</div>
                </div>
                
                <div className="h-full pt-10 bg-ravan-dark/80 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Sales", color: "bg-ravan-purple/20", border: "border-ravan-purple/30", value: "↑ 24%" },
                      { name: "Marketing", color: "bg-ravan-blue/20", border: "border-ravan-blue/30", value: "↑ 18%" },
                      { name: "Support", color: "bg-ravan-green/20", border: "border-ravan-green/30", value: "↓ 32%" }
                    ].map((dept, index) => (
                      <div key={index} className={`${dept.color} ${dept.border} border rounded-xl p-4 flex flex-col items-center justify-center gap-1`}>
                        <span className="text-xs text-white/70">{dept.name}</span>
                        <span className="text-white font-medium">{dept.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 glass-card p-5 rounded-xl">
                    <h4 className="text-white font-medium mb-3">Business Intelligence Summary</h4>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Customer Satisfaction</span>
                          <span className="text-white">92%</span>
                        </div>
                        <div className="w-full bg-ravan-gray rounded-full h-1.5">
                          <div className="bg-ravan-green h-1.5 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Operational Efficiency</span>
                          <span className="text-white">78%</span>
                        </div>
                        <div className="w-full bg-ravan-gray rounded-full h-1.5">
                          <div className="bg-ravan-blue h-1.5 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Revenue Growth</span>
                          <span className="text-white">63%</span>
                        </div>
                        <div className="w-full bg-ravan-gray rounded-full h-1.5">
                          <div className="bg-ravan-purple h-1.5 rounded-full" style={{width: '63%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                    <div className="flex-1 glass-card p-4 rounded-xl">
                      <h4 className="text-white text-sm font-medium mb-2">Supply Chain</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-xs">Efficiency</span>
                        <span className="text-white text-sm font-medium">↑ 28%</span>
                      </div>
                    </div>
                    <div className="flex-1 glass-card p-4 rounded-xl">
                      <h4 className="text-white text-sm font-medium mb-2">Customers</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-xs">Retention</span>
                        <span className="text-white text-sm font-medium">↑ 15%</span>
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

export default BusinessSection;
