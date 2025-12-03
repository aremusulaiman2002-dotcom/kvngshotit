// src/components/sections/ServicePackages.tsx
'use client';

import { Check } from 'lucide-react';

interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price?: string;
  features: string[];
  recommended?: boolean;
}

interface ServicePackagesProps {
  packages: ServicePackage[];
}

const ServicePackages = ({ packages }: ServicePackagesProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className={`relative rounded-2xl p-8 ${
            pkg.recommended
              ? 'border-2 border-accent-gold bg-gradient-to-b from-charcoal to-cinematic-black'
              : 'border border-silver-gray/10 bg-charcoal/50'
          }`}
        >
          {pkg.recommended && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-accent-gold text-cinematic-black px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
            <p className="text-silver-gray/70 mb-4">{pkg.description}</p>
            {pkg.price && (
              <div className="text-3xl font-bold text-accent-gold">
                {pkg.price}
              </div>
            )}
          </div>
          
          <div className="space-y-3 mb-8">
            {pkg.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-silver-gray/80">{feature}</span>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => window.location.href = `/contact?package=${pkg.id}`}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              pkg.recommended
                ? 'bg-accent-gold text-cinematic-black hover:bg-accent-gold/90'
                : 'border border-accent-gold text-accent-gold hover:bg-accent-gold/10'
            }`}
          >
            {pkg.price ? 'Book Now' : 'Get Quote'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServicePackages;