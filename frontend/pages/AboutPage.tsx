import { Award, GraduationCap, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const qualifications = [
    "Board Certified in Orthopaedic Surgery",
    "Fellowship in Sports Medicine",
    "Member of American Academy of Orthopaedic Surgeons",
    "Member of American Orthopaedic Society for Sports Medicine"
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excellence in Patient Care",
      description: "Recognized for outstanding patient satisfaction scores"
    },
    {
      icon: GraduationCap,
      title: "Continuing Education",
      description: "Regularly attends conferences and training on latest techniques"
    },
    {
      icon: Users,
      title: "Community Involvement",
      description: "Active in local sports medicine and injury prevention programs"
    },
    {
      icon: Heart,
      title: "Patient-First Approach",
      description: "Dedicated to providing compassionate, personalized care"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Dr. Ilja Chandoga
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Board-certified orthopaedic surgeon dedicated to providing exceptional care 
            and helping patients return to their active lifestyles.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Background</h2>
              <p className="text-gray-600 mb-6">
                Dr. Ilja Chandoga is a board-certified orthopaedic surgeon with extensive experience 
                in treating a wide range of musculoskeletal conditions. He completed his medical 
                degree at a prestigious medical school and went on to complete his orthopaedic 
                surgery residency at a leading medical center.
              </p>
              
              <p className="text-gray-600 mb-6">
                Following his residency, Dr. Chandoga pursued fellowship training in sports medicine, 
                where he gained specialized expertise in treating athletic injuries and performing 
                minimally invasive procedures. This additional training allows him to offer the 
                most advanced treatment options to his patients.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Philosophy of Care</h3>
              <p className="text-gray-600 mb-6">
                Dr. Chandoga believes in a patient-centered approach to orthopaedic care. He takes 
                the time to listen to each patient's concerns and works collaboratively to develop 
                treatment plans that align with their goals and lifestyle. Whether treating a 
                professional athlete or a weekend warrior, Dr. Chandoga is committed to helping 
                every patient achieve their optimal level of function.
              </p>

              <p className="text-gray-600">
                His practice emphasizes both surgical and non-surgical treatment options, always 
                exploring conservative treatments first when appropriate. When surgery is necessary, 
                Dr. Chandoga utilizes the latest minimally invasive techniques to reduce recovery 
                time and improve outcomes.
              </p>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Qualifications & Certifications
                </h3>
                <ul className="space-y-3">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-600">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Medical Degree</h4>
                    <p className="text-gray-600">University Medical School</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Residency</h4>
                    <p className="text-gray-600">Orthopaedic Surgery<br />Major Medical Center</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Fellowship</h4>
                    <p className="text-gray-600">Sports Medicine<br />Sports Medicine Institute</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Beyond the Operating Room
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            When not caring for patients, Dr. Chandoga enjoys staying active through various 
            sports and outdoor activities. This personal understanding of the importance of 
            physical activity drives his passion for helping patients return to the activities 
            they love. He is also actively involved in community health initiatives and 
            injury prevention programs for local athletes.
          </p>
        </div>
      </div>
    </div>
  );
}
