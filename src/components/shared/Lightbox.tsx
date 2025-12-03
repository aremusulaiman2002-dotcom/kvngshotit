// src/components/shared/Lightbox.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface LightboxProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  initialIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, initialIndex, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  const currentImage = images[initialIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-accent-gold transition-colors z-10"
          aria-label="Close lightbox"
        >
          <X size={32} />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-gold transition-colors z-10 p-2"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-gold transition-colors z-10 p-2"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        {/* Image container */}
        <div className="relative max-w-4xl max-h-[80vh] mx-4" onClick={(e) => e.stopPropagation()}>
          <motion.div
            key={initialIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Image placeholder */}
            <div className="relative w-full h-[60vh] bg-gradient-to-br from-charcoal to-cinematic-black rounded-lg overflow-hidden">
              {/* Pattern background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C9A86A_1px,transparent_1px)] [background-size:20px_20px]" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-accent-gold/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-accent-gold text-2xl font-bold">📷</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentImage?.title || 'Sample Image'}
                  </h3>
                  <p className="text-silver-gray/70">
                    {currentImage?.description || 'Image placeholder - real images coming soon'}
                  </p>
                </div>
              </div>
            </div>

            {/* Image info */}
            <div className="mt-4 text-center">
              <div className="text-white font-semibold">
                Image {initialIndex + 1} of {images.length}
              </div>
              {currentImage?.title && (
                <div className="text-silver-gray/70 mt-1">{currentImage.title}</div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                // You would need to implement navigation to specific index
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === initialIndex
                  ? 'bg-accent-gold w-8'
                  : 'bg-silver-gray/30 hover:bg-silver-gray/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;