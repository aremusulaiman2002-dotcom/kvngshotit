// src/app/portfolio/[category]/page.tsx
interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const formattedCategory = category.replace('-', ' ');
  
  // Gallery placeholders
  const galleryImages = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <a href="/portfolio" className="text-accent-gold hover:underline mb-8 inline-block hover:text-accent-gold/80 transition-colors">
          ← Back to Portfolio
        </a>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">
            {formattedCategory}
          </h1>
          <p className="text-xl text-silver-gray/80 max-w-3xl">
            Explore our collection of cinematic {formattedCategory.toLowerCase()} photography. 
            Each image tells a unique story through light, composition, and emotion.
          </p>
        </div>
        
        {/* Gallery Grid - Already implemented beautifully */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((num) => (
            <div
              key={num}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-charcoal via-cinematic-black to-charcoal hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image Placeholder with Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#C9A86A_1px,transparent_1px),linear-gradient(to_bottom,#C9A86A_1px,transparent_1px)] [background-size:32px_32px]" />
                
                {/* Number Indicator */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-accent-gold text-sm font-bold">{num}</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                        <span className="text-accent-gold">📷</span>
                      </div>
                      <span className="text-white text-sm">Sample Image {num}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Notice */}
        <div className="mt-12 p-6 bg-gradient-to-r from-accent-gold/10 to-transparent rounded-xl border border-accent-gold/20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center">
              <span className="text-accent-gold">✨</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Real Images Coming Soon</h3>
              <p className="text-silver-gray/70">
                This gallery will feature actual {formattedCategory.toLowerCase()} photography. 
                Contact us to see real examples of our work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}