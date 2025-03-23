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

export const metadata = {
  title: "Gelo Premium - Entrega Rápida",
  description: "Fornecedor de gelo premium com entrega rápida para residências, eventos e estabelecimentos comerciais.",
  openGraph: {
    type: "website",
    url: "https://gelopremium.com",
    title: "Gelo Premium - Qualidade e Rapidez na Entrega",
    description: "Gelo cristalino de alta qualidade para todos os tipos de eventos e estabelecimentos.",
    images: [
      {
        url: "https://gelopremium.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gelo Premium - Fornecedor de Gelo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gelopremium.com",
    title: "Gelo Premium - Qualidade e Rapidez",
    description: "Fornecedor de gelo premium com entrega rápida",
    images: [
      "https://gelopremium.com/twitter-image.jpg",
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <BenefitsSection />
      <FeaturesSection />
      <SponsorsSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
