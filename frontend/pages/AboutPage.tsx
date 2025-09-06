import { Award, GraduationCap, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const qualifications = [
    "Certifikovaný v ortopedickej chirurgii",
    "Špecializácia v športovej medicíne",
    "Člen Slovenskej ortopedickej spoločnosti",
    "Člen Európskej spoločnosti pre športovú medicínu"
  ];

  const achievements = [
    {
      icon: Award,
      title: "Výnimočnosť v starostlivosti o pacientov",
      description: "Ocenený za vynikajúce hodnotenia spokojnosti pacientov"
    },
    {
      icon: GraduationCap,
      title: "Sústavné vzdelávanie",
      description: "Pravidelne navštevuje konferencie a školenia o najnovších technikách"
    },
    {
      icon: Users,
      title: "Zapojenie do komunity",
      description: "Aktívny v miestnych programoch športovej medicíny a prevencie úrazov"
    },
    {
      icon: Heart,
      title: "Prístup zameraný na pacienta",
      description: "Venuje sa poskytovaniu súcitnej, personalizovanej starostlivosti"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            O MUDr. Iljovi Chandogovi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certifikovaný ortopedický chirurg venujúci sa poskytovaniu výnimočnej starostlivosti 
            a pomoci pacientom vrátiť sa k ich aktívnemu životnému štýlu.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Profesionálne pozadie</h2>
              <p className="text-gray-600 mb-6">
                MUDr. Ilja Chandoga je certifikovaný ortopedický chirurg s rozsiahlymi skúsenosťami 
                v liečbe širokého spektra ochorení pohybového aparátu. Získal titul lekára na 
                prestížnej lekárskej fakulte a absolvoval rezidenciu v ortopedickej chirurgii 
                v poprednom medicínskom centre.
              </p>
              
              <p className="text-gray-600 mb-6">
                Po rezidencii MUDr. Chandoga pokračoval v špecializačnom výcviku v športovej medicíne, 
                kde získal špecializované odborné znalosti v liečbe športových úrazov a vykonávaní 
                minimálne invazívnych procedúr. Toto dodatočné vzdelanie mu umožňuje ponúknuť 
                pacientom najmodernejšie možnosti liečby.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Filozofia starostlivosti</h3>
              <p className="text-gray-600 mb-6">
                MUDr. Chandoga verí v prístup k ortopedickej starostlivosti zameraný na pacienta. 
                Venuje čas na vypočutie obáv každého pacienta a spolupracuje na vytvorení 
                liečebných plánov, ktoré sú v súlade s ich cieľmi a životným štýlom. Či už lieči 
                profesionálneho športovca alebo víkendového bojovníka, MUDr. Chandoga sa zaväzuje 
                pomôcť každému pacientovi dosiahnuť optimálnu úroveň funkcie.
              </p>

              <p className="text-gray-600">
                Jeho prax zdôrazňuje chirurgické aj nechirurgické možnosti liečby, vždy najprv 
                skúma konzervatívne liečby, keď je to vhodné. Keď je chirurgia nevyhnutná, 
                MUDr. Chandoga využíva najnovšie minimálne invazívne techniky na skrátenie 
                doby zotavovania a zlepšenie výsledkov.
              </p>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Kvalifikácie a certifikáty
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
                  Vzdelanie
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Titul lekára</h4>
                    <p className="text-gray-600">Univerzitná lekárska fakulta</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Rezidencia</h4>
                    <p className="text-gray-600">Ortopedická chirurgia<br />Hlavné medicínske centrum</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Špecializácia</h4>
                    <p className="text-gray-600">Športová medicína<br />Inštitút športovej medicíny</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Záväzok k výnimočnosti
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
            Mimo operačnej sály
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Keď sa nestará o pacientov, MUDr. Chandoga rád zostáva aktívny prostredníctvom 
            rôznych športov a outdoorových aktivít. Toto osobné chápanie dôležitosti 
            fyzickej aktivity poháňa jeho vášeň pomáhať pacientom vrátiť sa k aktivitám, 
            ktoré milujú. Je tiež aktívne zapojený do komunitných zdravotných iniciatív 
            a programov prevencie úrazov pre miestnych športovcov.
          </p>
        </div>
      </div>
    </div>
  );
}
