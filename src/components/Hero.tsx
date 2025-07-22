import { Play, Calendar, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900"
          style={{
            backgroundImage: `url('https://contents.mediadecathlon.com/p2436685/k$69c5b91341733c9d294195c0312da4b3?format=auto&f=3000x0?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            opacity: 0.9
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-gray-900/60 to-slate-800/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Play. Train. <span className="text-emerald-400 drop-shadow-lg">Conquer.</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Belgrade's premier table tennis destination featuring world-class facilities, 
            Super League champions, and comprehensive training programs for all skill levels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 flex items-center space-x-2 border border-emerald-500/20"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Start Playing</span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/80 text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 backdrop-blur-sm bg-white/5 hover:shadow-xl"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Book a Table</span>
            </button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-up text-center group">
              <div className="bg-emerald-600/20 backdrop-blur-sm rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-500/30 group-hover:bg-emerald-600/30 transition-all duration-300">
                <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 drop-shadow-sm">Super League Team</h3>
              <p className="text-sm sm:text-base text-gray-300 drop-shadow-sm">Women's STK Spark competes at Serbia's highest level</p>
            </div>

            <div className="animate-slide-up text-center group" style={{ animationDelay: '0.2s' }}>
              <div className="bg-emerald-600/20 backdrop-blur-sm rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-500/30 group-hover:bg-emerald-600/30 transition-all duration-300">
                <Play className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 drop-shadow-sm">Two Locations</h3>
              <p className="text-sm sm:text-base text-gray-300 drop-shadow-sm">Modern facilities in Rakovica with professional equipment</p>
            </div>

            <div className="animate-slide-up text-center group" style={{ animationDelay: '0.4s' }}>
              <div className="bg-emerald-600/20 backdrop-blur-sm rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-500/30 group-hover:bg-emerald-600/30 transition-all duration-300">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 drop-shadow-sm">Daily Access</h3>
              <p className="text-sm sm:text-base text-gray-300 drop-shadow-sm">Open 9 AM - 10 PM for recreational and competitive play</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;