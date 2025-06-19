import { Users, Shield, CheckCircle, Award, Clock } from "lucide-react";
import type { Advantage } from "@/types/Types"; 

export const AdvantagesSection = () => {
  const advantages: Advantage[] = [
    {
      icon: Users,
      title: "Experienced Ph.D. Mentors",
      description: "Seasoned scholars guide students at every stage"
    },
    {
      icon: Shield,
      title: "100% Confidentiality",
      description: "No personal data shared, ensuring complete trust"
    },
    {
      icon: CheckCircle,
      title: "Plagiarism-Free Work",
      description: "Original, custom-written content guaranteed"
    },
    {
      icon: Award,
      title: "Publication-Focused Writing",
      description: "Content crafted to meet journal standards"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Punctual completion of drafts and revisions"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent text-center mb-20">
          Why Choose GTec
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group flex items-start space-x-6 p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-blue-100/50">
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform group-hover:rotate-6 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

