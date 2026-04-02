import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-scroll-animation";

interface ParallaxHeroProps {
  backgroundImage: string;
  backgroundAlt: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  parallaxSpeed?: number;
}

export const ParallaxHero = ({
  backgroundImage,
  backgroundAlt,
  children,
  className = "",
  overlayClassName = "bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70",
  parallaxSpeed = -0.5
}: ParallaxHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Background parallax - moves slower than scroll
  const backgroundY = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", `${Math.abs(parallaxSpeed) * 50}%`]
  );

  // Text animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  if (prefersReducedMotion) {
    return (
      <section ref={ref} className={`relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden ${className}`}>
        <div className="absolute inset-0">
          <img loading="lazy" 
            src={backgroundImage} srcSet={`${backgroundImage} 1x, ${backgroundImage} 2x`} 
            width={1920} height={1080}
            alt={backgroundAlt} 
            className="w-full h-full object-cover" 
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={ref} 
      className={`relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <img loading="lazy" 
          src={backgroundImage} srcSet={`${backgroundImage} 1x, ${backgroundImage} 2x`} 
          width={1920} height={1080}
          alt={backgroundAlt} 
          className="w-full h-full object-cover scale-110" 
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </motion.div>

      {/* Animated Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ 
          opacity: textOpacity, 
          y: textY,
          scale: textScale
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};
