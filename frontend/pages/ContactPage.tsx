import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import backend from "~backend/client";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email" as "email" | "phone"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await backend.practice.submitContact(formData);
      
      if (response.success) {
        toast({
          title: "Správa odoslaná",
          description: response.message,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredContact: "email"
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Chyba",
        description: "Pri odosielaní vašej správy nastala chyba. Skúste to znovu.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefón",
      details: ["+421 555 123 456", "Pohotovosť: +421 555 123 789"],
      description: "Zavolajte nám počas pracovných hodín alebo v núdzových prípadoch"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@chandogaortho.sk"],
      description: "Pošlite nám správu a odpovieme do 24 hodín"
    },
    {
      icon: MapPin,
      title: "Adresa",
      details: ["Zdravotnícke centrum 123", "Apartmán 200", "Bratislava 811 01"],
      description: "Navštívte naše moderné, plne vybavené zariadenie"
    },
    {
      icon: Clock,
      title: "Hodiny",
      details: ["Po-Pi: 8:00 - 17:00", "So: 9:00 - 13:00", "Ne: Zatvorené"],
      description: "Sme tu, keď nás najviac potrebujete"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kontaktujte ordinaciju MUDr. Chandogu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Máte otázky o svojej ortopedickej starostlivosti? Sme tu, aby sme pomohli. 
            Kontaktujte nás ešte dnes, aby ste sa dozvedeli viac o našich službách alebo si naplánovali termín.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Pošlite nám správu</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Meno a priezvisko *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mailová adresa *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefónne číslo *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Preferovaný spôsob kontaktu *</Label>
                    <RadioGroup
                      value={formData.preferredContact}
                      onValueChange={(value) => handleInputChange("preferredContact", value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-contact" />
                        <Label htmlFor="email-contact">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-contact" />
                        <Label htmlFor="phone-contact">Telefón</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message">Správa *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Prosím, opíšte svoju otázku alebo problém..."
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Odosielanie..."
                    ) : (
                      <>
                        Odoslať správu
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-900 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Information */}
        <div className="mt-16">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                Informácie o pohotovosti
              </h3>
              <p className="text-red-800 mb-4">
                Ak máte zdravotnú pohotovosť, okamžite zavolajte 155. 
                Pre naliehavé ortopedické problémy mimo pracovných hodín zavolajte našu pohotovostnú linku +421 555 123 789.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-red-700">
                <div>
                  <h4 className="font-medium mb-1">Volajte 155 pre:</h4>
                  <ul className="space-y-1">
                    <li>• Závažné trauma alebo úraz</li>
                    <li>• Podozrenie na zlomeniny s deformáciou</li>
                    <li>• Strata vedomia</li>
                    <li>• Silné krvácanie</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Volajte našu pohotovostnú linku pre:</h4>
                  <ul className="space-y-1">
                    <li>• Silnú bolesť po operácii</li>
                    <li>• Príznaky infekcie</li>
                    <li>• Obavy o pooperačnú starostlivosť</li>
                    <li>• Naliehavé ortopedické otázky</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
