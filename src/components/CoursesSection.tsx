
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const courses = [
    {
      title: "Cloud Data Engineering Course",
      description: "Master cloud data platforms with hands-on training in AWS, Azure, and GCP data services.",
      duration: "6 Months",
      students: "500+ Enrolled",
      placement: "95% Placement Rate",
      link: "/courses",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Business Intelligence Course",
      description: "Learn advanced BI tools, data visualization, and analytics to drive business decisions.",
      duration: "4 Months", 
      students: "300+ Enrolled",
      placement: "92% Placement Rate",
      link: "/courses",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data Platform Engineer",
      description: "Specialize in building and maintaining enterprise data platforms and infrastructure.",
      duration: "5 Months",
      students: "250+ Enrolled", 
      placement: "94% Placement Rate",
      link: "/courses",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DataOps & AI Engineer",
      description: "Combine data operations with AI/ML engineering for next-generation data solutions.",
      duration: "7 Months",
      students: "200+ Enrolled",
      placement: "96% Placement Rate", 
      link: "/courses",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of placement-focused data engineering programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 glow-effect overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
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
                  <Button className="w-full group-hover:shadow-lg transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
