import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParallaxHero } from "@/components/animations/ParallaxHero";
import { ScrollSection } from "@/components/animations/ScrollSection";
import heroImage from "@/assets/construction-work.jpg";
import { MapPin, FileText } from "lucide-react";
import { SEO } from "@/components/SEO";

const realizacje = [
  {
    client: "Gmina Czersk",
    address: "ul. T. Kościuszki 27, 89-650 Czersk",
    description:
      "Wykonanie dokumentacji projektowej budowy ścieżek rowerowych na terenie Gminy Czersk z podziałem na części: Część 1. Wykonanie dokumentacji projektowej budowy ścieżki rowerowej Mokre – gr. Gminy Karsin",
  },
  {
    client: "Gmina Postomino",
    address: "Postomino 30, 76-113 Postomino",
    description:
      'Wykonanie kompleksowej dokumentacji projektowej dla zadania inwestycyjnego pn.: „Rozbudowa drogi gminnej Jezierzany - Naćmierz"',
  },
  {
    client: "Zarząd Dróg Powiatowych w Słupsku",
    address: "ul. Słoneczna 16e, 76-200 Słupsk",
    description:
      "Wykonanie dokumentacji projektowej dla przebudowy dróg powiatowych nr 1135G, 1139G, 1142G stanowiących dojazd do węzłów drogowych S6. Zadanie Nr 1 - Przebudowa drogi powiatowej 1135G na odcinku Mrówczyno – Damnica",
  },
  {
    client: "Zarząd Dróg Powiatowych w Słupsku",
    address: "ul. Słoneczna 16e, 76-200 Słupsk",
    description:
      "Wykonanie dokumentacji projektowej dla przebudowy dróg powiatowych nr 1135G, 1139G, 1142G stanowiących dojazd do węzłów drogowych S6. Zadanie Nr 3 - Przebudowa drogi powiatowej 1142G na odcinku Bobrowniki – Grapice",
  },
  {
    client: "Powiatowy Zarząd Dróg w Koszalinie",
    address: "76-015 Manowo, ul. Cisowa 21",
    description:
      'Przebudowa ciągu pieszego wzdłuż ulicy Łubuszan w Sianowie w pasie drogowym drogi powiatowej – zgodnie z Umową Nr 19/2021 z 20.07.2021r.',
  },
];

const Realizacje = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Modernizacja dróg – realizacje SITK Koszalin"
        description="Portfolio projektów drogowych SITK RP Koszalin: dokumentacja projektowa, przebudowy dróg powiatowych, ścieżki rowerowe i ciągi piesze."
        canonical="/realizacje/modernizacja-drog"
      />
      <Navbar />

      <ParallaxHero
        backgroundImage={heroImage}
        backgroundAlt="Modernizacja dróg powiatowych"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">
          Modernizacja dróg powiatowych
        </h1>
        <p className="text-white text-lg text-center max-w-2xl mx-auto">
          Kompleksowa modernizacja infrastruktury drogowej z zastosowaniem nowoczesnych technologii
        </p>
      </ParallaxHero>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Realizacje
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-12">
              Zrealizowane projekty
            </h2>
          </ScrollSection>

          <div className="grid gap-6">
            {realizacje.map((item, index) => (
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

export default Realizacje;
