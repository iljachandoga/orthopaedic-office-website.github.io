import { useState } from "react";
import { Calendar, Clock, User, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import backend from "~backend/client";

export default function AppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
    isNewPatient: true
  });

  const timeSlots = [
    "8:00", "8:30", "9:00", "9:30", "10:00", "10:30",
    "11:00", "11:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30"
  ];

  const appointmentReasons = [
    "Úvodná konzultácia",
    "Kontrolné vyšetrenie",
    "Pooperačná kontrola",
    "Vyšetrenie úrazu",
    "Bolesť kĺbov",
    "Športový úraz",
    "Bolesť chrbta/krku",
    "Druhý názor",
    "Iné"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await backend.practice.requestAppointment(formData);
      
      if (response.success) {
        toast({
          title: "Požiadavka o termín odoslaná",
          description: response.message,
        });
        setFormData({
          patientName: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          reason: "",
          isNewPatient: true
        });
      }
    } catch (error) {
      console.error("Error submitting appointment request:", error);
      toast({
        title: "Chyba",
        description: "Pri odosielaní vašej požiadavky o termín nastala chyba. Skúste to znovu.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Naplánujte si termín
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Požiadajte o termín u MUDr. Chandogu. Kontaktujeme vás na potvrdenie 
            vášho preferovaného dátumu a času.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="mr-2 h-6 w-6 text-blue-600" />
                  Formulár žiadosti o termín
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Patient Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="mr-2 h-5 w-5 text-blue-600" />
                      Údaje pacienta
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="patientName">Meno a priezvisko *</Label>
                        <Input
                          id="patientName"
                          type="text"
                          value={formData.patientName}
                          onChange={(e) => handleInputChange("patientName", e.target.value)}
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
                    <div className="mt-4">
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
                    <div className="mt-4 flex items-center space-x-2">
                      <Checkbox
                        id="newPatient"
                        checked={formData.isNewPatient}
                        onCheckedChange={(checked) => handleInputChange("isNewPatient", checked as boolean)}
                      />
                      <Label htmlFor="newPatient">Som nový pacient</Label>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-blue-600" />
                      Preferovaný čas termínu
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferovaný dátum *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          min={today}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferovaný čas *</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => handleInputChange("preferredTime", value)}
                          required
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Vyberte čas" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Reason for Visit */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-blue-600" />
                      Dôvod návštevy
                    </h3>
                    <div className="mb-4">
                      <Label htmlFor="reason">Vyberte dôvod termínu *</Label>
                      <Select
                        value={formData.reason}
                        onValueChange={(value) => handleInputChange("reason", value)}
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Vyberte dôvod návštevy" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentReasons.map((reason) => (
                            <SelectItem key={reason} value={reason}>
                              {reason}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Odosielanie požiadavky..."
                    ) : (
                      <>
                        Požiadať o termín
                        <CheckCircle className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Čo očakávať</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Odoslať požiadavku</h4>
                    <p className="text-sm text-gray-600">Vyplňte formulár žiadosti o termín so svojimi údajmi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Potvrdzujúci hovor</h4>
                    <p className="text-sm text-gray-600">Náš personál vás kontaktuje do 24 hodín</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Váš termín</h4>
                    <p className="text-sm text-gray-600">Príďte 15 minút pred termínom na registráciu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informácie pre nových pacientov</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ak ste nový pacient, prineste si prosím:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    Občiansky preukaz a kartu poistenca
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    Zoznam súčasných liekov
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    Predchádzajúce snímky (RTG, MRI, atď.)
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    Odporúčací list (ak je potrebný)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ordinačné hodiny</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pondelok - Piatok</span>
                    <span className="font-medium">8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sobota</span>
                    <span className="font-medium">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nedeľa</span>
                    <span className="font-medium">Zatvorené</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Pohotovosť:</strong> +421 555 123 789
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
