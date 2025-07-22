import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen bg-ravan-black text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-12 -left-12 w-64 h-64 bg-ravan-purple/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-1/3 -right-12 w-72 h-72 bg-ravan-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-12 left-1/4 w-48 h-48 bg-ravan-green/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            CAREERS AT RAVANA OS
          </h1>

          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ravan-purple to-ravan-blue">
                No Current Openings
              </span>
            </h2>

            <p className="text-white/80 text-lg mb-6">
              We're not currently hiring, but we're always interested in
              connecting with talented individuals who share our passion for
              innovation.
            </p>

            <p className="text-white/80 mb-8">
              Check back later for opportunities to join our team and help build
              the future of business operating systems.
            </p>

            <div className="mt-10">
              <p className="text-white/60 italic">
                Ravana Industries Inc. © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
