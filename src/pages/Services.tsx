import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import heroServicesImage from "@/assets/hero-services.jpg";
import { SEO } from "@/components/SEO";

const Services = () => (
  <main className="min-h-screen">
    <SEO
      title="Usługi drogowe – projekty i nadzory inwestorskie"
      description="Usługi z zakresu drogownictwa: projekty drogowe, nadzory inwestorskie, doradztwo techniczne, szkolenia BHP. SITK RP Oddział w Koszalinie."
      canonical="/uslugi"
    />
    <Navbar />
    <section 
      className="min-h-[70vh] flex items-end justify-center pb-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroServicesImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground font-bold tracking-wide">Usługi</h1>
        <p className="text-primary-foreground/80 mt-4 text-lg">Kompleksowe usługi z zakresu drogownictwa</p>
      </div>
    </section>
    <ServicesSection />
    <FeaturedProjects />
    <Footer />
  </main>
);

export default Services;
