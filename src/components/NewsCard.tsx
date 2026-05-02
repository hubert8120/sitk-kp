import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  location: string;
  participants: number;
  category: "wyjazd" | "wydarzenie" | "informacja";
  images: string[];
  imagePositions?: (string | undefined)[];
  shortDescription: string;
  fullDescription: string | ReactNode;
  highlights: string[];
}

export const NewsCard = ({ item, defaultExpanded = false }: { item: NewsItem; defaultExpanded?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (defaultExpanded && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [defaultExpanded]);

  return (
    <article ref={cardRef} className="group relative">
      <div className="bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50">
        {/* Image Gallery */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <div className="absolute inset-0 flex">
            {item.images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="flex-1 relative overflow-hidden"
              >
                <img loading="lazy"
                  src={img} srcSet={`${img} 1x, ${img} 2x`}
                  width={1920} height={1080}
                  alt={`${item.title} - zdjęcie ${imgIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={item.imagePositions?.[imgIndex] ? { objectPosition: item.imagePositions[imgIndex] } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Category Badge */}
          <div className="absolute top-6 left-6 z-10">
            <span className="px-4 py-2 rounded-full bg-gold text-primary text-sm font-bold uppercase tracking-wider shadow-lg">
              {item.category === "wyjazd" ? "Wyjazd techniczny" : item.category === "informacja" ? "Informacja" : "Wydarzenie"}
            </span>
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-2 drop-shadow-lg">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-4 text-white/90 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {item.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {item.location}
              </span>
              {item.participants > 0 && (
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {item.participants} uczestników
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {item.shortDescription}
          </p>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
              Najważniejsze punkty programu
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.highlights.slice(0, isExpanded ? undefined : 4).map((highlight, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
              {!isExpanded && item.highlights.length > 4 && (
                <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-sm">
                  +{item.highlights.length - 4} więcej
                </span>
              )}
            </div>
          </div>

          {/* Expanded Content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 border-t border-border">
              {typeof item.fullDescription === "string" ? (
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {item.fullDescription}
                </p>
              ) : (
                <div className="text-muted-foreground leading-relaxed">
                  {item.fullDescription}
                </div>
              )}
            </div>
          </motion.div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group/btn"
          >
            <span>{isExpanded ? "Zwiń" : "Czytaj więcej"}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
        </div>
      </div>
    </article>
  );
};
