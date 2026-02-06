import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import PopularCategories from "@/components/landing/PopularCategories";
import PopularDestinations from "@/components/landing/PopularDestinations";
import TrustSection from "@/components/landing/TrustSection";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <PopularCategories />
      <PopularDestinations />
      <TrustSection />
      <CTASection />
    </>
  );
}
