import { Hammer, Wrench, PaintBucket, Home, Layers, Drill } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "תשתיות ושלד",
    description: "אינסטלציה, צנרת, עבודות גגות, חשמל והרחבות",
  },
  {
    icon: PaintBucket,
    title: "גמר ועיצוב",
    description: "ריצוף, חיפויים, טיח וצבע, גבס ונגרות",
  },
  {
    icon: Home,
    title: "שיפוץ חדרי אמבטיה",
    description: "שיפוץ מקלחות ואמבטיות ברמה הגבוהה ביותר",
  },
  {
    icon: Layers,
    title: "שיפוץ מטבחים",
    description: "תכנון וביצוע מטבחים מודרניים ומעוצבים",
  },
  {
    icon: Hammer,
    title: "שיפוץ דירות מלא",
    description: "חידוש מבנים ישנים והפיכתם לדירות חלומות",
  },
  {
    icon: Drill,
    title: "עבודות נגרות ועץ",
    description: "ארונות, תקרות אקוסטיות וחלוקת חללים",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            המומחיות שלנו
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            הפרויקט שלך בראש שקט
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
