'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="glass-effect rounded-3xl p-8 md:p-12 overflow-hidden relative">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full translate-y-48 -translate-x-48" />
          
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Ready to Create <span className="text-gradient">Something Beautiful?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-silver-gray/80 mb-8 max-w-2xl mx-auto"
              >
                Let's discuss your vision and create stunning visuals that capture your unique story.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 bg-accent-gold text-cinematic-black font-semibold rounded-lg hover:bg-accent-gold/90 transition-colors text-lg flex items-center justify-center"
                  >
                    <Calendar className="mr-3" size={20} />
                    Book a Session
                  </motion.button>
                </Link>
                
                <Link href="/contact?type=consultation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 glass-effect border border-accent-gold/30 text-accent-gold font-semibold rounded-lg hover:bg-accent-gold/10 transition-colors text-lg flex items-center justify-center"
                  >
                    <MessageCircle className="mr-3" size={20} />
                    Free Consultation
                  </motion.button>
                </Link>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-silver-gray/60 text-sm mt-6"
              >
                Response within 24 hours • Limited bookings available
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;