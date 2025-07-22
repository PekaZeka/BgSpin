import React, { useState } from 'react';
import { Play, Users, GraduationCap, Trophy, Calendar, Clock, Euro } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState('recreational');

  const services = [
    {
      id: 'recreational',
      title: 'Recreational Play',
      subtitle: 'BgSpin Table & Equipment Rental',
      icon: Play,
      description: 'Enjoy casual table tennis with friends and family in our professional facilities.',
      features: [
        'Professional tournament tables',
        'Quality paddles and balls rental',
        'Daily availability 9 AM - 10 PM',
        'Both locations available',
        'Group discounts available'
      ],
      pricing: 'From €8/hour',
      image: 'https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'training',
      title: 'Personal Training',
      subtitle: 'Professional Coaching Sessions',
      icon: Users,
      description: 'One-on-one coaching with certified professionals to elevate your game.',
      features: [
        'Certified professional coaches',
        'Customized training programs',
        'Technique and strategy focus',
        'All skill levels welcome',
        'Flexible scheduling'
      ],
      pricing: 'From €25/hour',
      image: 'https://live.staticflickr.com/122/31583462585_554fbe8bc6_b.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'school',
      title: 'Table Tennis School',
      subtitle: 'Školica stonog tenisa',
      icon: GraduationCap,
      description: 'Structured learning program for beginners and intermediate players.',
      features: [
        'Wednesday 19:00-20:00',
        'Saturday 09:00-10:00',
        'Beginner-friendly curriculum',
        'Small class sizes',
        'Equipment provided'
      ],
      pricing: '€50/month',
      image: 'https://live.staticflickr.com/122/31583462585_554fbe8bc6_b.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'camps',
      title: 'Special Events',
      subtitle: 'Intensive Training Camps',
      icon: Trophy,
      description: 'Professional training camps with elite coaches and sparring partners.',
      features: [
        'Expert coaching staff',
        'Morning & afternoon sessions',
        '10 professional tables',
        'Super League sparring partners',
        'All skill levels welcome'
      ],
      pricing: '€150-230 per camp',
      image: 'https://live.staticflickr.com/122/31583462585_554fbe8bc6_b.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const currentService = services.find(s => s.id === activeService) || services[0];
  const IconComponent = currentService.icon;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-green-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From recreational play to professional training, we offer comprehensive table tennis 
            services for players of all skill levels and interests.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ServiceIcon className="h-5 w-5" />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-600 rounded-full p-3">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-forest-green-900">{currentService.title}</h3>
                  <p className="text-emerald-600 font-medium">{currentService.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{currentService.description}</p>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-xl font-semibold text-forest-green-900 mb-4">What's Included</h4>
              <div className="space-y-3">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Euro className="h-6 w-6 text-emerald-600" />
                <h4 className="text-xl font-semibold text-forest-green-900">Pricing</h4>
              </div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">{currentService.pricing}</div>
              <p className="text-gray-600 text-sm">Contact us for group rates and package deals</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book Now</span>
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Service Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full  object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Special Programs Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-forest-green-900 mb-8 text-center">Special Programs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Amateur League */}
            <div className="bg-gradient-to-r from-forest-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="h-8 w-8 text-gold-500" />
                <h4 className="text-xl font-bold text-forest-green-900">Amateur League</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Join our friendly competitive league where teams compete in a fun, supportive environment. 
                Perfect for showing off your skills and making new friends.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>March 6th start</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Register by March 1st</span>
                </div>
              </div>
              <button className="bg-forest-green-600 hover:bg-forest-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Register Team
              </button>
            </div>

            {/* Camp Details */}
            <div className="bg-gradient-to-r from-emerald-50 to-forest-green-50 p-8 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
                <h4 className="text-xl font-bold text-forest-green-900">Elite Training Camp</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Intensive training with world-class coaches including European medal winners and 
                World Championship participants. Train with Super League players.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div>• Morning: 09:30-11:30</div>
                <div>• Afternoon: 18:00-20:00</div>
                <div>• Two sessions: €230 • One session: €150</div>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Join Camp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;