'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Camera, Heart, Users, Sparkles } from 'lucide-react';

const CategoriesShowcase = () => {
  const categories = [
    {
      slug: 'weddings',
      name: 'Weddings',
      description: 'Capturing your special day with cinematic elegance',
      icon: Heart,
      count: '45+ Projects',
    },
    {
      slug: 'portraits',
      name: 'Portraits',
      description: 'Personal & professional portraits that tell your story',
      icon: Users,
      count: '32+ Sessions',
    },
    {
      slug: 'events',
      name: 'Events',
      description: 'Dynamic coverage of celebrations and corporate events',
      icon: Sparkles,
      count: '36+ Events',
    },
    {
      slug: 'studio',
      name: 'Studio',
      description: 'Controlled environment photography with artistic vision',
      icon: Camera,
      count: '24+ Sessions',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Specialties
          </h2>
          <p className="text-xl text-silver-gray/80 max-w-2xl mx-auto">
            Explore the different genres I specialize in, each approached with unique cinematic perspective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/portfolio/${category.slug}`}>
                <div className="glass-effect p-8 rounded-2xl h-full hover-lift">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/30 transition-colors">
                    <category.icon className="text-accent-gold" size={32} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="text-silver-gray/80 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-gold text-sm font-semibold">{category.count}</span>
                    <div className="w-8 h-8 rounded-full border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold/10 transition-colors">
                      <svg className="w-4 h-4 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;