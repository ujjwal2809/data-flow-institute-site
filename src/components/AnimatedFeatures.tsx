
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Building2, 
  BookOpen, 
  Users, 
  Trophy,
  CheckCircle
} from 'lucide-react';

const AnimatedFeatures = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      title: "Most Placement Focused Institute",
      description: "100% placement assistance with dedicated career support and industry connections",
      highlight: "100% Placement",
      gradient: "feature-gradient"
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "State-of-the-Art Classroom Facilities",
      description: "Modern infrastructure with latest technology and comfortable learning environment",
      highlight: "Modern Infrastructure",
      gradient: "feature-gradient"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Learning on Live Industry Projects",
      description: "Hands-on experience with real-world projects from leading companies",
      highlight: "Live Projects",
      gradient: "feature-gradient"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "450+ Placement Partners",
      description: "Extensive network of hiring partners across various industries and domains",
      highlight: "450+ Partners",
      gradient: "feature-gradient"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Interview Guarantee",
      description: "Guaranteed interview calls with our placement partner companies",
      highlight: "Interview Guarantee",
      gradient: "feature-gradient"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Industry Mentors",
      description: "Learn from seasoned professionals with years of industry experience",
      highlight: "Expert Mentors",
      gradient: "feature-gradient"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
            🚀 Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="tech-gradient block">Data Engineering Institute</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience excellence in data engineering education with industry-leading facilities, 
            expert mentorship, and guaranteed career outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 tech-border-effect"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: `fade-in 0.6s ease-out forwards`
              }}
            >
              <CardContent className="p-6 h-full flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm flex-grow leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full ml-1 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full ml-1 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="stats-gradient text-3xl md:text-4xl font-bold mb-2">450+</div>
            <p className="text-muted-foreground text-sm">Placement Partners</p>
          </div>
          <div className="text-center">
            <div className="stats-gradient text-3xl md:text-4xl font-bold mb-2">100%</div>
            <p className="text-muted-foreground text-sm">Placement Rate</p>
          </div>
          <div className="text-center">
            <div className="stats-gradient text-3xl md:text-4xl font-bold mb-2">5000+</div>
            <p className="text-muted-foreground text-sm">Students Placed</p>
          </div>
          <div className="text-center">
            <div className="stats-gradient text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <p className="text-muted-foreground text-sm">Career Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;
