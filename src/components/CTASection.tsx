
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="section-padding bg-ravan-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-ravan-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ravan-blue/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md animate-fade-in-up">
          <div className="mb-3 inline-block px-4 py-1.5 rounded-full bg-ravan-accent/20 border border-ravan-accent/30">
            <span className="text-sm font-medium text-white">Ready for the AGI Era</span>
          </div>
          <h2 className="section-title mb-6">Transform Your Business with <span className="text-gradient">RavanOS</span></h2>
          <p className="section-subtitle mx-auto mb-10">
            Join the businesses already using RavanOS to revolutionize their operations, enhance productivity, and prepare for the future of AI-powered business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="button-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
              Get Started
              <ArrowRight size={18} />
            </a>
            <a href="#" className="button-secondary flex items-center justify-center gap-2 text-lg px-8 py-4">
              Schedule Demo
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "97%", description: "Customer Satisfaction" },
              { stat: "85%", description: "Productivity Boost" },
              { stat: "68%", description: "Cost Reduction" },
              { stat: "24/7", description: "Support Available" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{item.stat}</div>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
