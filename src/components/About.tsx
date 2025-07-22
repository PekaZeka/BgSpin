import { Users, Trophy, Target, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-green-900 mb-6">
            About STK <span className="text-emerald-600">Spark</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Belgrade's premier table tennis club, home to champions and dedicated to excellence 
            in competitive play, recreational activities, and comprehensive training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Club Philosophy */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-forest-green-900 mb-6">Our Philosophy</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At STK Spark, we believe table tennis is more than just a sport—it's a pathway to 
                personal growth, community connection, and competitive excellence. Our comprehensive 
                approach welcomes players of all skill levels, from curious beginners to 
                championship-bound athletes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We foster an environment where recreational players can enjoy the sport while 
                competitive athletes push their limits. Our training programs are designed to 
                develop not just technical skills, but also mental toughness, sportsmanship, 
                and lifelong passion for table tennis.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <Trophy className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-forest-green-900 mb-2">Super League</h4>
                <p className="text-sm text-gray-600">Women's team competing at Serbia's highest level</p>
              </div>
              <div className="bg-forest-green-50 p-6 rounded-lg text-center">
                <Target className="h-8 w-8 text-forest-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-forest-green-900 mb-2">Championships</h4>
                <p className="text-sm text-gray-600">Individual Belgrade & Serbia championship results</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/32301963/pexels-photo-32301963.jpeg?_gl=1*1328acf*_ga*MTkyNTQ4OTA2MS4xNzUzMDI0OTMw*_ga_8JE65Q40S6*czE3NTMwMjQ5MjkkbzEkZzEkdDE3NTMwMjQ5NzIkajE3JGwwJGgw&w=800&h=600&fit=crop"
                alt="STK Spark team training session"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coaches Section */}
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-forest-green-900 mb-6 sm:mb-8 text-center">Our Coaches</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Coach 1 */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-forest-green-900 mb-1 sm:mb-2">Nada Cvetković</h4>
                  <p className="text-emerald-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Head Coach</p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    With over two decades of coaching experience, Nada specializes in developing 
                    competitive players and has guided numerous athletes to national and international success.
                  </p>
                  <div className="flex items-center mt-3 sm:mt-4">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500 mr-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">Professional Certification • Competition Specialist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coach 2 */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-forest-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-forest-green-900 mb-1 sm:mb-2">Robert Fišer</h4>
                  <p className="text-emerald-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technical Director</p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Robert brings extensive technical expertise and modern training methodologies, 
                    focusing on skill development for players of all levels from beginners to advanced.
                  </p>
                  <div className="flex items-center mt-3 sm:mt-4">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500 mr-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">Technical Expert • Youth Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Club Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">2</div>
            <div className="text-gray-600 font-medium">Premium Locations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">8</div>
            <div className="text-gray-600 font-medium">Professional Tables</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">13</div>
            <div className="text-gray-600 font-medium">Hours Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;