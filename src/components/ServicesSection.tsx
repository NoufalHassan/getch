
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  FileText, 
  Search, 
  BookOpen, 
  Award,
  CheckCircle
} from "lucide-react";
import type { Service } from "@/types/Types"; 
import university from '../../public/university.jpg'
import universityAdmission from '../../public/universityadmission.jpeg'
import guidereferal from '../../public/guidereferal.jpeg'
import topicSelection from '../../public/topicselection.jpeg'
import consult from '../../public/consult.jpeg'
import assistance from '../../public/assistance.jpeg'
import help from '../../public/help.jpeg'
import literature from '../../public/literature.jpeg'
import research from '../../public/research.jpeg'
import publication from '../../public/publication.jpeg'
import journal from '../../public/journal.jpeg'
export const ServicesSection = () => {
  const services: Service[] = [
    { 
      icon: Search, 
      title: "University Selection",
      image: university,
      description: "Expert guidance to help you choose the perfect university that aligns with your research goals and career aspirations."
    },
    { 
      icon: GraduationCap, 
      title: "University Admissions",
      image: universityAdmission,
      description: "Comprehensive admission support including application preparation, interview coaching, and document review."
    },
    { 
      icon: Users, 
      title: "Guide Referral",
      image: guidereferal,
      description: "Connect with experienced mentors and supervisors who match your research interests and academic background."
    },
    { 
      icon: BookOpen, 
      title: "Topic Selection",
      image: topicSelection,
      description: "Strategic assistance in identifying and refining research topics that are both innovative and feasible."
    },
    { 
      icon: FileText, 
      title: "Ph.D. Consultancy",
      image: consult,
      description: "End-to-end consulting services covering all aspects of your doctoral journey from start to graduation."
    },
    { 
      icon: Award, 
      title: "Ph.D. Assistance",
      image: assistance,
      description: "Personalized support for research methodology, data analysis, and academic writing throughout your program."
    },
    { 
      icon: CheckCircle, 
      title: "Ph.D. Help",
      image: help,
      description: "Immediate help and troubleshooting for academic challenges, deadlines, and research roadblocks."
    },
    { 
      icon: BookOpen, 
      title: "Literature Review",
      image: literature,
      description: "Comprehensive literature review services to establish a strong theoretical foundation for your research."
    },
    { 
      icon: FileText, 
      title: "Research Proposal",
      image: research,
      description: "Professional assistance in crafting compelling research proposals that meet academic standards."
    },
    { 
      icon: FileText, 
      title: "Research Paper Writing",
      image: publication,
      description: "Expert writing support for high-quality research papers suitable for peer-reviewed publications."
    },
    { 
      icon: Award, 
      title: "Journal Publication",
      image: journal,
      description: "Strategic guidance for successful journal submissions and publication in high-impact academic journals."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent text-center mb-20">
          Professional Services Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 overflow-hidden transform hover:-translate-y-2 hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img 
                loading="lazy"
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4 transform group-hover:rotate-6 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
