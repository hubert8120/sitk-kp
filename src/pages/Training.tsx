import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Shield, Wrench, FileCheck, Scale, HardHat, Route, Layers, Ruler, Building, Gavel, Mail, Users, MousePointer2 } from "lucide-react";
import heroTrainingImage from "@/assets/hero-training.jpg";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const courses = [
  { 
    title: "Bezpieczeństwo prowadzenia robót w pasie drogowym",
    description: "Wraz z uzyskaniem uprawnień do kierowania ruchem.",
    icon: Shield,
  },
  { 
    title: "Okresowe szkolenie BHP",
    description: "Dla pracowników na stanowiskach robotniczych.",
    icon: HardHat,
  },
  { 
    title: "Naprawa nawierzchni i projektowanie konstrukcji drogowych",
    description: "Dobór optymalnej technologii i ustalenie koniecznego zakresu robót. Projektowanie konstrukcji drogowych wymagających wzmocnienia (przebudowy) oraz zabiegi remontowe.",
    icon: Layers,
  },
  { 
    title: "Prawo Zamówień Publicznych",
    description: "Aktualny stan prawny oraz praktyka stosowania.",
    icon: Scale,
  },
  { 
    title: "Bezpieczeństwo ruchu i organizacja robót",
    description: "Prowadzenie robót w pasie drogowym, organizacja ruchu i oznakowanie, zagrożenia i konieczna profilaktyka.",
    icon: Route,
  },
  { 
    title: "Zabiegi remontowe i odtworzeniowe nawierzchni",
    description: "Naprawa nawierzchni, dobór optymalnej technologii, projektowanie konstrukcji drogowych wymagających wzmocnienia oraz zabiegi remontowe, odtworzeniowe.",
    icon: Wrench,
  },
  { 
    title: "Aktualne technologie budowy nawierzchni",
    description: "Wiodące, aktualne zagadnienia w zakresie technologii do budowy i naprawy nawierzchni drogowych, aktualne doświadczenia realizacyjne.",
    icon: Building,
  },
  { 
    title: "Destrukcja konstrukcji drogowych i innowacyjne rozwiązania",
    description: "Przyczyny destrukcji, naprawa nawierzchni, innowacyjność rozwiązań, doświadczenia z recyklingu na zimno, remixing plus, slurry seal, przykłady rozwiązywania problemów projektowych i wykonawczych.",
    icon: FileCheck,
  },
  { 
    title: "Techniczne i prawne zagadnienia pasa drogowego",
    description: "Kompleksowe omówienie aspektów technicznych i prawnych związanych z pasem drogowym.",
    icon: Gavel,
  },
  { 
    title: "Zmiany przepisów techniczno-budowlanych",
    description: "Aktualne przepisy dotyczące dróg publicznych, w tym m.in. Rozporządzenie Ministra Infrastruktury z dnia 24 czerwca 2022 r. w sprawie przepisów techniczno-budowlanych dotyczących dróg publicznych, t.j. Dz.U. 2022 poz. 1518 ze zm. i Ustawa z dnia 21.03.1985 r. o drogach publicznych, t.j. Dz. U. z 2025 r., poz. 889.",
    icon: BookOpen,
  },
  { 
    title: "Metody kontroli zagęszczania gruntów",
    description: "Praktyczne szkolenie z metod kontroli zagęszczania gruntów w budownictwie drogowym.",
    icon: Ruler,
  },
  { 
    title: "Wybrane zagadnienia prawne dotyczące pasa drogowego",
    description: "Inwestycje drogowe, utrzymanie - aktualny stan prawny oraz praktyka stosowania, dotychczasowe doświadczenia i interpretacje.",
    icon: Scale,
  },
];

