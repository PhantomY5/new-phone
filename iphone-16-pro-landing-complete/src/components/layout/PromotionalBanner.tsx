import { Gift } from 'lucide-react';

export default function PromotionalBanner() {
  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      <Gift className="inline mr-2" />
      Get up to $650 in trade-in credits! <a href="/buy" className="underline">Learn more</a>
    </div>
  );
}