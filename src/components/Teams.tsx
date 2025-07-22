import { Trophy, Users, Star, Target, Medal, Crown } from 'lucide-react';

const Teams: React.FC = () => {
  const achievements = [
    {
      icon: Crown,
      title: 'Super League Serbia',
      description: "Women's team competing at the highest level",
      highlight: true
    },
    {
      icon: Medal,
      title: 'Individual Championships',
      description: 'Belgrade and Serbia championship results',
      highlight: false
    },
    {
      icon: Trophy,
      title: 'Team Competitions',
      description: 'Regular participation in league competitions',
      highlight: false
    },
    {
      icon: Star,
      title: 'Player Development',
      description: 'Producing competitive players at all levels',
      highlight: false
    }
  ];

  const players = [
    {
      name: 'Ana Marković',
      position: 'Team Captain',
      achievements: ['National Team Member', 'Super League Top Scorer'],
      image: 'https://contents.mediadecathlon.com/p2436685/k$69c5b91341733c9d294195c0312da4b3?format=auto&f=3000x0'
    },
    {
      name: 'Milica Petrovića',
      position: 'Senior Player',
      achievements: ['Belgrade Champion 2023', '10 Years Experience'],
      image: 'https://www.rts.rs/upload/thumbnail/2020/01/31/6452087_srbijatjpg'
    },
    {
      name: 'Jovana Nikolić',
      position: 'Rising Star',
      achievements: ['U21 National Champion', 'Quick Attack Specialist'],
      image: 'https://www.aljazeera.com/wp-content/uploads/2024/05/2023-09-26T125557Z_1759933313_UP1EJ9Q0ZX7H5_RTRMADP_3_GAMES-ASIA-1715670938.jpg?resize=1920%2C1080'
    }
  ];

  return (
    <section id="teams" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-green-900 mb-6">
            STK Spark <span className="text-emerald-600">Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our competitive teams represent the pinnacle of table tennis excellence in Serbia, 
            with our women's team competing in the Super League at the highest national level.
          </p>
        </div>

        {/* Super League Highlight */}
        <div className="bg-gradient-to-r from-emerald-600 to-forest-green-700 rounded-2xl p-8 lg:p-12 mb-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="h-12 w-12 text-gold-400" />
                <div>
                  <h3 className="text-3xl font-bold">Women's Super League Team</h3>
                  <p className="text-emerald-200">Serbia's Highest Competition Level</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                STK Spark women's team proudly competes in the Super League of Serbia, representing 
                the absolute highest level of table tennis competition in the country. Our athletes 
                train year-round to maintain their elite status and competitive edge.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">1st</div>
                  <div className="text-sm text-emerald-200">League Division</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">8</div>
                  <div className="text-sm text-emerald-200">Team Players</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">15+</div>
                  <div className="text-sm text-emerald-200">Years Competing</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://sport360.com/wp-content/uploads/2016/08/GettyImages-590461086.jpg"
                alt="STK Spark Women's Super League Team"
                className="rounded-xl shadow-2xl w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-gold-500 text-forest-green-900 px-3 py-1 rounded-full text-sm font-bold">
                SUPER LEAGUE
              </div>
            </div>
          </div>
        </div>

        {/* Team Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-forest-green-900 mb-8 text-center">Team Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105 ${
                    achievement.highlight
                      ? 'bg-gradient-to-b from-gold-100 to-gold-200 border-2 border-gold-300'
                      : 'bg-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                    achievement.highlight ? 'bg-gold-500' : 'bg-emerald-600'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      achievement.highlight ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <h4 className="text-lg font-bold text-forest-green-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Players */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-forest-green-900 mb-8 text-center">Featured Players</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-forest-green-900 mb-2">{player.name}</h4>
                  <p className="text-emerald-600 font-medium mb-4">{player.position}</p>
                  <div className="space-y-2">
                    {player.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-gold-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Men's Team */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-forest-green-600 rounded-full p-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-green-900">Men's Team</h3>
                <p className="text-gray-600">Competitive League Participation</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our men's team competes in regional and national competitions, focusing on player 
              development and competitive excellence. We welcome players of all skill levels 
              who are committed to improving their game and representing STK Spark with pride.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Target className="h-4 w-4 text-emerald-600" />
                <span className="text-gray-700">Regional league competitions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-4 w-4 text-emerald-600" />
                <span className="text-gray-700">Individual championship support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-4 w-4 text-emerald-600" />
                <span className="text-gray-700">Professional coaching available</span>
              </div>
            </div>
            <button className="bg-forest-green-600 hover:bg-forest-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Join Men's Team
            </button>
          </div>

          {/* Women's Team Details */}
          <div className="bg-gradient-to-br from-emerald-50 to-forest-green-50 rounded-xl p-8 border-2 border-emerald-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-emerald-600 rounded-full p-3">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-green-900">Women's Super League Team</h3>
                <p className="text-emerald-600 font-semibold">Elite Competition Level</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our women's team represents the pinnacle of competitive table tennis in Serbia. 
              Competing in the Super League requires dedication, skill, and commitment to excellence. 
              We provide the highest level of coaching and support for our elite athletes.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Trophy className="h-4 w-4 text-gold-500" />
                <span className="text-gray-700">Super League Serbia competition</span>
              </div>
              <div className="flex items-center space-x-3">
                <Trophy className="h-4 w-4 text-gold-500" />
                <span className="text-gray-700">Professional coaching staff</span>
              </div>
              <div className="flex items-center space-x-3">
                <Trophy className="h-4 w-4 text-gold-500" />
                <span className="text-gray-700">National championship preparation</span>
              </div>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Team Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;