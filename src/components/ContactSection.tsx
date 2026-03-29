import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Kontakt
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Skontaktuj się z nami
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Masz pytania dotyczące naszych usług lub chcesz dołączyć do Stowarzyszenia? 
              Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Adres biura</h4>
                  <p className="text-muted-foreground">
                    ul. Kupiecka 5<br />
                    75-671 Koszalin
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+48943455266" className="hover:text-primary transition-colors">
                      (94) 34 55 266
                    </a>
                    <br />
                    <a href="tel:+48943424001" className="hover:text-primary transition-colors">
                      (94) 34 24 001
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <a 
                    href="mailto:biuro@koszalin.sitk.eu" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    biuro@koszalin.sitk.eu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Godziny pracy</h4>
                  <p className="text-muted-foreground">
                    Poniedziałek - Piątek<br />
                    8:00 - 16:00
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 space-y-6 shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Imię i nazwisko
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Imię i nazwisko"
                  className="rounded-xl border-border/50 bg-muted/30 h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="E-mail"
                  className="rounded-xl border-border/50 bg-muted/30 h-12"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Telefon"
                  className="rounded-xl border-border/50 bg-muted/30 h-12"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Temat
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Temat"
                  className="rounded-xl border-border/50 bg-muted/30 h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Wiadomość
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Wpisz swoją wiadomość tutaj."
                  className="rounded-xl border-border/50 bg-muted/30 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl h-12 font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wysyłanie..." : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Wyślij wiadomość
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
