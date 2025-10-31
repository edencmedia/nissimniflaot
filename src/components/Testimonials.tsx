import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    name: "דוד כהן",
    project: "שיפוץ דירה מלא בתל אביב",
    text: "ניסים ונפלאות עשו לנו עבודה מדהימה! הפרויקט הסתיים בדיוק בזמן, והאיכות עלתה על כל הציפיות. ממליץ בחום!",
    rating: 5,
  },
  {
    name: "רחל לוי",
    project: "שיפוץ מטבח ואמבטיה באשדוד",
    text: "צוות מקצועי ואמין. היחס האישי והליווי לאורך כל הדרך עשו את כל הההבדל. התוצאה פשוט מושלמת!",
    rating: 5,
  },
  {
    name: "משה אברהם",
    project: "הרחבת בית בבאר שבע",
    text: "עבודה ברמה גבוהה מאוד, שקיפות מלאה וללא הפתעות. ניסים והצוות שלו הם אנשי מקצוע אמיתיים.",
    rating: 5,
  },
  {
    name: "שרה מזרחי",
    project: "חידוש דירה ישנה בראשון לציון",
    text: "הפכו לנו דירה ישנה ומוזנחת לבית חלומות! תודה על המסירות והמקצועיות.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            המלצות אמיתיות מלקוחות מרוצים
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl animate-scale-in">
            <Quote className="h-12 w-12 text-accent mb-6" />
            
            <div className="min-h-[200px]">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center gap-2 mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-accent text-2xl">★</span>
                ))}
              </div>
              
              <div>
                <p className="font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].project}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-accent text-accent-foreground rounded-full p-3 hover:scale-110 transition-transform shadow-lg"
            aria-label="המלצה קודמת"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-accent text-accent-foreground rounded-full p-3 hover:scale-110 transition-transform shadow-lg"
            aria-label="המלצה הבאה"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`עבור להמלצה ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
