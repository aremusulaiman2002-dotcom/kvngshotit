// src/app/services/page.tsx
import ServicePackages from '@/components/sections/ServicePackages';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FAQ from '@/components/sections/FAQ';

// Inline data for simplicity
const servicePackages = [
  {
    id: 'wedding-premium',
    name: 'Wedding Premium',
    description: 'Complete wedding day coverage with two photographers',
    price: '$4,500',
    features: [
      '10 hours of coverage',
      'Two professional photographers',
      '500+ edited high-res images',
      'Online gallery with download',
      'Engagement session included',
      'USB with all images',
    ],
    recommended: true,
  },
  {
    id: 'portrait-elite',
    name: 'Portrait Elite',
    description: 'Professional portrait session for individuals or families',
    price: '$850',
    features: [
      '2-hour session',
      '2 outfit changes',
      '50+ edited high-res images',
      'Online gallery',
      'Print release',
      'Location scouting',
    ],
  },
  {
    id: 'event-coverage',
    name: 'Event Coverage',
    description: 'Professional photography for corporate and special events',
    price: '$2,500',
    features: [
      '6 hours of coverage',
      'One photographer',
      '300+ edited high-res images',
      'Fast turnaround (48 hours)',
      'Online gallery',
      'Social media teasers',
    ],
  },
];

const faqItems = [
  {
    question: 'How long does it take to receive our photos?',
    answer: 'Delivery time varies by package. Wedding galleries are typically delivered within 6-8 weeks, portrait sessions within 2-3 weeks, and event coverage within 1-2 weeks. Rush delivery is available for an additional fee.',
  },
  {
    question: 'Do you travel for shoots?',
    answer: 'Yes! I\'m based in New York but available for travel worldwide. Travel fees apply for locations beyond 50 miles from NYC. International travel is quoted on a case-by-case basis.',
  },
  {
    question: 'What is your booking process?',
    answer: 'After our initial consultation, I\'ll send a contract and invoice for a 50% deposit to secure your date. The remaining balance is due one week before the shoot date.',
  },
  {
    question: 'Can we request specific shots or styles?',
    answer: 'Absolutely! I encourage clients to share their vision, inspiration, and must-have shots. During our consultation, we\'ll discuss your preferences to ensure I capture exactly what you\'re looking for.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services & Packages
          </h1>
          <p className="text-xl text-silver-gray/80">
            Tailored photography experiences designed to capture your unique story. 
            From intimate portraits to grand celebrations, every package is crafted with cinematic excellence.
          </p>
        </div>

        {/* Service Packages */}
        <div className="mb-20">
          <ServicePackages packages={servicePackages} />
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            The Process
          </h2>
          <ProcessTimeline />
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </div>
      </div>
    </div>
  );
}