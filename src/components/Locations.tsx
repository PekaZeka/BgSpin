import React, { useState } from 'react';
import { MapPin, Clock, Car, Phone, Star } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  features: string[];
  tables: number;
  hours: string;
  parking: string;
  image: string;
  mapUrl: string;
}

const Locations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string>('slodes');

  const locations: Location[] = [
    {
      id: 'slodes',
      name: 'BgSpin 1',
      address: 'Борска 92f, Rakovica, Belgrade',
      phone: '060-418-99-11',
      features: ['4 Professional Tables', 'LED Lighting', 'Air Conditioning', 'Changing Rooms', 'Equipment Rental'],
      tables: 10,
      hours: '9:00 - 22:00',
      parking: 'Free parking available',
      image: 'https://images.pexels.com/photos/32301963/pexels-photo-32301963.jpeg?_gl=1*1328acf*_ga*MTkyNTQ4OTA2MS4xNzUzMDI0OTMw*_ga_8JE65Q40S6*czE3NTMwMjQ5MjkkbzEkZzEkdDE3NTMwMjQ5NzIkajE3JGwwJGgw&w=800&h=600&fit=crop',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4843.748362396512!2d20.45860477739763!3d44.75622478039512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71a8a83b8ba3%3A0xdf4d83642513dab6!2sBorska%2092f%2C%20Beograd%2011090!5e1!3m2!1sen!2srs!4v1753026831661!5m2!1sen!2srs'
    },
    {
      id: 'dragoslava',
      name: 'BgSpin 2',
      address: 'Dragoslava Srejovića 2, Belgrade',
      phone: '061-305-6427',
      features: ['4 Professional Tables', 'Modern Lighting', 'Climate Control', 'Lounge Area', 'Pro Shop'],
      tables: 5,
      hours: '9:00 - 22:00',
      parking: 'Street parking available',
      image: 'https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4838.717182184423!2d20.484203077399258!3d44.81621457643788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a95afaf2883%3A0xcc1319e616aa2315!2sDragoslava%20Srejovi%C4%87a%202%2C%20Beograd%2011000!5e1!3m2!1sen!2srs!4v1753026753782!5m2!1sen!2srs'
    },
  ];

  const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0];

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-green-900 mb-6">
            Our <span className="text-emerald-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Two premium table tennis facilities in Belgrade, each equipped with professional-grade 
            tables and modern amenities for the ultimate playing experience.
          </p>
        </div>

        {/* Location Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(location.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeLocation === location.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>

        {/* Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-forest-green-900 mb-4">
                {currentLocation.name}
              </h3>
              <div className="flex items-start space-x-3 text-gray-700 mb-4">
                <MapPin className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span>{currentLocation.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 mb-4">
                <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span>{currentLocation.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 mb-4">
                <Clock className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span>Daily: {currentLocation.hours}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Car className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span>{currentLocation.parking}</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-semibold text-forest-green-900 mb-4">Facilities & Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentLocation.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                    <Star className="h-4 w-4 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{currentLocation.tables}</div>
                <div className="text-forest-green-900 font-medium">Professional Tables</div>
              </div>
              <div className="bg-forest-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-forest-green-600 mb-2">13</div>
                <div className="text-forest-green-900 font-medium">Hours Open Daily</div>
              </div>
            </div>
          </div>

          {/* Location Image and Map */}
          <div className="space-y-6">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <img
                src={currentLocation.image}
                alt={`${currentLocation.name} facility`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>

            {/* Google Maps Embed */}
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={currentLocation.mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title={`Map of ${currentLocation.name}`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;