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
      title: "Náhrada kĺbov",
      description: "Pokročilé procedúry náhrady bedrového, kolenného a ramenného kĺbu s použitím najnovších techník a implantátov.",
      details: [
        "Úplné a čiastočné náhrady kĺbov",
        "Minimálne invazívne techniky",
        "Počítačom asistovaná chirurgia",
        "Protokoly rýchleho zotavovania"
      ]
    },
    {
      icon: Activity,
      title: "Športová medicína",
      description: "Komplexná starostlivosť o športové úrazy a optimalizácia výkonu pre športovcov všetkých úrovní.",
      details: [
        "Oprava predného skríženého väzu a menisku",
        "Chirurgia rotátorovej manžety",
        "Manažment otrasov mozgu",
        "Protokoly návratu do hry"
      ]
    },
    {
      icon: Zap,
      title: "Artroskopická chirurgia",
      description: "Minimálne invazívne procedúry pre problémy kĺbov s rýchlejšími dobami zotavovania.",
      details: [
        "Artroskopia kolena",
        "Artroskopia ramena",
        "Artroskopia bedra",
        "Artroskopia členka"
      ]
    },
    {
      icon: Shield,
      title: "Liečba zlomenín",
      description: "Odborná liečba zlomených kostí a traumatických úrazov so zameraním na optimálne hojenie.",
      details: [
        "Pohotovostná starostlivosť o zlomeniny",
        "Rekonštrukcia zložitých zlomenín",
        "Liečba nezrastania",
        "Detské zlomeniny"
      ]
    },
    {
      icon: Heart,
      title: "Chirurgia chrbtice",
      description: "Liečba ochorení chrbtice vrátane hernických diskov, stenózy a deformít.",
      details: [
        "Minimálne invazívna chirurgia chrbtice",
        "Náhrada disku",
        "Spondylodéza",
        "Dekompresné procedúry"
      ]
    },
    {
      icon: Hand,
      title: "Chirurgia ruky a zápästia",
      description: "Špecializovaná starostlivosť o stavy a úrazy ruky, zápästia a horných končatín.",
      details: [
        "Chirurgia karpálneho tunela",
        "Liečba triggerfinger",
        "Oprava zlomenín",
        "Rekonštrukcia šliach"
      ]
    }
  ];

  const nonSurgicalTreatments = [
    "Odporúčania na fyzioterapiu",
    "Injekčná terapia",
    "Terapia bohatou na trombocyty plazmu (PRP)",
    "Dlahové a ortotické pomôcky",
    "Manažment bolesti",
    "Modifikácia aktivity"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ortopedické služby
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Komplexná ortopedická starostlivosť od diagnózy po zotavenie, využívajúca najnovšie 
            techniky a technológie na vrátenie k aktívnemu životnému štýlu.
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
                Nechirurgické liečby
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nie všetky ortopedické stavy vyžadujú chirurgiu. MUDr. Chandoga verí v 
                skúmanie konzervatívnych možností liečby ako prvé, kedykoľvek je to možné.
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
                Filozofia liečby
              </h3>
              <p className="text-gray-600 mb-4">
                MUDr. Chandoga pristupuje k liečbe komplexne, zvažuje všetky 
                možnosti od konzervatívnej starostlivosti po pokročilé chirurgické procedúry.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Dôkladné vyšetrenie a diagnóza</li>
                <li>• Konzervatívna liečba, keď je to vhodné</li>
                <li>• Vzdelávanie pacientov a zapojenie</li>
                <li>• Personalizované liečebné plány</li>
                <li>• Zameranie na dlhodobé výsledky</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology & Techniques */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pokročilé technológie a techniky
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Minimálne invazívna chirurgia
                </h3>
                <p className="text-gray-600">
                  Menšie rezy, menej bolesti a rýchlejšie časy zotavovania pomocou 
                  pokročilých chirurgických techník.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Počítačom asistovaná chirurgia
                </h3>
                <p className="text-gray-600">
                  Presné chirurgické plánovanie a vykonávanie pomocou najnovších 
                  počítačových navigačných systémov.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Regeneratívna medicína
                </h3>
                <p className="text-gray-600">
                  Pokrokové liečby vrátane PRP a kmeňovej bunkovej terapie 
                  na podporu prirodzeného hojenia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pripravení začať svoju liečbu?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Naplánujte si konzultáciu s MUDr. Chandogom na prediskutovanie vášho stavu 
            a preskúmanie najlepších možností liečby pre vás.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/appointment">
                Naplánujte konzultáciu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Položte otázky</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
