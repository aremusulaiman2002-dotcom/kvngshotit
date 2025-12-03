// src/components/sections/Hero.tsx (simplified version)
'use client';

import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-black/30 via-cinematic-black/60 to-cinematic-black z-10" />
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-black via-charcoal to-accent-gold/5">
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A86A_1px,transparent_1px)] [background-size:32px_32px]" />
          
          {/* Abstract Shapes */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block">VISUALS WITH</span>
            <span className="bg-gradient-to-r from-silver-gray via-accent-gold to-silver-gray bg-clip-text text-transparent">
              ROYAL PRECISION
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-silver-gray/90 mb-8 max-w-2xl mx-auto">
            Capturing life's most precious moments through a cinematic lens. 
            Where every frame tells a story of elegance and emotion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/portfolio'}
              className="px-8 py-4 bg-accent-gold text-cinematic-black font-semibold rounded-lg hover:bg-accent-gold/90 transition-all hover:scale-105 active:scale-95"
            >
              View Portfolio
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-4 bg-black/30 backdrop-blur-md border border-accent-gold/30 text-accent-gold font-semibold rounded-lg hover:bg-accent-gold/10 transition-all hover:scale-105 active:scale-95"
            >
              Book a Session
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-silver-gray/50 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;