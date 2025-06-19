import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Ready to Begin Your Ph.D. with Confidence?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Take the first step towards your academic success
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
          Book a Free Consultation
        </Button>
        <p className="text-blue-200 mt-6 text-lg">No obligation – just friendly advice</p>
      </div>
    </section>
  );
};


