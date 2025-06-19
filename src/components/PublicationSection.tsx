
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import type { Publication } from "@/types/Types"; 

export const PublicationSection = () => {
  const publications: Publication[] = [
    {
      title: "Journal Paper Writing",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3",
      description: "Professional writing services for high-impact journal articles with proper structure and academic rigor."
    },
    {
      title: "SCI Journal Publication", 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3",
      description: "Specialized support for publishing in Science Citation Index journals with maximum visibility."
    },
    {
      title: "Scopus Paper Publication",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      description: "Expert guidance for Scopus-indexed publications ensuring quality and international recognition."
    },
    {
      title: "Annexure Publication",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3",
      description: "Comprehensive support for supplementary publication materials and annexure documentation."
    },
    {
      title: "UGC CARE List",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3",
      description: "Strategic publishing in UGC CARE listed journals for academic career advancement in India."
    },
    {
      title: "Web of Science",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3",
      description: "Publication support for Web of Science indexed journals with global research impact."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent text-center mb-20">
          Research Publication Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden transform hover:-translate-y-3 hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={publication.image} 
                  alt={publication.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-8">
                <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-0 px-3 py-1">
                  <Award className="h-4 w-4 mr-1" />
                  Expert
                </Badge>
                <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-purple-600 transition-colors duration-300">{publication.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{publication.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
