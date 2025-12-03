'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioImage } from '@/lib/types';
import Lightbox from '@/components/shared/Lightbox';

interface GalleryProps {
  images: PortfolioImage[];
  category?: string;
  masonry?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ images, category, masonry = false }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleImageClick = (index: number): void => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = (): void => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const goToNext = (): void => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const goToPrev = (): void => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <>
      <div className={masonry ? 'columns-1 md:columns-2 lg:columns-3 gap-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden rounded-lg cursor-pointer group mb-4 break-inside-avoid"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 4}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                {image.title && <h3 className="font-playfair text-lg">{image.title}</h3>}
                {image.description && <p className="text-sm opacity-90">{image.description}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isLightboxOpen && selectedImage !== null && (
          <Lightbox
            images={images}
            initialIndex={selectedImage}
            onClose={closeLightbox}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;