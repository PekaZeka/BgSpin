import { Check, Star, Trophy, Users, Euro } from 'lucide-react';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Recreational Play',
      subtitle: 'BgSpin Table Rental',
      icon: Users,
      price: '8',
      unit: '/hour',
      popular: false,
      description: 'Perfect for casual play with friends and family',
      features: [
        'Professional tournament tables',
        'Equipment rental available',
        'Daily 9 AM - 10 PM access',
        'Both locations available',
        'Group discounts available'
      ],
      cta: 'Book Table',
      color: 'forest-green'
    },
    {
      name: 'Personal Training',
      subtitle: 'Professional Coaching',
      icon: Star,
      price: '25',
      unit: '/hour',
      popular: true,
      description: 'One-on-one coaching with certified professionals',
      features: [
        'Certified professional coaches',
        'Customized training programs',
        'Technique and strategy focus',
        'Video analysis available',
        'Flexible scheduling',
        'Progress tracking'
      ],
      cta: 'Book Session',
      color: 'emerald'
    },
    {
      name: 'Table Tennis School',
      subtitle: 'Školica stonog tenisa',
      icon: Trophy,
      price: '50',
      unit: '/month',
      popular: false,
      description: 'Structured learning program for beginners',
      features: [
        'Wednesday 19:00-20:00',
        'Saturday 09:00-10:00',
        'Beginner-friendly curriculum',
        'Small class sizes',
        'Equipment provided',
        'Monthly assessments'
      ],
      cta: 'Enroll Now',
      color: 'forest-green'
    }
  ];


  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-green-900 mb-6">
            Our <span className="text-emerald-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent, competitive pricing for all our table tennis services. 
            Choose the perfect option for your skill level and goals.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  isPopular ? 'border-2 border-emerald-600 bg-emerald-50' : 'border border-gray-200'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                      plan.color === 'emerald' ? 'bg-emerald-600' : 'bg-forest-green-600'
                    }`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-forest-green-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                    <div className="flex items-center justify-center">
                      <Euro className="h-6 w-6 text-gray-600 mr-1" />
                      <span className="text-4xl font-bold text-forest-green-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.unit}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      plan.color === 'emerald'
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-forest-green-600 hover:bg-forest-green-700 text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;