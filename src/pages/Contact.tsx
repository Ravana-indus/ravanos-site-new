import React from "react";
import { Mail, Building, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Contact Us
          </h1>

          <p className="text-white/80 text-lg mb-12 text-center max-w-2xl mx-auto">
            Have questions about RavanOS? Get in touch with our team below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-purple/20 to-transparent backdrop-blur-md hover:translate-y-[-5px] transition-transform">
              <h2 className="text-xl font-semibold mb-6 flex items-center text-ravan-purple">
                <Mail className="mr-2 h-5 w-5" /> Business Inquiries
              </h2>
              <ul className="space-y-5">
                <li>
                  <h3 className="text-white/90 text-lg font-medium mb-1">
                    Contact Sales
                  </h3>
                  <a
                    href="mailto:info@ravanos.com"
                    className="text-ravan-accent hover:text-ravan-accent-light"
                  >
                    sales@ravanos.com
                  </a>
                </li>
                <li>
                  <h3 className="text-white/90 text-lg font-medium mb-1">
                    Investor Relations
                  </h3>
                  <a
                    href="mailto:info@ravanos.com"
                    className="text-ravan-accent hover:text-ravan-accent-light"
                  >
                    invest@ravanos.com
                  </a>
                </li>
                <li>
                  <h3 className="text-white/90 text-lg font-medium mb-1">
                    Careers
                  </h3>
                  <a
                    href="mailto:info@ravanos.com"
                    className="text-ravan-accent hover:text-ravan-accent-light"
                  >
                    career@ravanos.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-blue/20 to-transparent backdrop-blur-md hover:translate-y-[-5px] transition-transform">
              <h2 className="text-xl font-semibold mb-6 flex items-center text-ravan-blue">
                <Building className="mr-2 h-5 w-5" /> Support Contacts
              </h2>
              <ul className="space-y-5">
                <li>
                  <h3 className="text-white/90 text-lg font-medium mb-1">
                    Sri Lanka Support
                  </h3>
                  <a
                    href="mailto:info@ravanaos.com"
                    className="text-ravan-accent hover:text-ravan-accent-light"
                  >
                    sl@ravanos.com
                  </a>
                </li>
                <li>
                  <h3 className="text-white/90 text-lg font-medium mb-1">
                    Canada Support
                  </h3>
                  <a
                    href="mailto:info@ravanaos.com"
                    className="text-ravan-accent hover:text-ravan-accent-light"
                  >
                    ca@ravanos.com
                  </a>
                </li>
                <li>
                  <h3 className="text-white/90 text-lg font-medium mb-1">
                    Germany Support
                  </h3>
                  <a
                    href="mailto:info@ravanaos.com"
                    className="text-ravan-accent hover:text-ravan-accent-light"
                  >
                    de@ravanos.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-accent/20 to-transparent backdrop-blur-md mb-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center text-ravan-accent">
              <Globe className="mr-2 h-5 w-5" /> Corporate Information
            </h2>
            <div>
              <h3 className="text-white/90 text-lg font-medium mb-1">
                Parent Company
              </h3>
              <p className="mb-2">Ravana Industries Inc.</p>
              <a
                href="https://ravanaindustries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ravan-accent hover:text-ravan-accent-light"
              >
                ravanaindustries.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
