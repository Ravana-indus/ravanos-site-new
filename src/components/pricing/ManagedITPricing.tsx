import React from 'react';

interface PricingTier {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

interface ManagedITPricingProps {
  title: string;
  description: string;
  tiers: PricingTier[];
}

const ManagedITPricing: React.FC<ManagedITPricingProps> = ({ 
  title, 
  description, 
  tiers 
}) => {
  return (
    <section id="it" className="mb-16 md:mb-24 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {title}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mt-2">
          {description}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <div 
            key={index}
            className={`plan-card bg-[#111324] rounded-xl shadow-sm border ${
              tier.isPopular 
                ? 'border-2 border-purple-500 shadow-lg' 
                : 'border-gray-800'
            } p-8 flex flex-col relative`}
          >
            {tier.isPopular && (
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
            )}
            <h3 className="text-2xl font-bold text-blue-400">
              {tier.title}
            </h3>
            <p className="text-gray-400 mb-6">{tier.subtitle}</p>
            <div className="mb-6">
              <p className="text-gray-300 font-medium">Monthly Fee</p>
              <p className="text-2xl font-bold text-white">{tier.price}</p>
            </div>
            <ul className="space-y-3 text-gray-300 mt-auto">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">&#10004;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagedITPricing;