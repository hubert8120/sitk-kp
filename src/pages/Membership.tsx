import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Download, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMembership from "@/assets/hero-membership.jpg";
import declarationPdf from "@/assets/Deklaracja członkowska - PRZYSTĄPIENIE.pdf";
import updatePdf from "@/assets/Deklaracja członkowska - AKTUALIZACJA DANYCH CZŁONKÓW.pdf";
import statutPdf from "@/assets/Statut SITK RP.pdf";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";

const tabs = [
  {
    id: "statut",
    label: "Statut SITK RP",
    icon: FileText,
  },
  {
    id: "deklaracje",
    label: "Deklaracje Członkowskie",
    icon: Users,
  },
  {
    id: "skladki",
    label: "Składki Członkowskie",
    icon: CreditCard,
  },
];

const Membership = () => {
  const [activeTab, setActiveTab] = useState("statut");

  const renderContent = () => {
    switch (activeTab) {
      case "statut":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Statut SITK RP</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Zapoznaj się ze statutem Stowarzyszenia Inżynierów i Techników Komunikacji Rzeczypospolitej Polskiej. 
              Statut określa cele, zadania oraz zasady funkcjonowania naszego Stowarzyszenia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dokument zawiera informacje o prawach i obowiązkach członków, strukturze organizacyjnej 
              oraz procedurach wewnętrznych Stowarzyszenia.
            </p>
            <Button asChild className="gap-2 mt-4">
              <a 
                href={statutPdf} 
                download="Statut_SITK_RP.pdf"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Pobierz Statut
              </a>
            </Button>
          </div>
        );
      case "deklaracje":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Deklaracje Członkowskie</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-2 text-lg">Deklaracja wstąpienia</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Osoby zainteresowane wstąpieniem w poczet członków Stowarzyszenia powinny wypełnić poniższą 
                  deklarację i złożyć w wybranym Klubie lub bezpośrednio w Biurze Oddziału.
                </p>
                <Button variant="outline" asChild className="gap-2">
                  <a href={declarationPdf} download="Deklaracja_czlonkowska_PRZYSTAPIENIE.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Pobierz deklarację wstąpienia
                  </a>
                </Button>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h4 className="font-medium text-foreground mb-2 text-lg">Deklaracja aktualizacyjna</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aktualizacja danych Członka zwyczajnego Oddziału SITK RP w Koszalinie.
                </p>
                <Button variant="outline" asChild className="gap-2">
                  <a href={updatePdf} download="Deklaracja_czlonkowska_AKTUALIZACJA.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Pobierz deklarację aktualizacyjną
                  </a>
                </Button>
              </div>
            </div>
          </div>
        );
      case "skladki":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Składki Członkowskie</h3>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6">
              <p className="text-muted-foreground mb-4">
                Od dnia 01.01.2026 r. składki członkowskie, zgodnie z decyzją Rady Krajowej SITK RP 
                z dnia 11.12.2025 r. wynoszą:
              </p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2">
                  <span className="text-foreground">Członkowie zwyczajni</span>
                  <span className="font-semibold text-primary text-lg">10,00 zł / mc</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="text-foreground">Emeryci</span>
                  <span className="font-semibold text-primary text-lg">5,00 zł / mc</span>
                </li>
                <li className="flex justify-between items-center py-2 border-t border-border">
                  <span className="text-foreground">Opłata wpisowa</span>
                  <span className="font-semibold text-primary text-lg">10,00 zł</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h4 className="font-medium text-foreground mb-3">Numer konta</h4>
              <p className="font-mono text-lg text-primary font-semibold">
                17 1240 3653 1111 0000 4188 5648
              </p>
            </div>

            <div className="text-sm text-muted-foreground space-y-3 bg-secondary/50 rounded-xl p-6">
              <p>
                <span className="text-primary font-semibold">Członkowie Kół</span> dokonujący wpłat indywidualnie 
                powinni w tytule przelewu zamieścić: <strong className="text-foreground">"Koło; Imię i Nazwisko członka; składka za okres: ..."</strong>
              </p>
              <p>
                <span className="text-primary font-semibold">Składki opłacane przez pracodawcę</span> powinny 
                w tytule przelewu zawierać: <strong className="text-foreground">"Koło; za ilu członków dokonywana jest wpłata (lub wymienić nazwiska); składka za okres: ..."</strong>
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Członkostwo – dołącz do SITK RP Koszalin"
        description="Zostań członkiem SITK RP w Koszalinie. Statut, deklaracje członkowskie, składki – 10 zł/mc. Dołącz do 283 inżynierów i techników."
        canonical="/czlonkostwo"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-end justify-center pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroMembership}
            alt="Spotkanie profesjonalistów"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
        </div>
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground tracking-wide">
              Zostań Członkiem
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg max-w-2xl mx-auto px-6">
              Dołącz do grona profesjonalistów i stań się częścią społeczności inżynierów i techników komunikacji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Sidebar - Tabs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-72 flex-shrink-0"
            >
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 group",
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <tab.icon className={cn(
                      "w-5 h-5 transition-colors",
                      activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Right Content Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <div className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-10 min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
