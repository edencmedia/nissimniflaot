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
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            למה לבחור בניסים ונפלאות?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            זה לא רק שיפוץ, זו חוויה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent text-accent-foreground">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{factor.title}</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
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
