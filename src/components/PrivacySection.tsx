import React from 'react';
import { Shield, Lock, Code, Cpu } from 'lucide-react';

const PrivacySection = () => {
  return (
    <section id="privacy" className="section-padding bg-ravan-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-ravan-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-ravan-green/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="content-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-ravan-purple/30 to-ravan-blue/30 rounded-3xl blur-sm"></div>
              <div className="glass-card rounded-3xl relative z-10">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-ravan-purple/20 flex-shrink-0 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-ravan-purple" />
                    </div>
                    <h3 className="text-white font-medium text-xl">Security & Privacy Features</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2">
                        <Lock className="h-5 w-5 text-ravan-accent" />
                        <h4 className="text-white font-medium">On-Premises Deployment</h4>
                      </div>
                      <p className="text-white/70 text-sm">Your data never leaves your secure environment. RavanOS can be fully deployed within your existing infrastructure.</p>
                    </div>
                    
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2">
                        <Code className="h-5 w-5 text-ravan-green" />
                        <h4 className="text-white font-medium">Open Source Codebase</h4>
                      </div>
                      <p className="text-white/70 text-sm">Transparent, auditable code that security professionals can review. No black boxes or hidden functionality.</p>
                    </div>
                    
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2">
                        <Cpu className="h-5 w-5 text-ravan-blue" />
                        <h4 className="text-white font-medium">Flexible AI Models</h4>
                      </div>
                      <p className="text-white/70 text-sm">Choose from hosted or local AI models based on your security requirements, with full control over data access.</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-5 bg-ravan-black/50 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-white font-medium">Privacy Compliance</h4>
                      <div className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Certified</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {["GDPR", "HIPAA", "SOC 2", "ISO 27001"].map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-white/80 text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="animate-fade-in-up">
              <h2 className="section-title mb-6">Open Source for <span className="text-gradient">Accountability & Privacy</span></h2>
              <p className="section-subtitle mb-8">
                Your business data stays on your premises. Open-sourced, publicly auditable code built for trust. Ready for the AGI Era with uncompromising security.
              </p>
              
              <div className="mt-12 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5 border border-ravan-purple/30 p-3 flex-shrink-0 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-ravan-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Full Data Sovereignty</h4>
                    <p className="text-white/70 mt-2">Complete control over your data. Choose where it's stored, how it's processed, and who can access it.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5 border border-ravan-blue/30 p-3 flex-shrink-0 flex items-center justify-center">
                    <Code className="h-8 w-8 text-ravan-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Transparent AI</h4>
                    <p className="text-white/70 mt-2">No black-box algorithms. All AI systems within RavanOS are explainable and accountable in their decision-making.</p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <div className="inline-block px-4 py-3 rounded-full bg-gradient-to-r from-ravan-purple/20 to-ravan-blue/20 border border-white/10">
                    <p className="text-white text-center">
                      <span className="font-semibold">Available Today!</span> — Ready for deployment in your business
                    </p>
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

export default PrivacySection;
