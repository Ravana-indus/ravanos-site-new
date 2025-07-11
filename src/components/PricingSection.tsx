import React from "react";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const starterPlan = [
    "Setup cost - $150",
    "Basic Modules",
    "Up to 10 Users",
    "Custom Module Request",
    "Standard customer support",
    "Free AI Chatbot - Ravan",
    "10 GB storage",
    "Expand Anytime",
  ];

  const mediumPlan = [
    "Setup Cost - $300",
    "Premium Modules",
    "Up to 25 Users",
    "1 Custom Module Request",
    "Premium customer support",
    "Premium AI Chatbot - Ravan Pro",
    "50 GB storage",
    "Expand Anytime",
  ];

  const proPlan = [
    "Setup Cost - $700",
    "Premium Modules with AI automation",
    "Up to 70 Users",
    "5 Custom Module Request",
    "Priority customer support",
    "Multi modal AI Chatbot - Ravan Pro",
    "100 GB storage",
    "Expand Anytime",
  ];

  return (
    <section
      id="pricing"
      className="section-padding bg-ravan-black relative overflow-hidden"
    >
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
          <div className="glass-card p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent relative">
            <div className="">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-4">$50</div>
              <p className="text-gray-400 mb-6">Perfect for small businesses</p>
              <ul className="space-y-4 mb-8">
                {starterPlan.map((feature, index) => {
                  if (feature === "Custom Module Request") {
                    return (
                      <li key={index} className="flex items-center gap-2">
                        <X className="text-red-500 opacity-60" size={18} />
                        <span className="text-gray-400 line-through">
                          {feature}
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="text-ravan-accent" size={18} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  );
                })}
              </ul>
              <button className="w-full button-secondary opacity-50 cursor-not-allowed">
                Select Plan
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="glass-card p-8 rounded-2xl border border-ravan-accent/30 bg-gradient-to-b from-ravan-accent/10 to-transparent relative">
            <div className="">
              <h3 className="text-2xl font-bold mb-4">Medium</h3>
              <div className="text-4xl font-bold mb-4">$100</div>
              <p className="text-gray-400 mb-6">Ideal for growing companies</p>
              <ul className="space-y-4 mb-8">
                {mediumPlan.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-ravan-accent" size={18} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full button-secondary opacity-50 cursor-not-allowed">
                Select Plan
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent relative">
            <div className="">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-4">Contact Sales</div>
              <p className="text-gray-400 mb-6">For large organizations</p>
              <ul className="space-y-4 mb-8">
                {proPlan.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-ravan-accent" size={18} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full button-secondary opacity-50 cursor-not-allowed">
               Select Plan
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise contact*/}
        <div className="glass-card p-8 rounded-2xl border border-ravan-accent/30 bg-gradient-to-b from-ravan-accent/10 to-transparent backdrop-blur-md text-center">
          <h3 className="text-2xl font-bold mb-4">
            Want to Get RavanOS for Enterprise?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {"Contact our sales team at "}
            <a
              href="mailto:sales@ravanos.com"
              className="underline text-ravan-accent hover:text-ravan-blue focus:outline-none focus:ring-2 focus:ring-ravan-accent"
            >
              sales@ravanos.com
            </a>
            {" or call "}
            <a
              href="tel:+94112581181"
              className="underline text-ravan-accent hover:text-ravan-blue focus:outline-none focus:ring-2 focus:ring-ravan-accent"
            >
              +94 11 258 1181
            </a>
          </p>
          <Link
            to="/early-adopters"
            className="button-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-3"
          >
            Apply for Early Access
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
