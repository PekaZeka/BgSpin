import React from 'react';
import { Target, Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-forest-green-900 via-forest-green-800 to-forest-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gold-400/10 rounded-lg">
                <Target className="h-8 w-8 text-gold-400" />
              </div>
              <span className="text-white font-bold text-xl leading-none">
                BgSpin & <span className="text-emerald-400">STK Spark</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Belgrade's premier table tennis destination featuring world-class facilities, 
              Super League champions, and comprehensive training programs for all skill levels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-emerald-400/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Locations', id: 'locations' },
                { label: 'Services', id: 'services' },
                { label: 'Teams', id: 'teams' },
                { label: 'Gallery', id: 'gallery' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 block text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-emerald-400/30 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                'Recreational Table Play',
                'Personal Training',
                'Table Tennis School',
                'Team Memberships'
              ].map((service) => (
                <li key={service} className="flex items-center space-x-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-emerald-400/30 pb-2">
              Contact Info
            </h3>
            <div className="space-y-6">
              {/* BgSpin 1 */}
              <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="p-1 bg-emerald-400/20 rounded">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">BgSpin 1</p>
                    <p className="text-gray-300 text-xs">Борска 92f, Rakovica</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 ml-7">
                  <Phone className="h-3 w-3 text-emerald-400" />
                  <span className="text-gray-300 text-xs">060-418-99-11</span>
                </div>
              </div>

              {/* BgSpin 2 */}
              <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="p-1 bg-emerald-400/20 rounded">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">BgSpin 2</p>
                    <p className="text-gray-300 text-xs">Dragoslava Srejovića 2</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 ml-7">
                  <Phone className="h-3 w-3 text-emerald-400" />
                  <span className="text-gray-300 text-xs">061-305-6427</span>
                </div>
              </div>

              {/* General Contact */}
              <div className="pt-4 border-t border-forest-green-700 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="p-1 bg-emerald-400/20 rounded">
                    <Mail className="h-3 w-3 text-emerald-400" />
                  </div>
                  <span className="text-gray-300 text-xs">bobi.fiser@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-1 bg-emerald-400/20 rounded">
                    <Clock className="h-3 w-3 text-emerald-400" />
                  </div>
                  <span className="text-gray-300 text-xs">Daily: 9:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gradient-to-r from-transparent via-forest-green-700 to-transparent">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BgSpin & STK Spark. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/bgspin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/stksparkbeograd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;