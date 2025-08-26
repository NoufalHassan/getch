

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url({})] bg-cover bg-center opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Your Ph.D. Journey with 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> Expert Support</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Navigate your doctoral path with confidence through personalized guidance, 
            research support, and publication expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-5 py-3 text-lg font-semibold rounded-full border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};


