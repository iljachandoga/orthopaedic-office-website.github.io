import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const features = [
    {
      icon: Award,
      title: "Odborná starostlivosť",
      description: "Certifikovaný ortopedický chirurg s dlhoročnými skúsenosťami"
    },
    {
      icon: Users,
      title: "Zameranie na pacienta",
      description: "Personalizované liečebné plány prispôsobené vašim potrebám"
    },
    {
      icon: Clock,
      title: "Včasné služby",
      description: "Efektívne plánovanie a minimálne čakacie doby"
    },
    {
      icon: Shield,
      title: "Pokročilé techniky",
      description: "Najnovšie chirurgické i nechirurgické možnosti liečby"
    }
  ];

  const services = [
    "Náhrada kĺbov",
    "Športová medicína",
    "Artroskopická chirurgia",
    "Liečba zlomenín",
    "Operácie chrbtice",
    "Chirurgia ruky a zápästia"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Odborná ortopedická starostlivosť s MUDr. Iljom Chandogom
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Komplexná ortopedická chirurgia a liečba pre všetky vaše pohybové potreby. 
                Vráťte sa k tomu, čo máte radi s personalizovanou, odbornou starostlivosťou.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/appointment">
                    Objednať termín
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/services">Zistiť viac</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Prečo si vybrať MUDr. Chandogu?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Certifikovaný ortopedický chirurg
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Minimálne invazívne chirurgické techniky
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Komplexné rehabilitačné programy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Termíny v ten istý deň k dispozícii
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
              Excelencie v ortopedickej starostlivosti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              MUDr. Chandoga spája dlhoročné skúsenosti s najnovšími medicínskymi pokrokmi 
              na poskytovanie výnimočnej ortopedickej starostlivosti.
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
                Komplexné ortopedické služby
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Od rutinných kontrol až po zložité chirurgické zákroky, MUDr. Chandoga ponúka 
                celý rad ortopedických služieb na udržanie aktívneho životného štýlu.
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
                  Zobraziť všetky služby
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Naplánujte si konzultáciu
              </h3>
              <p className="text-gray-600 mb-6">
                Urobte prvý krok k lepšiemu ortopedickému zdraviu. Naplánujte si konzultáciu 
                s MUDr. Chandogom na prediskutovanie možností liečby.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Konzultácia pre nových pacientov</span>
                  <span className="font-semibold text-blue-600">Dostupná</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Termíny v ten istý deň</span>
                  <span className="font-semibold text-blue-600">Často dostupné</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Pohotovostná starostlivosť</span>
                  <span className="font-semibold text-blue-600">24/7</span>
                </div>
              </div>
              <Button className="w-full mt-6" asChild>
                <Link to="/appointment">Objednať teraz</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pripravení vrátiť sa k aktívnemu životu?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Nenechajte sa zadržať bolesťou. Kontaktujte ordinačné MUDr. Chandogu ešte dnes, 
            naplánujte si konzultáciu a začnite svoju cestu k uzdraveniu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/appointment">Naplánujte termín</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Kontaktujte nás</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
