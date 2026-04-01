import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Users, Award, Building2, Calendar } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import aboutJourney from "@/assets/about-journey.jpg";
import aboutOffice from "@/assets/about-office.jpg";
import { SEO } from "@/components/SEO";


const stats = [
  { value: "1952", label: "Rok założenia" },
  { value: "283", label: "Członków" },
  { value: "8", label: "Klubów" },
  { value: "70+", label: "Lat doświadczenia" },
];

const About = () => {
  const journeyRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="O nas – Historia i władze SITK RP Koszalin"
        description="Poznaj historię Oddziału SITK RP w Koszalinie, działającego od 1952 roku. Władze, kluby, wartości i 283 członków organizacji drogowej."
        canonical="/o-nas"
      />
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section 
        className="min-h-[70vh] flex items-end justify-center pb-16 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src={heroAbout} 
            alt="Siedziba SITK RP Oddział w Koszalinie" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground font-bold tracking-wide">
            O nas
          </h1>
          <p className="text-primary-foreground/80 mt-4 text-lg">Poznaj naszą historię i wartości</p>
        </motion.div>
      </section>

      {/* Our Journey Section with Fade In */}
      <section ref={journeyRef} className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
                  Nasza historia
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8">
                Wszystko zaczęło się od prostej, ale potężnej idei
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground leading-relaxed text-lg mb-6"
              >
                Stowarzyszenie Inżynierów i Techników Komunikacji Rzeczpospolitej Polskiej (SITK RP) 
                jest organizacją naukowo-techniczną o celach niezarobkowych, działającą na rzecz 
                transportu, a przede wszystkim dla dobra samych członków.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground leading-relaxed text-lg mb-6"
              >
                Koszaliński Oddział Stowarzyszenia powstał w 1952 roku, a jego członkami byli 
                przede wszystkim drogowcy z dawnego terenu DODP Koszalin.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                Przez dekady rozwijaliśmy się z małego zespołu konsultantów do wiodącej organizacji, 
                z dumą służąc członkom z różnych sektorów branży drogowej.
              </motion.p>
            </motion.div>

            {/* Image with Fade In */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img
                  src={aboutJourney}
                  alt="Historia SITK RP – działalność od 1952 roku"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Approach Section with Staggered Fade In */}
      <section ref={valuesRef} className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Nasze wartości
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Sercem SITK są nasze podstawowe wartości – uczciwość, doskonałość, współpraca i innowacja. 
                Te wartości kierują wszystkim, co robimy, od sposobu, w jaki współpracujemy z członkami 
                i kolegami, po rozwiązania, które dostarczamy. Integracja ludzi związanych z branżą drogową 
                i krzewienie wiedzy to nasze główne cele.
              </p>
            </motion.div>

            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Nasze podejście
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Wierzymy w poświęcanie czasu na zrozumienie potrzeb, wyzwań i celów naszych członków, 
                oraz rozwijanie rozwiązań, które przynoszą wymierne rezultaty. Działalność to przede wszystkim 
                organizowanie odczytów, seminariów naukowo-technicznych oraz konsultacje i doradztwo 
                z zakresu drogownictwa.
              </p>
            </motion.div>
          </div>

          {/* Full width image with Fade In */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={aboutOffice}
              alt="Biuro SITK RP w Koszalinie przy ul. Kupieckiej 5"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-12 h-[2px] bg-gold origin-right" 
              />
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
                Władze
              </span>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-12 h-[2px] bg-gold origin-left" 
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 text-center">
              Władze oddziału
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Zarząd Oddziału */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 border-b border-gold/30 pb-3">
                  Zarząd Oddziału SITK RP w Koszalinie
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><span className="font-medium text-foreground">Janusz Komorowski</span> – Prezes Oddziału</li>
                  <li><span className="font-medium text-foreground">Paweł Alejski</span> – Wiceprezes Oddziału</li>
                  <li><span className="font-medium text-foreground">Tadeusz Kanas</span> – Wiceprezes Oddziału</li>
                  <li><span className="font-medium text-foreground">Wiesław Hołub</span> – Sekretarz</li>
                  <li><span className="font-medium text-foreground">Mieszko Pająk</span> – Skarbnik</li>
                  <li><span className="font-medium text-foreground">Marek Gruszecki</span> – Członek Zarządu</li>
                  <li><span className="font-medium text-foreground">Dariusz Wesołowski</span> – Członek Zarządu</li>
                  <li><span className="font-medium text-foreground">Tomasz Wojciechowski</span> – Członek Zarządu</li>
                  <li><span className="font-medium text-foreground">Łukasz Koryga</span> – Członek Zarządu</li>
                </ul>
                <div className="mt-6 pt-4 border-t border-muted">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">Zastępcy Członków Zarządu:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li><span className="font-medium text-foreground">Barbara Chmielnicka-Osial</span></li>
                    <li><span className="font-medium text-foreground">Norbert Chamier-Gliszczyński</span></li>
                  </ul>
                </div>
              </motion.div>

              {/* Komisja Rewizyjna */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 border-b border-gold/30 pb-3">
                  Komisja Rewizyjna
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><span className="font-medium text-foreground">Andrzej Lenartowicz</span> – Przewodniczący Komisji Rewizyjnej</li>
                  <li><span className="font-medium text-foreground">Michał Rosa</span> – Wiceprzewodniczący Komisji Rewizyjnej</li>
                  <li><span className="font-medium text-foreground">Edyta Domek</span> – Członek Komisji Rewizyjnej</li>
                </ul>
                <div className="mt-6 pt-4 border-t border-muted">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">Zastępca Członka Komisji Rewizyjnej:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li><span className="font-medium text-foreground">Jarosław Gębarowski</span></li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-12 h-[2px] bg-gold origin-right" 
              />
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
                Struktura
              </span>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-12 h-[2px] bg-gold origin-left" 
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 text-center">
              Kluby
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-4"
            >
              {[
                { name: "Klub w Koszalinie", leader: "Janusz Komorowski", role: "Przewodniczący" },
                { name: "Klub przy RDK w Koszalinie", leader: "Dariusz Wesołowski", role: "Przewodniczący" },
                { name: "Klub w Starych Bielicach", leader: "Edyta Domek", role: "Przewodnicząca" },
                { name: "Klub w Szczecinku", leader: "Bronisław Kwardys", role: "Przewodniczący" },
                { name: "Klub w Chodzieży", leader: "Łukasz Wiśniewski", role: "Przewodniczący" },
                { name: "Klub w Drawsku Pomorskim", leader: "Tomasz Martusiewicz", role: "Przewodniczący" },
                { name: "Klub w Białogardzie", leader: "Danuta Jarząbek", role: "Przewodnicząca" },
                { name: "Klub w Chojnie", leader: "Mieszko Pająk", role: "Przewodniczący" },
              ].map((club, index) => (
                <motion.div
                  key={club.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col md:flex-row md:items-center justify-between py-4 px-6 bg-background rounded-xl border border-muted hover:border-gold/30 transition-colors"
                >
                  <span className="font-medium text-foreground">{club.name}</span>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {club.leader} – <span className="text-gold">{club.role}</span>
                  </span>
                </motion.div>
              ))}
              
              {/* Suspended club */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col md:flex-row md:items-center justify-between py-4 px-6 bg-muted/50 rounded-xl border border-muted"
              >
                <span className="font-medium text-muted-foreground">Klub Studencki przy PK w Koszalinie</span>
                <span className="text-muted-foreground text-sm">
                  działalność zawieszona (tel. 509 366 661)
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Staggered Fade In */}
      <section ref={statsRef} className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="text-center"
              >
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section with Fade In */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-12 h-[2px] bg-gold origin-right" 
              />
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
                Działalność
              </span>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-12 h-[2px] bg-gold origin-left" 
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
              Nasza działalność
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed text-lg mb-6"
            >
              Do najważniejszych form działalności statutowej Oddziału SITK RP w Koszalinie należą 
              integracja ludzi związanych z branżą drogową, krzewienie wiedzy, kultury i współpracy 
              pomiędzy różnymi środowiskami związanymi z branżą drogową, od administracji państwowej, 
              samorządowej do sektora prywatnego (firmy wykonawcze, projektanci).
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground leading-relaxed text-lg"
            >
              W ramach integracji członków Oddziału organizowane są cykliczne spotkania (wyjazdy 
              techniczne zarówno krajowe jak i zagraniczne, pikniki techniczne, spływy kajakowe 
              oraz inne imprezy).
            </motion.p>
          </motion.div>
        </div>
      </section>


      <CTASection />
      <Footer />
    </main>
  );
};

export default About;
