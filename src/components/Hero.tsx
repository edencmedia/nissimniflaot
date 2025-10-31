import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-renovation.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bedroomImg from "@/assets/project-bedroom.jpg";
import livingImg from "@/assets/project-living.jpg";

const images = [heroImage, bathroomImg, kitchenImg, bedroomImg, livingImg];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const handleContact = () => {
    const phone = "0535451234";
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = () => {
    const phone = "972535451234";
    const message = encodeURIComponent("שלום, אני מעוניין לשמוע עוד על שירותי השיפוצים שלכם");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="hero" className="relative h-[50vh] min-h-[500px] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center ${
              index === currentImageIndex ? "animate-zoom" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            ניסים ונפלאות
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-medium">
            משפצים בסטנדרט הגבוה ביותר, בלי הפתעות בדרך
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            כל סוגי עבודות השיפוץ והתשתיות — מא' ועד גמר, עם שקיפות מלאה ועמידה בלוחות זמנים
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleContact}
              className="text-lg"
            >
              <Phone className="h-5 w-5" />
              שיחת ייעוץ אישית
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWhatsApp}
              className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <MessageSquare className="h-5 w-5" />
              וואטסאפ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
