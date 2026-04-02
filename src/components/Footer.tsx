import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import sitkLogo from "@/assets/sitk-logo.png";
import rodoPdf from "@/assets/news/Informacja_RODO_Oddział w Koszalinie.pdf";
import statutPdf from "@/assets/Statut SITK RP.pdf";

export const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img width={604} height={615} loading="lazy" 
                src={sitkLogo} srcSet={`${sitkLogo} 1x, ${sitkLogo} 2x`} 
                alt="SITK RP Oddział w Koszalinie" 
                className="w-12 h-12 rounded-full shadow-lg"
              />
              <div>
                <span className="font-serif text-xl font-semibold">SITK RP</span>
                <p className="text-xs text-primary-foreground/70">Oddział w Koszalinie</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Stowarzyszenie Inżynierów i Techników Komunikacji Rzeczpospolitej Polskiej - 
              organizacja naukowo-techniczna działająca na rzecz transportu od 1952 roku.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Szybkie linki</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/o-nas" className="text-primary-foreground/80 hover:text-gold-light transition-colors text-sm">
                  Poznaj historię i władze oddziału
                </Link>
              </li>
              <li>
                <Link to="/uslugi" className="text-primary-foreground/80 hover:text-gold-light transition-colors text-sm">
                  Usługi drogowe i nadzory
                </Link>
              </li>
              <li>
                <Link to="/szkolenia" className="text-primary-foreground/80 hover:text-gold-light transition-colors text-sm">
                  Szkolenia drogowe i kursy BHP
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-primary-foreground/80 hover:text-gold-light transition-colors text-sm">
                  Skontaktuj się z nami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-gold-light flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  ul. Kupiecka 5<br />
                  75-671 Koszalin
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-light flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+48943455266" className="text-primary-foreground/80 hover:text-gold-light transition-colors block">
                    (94) 34 55 266
                  </a>
                  <a href="tel:+48943424001" className="text-primary-foreground/80 hover:text-gold-light transition-colors block">
                    (94) 34 24 001
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-light flex-shrink-0" />
                <a href="mailto:biuro@koszalin.sitk.eu" className="text-primary-foreground/80 hover:text-gold-light transition-colors text-sm">
                  biuro@koszalin.sitk.eu
                </a>
              </li>
            </ul>
          </div>

          {/* Bank Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Dane bankowe</h4>
            <p className="text-primary-foreground/80 text-sm mb-2">
              POLSKA KASA OPIEKI SA<br />
              ODDZIAŁ KOSZALIN
            </p>
            <p className="text-gold-light font-mono text-sm">
              17 1240 3653 1111<br />
              0000 4188 5648
            </p>
          </div>

          {/* Dokumenty */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Dokumenty</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={rodoPdf} 
                  download="Informacja_RODO_Oddział_w_Koszalinie.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-foreground/80 hover:text-gold-light transition-colors text-sm"
                >
                  Pobierz informację RODO (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex justify-center items-center">
          <p className="text-primary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} SITK RP Oddział w Koszalinie. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>;
};