const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ניסים ונפלאות</h3>
            <p className="opacity-90 leading-relaxed">
              קבלן שיפוצים מקצועי המתמחה בכל סוגי עבודות השיפוץ והתשתיות
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">קישורים מהירים</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  שירותים
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">
                  גלריה
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">יצירת קשר</h4>
            <ul className="space-y-2 opacity-90">
              <li dir="ltr">טלפון: 053-545-1234</li>
              <li>nissanswisa11@gmail.com</li>
              <li>אזורי שירות: דרום, מרכז וצפון</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="opacity-80 text-sm">
            © {new Date().getFullYear()} ניסים ונפלאות. כל הזכויות שמורות.
          </p>
          <p className="opacity-60 text-sm">
            עיצוב בהשראת{" "}
            <a
              href="https://radas.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              RADA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
