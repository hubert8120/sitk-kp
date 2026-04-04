import { ScrollSection } from "@/components/animations/ScrollSection";
import easterImage from "@/assets/wielkanoc.jpg";

export const EasterSection = () => {
  return (
    <section className="bg-navy py-12 md:py-20 overflow-hidden relative">
      {/* Decorative background elements to satisfy navy + black theme */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <ScrollSection className="flex justify-center items-center">
          <div className="relative w-full">
            {/* Elegant glow effect matching the site's premium feel */}
            <div className="absolute -inset-2 bg-gold/10 rounded-[2rem] blur-xl opacity-50" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img 
                src={easterImage} 
                alt="Życzenia Wielkanocne SITK RP Koszalin - Janusz Komorowski" 
                className="w-full h-auto object-cover md:object-contain block max-h-[90vh] mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};
