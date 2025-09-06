import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">MUDr. Ilja Chandoga</h3>
                <p className="text-gray-300">Ortopedická chirurgia</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Poskytujeme komplexnú ortopedickú starostlivosť so zameraním na pacientov 
              a najnovšie chirurgické techniky.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Rýchle odkazy</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  O MUDr. Chandogovi
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Služby
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-300 hover:text-white transition-colors">
                  Objednať termín
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktné údaje</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+421 555 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@chandogaortho.sk</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Zdravotnícke centrum 123<br />
                  Apartmán 200<br />
                  Bratislava 811 01
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Po-Pi: 8:00 - 17:00</p>
                  <p>So: 9:00 - 13:00</p>
                  <p>Ne: Zatvorené</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 MUDr. Ilja Chandoga Ortopedická chirurgia. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}
