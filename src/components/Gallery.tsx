import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import bathroomImage from "@/assets/project-bathroom.jpg";
import kitchenImage from "@/assets/project-kitchen.jpg";
import bedroomImage from "@/assets/project-bedroom.jpg";
import livingImage from "@/assets/project-living.jpg";
import officeImage from "@/assets/project-office.jpg";
import heroImage from "@/assets/hero-renovation.jpg";

const projects = [
  {
    image: bathroomImage,
    title: "שיפוץ חדר אמבטיה יוקרתי",
    category: "אמבטיה",
    location: "תל אביב",
  },
  {
    image: kitchenImage,
    title: "מטבח מודרני ומעוצב",
    category: "מטבח",
    location: "ראשון לציון",
  },
  {
    image: bedroomImage,
    title: "חדר שינה אלגנטי",
    category: "חדר שינה",
    location: "אשדוד",
  },
  {
    image: livingImage,
    title: "סלון ופינת אוכל",
    category: "מרחב מגורים",
    location: "באר שבע",
  },
  {
    image: officeImage,
    title: "חדר עבודה עם נגרות בהתאמה אישית",
    category: "נגרות",
    location: "רמת גן",
  },
  {
    image: heroImage,
    title: "שיפוץ דירה מלא",
    category: "פרויקט מלא",
    location: "נתניה",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(index)}
              >
                <img
                  src={project.image}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedProject !== null && (
            <div className="relative">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-auto"
              />
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
