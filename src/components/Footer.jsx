import { PawPrint, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <PawPrint className="w-8 h-8" />
              <span className="text-xl font-semibold">
                Practo for Animals
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Because Every Paw Deserves the Best Care. Connecting pet parents with trusted animal-care services across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#explore" className="text-white/80 hover:text-white transition-colors duration-200">Explore Care</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors duration-200">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors duration-200">Veterinary Clinics</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors duration-200">Animal Hospitals</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors duration-200">Pet Boarding</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors duration-200">Diagnostics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span>contact@practoforanimals.example.com</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Practo for Animals. All rights reserved. Demo project for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
