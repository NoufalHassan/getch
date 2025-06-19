// Current imports in src/pages/Index.tsx
import {Navigation} from "@/components/Navigation";
import {HeroSection} from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ServicesSection} from "@/components/ServicesSection";
import {PublicationSection} from "@/components/PublicationSection";
import {AdvantagesSection} from "@/components/AdvantagesSection";
import {TestimonialsSection} from "@/components/TestimonialsSection";
import {ContactSection} from "@/components/ContactSection";
import { Footer } from "@/components/Footer"; 

// How they're used in the Index component
export const GtecHome = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PublicationSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
