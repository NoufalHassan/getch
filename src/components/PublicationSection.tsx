
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import type { Publication } from "@/types/Types"; 
import paperWriting from '../../public/paperwriting.jpeg'
import sciJournal from '../../public/scijournal.jpeg'
import assistance from '../../public/assistance.jpeg'
import consult from '../../public/consult.jpeg'
import publication from '../../public/publication.jpeg'
import journal from '../../public/journal.jpeg'
export const PublicationSection = () => {
  const publications: Publication[] = [
    {
      title: "Journal Paper Writing",
      image: paperWriting,
      description: "Professional writing services for high-impact journal articles with proper structure and academic rigor."
    },
    {
      title: "SCI Journal Publication", 
      image: sciJournal,
      description: "Specialized support for publishing in Science Citation Index journals with maximum visibility."
    },
    {
      title: "Scopus Paper Publication",
      image: assistance,
      description: "Expert guidance for Scopus-indexed publications ensuring quality and international recognition."
    },
    {
      title: "Annexure Publication",
      image: consult,
      description: "Comprehensive support for supplementary publication materials and annexure documentation."
    },
    {
      title: "UGC CARE List",
      image: publication,
      description: "Strategic publishing in UGC CARE listed journals for academic career advancement in India."
    },
    {
      title: "Web of Science",
      image: journal,
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
