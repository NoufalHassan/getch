
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
    },
    {
    quote: "GTEC provided end-to-end research support, which led to a successful publication in IEEE.",
    name: "Sanjay Verma",
    field: "Management, Chennai, India, 2019"
  },
  {
    quote: "GTEC assisted in literature review and methodology, which led to a successful publication in IEEE.",
    name: "Sanjay Verma",
    field: "Computer Science, Delhi, India, 2024"
  },
  {
    quote: "GTEC ensured my paper met all journal requirements, which led to a successful publication in SCI Q1.",
    name: "Sanjay Verma",
    field: "Robotics, Kochi, India, 2025"
  },
  {
    quote: "GTEC ensured my paper met all journal requirements, which led to a successful publication in SCI Q1.",
    name: "Farida Khan",
    field: "Data Science, Gujarat, India, 2022"
  },
  {
    quote: "GTEC supported me in MATLAB/Python implementation, which led to a successful publication in Wiley.",
    name: "Pooja Sharma",
    field: "Law, Kochi, India, 2016"
  },
  {
    quote: "GTEC supported me in MATLAB/Python implementation, which led to a successful publication in Taylor & Francis.",
    name: "Aditya Jain",
    field: "Healthcare Research, Kochi, India, 2015"
  },
  {
    quote: "GTEC guided me in writing my proposal and thesis, which led to a successful publication in Taylor & Francis.",
    name: "Anil Kumar",
    field: "Computer Science, Pune, India, 2015"
  },
  {
    quote: "GTEC ensured my paper met all journal requirements, which led to a successful publication in IEEE.",
    name: "Ritika Agarwal",
    field: "Data Science, Hyderabad, India, 2020"
  },
  {
    quote: "GTEC assisted in literature review and methodology, which led to a successful publication in IEEE.",
    name: "Vivek S",
    field: "Environmental Engineering, Bangalore, India, 2017"
  },
  {
    quote: "GTEC helped me draft a high-quality manuscript, which led to a successful publication in Scopus.",
    name: "Arvind Nair",
    field: "Philosophy, Coimbatore, India, 2019"
  },
  {
    quote: "GTEC assisted in literature review and methodology, which led to a successful publication in Taylor & Francis.",
    name: "Rakesh Bhatia",
    field: "Healthcare Research, Delhi, India, 2019"
  },
  {
    quote: "GTEC provided end-to-end research support, which led to a successful publication in Taylor & Francis.",
    name: "Seema Rani",
    field: "Law, Lucknow, India, 2017"
  },
  {
    quote: "GTEC helped me overcome rejection and resubmit successfully, which led to a successful publication in Wiley.",
    name: "Harish Patel",
    field: "Electrical Engineering, Delhi, India, 2025"
  },
  {
    quote: "GTEC guided me in writing my proposal and thesis, which led to a successful publication in SCI Q1.",
    name: "Rekha Menon",
    field: "Healthcare Research, Bangalore, India, 2021"
  },
  {
    quote: "GTEC helped me structure my research work, which led to a successful publication in SCI Q1.",
    name: "Nandita Rao",
    field: "Mechanical Engineering, Bangalore, India, 2023"
  },
  {
    quote: "GTEC supported me in MATLAB/Python implementation, which led to a successful publication in Elsevier.",
    name: "Meenal Kapoor",
    field: "Law, Mumbai, India, 2019"
  },
  {
    quote: "GTEC guided me in writing my proposal and thesis, which led to a successful publication in IEEE.",
    name: "Shweta Kulkarni",
    field: "Mechanical Engineering, Trivandrum, India, 2018"
  },
  {
    quote: "GTEC provided end-to-end research support, which led to a successful publication in Elsevier.",
    name: "Anil Kumar",
    field: "Psychology, Kochi, India, 2018"
  },
  {
    quote: "GTEC helped me overcome rejection and resubmit successfully, which led to a successful publication in SCI Q2.",
    name: "Sunil Mehta",
    field: "Robotics, Hyderabad, India, 2024"
  },
  {
    quote: "GTEC ensured my paper met all journal requirements, which led to a successful publication in Springer.",
    name: "Aarti Mishra",
    field: "Electrical Engineering, Chennai, India, 2025"
  },
  ];

    return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent text-center mb-12">
          What Our Scholars Say
        </h2>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group min-w-[300px] md:min-w-[350px] p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 snap-start"
            >
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
