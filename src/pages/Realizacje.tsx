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
  {
    client: "Gmina Bobolice",
    address: "ul. Ratuszowa 1, 76-020 Bobolice",
    description:
      "Opracowanie kompletnej dokumentacji projektowo - kosztorysowej na realizację zadania pn. „Przebudowa dróg gminnych w m. Bobolice, ulic: Kwiatów Polnych, Słowackiego i Traugutta wraz ze skrzyżowaniami (2021 r.).",
  },
  {
    client: "Miasto Szczecinek",
    address: "pl. Wolności 13, 78-400 Szczecinek",
    description:
      "Wykonanie dokumentacji projektowej odcinka drogi ul. Skowronkowa oraz odcinka drogi ul. Sójcza w Szczecinku (2021 r.).",
  },
  {
    client: "Gmina Świnoujście",
    address: "ul. Wojska Polskiego 1/5, 72-600 Świnoujście",
    description:
      "Rozbudowa układu dróg rowerowych - Połączenie rowerowe pomiędzy ul. Żeromskiego i ul. Moniuszki (2021 r.).",
  },
  {
    client: "Gmina Świnoujście",
    address: "ul. Wojska Polskiego 1/5, 72-600 Świnoujście",
    description:
      "Rozbudowa układu dróg rowerowych - Połączenie rowerowe pomiędzy ul. Konstytucji 3 Maja i ul. Piłsudskiego (2021 r.).",
  },
  {
    client: "Miasto Szczecinek",
    address: "pl. Wolności 13, 78-400 Szczecinek",
    description:
      "Wykonanie kompletnej dokumentacji projektowej drogi gminnej ul. Cichej wraz z przebudową skrzyżowania z drogą wojewódzką nr 172 w Szczecinku (2020 r.).",
  },
  {
    client: "Gmina Biały Bór",
    address: "ul. Słupska 10, 78-425 Biały Bór",
    description:
      "Usługa Projektowa - opracowanie pełnej dokumentacji przebudowy drogi gminnej w miejscowości Biały Dwór (Część I) (2020 r.).",
  },
  {
    client: "Gmina Biały Bór",
    address: "ul. Słupska 10, 78-425 Biały Bór",
    description:
      "Usługa Projektowa - opracowanie pełnej dokumentacji przebudowy drogi gminnej w miejscowości Trzebiele (Część II) (2020 r.).",
  },
  {
    client: "Miasto Białogard",
    address: "ul. 1 Maja 18, 78-200 Białogard",
    description:
      "Wykonanie dokumentacji projektowo - kosztorysowych przebudowy dróg na terenie miasta Białogard: budowa ronda na skrzyżowaniu ulic: Piłsudskiego, Połczyńskiej, Batalionów Chłopskich i Sobieskiego (2020 r.).",
  },
  {
    client: "Gmina Cedynia",
    address: "Plac Wolności 1, 74-520 Cedynia",
    description:
      "Opracowanie dokumentacji projektowej na budowę ścieżki rowerowej (Etap I od Cedyni do drogi powiatowej 1394Z oraz opcjonalny Etap II nasypem kolejowym) (2020 r.).",
  },
  {
    client: "ZIM w Słupsku",
    address: "ul. Grottgera 13 , 76-200 Słupsk",
    description:
      "Wykonanie dokumentacji projektowo-wykonawczej przebudowy chodników w ramach zadania „Program chodnikowy - likwidacja barier architektonicznych” Etap I (2020 r.).",
  },
  {
    client: "Gmina Gościno",
    address: "Ul. IV Dywizji Wojska Polskiego 58, 78-120 Gościno",
    description:
      "Wykonanie projektu budowlanego i wykonawczego budowy drogi ul. Kwiatowej w Gościnie wraz z pełnieniem nadzoru autorskiego (2020 r.).",
  },
  {
    client: "Gmina Miastko",
    address: "Grunwaldzka 1, 77-200 Miastko",
    description:
      "Pełnienie funkcji nadzoru inwestorskiego nad przebudową alei głównej na cmentarzu komunalnym w Miastku (2020 r.).",
  },
  {
    client: "Gmina Świnoujście",
    address: "ul. Wojska Polskiego 1/5, 72-600 Świnoujście",
    description:
      "Koncepcja ulic dla obszaru zlokalizowanego w rejonie ulic Grunwaldzkiej i Nowokarsiborskiej w Świnoujściu (2019 r.).",
  },
  {
    client: "Gmina Barwice",
    address: "ul. Zwycięzców 22, 78-460 Barwice",
    description:
      "Opracowanie kompleksowej dokumentacji projektowej budowlano-wykonawczej na budowę drogi do m. Uradz z włączeniem do drogi wojewódzkiej nr 171 (2019 r.).",
  },
  {
    client: "Gmina Kalisz Pomorski",
    address: "ul. Wolności 25, 78-540 Kalisz Pomorski",
    description:
      "Pełnienie funkcji inspektora nadzoru inwestorskiego w specjalności drogowej przy budowie ulicy Świerkowej w Kaliszu Pomorskim (2019 r.).",
  },
];

const Realizacje = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Projektowanie i nadzory – realizacje SITK Koszalin"
        description="Portfolio projektów drogowych SITK RP Koszalin: dokumentacja projektowa, przebudowy dróg powiatowych, ścieżki rowerowe i ciągi piesze."
        canonical="/realizacje/modernizacja-drog"
      />
      <Navbar />

      <ParallaxHero
        backgroundImage={heroImage}
        backgroundAlt="Projektowanie i nadzory"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">
          Projektowanie i nadzory
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
