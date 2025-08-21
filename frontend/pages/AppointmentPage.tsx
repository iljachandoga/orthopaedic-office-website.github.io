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
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const appointmentReasons = [
    "Initial consultation",
    "Follow-up appointment",
    "Post-surgical check-up",
    "Injury evaluation",
    "Joint pain",
    "Sports injury",
    "Back/neck pain",
    "Second opinion",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await backend.practice.requestAppointment(formData);
      
      if (response.success) {
        toast({
          title: "Appointment Requested",
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
        title: "Error",
        description: "There was an error submitting your appointment request. Please try again.",
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
            Schedule an Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Request an appointment with Dr. Chandoga. We'll contact you to confirm 
            your preferred date and time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="mr-2 h-6 w-6 text-blue-600" />
                  Appointment Request Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Patient Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="mr-2 h-5 w-5 text-blue-600" />
                      Patient Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="patientName">Full Name *</Label>
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
                        <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="phone">Phone Number *</Label>
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
                      <Label htmlFor="newPatient">I am a new patient</Label>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-blue-600" />
                      Preferred Appointment Time
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
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
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => handleInputChange("preferredTime", value)}
                          required
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a time" />
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
                      Reason for Visit
                    </h3>
                    <div className="mb-4">
                      <Label htmlFor="reason">Select reason for appointment *</Label>
                      <Select
                        value={formData.reason}
                        onValueChange={(value) => handleInputChange("reason", value)}
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select reason for visit" />
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
                      "Submitting Request..."
                    ) : (
                      <>
                        Request Appointment
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
                <CardTitle className="text-lg">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Submit Request</h4>
                    <p className="text-sm text-gray-600">Fill out the appointment form with your information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Confirmation Call</h4>
                    <p className="text-sm text-gray-600">Our staff will contact you within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Your Appointment</h4>
                    <p className="text-sm text-gray-600">Arrive 15 minutes early for check-in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">New Patient Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you're a new patient, please bring:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    Photo ID and insurance card
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    List of current medications
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    Previous imaging (X-rays, MRI, etc.)
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    Referral letter (if applicable)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency:</strong> (555) 123-4568
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
