import { Award, Clock, Shield, MapPin } from "lucide-react";

const trustFactors = [
  {
    icon: Award,
    title: "סטנדרט מקצועי גבוה",
    description: "ביצוע עבודות ברמה הגבוהה ביותר עם קפדנות מקסימלית על איכות",
  },
  {
    icon: Clock,
    title: "עמידה בלוחות זמנים",
    description: "תכנון וביצוע מדויקים לשמירה על לוח הזמנים שנקבע מראש",
  },
  {
    icon: Shield,
    title: "יחס אישי ושקיפות מלאה",
    description: "ליווי אישי ועדכון שוטף לאורך כל הפרויקט, ללא הפתעות",
  },
  {
    icon: MapPin,
    title: "זמינות רחבה",
    description: "פועלים באזור הדרום והמרכז, ובמקרים מסוימים גם בצפון",
  },
];

const Trust = () => {
  return (
    <section id="trust" className="relative py-24 bg-primary text-primary-foreground overflow-hidden pt-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/50 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            למה לבחור בניסים ונפלאות?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            זה לא רק שיפוץ, זו חוויה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <Icon className="h-16 w-16 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                  <p className="text-base opacity-90 leading-relaxed">
                    {factor.description}
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

export default Trust;
