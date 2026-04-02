import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-professionals.jpg";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img width={1920} height={1024} loading="lazy"
          src={ctaBackground} srcSet={`${ctaBackground} 1x, ${ctaBackground} 2x`}
          alt="Inżynierowie drogowi podczas pracy terenowej"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {/* Frosted glass card */}
          <div className="backdrop-blur-md bg-slate-900/50 rounded-3xl p-8 md:p-10 border border-white/10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Dołącz do grona{" "}
              <span className="italic text-gold-light">profesjonalistów</span>
            </h2>
            <p className="text-white/80 mt-6 text-lg leading-relaxed">
              Stań się częścią społeczności inżynierów i techników, którzy od ponad 70 lat 
              kształtują polską infrastrukturę drogową. Zyskaj dostęp do szkoleń, konferencji 
              i sieci kontaktów branżowych.
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full pl-6 pr-2 py-6 group"
              >
                <Link to="/czlonkostwo" className="flex items-center gap-3">
                  <span>Zostań członkiem</span>
                  <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/80 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
