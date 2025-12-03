import Image from 'next/image';
import { Award, Camera, Heart } from 'lucide-react';
import Stats from '@/components/sections/Stats';

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Behind the Lens
            </h1>
            <div className="space-y-6">
              <p className="text-lg text-silver-gray/80">
                I'm Kevin, the visionary behind KVNGSHOTIT. With over 8 years of professional 
                experience, I've dedicated my career to transforming ordinary moments into 
                extraordinary cinematic memories.
              </p>
              <p className="text-lg text-silver-gray/80">
                My approach blends technical precision with artistic intuition, creating 
                photographs that don't just document moments, but tell compelling stories 
                that resonate with emotion and authenticity.
              </p>
              <p className="text-lg text-silver-gray/80">
                Every shoot is a collaboration—a dance between my creative vision and your 
                unique story. Together, we create images that you'll cherish for generations.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/about-portrait.jpg"
                alt="Kevin - Photographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent-gold text-cinematic-black p-6 rounded-2xl max-w-xs">
              <p className="font-playfair text-xl font-bold">"Capturing the poetry in reality"</p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-20">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            My Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="text-accent-gold" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Technical Excellence</h3>
              <p className="text-silver-gray/80">
                Mastery of light, composition, and equipment to ensure every image meets 
                the highest standards of quality.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-accent-gold" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Emotional Connection</h3>
              <p className="text-silver-gray/80">
                Going beyond surface beauty to capture the authentic emotions and 
                relationships that define each moment.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-accent-gold" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Cinematic Storytelling</h3>
              <p className="text-silver-gray/80">
                Crafting visual narratives that feel like frames from a film, 
                each with its own mood, character, and plot.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <Stats />
      </div>
    </div>
  );
}