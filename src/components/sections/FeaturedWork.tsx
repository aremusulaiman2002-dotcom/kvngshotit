// src/components/sections/FeaturedWork.tsx
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FeaturedWork = () => {
  const featuredItems = [
    {
      id: '1',
      category: 'weddings',
      title: 'Sunset Elegance',
      color: 'from-purple-900/20 to-pink-900/20',
    },
    {
      id: '2',
      category: 'portraits',
      title: 'Executive Presence',
      color: 'from-blue-900/20 to-cyan-900/20',
    },
    {
      id: '3',
      category: 'lifestyle',
      title: 'Urban Stories',
      color: 'from-emerald-900/20 to-teal-900/20',
    },
    {
      id: '4',
      category: 'studio',
      title: 'Studio Glamour',
      color: 'from-amber-900/20 to-orange-900/20',
    },
  ];

  return (
    <section className="py-20 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-silver-gray/80 max-w-2xl mx-auto">
            A selection of recent projects that showcase the cinematic style and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <Link href={`/portfolio/${item.category}`}>
                <div className="relative aspect-[4/5]">
                  {/* Gradient Placeholder */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}>
                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#C9A86A_1px,transparent_1px)] [background-size:20px_20px]" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 border-2 border-accent-gold/50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-accent-gold text-2xl">
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                        <p className="text-accent-gold text-sm mt-1 capitalize">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 right-4">
                        <ArrowRight className="text-accent-gold" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 font-semibold group"
          >
            View Full Portfolio
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;