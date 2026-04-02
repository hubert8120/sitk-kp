import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollSection, StaggerContainer, StaggerItem } from "@/components/animations/ScrollSection";
import constructionImage from "@/assets/construction-work.jpg";
import bridgeImage from "@/assets/bridge-project.jpg";

const projects = [
  {
    image: constructionImage,
    imageWidth: 1024,
    imageHeight: 1024,
    category: "Budownictwo",
    title: "Projektowanie i nadzory",
    description: "Kompleksowa modernizacja infrastruktury drogowej z zastosowaniem nowoczesnych technologii.",
    link: "/realizacje/modernizacja-drog",
  },
  {
    image: bridgeImage,
    imageWidth: 1024,
    imageHeight: 1024,
    category: "Infrastruktura",
    title: "Projekty mostowe",
    description: "Realizacja i nadzór nad budową obiektów mostowych na terenie województwa.",
    link: "/realizacje/projekty-mostowe",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Realizacje
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
              Nasze projekty
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/uslugi">
              Wszystkie realizacje
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </ScrollSection>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem
              key={project.title}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img loading="lazy"
                  src={project.image} srcSet={`${project.image} 1x, ${project.image} 2x`}
                  width={project.imageWidth} height={project.imageHeight}
                  alt={`Realizacja SITK: ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-gold-light uppercase tracking-[0.15em] text-xs font-medium">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-primary-foreground p-0 mt-4 hover:text-gold-light"
                >
                  <Link to={project.link}>
                    Dowiedz się więcej
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
