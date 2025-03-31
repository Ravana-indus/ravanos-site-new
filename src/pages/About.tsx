import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-ravan-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-ravan-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 -right-12 w-72 h-72 bg-ravan-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-12 left-1/4 w-48 h-48 bg-ravan-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">ABOUT RAVAN OS</h1>
          
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ravan-purple to-ravan-blue">
              Designed in Germany & Canada, Built in Sri Lanka
            </span>
          </h2>
          
          <p className="text-white/80 text-lg mb-12">
            RavanOS is the flagship product of Ravana Industries Inc., a technology innovator committed to creating an open, connected ecosystem that empowers businesses of any size, anywhere.
          </p>
          
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-ravan-purple">Our Story</h3>
            <p className="text-white/80 mb-4">
              Born from resilience and global collaboration, RavanOS emerged from the vision of entrepreneurs who weathered civil war, natural disasters, and economic turmoil in Sri Lanka. Rather than seeing obstacles, our founders saw opportunity—the chance to reimagine how businesses operate in the digital age.
            </p>
            <p className="text-white/80">
              By combining German engineering precision, Canadian innovation practices, and Sri Lankan technical talent, we've created something truly unique: an Intelligent Business Operating System that breaks down technological barriers and connects the previously disconnected.
            </p>
          </div>
          
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-ravan-accent">Our Mission</h3>
            <p className="text-white/80">
              We believe that every business—from street vendors to global enterprises—deserves access to powerful AI tools that optimize operations and drive growth. RavanOS democratizes access to enterprise-grade technology, creating a more equitable digital landscape where innovation isn't limited by geography or resources.
            </p>
          </div>
          
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-ravan-blue">Our Approach</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2">AI Agent First Architecture</h4>
                <p className="text-white/80">
                  RavanOS replaces complex interfaces with natural conversation, allowing users to interact with business systems through intuitive dialogue rather than navigating complicated menus.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2">Multi-Level Intelligence</h4>
                <p className="text-white/80">
                  Our platform works simultaneously at the user, department, executive, and external levels, ensuring seamless information flow and decision-making across your entire organization.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2">Open Ecosystem</h4>
                <p className="text-white/80">
                  As part of the broader Ravan Platform, RavanOS connects seamlessly with GovOS (for government interactions) and Solve (for consumer engagement), creating unprecedented opportunities for optimization beyond traditional business boundaries.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2">Human-Centered Control</h4>
                <p className="text-white/80">
                  While embracing automation, we ensure humans remain firmly in control, with transparent processes and easy override capabilities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gradient">Global DNA, Sri Lankan Heart</h3>
            <p className="text-white/80 mb-6">Our unique structure combines the best of multiple worlds:</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2">Design & Innovation</h4>
                <p className="text-white/80">
                  Our product design, user experience, and strategic direction originate from our teams in Germany and Canada, incorporating Western business practices with global market insights.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2">Development Excellence</h4>
                <p className="text-white/80">
                  The core building and engineering of RavanOS happens in Sri Lanka, leveraging the country's exceptional technical talent and creating high-value technology jobs.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2">Global Reach</h4>
                <p className="text-white/80">
                  With deployment capabilities worldwide, RavanOS brings its connected intelligence to businesses across continents, adapting to local needs while maintaining core capabilities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-accent/30 to-transparent backdrop-blur-md mb-12 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Join Our Revolution</h3>
            <p className="text-white/80 mb-6">
              RavanOS is more than software—it's a movement to transform how businesses operate in the connected age. Whether you're looking to optimize your operations, develop on our platform, or invest in our vision, we invite you to be part of the Ravan journey.
            </p>
            <p className="text-white/90 text-lg font-medium">
              Together, we're building technology that doesn't just serve business—it elevates human potential.
            </p>
          </div>
          
          <div className="text-center text-white/60 italic">
            Ravana Industries Inc. © {new Date().getFullYear()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About; 