import { BrandSection } from '@/components/brand-section';
import { FeatureGrid } from '@/components/feature-grid';
import { FeaturedProducts } from '@/components/featured-products';
import { Hero } from '@/components/hero';
import { InspirationSection } from '@/components/inspiration-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <FeaturedProducts />
      <InspirationSection />
      <BrandSection />
    </>
  );
}
