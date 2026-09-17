import { BenefitsSection } from "../components/home/BenefitsSection";
import { FeaturedRoomsSection } from "../components/home/FeaturedRoomsSection";
import { HeroSection } from "../components/home/HeroSection";
import { LocationCtaSection } from "../components/home/LocationCtaSection";

/** The homepage is intentionally composed from reusable, independently testable sections. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturedRoomsSection />
      <LocationCtaSection />
    </>
  );
}
