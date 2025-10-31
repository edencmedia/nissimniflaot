const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-accent to-secondary bg-clip-text text-transparent">
            ניסים ונפלאות
          </h1>
        </div>
        <button
          onClick={scrollToContact}
          className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          צור קשר
        </button>
      </div>
    </header>
  );
};

export default Header;
