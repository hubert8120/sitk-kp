import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HolidayModal } from "@/components/HolidayModal";
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
        title="SITK RP Oddział w Koszalinie – Szkolenia i Usługi Branży Drogowej"
        description="SITK RP (Stowarzyszenie Inżynierów i Techników Komunikacji) Oddział w Koszalinie. Profesjonalne szkolenia drogowe, doradztwo techniczne i nadzory inwestorskie od 1952 roku."
        canonical="/"
        breadcrumbs={[
          { name: "Strona główna", item: "/" }
        ]}
      />
      <Navbar />
      <Hero />
      <HolidayModal />
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
