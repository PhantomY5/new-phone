import PromotionalBanner from '@/components/layout/PromotionalBanner';
import ProductHero from '@/components/layout/ProductHero';
import PricingSection from '@/components/layout/PricingSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <PromotionalBanner />
      <ProductHero />
      <PricingSection />
    </div>
  );
}