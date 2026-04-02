import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import sitkLogo from "@/assets/sitk-logo.png";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/szkolenia", label: "Szkolenia" },
  { href: "/aktualnosci", label: "Aktualności" },
  { href: "/czlonkostwo", label: "Członkostwo" },
  { href: "/kontakt", label: "Kontakt" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Main navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <nav
          className={cn(
            "container mx-auto px-6 py-3 flex items-center justify-between rounded-full transition-all duration-500",
            "bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl"
          )}
        >
          <button 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
              }
            }}
          >
            <img width={604} height={615} loading="lazy" 
              src={sitkLogo} srcSet={`${sitkLogo} 1x, ${sitkLogo} 2x`} 
              alt="SITK RP Oddział w Koszalinie" 
              className="w-12 h-12 rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-semibold text-white drop-shadow-md">SITK RP</span>
              <p className="text-xs text-white/90 drop-shadow-sm">Oddział w Koszalinie</p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.filter(link => link.href !== "/kontakt").map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300",
                  location.pathname === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className={cn(
                "ml-2 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300",
                "bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/50"
              )}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-base font-medium tracking-wide transition-colors hover:text-primary py-2",
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border space-y-2">
                  <a href="tel:+48943455266" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                    <Phone className="w-4 h-4" />
                    <span>(94) 34 55 266</span>
                  </a>
                  <a href="mailto:biuro@koszalin.sitk.eu" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                    <Mail className="w-4 h-4" />
                    <span>biuro@koszalin.sitk.eu</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
