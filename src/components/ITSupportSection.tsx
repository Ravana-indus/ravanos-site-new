import React from 'react';
import { ArrowRight, Shield, Users, FileText, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITSupportSection = () => {
  return (
    <section id="it-support" className="section-padding bg-ravan-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-20 w-72 h-72 bg-ravan-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ravan-blue/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="mb-3 inline-block px-4 py-1.5 rounded-full bg-ravan-accent/20 border border-ravan-accent/30">
            <span className="text-sm font-medium text-white">Cherry on top</span>
          </div>
          <h2 className="section-title mb-6">OUTSOURCE YOUR <span className="text-gradient">IT</span></h2>
          <p className="section-subtitle mx-auto">
            Beyond Software: Your Entire IT Department on Demand, Powered by RavanOS
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-card p-8 rounded-3xl relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-ravan-blue/30 to-ravan-green/30 rounded-3xl blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Comprehensive Support That Goes Beyond Our Platform</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <Shield className="h-5 w-5 text-ravan-purple" />, text: "RavanOS Optimization" },
                    { icon: <Users className="h-5 w-5 text-ravan-blue" />, text: "User Support" },
                    { icon: <FileText className="h-5 w-5 text-ravan-green" />, text: "Network Management" },
                    { icon: <CalendarCheck className="h-5 w-5 text-ravan-accent" />, text: "Technology Planning" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 glass-card rounded-lg">
                      <div className="p-2 rounded-full bg-white/10">{item.icon}</div>
                      <span className="text-white font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-5 bg-ravan-dark/50 rounded-xl mb-8 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-1.5 rounded-full bg-green-500/20">
                      <Shield className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-white font-semibold">The Ravan Advantage</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Unlike traditional IT support services, our team has intimate knowledge of the RavanOS platform that powers your business, ensuring faster problem resolution and optimized performance.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/it-support" className="button-primary flex items-center justify-center gap-2 group">
                    <span>Learn More</span>
                    <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                  <Link to="/it-support#plans" className="button-secondary flex items-center justify-center gap-2 group">
                    <span>View Plans</span>
                    <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-white mb-3">Beyond Software: Your Entire IT Department on Demand</h3>
                <p className="text-white/70 leading-relaxed">
                  With RavanOS powering your business operations, why stop at software? Eliminate the complexity of managing your technology infrastructure by outsourcing your entire IT operation to the team that knows your systems best.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ravan-accent/20 to-ravan-blue/20 border border-white/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-ravan-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Dedicated Team Assignment</h4>
                    <p className="text-white/70 text-sm">A specialized support team gets to know your business and provides personalized assistance tailored to your needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative ml-12 pl-8 border-l border-white/10 py-2">
                <blockquote className="text-lg italic text-white/80">
                  "The time and resources we've saved have been substantial."
                  <footer className="text-sm text-white/60 mt-2 non-italic">— Sarah Chen, Operations Director</footer>
                </blockquote>
                <div className="absolute top-0 left-0 w-6 h-6 -translate-x-3 rounded-full bg-ravan-accent/30 border border-ravan-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSupportSection; 