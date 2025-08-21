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
                <h3 className="text-xl font-bold">Dr. Ilja Chandoga</h3>
                <p className="text-gray-300">Orthopaedic Surgery</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing comprehensive orthopaedic care with a focus on patient-centered treatment 
              and the latest surgical techniques.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Dr. Chandoga
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@chandogaortho.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Medical Center Drive<br />
                  Suite 200<br />
                  City, State 12345
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Dr. Ilja Chandoga Orthopaedic Surgery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
