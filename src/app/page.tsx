import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import CategoriesShowcase from '@/components/sections/CategoriesShowcase';
import Testimonial from '@/components/sections/Testimonial';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <CategoriesShowcase />
      <Testimonial />
      <CTA />
    </>
  );
}