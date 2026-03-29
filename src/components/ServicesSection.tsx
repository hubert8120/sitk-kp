import { Link } from "react-router-dom";
import { ArrowRight, Route, BookOpen, FileCheck, Users, Wrench, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollSection, StaggerContainer, StaggerItem } from "@/components/animations/ScrollSection";

const services = [
  {
    icon: Route,
    title: "Budownictwo drogowe",
    description: "Od 1994 roku Oddział posiada osobowość prawną. Główne kierunki działalności gospodarczej to udział w zamówieniach publicznych obejmujących opracowania projektowo-kosztorysowe branży drogowej i mostowej oraz nadzory inwestorskie w branży drogowej.",
  },
  {
    icon: BookOpen,
    title: "Szkolenia i kursy",
    description: "Oddział SITK RP w Koszalinie, poprzez Centrum Szkolenia i Doskonalenia Kadr Oddziału SITK RP w Koszalinie, prowadzi działalność szkoleniową. Jest to placówka oświaty pozaszkolnej. CSiDK prowadzi profesjonalne szkolenia dla kadry inżynieryjnej i technicznej z zakresu drogownictwa.",
  },
  {
    icon: FileCheck,
    title: "Doradztwo techniczne",
    description: "Eksperckie konsultacje i opinie techniczne dla projektów infrastrukturalnych.",
  },
  {
    icon: Users,
    title: "Konferencje i spotkania",
    description: "Organizacja wydarzeń branżowych integrujących środowisko drogowców.",
  },
  {
    icon: Wrench,
    title: "Administracja dróg",
    description: "Wsparcie w zarządzaniu i utrzymaniu infrastruktury drogowej.",
  },
  {
    icon: Building,
    title: "Wydawnictwa",
    description: "Publikacje naukowe i techniczne z dziedziny transportu i budownictwa.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
            Usługi
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
            Czym się zajmujemy
          </h2>
          <p className="text-muted-foreground">
            Oferujemy szeroki zakres usług związanych z rozwojem infrastruktury drogowej, 
            edukacją specjalistów oraz wsparciem technicznym.
          </p>
        </ScrollSection>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className="p-8 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="mb-6">
                <service.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
