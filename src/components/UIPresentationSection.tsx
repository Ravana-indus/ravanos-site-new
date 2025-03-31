import React, { useEffect, useRef } from 'react';

const UIPresentationSection = () => {
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
    <section 
      ref={sectionRef} 
      className="relative min-h-[80vh] overflow-hidden bg-ravan-black" 
      style={{ 
        backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(119, 97, 255, 0.15), transparent 40%)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-ravan-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -right-12 w-72 h-72 bg-ravan-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-12 left-1/4 w-48 h-48 bg-ravan-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Future of <span className="text-gradient">Computing</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            An intelligent interface that adapts to your workflow
          </p>
        </div>

        {/* UI Preview */}
        <div className="w-full max-w-6xl mx-auto perspective-[1000px] animate-fade-in-up-slow">
          <div className="relative transform hover:rotate-x-12 transition-transform duration-700 ease-out">
            {/* Terminal-like Window Frame */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-[1px] backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-8 bg-ravan-dark/80 rounded-t-2xl flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-white/60 text-xs">RavanOS Interface</div>
              </div>
            </div>

            {/* UI Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-ravan-purple/30 to-ravan-blue/30 mix-blend-overlay"></div>
              <img 
                src="/ui-img.png" 
                alt="RavanOS Interface"
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 98%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 98%, transparent 100%)'
                }}
              />
              
              {/* Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 pointer-events-none"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-ravan-purple via-ravan-accent to-ravan-blue opacity-30 blur-2xl -z-10 animate-subtle-pulse"></div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24 max-w-6xl mx-auto px-4 md:px-6 w-full">
          {[
            { title: 'AI First Interface', desc: 'Just ask, and RavanOS will give information, answer questions, and perform tasks' },
            { title: 'Easy to use', desc: 'Want to do it manually? No problem, RavanOS is easy to use and navigate with AI guidance' },
            { title: 'Cloud Native', desc: 'RavanOS runs on cloud, so you can access it from anywhere in the world from any device' }
          ].map((feature, i) => (
            <div 
              key={i} 
              className="glass-card p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 animate-fade-in-up text-center md:text-left"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIPresentationSection; 