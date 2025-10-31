import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "השם הוא שדה חובה" }).max(100),
  phone: z.string().trim().min(9, { message: "מספר טלפון לא תקין" }).max(15),
  email: z.string().trim().email({ message: "כתובת אימייל לא תקינה" }).max(255).optional().or(z.literal("")),
  message: z.string().trim().min(10, { message: "הודעה קצרה מדי" }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      const phoneNumber = "972535451234";
      const text = encodeURIComponent(
        `שלום, שמי ${formData.name}.\n\nמספר טלפון: ${formData.phone}\n${formData.email ? `אימייל: ${formData.email}\n` : ""}\nפרטי הפרויקט:\n${formData.message}`
      );
      
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
      
      toast({
        title: "תודה על הפניה!",
        description: "אנחנו ניצור איתך קשר בהקדם",
      });
      
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.issues[0];
        toast({
          title: "שגיאה בטופס",
          description: firstError.message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            מתחילים את השינוי?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            צרו קשר עכשיו
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                דרכי התקשרות
              </h3>
              
              <div className="space-y-6">
                <a
                  href="tel:0535451234"
                  className="flex items-center gap-4 p-6 bg-card rounded-xl border-2 border-border hover:border-accent transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center transition-all">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">טלפון</p>
                    <p className="text-lg font-bold text-foreground" dir="ltr">053-545-1234</p>
                  </div>
                </a>

                <a
                  href="mailto:nissanswisa11@gmail.com"
                  className="flex items-center gap-4 p-6 bg-card rounded-xl border-2 border-border hover:border-accent transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center transition-all">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted-foreground mb-1">אימייל</p>
                    <p className="text-base font-bold text-foreground break-all">nissanswisa11@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/972535451234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-card rounded-xl border-2 border-border hover:border-accent transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center transition-all">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">וואטסאפ</p>
                    <p className="text-lg font-bold text-foreground">שלח הודעה</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 bg-muted/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">אזורי שירות</h4>
              <p className="text-muted-foreground leading-relaxed">
                אנחנו פועלים באזורי הדרום והמרכז של הארץ, ובמקרים מסוימים גם בצפון.
                ניתן לתאם פגישת ייעוץ ללא התחייבות.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-lg border border-border">
              <div className="space-y-2">
                <Label htmlFor="name">שם מלא *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="הזן את שמך המלא"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">טלפון *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="05X-XXX-XXXX"
                  required
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">אימייל (אופציונלי)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">תיאור הפרויקט *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="ספר לנו על הפרויקט שלך..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="secondary" size="lg" className="w-full">
                שלח פנייה
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
