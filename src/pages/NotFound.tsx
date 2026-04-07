import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-black flex flex-col selection:bg-gold/30 selection:text-white">
      <SEO
        title="404 – Strona nie istnieje | SITK RP Koszalin"
        description="Przepraszamy, strona której szukasz nie istnieje. Wróć na stronę główną SITK RP Oddział w Koszalinie."
        canonical="/404"
      />
      <Navbar />

      <section className="flex-1 relative flex items-center justify-center py-24 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.4)_0%,rgba(0,0,0,1)_100%)]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Error Display */}
          <div className="relative mb-12">
            <h1 
              className="font-serif font-bold italic opacity-10 blur-[2px] select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{ fontSize: "clamp(12rem, 30vw, 24rem)" }}
            >
              404
            </h1>
            
            <div className="relative pt-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
                <span className="text-gold uppercase tracking-[0.4em] text-sm font-semibold">
                  Signal Lost
                </span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
              </div>
              
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Strona nie istnieje
              </h2>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10">
              Przepraszamy – strona, której szukasz, odpłynęła w niebyt. 
              Mogła zostać usunięta lub adres URL jest nieprawidłowy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Button asChild size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-gold hover:text-white transition-all duration-300 shadow-xl shadow-white/5">
                <Link to="/">
                  <Home className="w-5 h-5 mr-3" />
                  Strona główna
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-10 rounded-full border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-3" />
                Wróć wstecz
              </Button>
            </div>

            <div className="pt-10 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6">
                Polecane sekcje
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { to: "/o-nas", label: "O nas" },
                  { to: "/uslugi", label: "Usługi" },
                  { to: "/szkolenia", label: "Szkolenia" },
                  { to: "/aktualnosci", label: "Aktualności" },
                  { to: "/kontakt", label: "Kontakt" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact hint */}
          <div className="mt-12 flex items-center justify-center gap-3 text-white/50 animate-bounce-slow">
            <Phone className="w-4 h-4 text-gold" />
            <span className="text-sm">Potrzebujesz pomocy?&nbsp;</span>
            <Link to="/kontakt" className="text-gold-light hover:text-gold font-bold transition-colors">
              Napisz do nas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
