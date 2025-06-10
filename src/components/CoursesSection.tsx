import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Cloud, BarChart3, Database, Brain } from 'lucide-react';
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
      title: "Cloud Data Engineering",
      duration: "4 Months",
      level: "Beginner to Advanced",
      description: "Master cloud-native data engineering with AWS, Azure, and GCP. Learn to build scalable data pipelines and work with big data technologies.",
      technologies: ["AWS", "Azure", "GCP", "Spark", "Kafka", "Airflow"],
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: "/courses/mumbai",
      gradient: "course-card-gradient"
    },
    {
      title: "Business Intelligence",
      duration: "3 Months", 
      level: "Intermediate",
      description: "Transform raw data into actionable insights. Learn advanced analytics, data visualization, and business intelligence tools.",
      technologies: ["Tableau", "Power BI", "SQL", "Python", "Excel"],
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      link: "/courses",
      gradient: "course-card-gradient"
    },
    {
      title: "Data Platform Engineer",
      duration: "5 Months",
      level: "Advanced", 
      description: "Design and build enterprise data platforms. Focus on data architecture, governance, and platform engineering best practices.",
      technologies: ["Kubernetes", "Docker", "Terraform", "Databricks", "Snowflake"],
      icon: <Database className="w-8 h-8 text-blue-400" />,
      link: "/courses",
      gradient: "course-card-gradient"
    },
    {
      title: "DataOps & AI Engineer",
      duration: "6 Months",
      level: "Expert",
      description: "Combine data operations with AI/ML engineering. Learn MLOps, model deployment, and AI-driven data solutions.",
      technologies: ["MLflow", "Kubeflow", "TensorFlow", "PyTorch", "Jenkins"],
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      link: "/courses", 
      gradient: "course-card-gradient"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Popular 
            <span className="tech-gradient block">Courses</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Industry-focused curriculum designed to get you placed in top companies
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 border border-blue-300/30 bg-white/95 backdrop-blur-sm relative overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: `fade-in 0.6s ease-out forwards`
              }}
            >
              <CardContent className="p-6 h-full flex flex-col relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:scale-110 transition-all duration-300">
                    {course.icon}
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    {course.level}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                
                <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
                  {course.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link to={course.link} className="mt-auto">
                  <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white transition-all duration-300 group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
            className="w-full max-w-sm mx-auto md:max-w-4xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 border border-blue-300/30 bg-white/95 backdrop-blur-sm h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          {course.icon}
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                          {course.level}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 text-blue-900">
                        {course.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-4 flex-grow">
                        {course.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-blue-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {course.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {course.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                              +{course.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <Link to={course.link} className="mt-auto">
                        <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-white/20 bg-white/10 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-12 border-white/20 bg-white/10 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
