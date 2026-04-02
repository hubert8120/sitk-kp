import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParallaxHero } from "@/components/animations/ParallaxHero";
import { ScrollSection } from "@/components/animations/ScrollSection";
import bridgeHeroImage from "@/assets/bridge-project.jpg";
import { MapPin, FileText } from "lucide-react";
import { SEO } from "@/components/SEO";

const bridgeProjects = [
  {
    client: "Zarząd Dróg Wojewódzkich w Koszalinie",
    address: "ul. Szczecińska 31, 75-122 Koszalin",
    description:
      "Nadzory inwestorskie nad budową i remontami obiektów inżynierskich w ciągu dróg wojewódzkich na terenie województwa zachodniopomorskiego.",
  },
  {
    client: "Gmina Świdwin",
    address: "Pl. Konstytucji 3 Maja 1, 78-300 Świdwin",
    description:
      "Wykonanie projektu budowlano-wykonawczego budowy drogi gminnej ul. Łokietka wraz z odwodnieniem i przebudową mostu w ciągu drogi ul. Łokietka w Świdwinie (2019 r.).",
  },
];

const BridgeProjects = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Projekty mostowe – realizacje SITK Koszalin"
        description="Portfolio projektów mostowych SITK RP Koszalin: projekty budowlano-wykonawcze, przebudowy mostów, nadzory nad obiektami inżynierskimi."
        canonical="/realizacje/projekty-mostowe"
      />
      <Navbar />

      <ParallaxHero
        backgroundImage={bridgeHeroImage}
        backgroundAlt="Projekty mostowe"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">
          Projekty mostowe
        </h1>
        <p className="text-white text-lg text-center max-w-2xl mx-auto">
          Realizacja i nadzór nad budową oraz modernizacją obiektów inżynierskich
        </p>
      </ParallaxHero>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Realizacje
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-12">
              Zrealizowane projekty mostowe
            </h2>
          </ScrollSection>

          <div className="grid gap-6">
            {bridgeProjects.map((item, index) => (
              <ScrollSection key={index}>
                <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <FileText className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {item.client}
                      </h3>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.address}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed ml-14">
                    {item.description}
                  </p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BridgeProjects;
