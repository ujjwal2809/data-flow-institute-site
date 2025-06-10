
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Award, Code, Database, Cloud, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CoursesSection = () => {
  const courses = [
    {
      title: "Cloud Data Engineering Course",
      description: "Master cloud data platforms with hands-on training in AWS, Azure, and GCP data services.",
      duration: "6 Months",
      students: "500+ Enrolled",
      placement: "95% Placement Rate",
      link: "/courses",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Cloud className="w-8 h-8" />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Business Intelligence Course",
      description: "Learn advanced BI tools, data visualization, and analytics to drive business decisions.",
      duration: "4 Months", 
      students: "300+ Enrolled",
      placement: "92% Placement Rate",
      link: "/courses",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Data Platform Engineer",
      description: "Specialize in building and maintaining enterprise data platforms and infrastructure.",
      duration: "5 Months",
      students: "250+ Enrolled", 
      placement: "94% Placement Rate",
      link: "/courses",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "DataOps & AI Engineer",
      description: "Combine data operations with AI/ML engineering for next-generation data solutions.",
      duration: "7 Months",
      students: "200+ Enrolled",
      placement: "96% Placement Rate", 
      link: "/courses",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tech-gradient mb-6">
            Our Premium Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of placement-focused data engineering programs
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 hover:border-primary/30 glow-effect overflow-hidden bg-white/80 backdrop-blur-sm">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} to-transparent opacity-80`}></div>
                <div className="absolute top-4 left-4 text-white">
                  {course.icon}
                </div>
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
                  New Batch
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{course.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <Award className="w-4 h-4 mr-2" />
                    {course.placement}
                  </div>
                </div>
                
                <Link to={course.link}>
                  <Button className="w-full group-hover:shadow-lg transition-all duration-300 tech-button">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
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
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 glow-effect bg-white/80 backdrop-blur-sm h-full">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} to-transparent opacity-80`}></div>
                      <div className="absolute top-3 left-3 text-white">
                        {course.icon}
                      </div>
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs">
                        New Batch
                      </Badge>
                    </div>
                    
                    <CardContent className="p-4 space-y-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{course.description}</p>
                      
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-2 text-primary" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-xs text-green-600">
                          <Award className="w-3 h-3 mr-2" />
                          {course.placement}
                        </div>
                      </div>
                      
                      <Link to={course.link}>
                        <Button size="sm" className="w-full tech-button">
                          Learn More
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </Link>
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

export default CoursesSection;
