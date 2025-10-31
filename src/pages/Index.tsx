import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Hero />
      <Services />
      <Trust />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
