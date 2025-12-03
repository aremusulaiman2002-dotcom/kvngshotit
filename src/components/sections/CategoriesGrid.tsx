// src/components/sections/CategoriesGrid.tsx
'use client';

import Link from 'next/link';
import { Camera, Heart, Users, Sparkles, Star } from 'lucide-react';

interface PortfolioCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
}

interface CategoriesGridProps {
  categories: PortfolioCategory[];
}

const categoryIcons: Record<string, React.ComponentType<any>> = {
  weddings: Heart,
  portraits: Users,
  lifestyle: Sparkles,
  studio: Camera,
  events: Star,
};

const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => {
        const Icon = categoryIcons[category.slug] || Camera;
        
        return (
          <Link
            key={category.slug}
            href={`/portfolio/${category.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-charcoal hover:bg-charcoal/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Image Placeholder with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cinematic-black via-charcoal to-accent-gold/10">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A86A_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-accent-gold/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent-gold/20">
                    <Icon className="w-12 h-12 text-accent-gold" />
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-2">
                        {category.name}
                      </h3>
                      <p className="text-silver-gray/70 text-sm">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-accent-gold font-bold">
                        {category.count}
                      </span>
                      <span className="text-silver-gray/50">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoriesGrid;