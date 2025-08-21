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
          title: "Message Sent",
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
        title: "Error",
        description: "There was an error sending your message. Please try again.",
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
      title: "Phone",
      details: ["(555) 123-4567", "Emergency: (555) 123-4568"],
      description: "Call us during business hours or for emergencies"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@chandogaortho.com"],
      description: "Send us a message and we'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Medical Center Drive", "Suite 200", "City, State 12345"],
      description: "Visit our modern, fully-equipped facility"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM", "Sun: Closed"],
      description: "We're here when you need us most"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Dr. Chandoga's Office
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about your orthopaedic care? We're here to help. 
            Contact us today to learn more about our services or schedule an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
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

                  <div>
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

                  <div>
                    <Label>Preferred Contact Method *</Label>
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
                        <Label htmlFor="phone-contact">Phone</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Please describe your question or concern..."
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
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
                Emergency Information
              </h3>
              <p className="text-red-800 mb-4">
                If you are experiencing a medical emergency, please call 911 immediately. 
                For urgent orthopaedic concerns after hours, call our emergency line at (555) 123-4568.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-red-700">
                <div>
                  <h4 className="font-medium mb-1">Call 911 for:</h4>
                  <ul className="space-y-1">
                    <li>• Severe trauma or injury</li>
                    <li>• Suspected fractures with deformity</li>
                    <li>• Loss of consciousness</li>
                    <li>• Severe bleeding</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call our emergency line for:</h4>
                  <ul className="space-y-1">
                    <li>• Severe pain after surgery</li>
                    <li>• Signs of infection</li>
                    <li>• Concerns about post-operative care</li>
                    <li>• Urgent orthopaedic questions</li>
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
