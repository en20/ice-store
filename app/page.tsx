import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { PortfolioSection } from "@/components/layout/sections/portfolio";
import { ProductSection } from "@/components/layout/sections/product";
import { AboutSection } from "@/components/layout/sections/about";



export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductSection />
      {/*<PortfolioSection />*/}
      <BenefitsSection />
      <AboutSection />
      <TestimonialSection />
      {/*<FeaturesSection />*/}
      {/*<SponsorsSection />*/}
      {/*<ServicesSection />*/}
      <ContactSection />
      <FAQSection />
    </main>
  );
}
