import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ParallaxHero } from "@/components/animations/ParallaxHero";
import heroImage from "@/assets/hero-highway.jpg";
export const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };
  return <ParallaxHero backgroundImage={heroImage} backgroundAlt="Nowoczesna infrastruktura drogowa" parallaxSpeed={-0.5}>
      <div className="hero-fade-in" style={{ animationDelay: '0.1s' }}>
        <span className="inline-block text-gold-light uppercase tracking-[0.3em] text-sm font-medium mb-6">
          Od 1952 roku
        </span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-semibold text-white leading-tight mb-6 hero-fade-in" style={{ animationDelay: '0.2s' }}>
        Stowarzyszenie Inżynierów<br />
        i Techników Komunikacji RP<br />
        <span className="text-white">Oddział w Koszalinie</span>
      </h1>

      <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 hero-fade-in" style={{ animationDelay: '0.3s' }}>
        SITK RP Oddział w Koszalinie prowadzi profesjonalne szkolenia oraz usługi techniczne
        dla branży drogowej i transportu od 1952 roku.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center hero-fade-in" style={{ animationDelay: '0.4s' }}>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
          <Link to="/o-nas">
            Poznaj nas
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 rounded-full px-8">
          <Link to="/kontakt">Skontaktuj się</Link>
        </Button>
      </div>

      {/* Scroll indicator */}
      <motion.button onClick={scrollToContent} initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-20" aria-label="Przewiń w dół">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }}>
          
        </motion.div>
      </motion.button>
    </ParallaxHero>;
};