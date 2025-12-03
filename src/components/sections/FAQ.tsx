// src/components/sections/FAQ.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-silver-gray/10 rounded-xl overflow-hidden bg-charcoal/50"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-charcoal/30 transition-colors"
            >
              <span className="font-semibold text-lg text-silver-gray">
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-accent-gold flex-shrink-0" />
              ) : (
                <ChevronDown className="text-silver-gray/50 flex-shrink-0" />
              )}
            </button>
            
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <p className="text-silver-gray/70 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;