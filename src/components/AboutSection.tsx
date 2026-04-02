import { Users, Award, Building2, Calendar, ArrowUpRight } from "lucide-react";
import { ScrollSection, StaggerContainer, StaggerItem } from "@/components/animations/ScrollSection";
import { Link } from "react-router-dom";
import constructionImage from "@/assets/about-construction-site.jpg";

const stats = [
  { icon: Calendar, value: "1952", label: "Rok założenia" },
  { icon: Users, value: "283", label: "Członków" },
  { icon: Building2, value: "8", label: "Klubów" },
  { icon: Award, value: "70+", label: "Lat doświadczenia" },
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with cutout corner */}
          <ScrollSection className="relative">
            <div className="relative">
              {/* Main image container */}
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img width={1024} height={672} loading="lazy"
                  src={constructionImage} srcSet={`${constructionImage} 1x, ${constructionImage} 2x`}
                  alt="Budowa infrastruktury drogowej"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Cutout overlay for button */}
              <div 
                className="absolute -top-1 -right-1 w-24 h-24 bg-cream"
                style={{
                  borderBottomLeftRadius: "100%",
                }}
              />
              
              {/* Arrow button */}
              <Link 
                to="/o-nas"
                className="absolute top-2 right-2 w-14 h-14 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-foreground/90 transition-colors shadow-lg z-10"
              >
                <ArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold -z-10" />
          </ScrollSection>

          {/* Content */}
          <ScrollSection delay={0.2}>
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              O nas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 leading-tight">
              Tradycja i nowoczesność<br />
              <span className="text-primary">w służbie drogownictwa</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Stowarzyszenie Inżynierów i Techników Komunikacji Rzeczpospolitej Polskiej (SITK RP) 
              jest organizacją naukowo-techniczną o celach niezarobkowych, działającą na rzecz 
              transportu, a przede wszystkim dla dobra samych członków.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Koszaliński Oddział Stowarzyszenia powstał w 1952 roku, a jego członkami byli 
              przede wszystkim drogowcy z dawnego terenu DODP Koszalin.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Do najważniejszych form działalności statutowej Oddziału SITK RP w Koszalinie należą 
              integracja ludzi związanych z branżą drogową, krzewienie wiedzy, kultury i współpracy 
              pomiędzy różnymi środowiskami związanymi z branżą drogową, od administracji państwowej, 
              samorządowej do sektora prywatnego (firmy wykonawcze, projektanci).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Działalność ta to przede wszystkim organizowanie odczytów, seminariów naukowo-technicznych, 
              prezentacji związanych z branżą drogową oraz konsultacje, pomoc i doradztwo z szeroko 
              pojętego zakresu drogownictwa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              W ramach integracji członków Oddziału organizowane są cykliczne spotkania (wyjazdy 
              techniczne zarówno krajowe jak i zagraniczne, pikniki techniczne, spływy kajakowe 
              oraz inne imprezy).
            </p>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <div className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};
