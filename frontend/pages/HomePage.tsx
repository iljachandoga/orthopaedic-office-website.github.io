import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const features = [
    {
      icon: Award,
      title: "Expert Care",
      description: "Board-certified orthopaedic surgeon with years of experience"
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Personalized treatment plans tailored to your specific needs"
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Efficient scheduling and minimal wait times"
    },
    {
      icon: Shield,
      title: "Advanced Techniques",
      description: "Latest surgical and non-surgical treatment options"
    }
  ];

  const services = [
    "Joint Replacement Surgery",
    "Sports Medicine",
    "Arthroscopic Surgery",
    "Fracture Care",
    "Spine Surgery",
    "Hand & Wrist Surgery"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Orthopaedic Care with Dr. Ilja Chandoga
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive orthopaedic surgery and treatment for all your musculoskeletal needs. 
                Get back to doing what you love with personalized, expert care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/appointment">
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Why Choose Dr. Chandoga?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Board-certified orthopaedic surgeon
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Minimally invasive surgical techniques
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Comprehensive rehabilitation programs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Same-day appointments available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Excellence in Orthopaedic Care
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. Chandoga combines years of experience with the latest medical advances 
              to provide exceptional orthopaedic care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Orthopaedic Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From routine check-ups to complex surgical procedures, Dr. Chandoga offers 
                a full range of orthopaedic services to help you maintain an active lifestyle.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Schedule Your Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Take the first step towards better orthopaedic health. Schedule a consultation 
                with Dr. Chandoga to discuss your treatment options.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">New Patient Consultation</span>
                  <span className="font-semibold text-blue-600">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Same-day Appointments</span>
                  <span className="font-semibold text-blue-600">Often Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Emergency Care</span>
                  <span className="font-semibold text-blue-600">24/7</span>
                </div>
              </div>
              <Button className="w-full mt-6" asChild>
                <Link to="/appointment">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Back to Your Active Life?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don't let pain hold you back. Contact Dr. Chandoga's office today to schedule 
            your consultation and start your journey to recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/appointment">Schedule Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
