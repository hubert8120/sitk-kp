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
    <main className="min-h-screen bg-background flex flex-col">
      <SEO
        title="404 – Strona nie istnieje | SITK RP Koszalin"
        description="Przepraszamy, strona której szukasz nie istnieje. Wróć na stronę główną SITK RP Oddział w Koszalinie."
        canonical="/404"
      />
      <Navbar />

      <section className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Big 404 */}
          <div className="relative mb-8">
            <span
              className="font-serif font-bold select-none pointer-events-none"
              style={{
                fontSize: "clamp(8rem, 20vw, 16rem)",
                lineHeight: 1,
                background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--gold, 43 74% 49%)) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.15,
              }}
            >
              404
            </span>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-gold" />
                <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
                  Błąd
                </span>
                <div className="w-8 h-[2px] bg-gold" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Strona nie istnieje
              </h1>
            </div>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Przepraszamy – strona, której szukasz, nie została znaleziona. Mogła zostać
            przeniesiona, usunięta lub adres URL jest nieprawidłowy.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Strona główna
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8" onClick={() => window.history.back()}>
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Wróć wstecz
              </button>
            </Button>
          </div>

          {/* Quick links */}
          <div className="border-t border-border pt-10">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest font-medium">
              Może Cię zainteresować
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
                  className="px-5 py-2 rounded-full border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact hint */}
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4 text-gold" />
            <span>Potrzebujesz pomocy?&nbsp;</span>
            <Link to="/kontakt" className="text-primary hover:underline font-medium">
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
