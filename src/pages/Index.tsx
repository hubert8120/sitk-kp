import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { NewsPreview } from "@/components/NewsPreview";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="SITK RP Koszalin – Szkolenia i usługi drogowe"
        description="Stowarzyszenie Inżynierów i Techników Komunikacji RP Oddział w Koszalinie. Szkolenia drogowe, doradztwo techniczne i nadzory inwestorskie od 1952 roku."
        canonical="/"
      />
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <NewsPreview />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
