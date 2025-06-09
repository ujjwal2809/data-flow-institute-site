
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Laptop } from 'lucide-react';
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
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
      title: "100% Placement Assurance",
      description: "Guaranteed job placement with our industry partnerships and comprehensive support system.",
      highlight: "500+ Students Placed"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Classroom Training by Industry Experts",
      description: "Learn directly from professionals with 10+ years of experience in top tech companies.",
      highlight: "Expert Mentorship"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Comprehensive Data Engineering Curriculum",
      description: "End-to-end curriculum covering all aspects of modern cloud data engineering technologies.",
      highlight: "Industry-Updated Content"
    },
    {
      icon: <Laptop className="w-12 h-12 text-primary" />,
      title: "Hands-on Projects & Real-World Scenarios",
      description: "Work on live projects and case studies used by Fortune 500 companies.",
      highlight: "8+ Live Projects"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Data Engineering Institute?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our industry-leading approach to data engineering education
          </p>
        </div>
        
        {/* Desktop Grid with Staggered Animation */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-4 border-2 hover:border-primary/20 glow-effect bg-white/80 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: `fade-in 0.6s ease-out forwards`
              }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="mb-3 px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-semibold">
                  {feature.highlight}
                </div>
                <h3 className="text-lg font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
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
                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 glow-effect bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-primary/10 rounded-full group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="mb-3 px-2 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-semibold">
                        {feature.highlight}
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
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
