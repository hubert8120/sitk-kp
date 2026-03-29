import { useEffect, useRef, useState } from "react";
import { useInView, useScroll, useTransform, MotionValue } from "framer-motion";

// Hook for fade-in section animations
export const useFadeInSection = (options?: { 
  threshold?: number; 
  triggerOnce?: boolean;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: options?.triggerOnce ?? true,
    amount: options?.threshold ?? 0.2
  });

  return { ref, isInView };
};

// Hook for parallax background effect
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return { ref, y, scrollYProgress };
};

// Hook for hero overlay text animation
export const useHeroTextAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  return { ref, opacity, y, scrollYProgress };
};

// Reduced motion check
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  
  return prefersReducedMotion;
};
