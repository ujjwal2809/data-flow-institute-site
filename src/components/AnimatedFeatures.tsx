
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Building, Briefcase, Shield } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const AnimatedFeatures = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-blue-400" />,
      title: "Most Placement Focused Institute",
      description: "India's #1 placement-focused data engineering institute with guaranteed job placement and dedicated career support.",
      highlight: "100% Placement Guarantee"
    },
    {
      icon: <Building className="w-12 h-12 text-blue-400" />,
      title: "State-of-the-Art Classroom Facilities",
      description: "Modern classrooms equipped with latest technology, high-speed internet, and interactive learning environments.",
      highlight: "Premium Infrastructure"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-400" />,
      title: "Learning on Live Industry Projects",
      description: "Work on real-world projects from Fortune 500 companies and gain hands-on experience with current industry practices.",
      highlight: "8+ Live Projects"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "450+ Placement Partners with Interview Guarantee",
      description: "Extensive network of hiring partners across top tech companies with guaranteed interview opportunities.",
      highlight: "Interview Guarantee"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 white-card-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Choose 
            <span className="tech-gradient block">Data Engineering Institute?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the difference with our industry-leading approach to data engineering education
          </p>
        </div>
        
        {/* Desktop Grid with Staggered Animation */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 border-2 border-slate-200 hover:border-blue-300 bg-white backdrop-blur-sm relative overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: `fade-in 0.6s ease-out forwards`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center h-full flex flex-col relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-blue-50 rounded-full group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-500 group-hover:shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="mb-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold border border-blue-200">
                  {feature.highlight}
                </div>
                <h3 className="text-lg font-bold mb-4 text-blue-900 group-hover:text-blue-700 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm flex-grow leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="lg:hidden">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-sm mx-auto md:max-w-3xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-300 bg-white backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-blue-50 rounded-full group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="mb-3 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold border border-blue-200">
                        {feature.highlight}
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-blue-900 group-hover:text-blue-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm flex-grow">{feature.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;
