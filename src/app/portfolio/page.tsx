import CategoriesGrid from '@/components/sections/CategoriesGrid';
import { portfolioCategories } from '@/lib/data';

export default function PortfolioPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-silver-gray/80">
            Explore my curated collection of cinematic photography across different genres. 
            Each category tells a unique story through light, composition, and emotion.
          </p>
        </div>
        
        <CategoriesGrid categories={portfolioCategories} />
      </div>
    </div>
  );
}