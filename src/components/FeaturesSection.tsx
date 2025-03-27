
import React from 'react';
import { Bot, Users, MessageSquare, Globe, Terminal, Eye } from 'lucide-react';

const features = [
  {
    id: 'agents',
    section: 'hero', // Link to HeroSection component
    icon: <Bot className="w-8 h-8 text-ravan-purple" />,
    title: 'Assist, Agent, Comms',
    description: "The right AI agent for the right job—whether it's gathering information, performing tasks, or managing customer care.",
    backgroundColor: 'from-ravan-purple/20 to-ravan-purple/5',
    borderColor: 'ravan-purple/30',
    delay: '0s'
  },
  {
    id: 'business',
    section: 'business', // Link to BusinessSection component
    icon: <Globe className="w-8 h-8 text-ravan-blue" />,
    title: 'Connected Across Your Business',
    description: "Links your business, supply chain, customers, and beyond. AI agents with a complete view of your operations—something the world has never seen before.",
    backgroundColor: 'from-ravan-blue/20 to-ravan-blue/5',
    borderColor: 'ravan-blue/30',
    delay: '0.1s'
  },
  {
    id: 'control',
    section: 'control', // Link to ControlSection component
    icon: <Terminal className="w-8 h-8 text-ravan-accent" />,
    title: 'Natural Language & Control',
    description: "No need to learn a system—just talk to it like a colleague and take control whenever you want.",
    backgroundColor: 'from-ravan-accent/20 to-ravan-accent/5',
    borderColor: 'ravan-accent/30',
    delay: '0.2s'
  },
  {
    id: 'adaptability',
    section: 'adaptability', // Link to AdaptabilitySection component
    icon: <Users className="w-8 h-8 text-ravan-green" />,
    title: 'Modular Build for Adaptability',
    description: "Designed for easy adoption, with custom domains for different sectors and system customization through simple requests.",
    backgroundColor: 'from-ravan-green/20 to-ravan-green/5',
    borderColor: 'ravan-green/30',
    delay: '0.3s'
  },
  {
    id: 'privacy',
    section: 'privacy', // Link to PrivacySection component
    icon: <Eye className="w-8 h-8 text-ravan-purple" />,
    title: 'Open Source for Accountability & Privacy',
    description: "Your business data stays on your premises. Open-sourced, publicly auditable code—built for trust.",
    backgroundColor: 'from-ravan-purple/20 to-ravan-purple/5',
    borderColor: 'ravan-purple/30',
    delay: '0.4s'
  },
  {
    id: 'communication',
    section: 'cta', // Link to CTASection component
    icon: <MessageSquare className="w-8 h-8 text-ravan-blue" />,
    title: 'Ready for the AGI Era',
    description: "Built from the ground up with future AI advancements in mind. A platform that grows smarter as AI technology evolves.",
    backgroundColor: 'from-ravan-blue/20 to-ravan-blue/5',
    borderColor: 'ravan-blue/30',
    delay: '0.5s'
  }
];

const FeatureBox = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div
      className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: feature.delay }}
      id={feature.id}
    >
      <div className="relative">
        <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br ${feature.backgroundColor} blur-xl opacity-30`}></div>
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.backgroundColor} border border-${feature.borderColor} p-3 mb-5 backdrop-blur-sm`}>
          {feature.icon}
        </div>
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-description">{feature.description}</p>
        <a href={`#${feature.section}`} className="mt-4 inline-block text-ravan-accent hover:text-ravan-accent-light text-sm font-medium transition-colors">
          Learn more <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-ravan-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-ravan-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-ravan-blue/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-title">Powerful Features for Modern Businesses</h2>
          <p className="section-subtitle mx-auto">
            RavanOS brings together the most advanced AI capabilities to transform how your business operates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureBox key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
