import infrastructureImg from "@/assets/service-infrastructure.jpg";
import finishingImg from "@/assets/service-finishing.jpg";
import renovationImg from "@/assets/service-renovation.jpg";
import projectOffice from "@/assets/project-office.jpg";

const services = [
  {
    image: infrastructureImg,
    title: "תשתיות ושלד",
    description: "אינסטלציה, צנרת, עבודות גגות, חשמל, הרחבות",
  },
  {
    image: finishingImg,
    title: "גמר ועיצוב",
    description: "ריצוף, חיפויים, טיח וצבע, גבס, נגרות ועבודות עץ",
  },
  {
    image: renovationImg,
    title: "שיפוצים ממוקדים",
    description: "שיפוץ חדרי אמבטיה, מטבחים, דירות ישנות, חידוש מבנים",
  },
  {
    image: projectOffice,
    title: "עבודות מיוחדות",
    description: "תקרות אקוסטיות, חלוקת חללים, פתרונות מותאמים אישית",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            המומחיות שלנו
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            הפרויקט שלך בראש שקט
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up h-96 border-2 border-transparent hover:border-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-accent/90 group-hover:via-accent/60 transition-all duration-500" />
                
                <div className="relative h-full flex flex-col justify-end p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-1 w-16 bg-accent rounded-full mb-4" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 transform transition-all duration-500 group-hover:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