const Training = () => (
  <main className="min-h-screen">
    <SEO
      title="Szkolenia drogowe – kursy BHP i nawierzchni"
      description="Profesjonalne szkolenia dla branży drogowej: BHP, nawierzchnie, prawo zamówień publicznych. 48 szkoleń, 861 przeszkolonych osób. SITK RP Koszalin."
      canonical="/szkolenia"
      breadcrumbs={[
        { name: "Strona główna", item: "/" },
        { name: "Szkolenia", item: "/szkolenia" }
      ]}
    />
    <Navbar />
    <section
      className="min-h-[70vh] flex items-end justify-center pb-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroTrainingImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground font-bold tracking-wide">Szkolenia i kursy</h1>
        <p className="text-primary-foreground/80 mt-4 text-lg">Profesjonalne szkolenia dla branży drogowej</p>
      </div>
    </section>
    
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Centrum Szkoleniowe</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">Nasza oferta szkoleniowa</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Centrum Szkolenia i Doskonalenia Kadr Oddziału SITK RP w Koszalinie organizuje szkolenia zawodowe dla pracowników administracji i wykonawstwa drogowego.
          </p>
          <Link
            to="/kontakt#contact-form"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-gold/80 text-primary font-semibold text-sm tracking-wide shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Zapisz się na szkolenie
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, i) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <course.icon className="w-6 h-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2 text-foreground leading-tight">{course.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-20 max-w-6xl mx-auto w-full px-4 md:px-0"
        >
          <div className="relative rounded-3xl overflow-hidden bg-[#121C34] border border-[#1E2E52] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center min-h-[460px]">
            {/* Background Abstract Glow */}
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] z-0 pointer-events-none" />
            
            {/* Left Content */}
            <div className="relative z-10 w-full md:w-1/2 text-left pr-0 md:pr-12 mb-12 md:mb-0">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Przenieś swoje<br />kompetencje<br />na wyższy poziom
              </h3>
              <p className="text-blue-100/70 text-base md:text-lg mb-8 leading-relaxed max-w-md">
                Skontaktuj się z nami, aby dowiedzieć się więcej o ofercie szkoleniowej, terminach i warunkach uczestnictwa. Odpowiemy na każde pytanie.
              </p>
              <Link
                to="/kontakt#contact-form"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-gold/80 text-primary font-bold text-sm tracking-wide shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300"
              >
                Nasza oferta szkoleniowa
              </Link>
            </div>

            {/* Right Graphics - Concentric Orbits */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-60 md:opacity-100 hidden sm:block overflow-hidden md:overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Rings */}
                <div className="absolute w-[280px] h-[280px] border border-blue-400/15 rounded-full" />
                <div className="absolute w-[460px] h-[460px] border border-blue-400/15 rounded-full" />
                <div className="absolute w-[640px] h-[640px] border border-blue-300/10 rounded-full" />
                
                {/* Center text bubble */}
                <div className="absolute flex flex-col items-center z-30 pointer-events-auto">
                  <Link 
                    to="/kontakt#contact-form" 
                    className="bg-[#10B981] hover:bg-[#059669] transition-colors text-white text-[15px] font-semibold px-6 py-3 rounded-full shadow-xl cursor-pointer"
                  >
                    Napisz do nas
                  </Link>
                </div>

                {/* Orbital Elements */}
                {/* Inner Orbit (Spinning) */}
                <div className="absolute w-[280px] h-[280px]" style={{ animation: 'spin 30s linear infinite' }}>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1A2542] rounded-full border border-indigo-400/50 flex items-center justify-center shadow-lg" style={{ animation: 'spin 30s linear infinite reverse' }}>
                    <GraduationCap className="w-6 h-6 text-indigo-400" />
                  </div>
                </div>
                
                {/* Middle Orbit (Reverse Spinning) */}
                <div className="absolute w-[460px] h-[460px]" style={{ animation: 'spin 45s linear infinite reverse' }}>
                  {/* Icon perfectly on the ring line: placed top-center */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#1A2542] rounded-full border border-blue-400/50 flex items-center justify-center shadow-xl" style={{ animation: 'spin 45s linear infinite' }}>
                    <Users className="w-7 h-7 text-blue-400" />
                  </div>
                  {/* Icon perfectly on the ring line: placed bottom-center */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1A2542] rounded-full border border-purple-400/50 flex items-center justify-center shadow-xl" style={{ animation: 'spin 45s linear infinite' }}>
                    <FileCheck className="w-5 h-5 text-purple-400" />
                  </div>
                </div>

                {/* Outer Orbit (Spinning Slow) */}
                <div className="absolute w-[640px] h-[640px]" style={{ animation: 'spin 60s linear infinite' }}>
                  {/* Icon perfectly on the ring line: placed bottom-center */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#1A2542] rounded-full border border-blue-500/40 flex items-center justify-center shadow-xl" style={{ animation: 'spin 60s linear infinite reverse' }}>
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-primary rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <GraduationCap className="w-12 h-12 text-gold mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Podsumowanie działalności szkoleniowej
            </h3>
            <p className="text-primary-foreground/70">Kadencja 2022 – 2025</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl md:text-4xl font-bold text-gold mb-1">48</div><div className="text-primary-foreground/70 text-sm">szkoleń</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-gold mb-1">861</div><div className="text-primary-foreground/70 text-sm">przeszkolonych osób</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-gold mb-1">291</div><div className="text-primary-foreground/70 text-sm">kobiet</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-gold mb-1">570</div><div className="text-primary-foreground/70 text-sm">mężczyzn</div></div>
          </div>
          
          <p className="text-primary-foreground/80 text-center mt-8 text-sm">
            Wszystkie szkolenia zakończone wydaniem odpowiednich Certyfikatów i uprawnień.
          </p>
        </motion.div>


      </div>
    </section>
    <Footer />
  </main>
);

export default Training;
