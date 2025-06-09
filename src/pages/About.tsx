
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const team = [
    {
      name: "Dr. Rahul Krishnan",
      role: "Founder & Chief Data Scientist",
      experience: "15+ years at Google, Microsoft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      education: "PhD Computer Science, IIT Mumbai"
    },
    {
      name: "Priya Nair",
      role: "Head of Curriculum",
      experience: "12+ years at Amazon, Netflix",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3c2?w=150&h=150&fit=crop&crop=face",
      education: "MS Data Science, Stanford University"
    },
    {
      name: "Arjun Sharma",
      role: "Senior Data Engineer & Trainer",
      experience: "10+ years at Uber, Airbnb",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      education: "BTech Computer Science, IIT Delhi"
    },
    {
      name: "Sneha Patel",
      role: "Placement Director",
      experience: "8+ years at McKinsey, Flipkart",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      education: "MBA from IIM Ahmedabad"
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded with a vision to bridge the data engineering skills gap" },
    { year: "2019", event: "First batch of 25 students achieved 100% placement success" },
    { year: "2020", event: "Expanded to Thane and Navi Mumbai campuses" },
    { year: "2021", event: "Partnered with 100+ companies for placements" },
    { year: "2022", event: "Launched advanced cloud data engineering specializations" },
    { year: "2023", event: "Achieved 500+ successful placements milestone" },
    { year: "2024", event: "Introduced AI/ML integration in data engineering curriculum" }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from curriculum design to student support"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community",
      description: "Building a strong community of data professionals who support each other's growth"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Continuously updating our curriculum with the latest industry trends and technologies"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Growth",
      description: "Fostering both personal and professional growth in our students and team members"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2">🏆 Since 2018</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About
              <span className="text-primary block">Data Engineering Institute</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are India's leading institute for placement-focused Data Engineering education, 
              committed to transforming careers and bridging the industry skills gap.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower professionals with cutting-edge Data Engineering skills through 
                    industry-relevant curriculum, expert mentorship, and guaranteed placement support. 
                    We believe in practical learning that directly translates to career success.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the global leader in Data Engineering education, creating a world 
                    where skilled data professionals drive innovation and solve complex business 
                    challenges across industries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From a small classroom to multiple campuses - our growth story
              </p>
            </div>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className="text-2xl font-bold text-primary min-w-[80px]">
                        {milestone.year}
                      </div>
                      <div className="h-12 w-px bg-border"></div>
                      <p className="text-muted-foreground flex-1">{milestone.event}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry experts with decades of experience leading the way
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-2">{member.experience}</p>
                  <Badge variant="secondary" className="text-xs">
                    {member.education}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Our Impact in Numbers
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
