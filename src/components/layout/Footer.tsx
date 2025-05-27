import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, AlertCircle, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-white">
                <AlertCircle size={20} />
              </div>
              <span className="font-heading font-bold text-xl">MedBedTrack</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Revolutionizing healthcare resource management with real-time bed tracking and resource allocation.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-neutral-700 hover:bg-primary-500 flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-neutral-700 hover:bg-primary-500 flex items-center justify-center transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-neutral-700 hover:bg-primary-500 flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Features', 'Hospitals', 'Admin Portal', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Privacy Policy', 'Terms of Service', 'FAQ', 'System Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">123 Healthcare Blvd, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:contact@medbedtrack.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  contact@medbedtrack.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © 2025 MedBedTrack. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;