// src/components/sections/Stats.tsx
'use client';

import { motion } from 'framer-motion';
import { Camera, Users, Star, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const Stats = () => {
  const [counted, setCounted] = useState(false);
  
  useEffect(() => {
    setCounted(true);
  }, []);

  const stats = [
    {
      icon: Camera,
      value: '500+',
      label: 'Projects Completed',
      color: 'from-accent-gold/20 to-accent-gold/5',
    },
    {
      icon: Users,
      value: '200+',
      label: 'Happy Clients',
      color: 'from-blue-900/20 to-blue-900/5',
    },
    {
      icon: Star,
      value: '8+',
      label: 'Years Experience',
      color: 'from-purple-900/20 to-purple-900/5',
    },
    {
      icon: Award,
      value: '25+',
      label: 'Awards Won',
      color: 'from-emerald-900/20 to-emerald-900/5',
    },
  ];

  // FIXED: Properly typed container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // FIXED: Properly typed item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            By The Numbers
          </h2>
          <p className="text-silver-gray/80 max-w-2xl mx-auto">
            A track record of excellence in cinematic photography
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${stat.color} border border-silver-gray/10 rounded-2xl p-6 hover:bg-charcoal/50 transition-all duration-300`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-gold/20 to-transparent flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-accent-gold" />
                  </div>
                  
                  <div className="text-4xl font-bold mb-2">
                    {counted ? stat.value : '0+'}
                  </div>
                  
                  <div className="text-silver-gray/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Floating effect line */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-silver-gray/10">
          <div className="text-center text-silver-gray/60 text-sm">
            <p>Consistently delivering exceptional results since 2016</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;