import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Bone, 
  Activity, 
  Zap, 
  Shield, 
  Heart, 
  Hand,
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Bone,
      title: "Joint Replacement Surgery",
      description: "Advanced hip, knee, and shoulder replacement procedures using the latest techniques and implants.",
      details: [
        "Total and partial joint replacements",
        "Minimally invasive techniques",
        "Computer-assisted surgery",
        "Rapid recovery protocols"
      ]
    },
    {
      icon: Activity,
      title: "Sports Medicine",
      description: "Comprehensive care for athletic injuries and performance optimization for athletes of all levels.",
      details: [
        "ACL and meniscus repair",
        "Rotator cuff surgery",
        "Concussion management",
        "Return-to-play protocols"
      ]
    },
    {
      icon: Zap,
      title: "Arthroscopic Surgery",
      description: "Minimally invasive procedures for joint problems with faster recovery times.",
      details: [
        "Knee arthroscopy",
        "Shoulder arthroscopy",
        "Hip arthroscopy",
        "Ankle arthroscopy"
      ]
    },
    {
      icon: Shield,
      title: "Fracture Care",
      description: "Expert treatment of broken bones and traumatic injuries with focus on optimal healing.",
      details: [
        "Emergency fracture care",
        "Complex fracture reconstruction",
        "Non-union treatment",
        "Pediatric fractures"
      ]
    },
    {
      icon: Heart,
      title: "Spine Surgery",
      description: "Treatment of spinal conditions including herniated discs, stenosis, and deformities.",
      details: [
        "Minimally invasive spine surgery",
        "Disc replacement",
        "Spinal fusion",
        "Decompression procedures"
      ]
    },
    {
      icon: Hand,
      title: "Hand & Wrist Surgery",
      description: "Specialized care for hand, wrist, and upper extremity conditions and injuries.",
      details: [
        "Carpal tunnel surgery",
        "Trigger finger treatment",
        "Fracture repair",
        "Tendon reconstruction"
      ]
    }
  ];

  const nonSurgicalTreatments = [
    "Physical therapy referrals",
    "Injection therapy",
    "Platelet-rich plasma (PRP)",
    "Bracing and orthotics",
    "Pain management",
    "Activity modification"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Orthopaedic Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive orthopaedic care from diagnosis to recovery, utilizing the latest 
            techniques and technologies to get you back to your active lifestyle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Non-Surgical Treatments */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Non-Surgical Treatments
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Not all orthopaedic conditions require surgery. Dr. Chandoga believes in 
                exploring conservative treatment options first whenever possible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nonSurgicalTreatments.map((treatment, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{treatment}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Treatment Philosophy
              </h3>
              <p className="text-gray-600 mb-4">
                Dr. Chandoga takes a comprehensive approach to treatment, considering all 
                options from conservative care to advanced surgical procedures.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Thorough evaluation and diagnosis</li>
                <li>• Conservative treatment when appropriate</li>
                <li>• Patient education and involvement</li>
                <li>• Personalized treatment plans</li>
                <li>• Focus on long-term outcomes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology & Techniques */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Advanced Technology & Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Minimally Invasive Surgery
                </h3>
                <p className="text-gray-600">
                  Smaller incisions, less pain, and faster recovery times through 
                  advanced surgical techniques.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Computer-Assisted Surgery
                </h3>
                <p className="text-gray-600">
                  Precision surgical planning and execution using the latest 
                  computer navigation systems.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Regenerative Medicine
                </h3>
                <p className="text-gray-600">
                  Cutting-edge treatments including PRP and stem cell therapy 
                  to promote natural healing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Treatment?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Chandoga to discuss your condition 
            and explore the best treatment options for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/appointment">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
