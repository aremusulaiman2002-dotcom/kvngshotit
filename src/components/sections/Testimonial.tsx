'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael',
      role: 'Wedding Clients',
      content: 'Kevin captured our wedding day perfectly. Every photo feels like a frame from a romantic film. His attention to detail and ability to capture genuine emotions is truly remarkable.',
      rating: 5,
      image: '/images/testimonials/1.jpg',
    },
    {
      id: 2,
      name: 'Jessica Williams',
      role: 'Portrait Session',
      content: 'The most professional photographer I\'ve worked with. He made me feel comfortable and the results were stunning. The cinematic quality of the photos is exactly what I wanted.',
      rating: 5,
      image: '/images/testimonials/2.jpg',
    },
    {
      id: 3,
      name: 'TechCorp Inc.',
      role: 'Corporate Client',
      content: 'We hired Kevin for our annual conference and company portraits. The images were exceptional - professional yet creative. He captured the energy of our event perfectly.',
      rating: 5,
      image: '/images/testimonials/3.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Client Stories
          </h2>
          <p className="text-xl text-silver-gray/80 max-w-2xl mx-auto">
            Hear from clients who've experienced the KVNGSHOTIT difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-effect p-8 md:p-12 rounded-2xl relative"
          >
            <Quote className="absolute top-6 right-6 text-accent-gold/20 w-16 h-16" />
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-gold to-charcoal flex items-center justify-center">
                  <span className="text-cinematic-black font-bold text-2xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? 'text-accent-gold fill-accent-gold'
                          : 'text-silver-gray/30'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-lg text-silver-gray/90 italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-xl">{testimonials[currentIndex].name}</h4>
                  <p className="text-accent-gold">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-silver-gray/30 hover:border-accent-gold hover:text-accent-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent-gold w-8'
                      : 'bg-silver-gray/30 hover:bg-silver-gray/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-silver-gray/30 hover:border-accent-gold hover:text-accent-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;