import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import bridgeProject from "@/assets/bridge-project.jpg";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const Contact = () => (
  <main className="min-h-screen">
    <SEO
      title="Kontakt – SITK RP Oddział w Koszalinie"
      description="Skontaktuj się z SITK RP Koszalin: ul. Kupiecka 5, tel. 509 366 661 lub 696 991 006, biuro@sitkkoszalin.pl. Godziny pracy: pon-pt 8:00-16:00."
      canonical="/kontakt"
      breadcrumbs={[
        { name: "Strona główna", item: "/" },
        { name: "Kontakt", item: "/kontakt" }
      ]}
    />
    <Navbar />
    <section 
      className="min-h-[70vh] flex items-end justify-center pb-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bridgeProject})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground font-bold tracking-wide">Kontakt</h1>
        <p className="text-primary-foreground/80 mt-4 text-lg">Skontaktuj się z nami</p>
      </div>
    </section>
    <ContactSection />
    {/* Map Section */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
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
              Siedziba biura
            </span>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-12 h-[2px] bg-gold origin-left" 
            />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-center">
            Jak do nas trafić?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 text-center max-w-2xl">
            ul. Kupiecka 5, 75-671 Koszalin
          </p>
          
          <div className="w-full max-w-5xl h-[400px] md:h-[500px] overflow-hidden rounded-3xl border border-muted/30 shadow-2xl relative bg-muted/10">
            <iframe 
              src="https://maps.google.com/maps?q=56MW%2BW4%20Koszalin+(Kupiecka%205,%2075-671%20Koszalin)&t=k&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Siedziba SITK RP Oddział w Koszalinie"
              className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none z-10" />
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </main>
);

export default Contact;
