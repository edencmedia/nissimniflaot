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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg hover:shadow-glow transition-all duration-300 animate-fade-in-up h-80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
