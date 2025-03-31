import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const features = [
    'AI-Powered Business Automation',
    'Advanced Analytics Dashboard',
    'Custom Integration Support',
    'Priority Customer Service',
    'Regular Feature Updates',
    'Team Collaboration Tools',
    'API Access',
    'Dedicated Account Manager'
  ];

  return (
    <section id="pricing" className="section-padding bg-ravan-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-ravan-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ravan-blue/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md relative">
            <div className="absolute inset-0 bg-ravan-black/80 backdrop-blur-md rounded-2xl flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-ravan-accent font-semibold text-xl mb-2">Coming Soon</div>
                <div className="text-gray-400 text-sm">Public Launch</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-4 blur-sm">$XX</div>
            <p className="text-gray-400 mb-6">Perfect for small businesses</p>
            <ul className="space-y-4 mb-8">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-ravan-accent" size={18} />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full button-secondary opacity-50 cursor-not-allowed">Select Plan</button>
          </div>

          {/* Pro Plan */}
          <div className="glass-card p-8 rounded-2xl border border-ravan-accent/30 bg-gradient-to-b from-ravan-accent/10 to-transparent backdrop-blur-md relative">
            <div className="absolute inset-0 bg-ravan-black/80 backdrop-blur-md rounded-2xl flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-ravan-accent font-semibold text-xl mb-2">Coming Soon</div>
                <div className="text-gray-400 text-sm">Public Launch</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="text-4xl font-bold mb-4 blur-sm">$XXX</div>
            <p className="text-gray-400 mb-6">Ideal for growing companies</p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-ravan-accent" size={18} />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full button-secondary opacity-50 cursor-not-allowed">Select Plan</button>
          </div>

          {/* Enterprise Plan */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md relative">
            <div className="absolute inset-0 bg-ravan-black/80 backdrop-blur-md rounded-2xl flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-ravan-accent font-semibold text-xl mb-2">Coming Soon</div>
                <div className="text-gray-400 text-sm">Public Launch</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-4 blur-sm">Custom</div>
            <p className="text-gray-400 mb-6">For large organizations</p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-ravan-accent" size={18} />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full button-secondary opacity-50 cursor-not-allowed">Contact Sales</button>
          </div>
        </div>

        {/* Early Adopter CTA */}
        <div className="glass-card p-8 rounded-2xl border border-ravan-accent/30 bg-gradient-to-b from-ravan-accent/10 to-transparent backdrop-blur-md text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Get RavanOS for Free?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our exclusive early adopters program and get full access to RavanOS for free until we launch publicly. 
            Be among the first to experience the future of AI-powered business operations.
          </p>
          <Link to="/early-adopters" className="button-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-3">
            Apply for Early Access
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 