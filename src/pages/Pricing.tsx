import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-ravan-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-[#0B0C1B] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-ravan-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-ravan-blue/10 rounded-full blur-3xl"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="p-10 md:p-16 rounded-3xl animate-fade-in-up">
              <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-ravan-accent/20 border border-ravan-accent/30">
                <span className="text-sm font-medium text-white">Early Access Program</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free for <span className="text-gradient">Early Adopters</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Join our early adopter program to get exclusive access and special benefits.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing; 