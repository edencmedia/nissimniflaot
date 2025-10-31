import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const phone = "972535451234";
    const message = encodeURIComponent("שלום, אני מעוניין לשמוע עוד על שירותי השיפוצים שלכם");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="פתח וואטסאפ"
    >
      <MessageCircle className="h-8 w-8" />
    </button>
  );
};

export default WhatsAppButton;
