import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bathroom1 from "@/assets/project-bathroom-1.jpg";
import bathroom2 from "@/assets/project-bathroom-2.jpg";
import lobby1 from "@/assets/project-lobby-1.jpg";
import lobby2 from "@/assets/project-lobby-2.jpg";
import lobby3 from "@/assets/project-lobby-3.jpg";
import outdoor1 from "@/assets/project-outdoor-1.jpg";
import outdoor2 from "@/assets/project-outdoor-2.jpg";
import outdoor3 from "@/assets/project-outdoor-3.jpg";
import shed from "@/assets/project-shed.jpg";

const projects = [
  {
    images: [bathroom1, bathroom2],
    title: "שיפוץ חדרי אמבטיה",
    category: "אמבטיה",
    location: "תל אביב",
  },
  {
    images: [lobby1, lobby2, lobby3],
    title: "עיצוב לובי ומסדרונות",
    category: "מסחרי",
    location: "רמת גן",
  },
  {
    images: [outdoor1, outdoor2, outdoor3],
    title: "מטבחי חוץ ופרגולות",
    category: "חוץ",
    location: "הרצליה",
  },
  {
    images: [shed],
    title: "מבנה עץ בחצר",
    category: "חוץ",
    location: "באר שבע",
  },
];

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 bg-muted/30 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              מבט מקרוב
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              פרויקטים שביצענו
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(index)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Always visible label in corner */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent/30">
                  <p className="text-accent font-semibold text-sm mb-0.5">
                    {project.title}
                  </p>
                  <p className="text-white/80 text-xs">
                    {project.location}
                  </p>
                </div>

                {/* Image count badge */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <ChevronLeft className="h-3 w-3 text-white/80" />
                    <span className="text-white text-xs font-medium">{project.images.length} תמונות</span>
                    <ChevronRight className="h-3 w-3 text-white/80" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedProject !== null && (
            <div className="relative">
              {projects[selectedProject].images.length > 1 ? (
                <Carousel className="w-full" dir="ltr">
                  <CarouselContent>
                    {projects[selectedProject].images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <img
                          src={image}
                          alt={`${projects[selectedProject].title} - תמונה ${idx + 1}`}
                          className="w-full h-auto max-h-[70vh] object-contain bg-black"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              ) : (
                <img
                  src={projects[selectedProject].images[0]}
                  alt={projects[selectedProject].title}
                  className="w-full h-auto"
                />
              )}
              <div className="p-6 bg-background">
                <p className="text-sm text-accent font-medium mb-2">
                  {projects[selectedProject].category}
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {projects[selectedProject].title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
