// src/components/sections/ProcessTimeline.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Calendar, MessageSquare, Camera, Image, Package } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProcessTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'We discuss your vision, requirements, and timeline to understand your needs',
      number: '01',
    },
    {
      icon: Calendar,
      title: 'Booking',
      description: 'Secure your date with a deposit and sign the contract',
      number: '02',
    },
    {
      icon: Camera,
      title: 'Shoot Day',
      description: 'Professional photography session on your chosen location',
      number: '03',
    },
    {
      icon: Image,
      title: 'Editing',
      description: 'Cinematic editing, color grading, and retouching of all images',
      number: '04',
    },
    {
      icon: Package,
      title: 'Delivery',
      description: 'Receive your high-resolution images, prints, and online gallery',
      number: '05',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      }
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { 
      scaleY: 1, 
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5,
      }
    },
  };

  const dotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8 + (custom * 0.3),
        type: "spring",
        stiffness: 200,
        damping: 15,
      }
    }),
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  };

  return (
    <div className="relative">
      {/* Animated Timeline line */}
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-gold via-accent-gold/50 to-accent-gold hidden md:block origin-top"
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="space-y-12 md:space-y-20"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(201, 168, 106, 0.1)" 
                }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-charcoal/50 border border-silver-gray/10 rounded-2xl p-6 hover:bg-charcoal transition-all duration-300 overflow-hidden group"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step number in corner */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-accent-gold/10">
                  {step.number}
                </div>
                
                <div className="flex items-start space-x-4 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <step.icon className="w-7 h-7 text-accent-gold" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-accent-gold font-semibold mb-1">
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-silver-gray/70 leading-relaxed pl-18">{step.description}</p>
                
                {/* Progress indicator for mobile */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + (index * 0.2), duration: 0.8 }}
                  className="mt-4 h-1 bg-gradient-to-r from-accent-gold to-accent-gold/30 rounded-full origin-left md:hidden"
                />
              </motion.div>
            </div>
            
            {/* Animated Timeline dot */}
            <motion.div
              variants={dotVariants}
              custom={index}
              animate={isVisible ? ["visible", "pulse"] : "hidden"}
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-gold rounded-full border-4 border-cinematic-black z-10 hidden md:flex items-center justify-center"
            >
              <motion.span 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-6 h-6 bg-accent-gold/30 rounded-full"
              />
            </motion.div>
            
            {/* Spacer for mobile */}
            <div className="w-12 h-12 md:hidden" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProcessTimeline;