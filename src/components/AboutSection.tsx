export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-12">About GTec</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            GTec exists to guide and empower doctoral researchers. With over a decade of experience, 
            we champion students through university selection, thesis development, and publication.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-xl font-semibold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              Supporting scholars with end-to-end Ph.D. services for over a decade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

