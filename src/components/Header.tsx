import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:0535451234";
  };

  const menuItems = [
    { label: "ראשי", id: "hero" },
    { label: "שירותים", id: "services" },
    { label: "למה אנחנו", id: "trust" },
    { label: "פרויקטים", id: "gallery" },
    { label: "המלצות", id: "testimonials" },
    { label: "צור קשר", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Phone Button - Left Side */}
        <button
          onClick={handlePhoneCall}
          className="hidden lg:flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105 font-bold text-lg shadow-lg"
        >
          <Phone className="h-6 w-6" />
          <span dir="ltr">053-545-1234</span>
        </button>

        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-accent to-secondary bg-clip-text text-transparent">
            ניסים ונפלאות
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent transition-colors font-medium text-right"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
