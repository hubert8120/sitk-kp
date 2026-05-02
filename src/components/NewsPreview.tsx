import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollSection, StaggerContainer, StaggerItem } from "@/components/animations/ScrollSection";
import { newsItems } from "@/data/newsData";

const previewNews = newsItems.slice(0, 2).map((item) => ({
  id: item.id,
  title: item.title,
  date: item.date,
  category: item.category,
  image: item.images[0],
  imagePosition: item.imagePositions?.[0],
}));

export const NewsPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Aktualności
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
              Najnowsze wydarzenia
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/aktualnosci">
              Więcej artykułów
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </ScrollSection>

        {/* News Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {previewNews.map((news) => (
            <StaggerItem
              key={news.id}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img loading="lazy"
                  src={news.image} srcSet={`${news.image} 1x, ${news.image} 2x`}
                  width={1920} height={1080}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={news.imagePosition ? { objectPosition: news.imagePosition } : undefined}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent rounded-3xl" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 text-gold-light text-xs uppercase tracking-[0.15em] font-medium mb-2">
                  <span>{news.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gold-light" />
                  <span>{news.category}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground">
                  {news.title}
                </h3>
                <Button
                  asChild
                  variant="link"
                  className="text-primary-foreground p-0 mt-4 hover:text-gold-light"
                >
                  <Link to={`/aktualnosci?article=${news.id}`}>
                    Czytaj więcej
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
