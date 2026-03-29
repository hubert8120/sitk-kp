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
      <motion.div initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0.25, 0.1, 0.25, 1]
    }}>
        <span className="inline-block text-gold-light uppercase tracking-[0.3em] text-sm font-medium mb-6">
          Od 1952 roku
        </span>
      </motion.div>

      <motion.h1 initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }} className="font-serif text-3xl md:text-4xl lg:text-6xl font-semibold text-white leading-tight mb-6">
        Stowarzyszenie Inżynierów<br />
        i Techników Komunikacji RP<br />
        <span className="text-white">Oddział w Koszalinie</span>
      </motion.h1>

      <motion.p initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }} className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
        Organizacja naukowo-techniczna działająca na rzecz rozwoju transportu
        i infrastruktury drogowej w Polsce
      </motion.p>

      <motion.div initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }} className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
          <Link to="/o-nas">
            Poznaj nas
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 rounded-full px-8">
          <Link to="/kontakt">Skontaktuj się</Link>
        </Button>
      </motion.div>

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