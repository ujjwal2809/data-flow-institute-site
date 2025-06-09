
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Building, TrendingUp, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Placements = () => {
  const stats = [
    { label: "Students Placed", value: "500+", icon: <Users className="w-8 h-8" /> },
    { label: "Placement Rate", value: "95%", icon: <TrendingUp className="w-8 h-8" /> },
    { label: "Average Package", value: "12 LPA", icon: <Award className="w-8 h-8" /> },
    { label: "Partner Companies", value: "200+", icon: <Building className="w-8 h-8" /> }
  ];

  const companies = [
    "Google", "Microsoft", "Amazon", "Netflix", "Uber", "Airbnb", 
    "Flipkart", "Paytm", "Zomato", "Swiggy", "Ola", "PhonePe",
    "HDFC Bank", "ICICI Bank", "Axis Bank", "TCS", "Infosys", "Wipro"
  ];

  const placements = [
    {
      name: "Arjun Mehta",
      role: "Senior Data Engineer",
      company: "Google",
      package: "35 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      background: "Mechanical Engineer",
      experience: "2 years"
    },
    {
      name: "Sneha Gupta",
      role: "Data Engineer",
      company: "Microsoft",
      package: "28 LPA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3c2?w=150&h=150&fit=crop&crop=face",
      background: "Computer Science",
      experience: "1 year"
    },
    {
      name: "Rajesh Kumar",
      role: "Lead Data Engineer",
      company: "Amazon",
      package: "42 LPA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      background: "Electrical Engineer",
      experience: "5 years"
    },
    {
      name: "Priya Sharma",
      role: "Data Platform Engineer",
      company: "Netflix",
      package: "38 LPA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      background: "Information Technology",
      experience: "3 years"
    },
    {
      name: "Vikram Patel",
      role: "Senior Data Engineer",
      company: "Uber",
      package: "32 LPA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      background: "Civil Engineer",
      experience: "4 years"
    },
    {
      name: "Anita Singh",
      role: "Data Infrastructure Engineer",
      company: "Airbnb",
      package: "36 LPA",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      background: "Electronics Engineer",
      experience: "2 years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2">🎯 100% Placement Assurance</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Exceptional
              <span className="text-primary block">Placement Record</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our students consistently secure top positions at leading companies worldwide. 
              With our dedicated placement support and industry partnerships, your dream job is within reach.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Recent Placements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet our successful alumni who have transformed their careers and secured top positions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {placements.map((placement, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-16 h-16 mr-4">
                      <AvatarImage src={placement.image} alt={placement.name} />
                      <AvatarFallback>{placement.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg">{placement.name}</h3>
                      <p className="text-muted-foreground text-sm">{placement.role}</p>
                      <Badge className="mt-1 bg-green-100 text-green-800 hover:bg-green-100">
                        {placement.package}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-semibold text-foreground">{placement.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Background:</span>
                      <span className="font-semibold text-foreground">{placement.background}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-semibold text-foreground">{placement.experience}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Hiring Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We have partnerships with 200+ companies across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-lg shadow-md p-4 group-hover:shadow-lg transition-shadow duration-300 border">
                  <div className="text-lg font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                    {company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our Placement Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive support from profile building to offer negotiation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Profile Building",
                  description: "Resume optimization, LinkedIn profile enhancement, and portfolio development"
                },
                {
                  step: "02", 
                  title: "Interview Preparation",
                  description: "Mock interviews, technical preparation, and soft skills training"
                },
                {
                  step: "03",
                  title: "Company Matching",
                  description: "Matching your skills and preferences with suitable company openings"
                },
                {
                  step: "04",
                  title: "Offer Support",
                  description: "Salary negotiation guidance and offer letter review assistance"
                }
              ].map((step, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{step.step}</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;
