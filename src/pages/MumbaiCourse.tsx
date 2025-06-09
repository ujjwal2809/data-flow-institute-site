
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Users, Award, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MumbaiCourse = () => {
  const highlights = [
    "Prime location in Mumbai with easy access from all areas",
    "Weekend and weekday batches available",
    "Industry partnerships with Mumbai-based companies",
    "Local placement support for Mumbai job market"
  ];

  const companies = [
    "Tata Consultancy Services", "Infosys", "Wipro", "HCL Technologies", 
    "Tech Mahindra", "L&T Infotech", "Persistent Systems", "Zensar Technologies"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              Mumbai Location
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data Engineering Course in
              <span className="text-accent block">Mumbai</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-white/90">
              Join Mumbai's premier Data Engineering institute with classroom training, 
              100% placement assistance, and industry expert instructors.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center space-x-2 text-white/90">
                <Clock className="w-5 h-5" />
                <span className="text-sm">6 months course</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Users className="w-5 h-5" />
                <span className="text-sm">Small batches</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Award className="w-5 h-5" />
                <span className="text-sm">100% placement</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Industry certified</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90">
                Enroll Now - Mumbai Batch
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call: 099870 58393
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mumbai Specific Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose Our Mumbai Center?
              </h2>
              <p className="text-xl text-muted-foreground">
                Strategic location with excellent connectivity and industry partnerships
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-bold text-foreground mb-3">Mumbai Batch Schedule</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Weekend Batch:</strong> Saturday & Sunday, 9:00 AM - 6:00 PM</p>
                    <p><strong>Weekday Batch:</strong> Monday to Friday, 7:00 PM - 9:00 PM</p>
                    <p><strong>Next Batch Starts:</strong> 15th January 2024</p>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mumbai Data Engineering Training Center"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mumbai Companies */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Top Companies Hiring in Mumbai
            </h2>
            <p className="text-xl text-muted-foreground">
              Our Mumbai graduates work at these leading companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {companies.map((company, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {company}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Data Engineering Journey in Mumbai?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of successful data engineers who started their career from our Mumbai center
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90">
              Book Free Counseling Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MumbaiCourse;
