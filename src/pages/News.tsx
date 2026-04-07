import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollSection, StaggerContainer, StaggerItem } from "@/components/animations/ScrollSection";
import { NewsCard } from "@/components/NewsCard";
import { newsItems } from "@/data/newsData";
import heroNewsImage from "@/assets/hero-news.jpg";
import { useSearchParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const News = () => {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("article");
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Aktualności – wyjazdy i wydarzenia SITK"
        description="Najnowsze wyjazdy techniczne, forum drogownictwa i wydarzenia branżowe organizowane przez SITK RP Oddział w Koszalinie."
        canonical="/aktualnosci"
        breadcrumbs={[
          { name: "Strona główna", item: "/" },
          { name: "Aktualności", item: "/aktualnosci" }
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-end justify-center pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img width={1920} height={1080} loading="lazy" 
            src={heroNewsImage} srcSet={`${heroNewsImage} 1x, ${heroNewsImage} 2x`} 
            alt="Aktualności SITK" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground font-bold tracking-wide">
            Aktualności
          </h1>
          <p className="text-primary-foreground/80 mt-4 text-lg">
            Najnowsze wydarzenia i wyjazdy techniczne
          </p>
        </motion.div>
      </section>

      {/* News Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollSection className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest mb-4 block">
              Nasze wydarzenia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">
              Wyjazdy i wydarzenia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Poznaj nasze ostatnie wyjazdy techniczne i wydarzenia organizowane przez SITK RP Oddział w Koszalinie
            </p>
          </ScrollSection>

          <StaggerContainer className="grid gap-12 lg:gap-16" staggerDelay={0.2}>
            {newsItems.map((item) => (
              <StaggerItem key={item.id}>
                <NewsCard item={item} defaultExpanded={item.id === articleId} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground font-bold mb-6">
              Dołącz do naszych wyjazdów
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Zostań członkiem SITK RP i bierz udział w naszych wyjazdy technicznych, 
              szkoleniach i wydarzeniach branżowych.
            </p>
            <Link
              to="/czlonkostwo"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Zostań członkiem
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default News;
