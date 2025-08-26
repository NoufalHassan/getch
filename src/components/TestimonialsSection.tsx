
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types/Types"; 

export const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "GTec's support made my publication possible – I felt guided every step of the way.",
      name: "A. Sharma",
      field: "Chemistry"
    },
    {
      quote: "The mentorship I received was invaluable. My thesis defense went smoothly thanks to their guidance.",
      name: "R. Patel",
      field: "Computer Science"
    },
    {
      quote: "Professional, confidential, and results-driven. GTec exceeded my expectations.",
      name: "M. Singh",
      field: "Biology"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent text-center mb-20">
          What Our Scholars Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-blue-600 font-medium">{testimonial.field}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
