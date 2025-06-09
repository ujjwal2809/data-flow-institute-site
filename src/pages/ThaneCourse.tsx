
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Users, Award, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ThaneCourse = () => {
  const highlights = [
    "Main campus located in Wagle Industrial Estate, Thane",
    "Direct metro connectivity from Mumbai and Navi Mumbai",
    "Industry partnerships with Thane-based IT companies",
    "Dedicated placement cell for local job opportunities"
  ];

  const companies = [
    "Godrej Infotech", "Larsen & Toubro", "Bajaj Auto", "Asian Paints", 
    "UPL Limited", "Crompton Greaves", "Mahindra & Mahindra", "Bharat Petroleum"
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
              Thane Headquarters
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data Engineering Course in
              <span className="text-accent block">Thane</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-white/90">
              Our flagship campus in Thane offers the best Data Engineering training 
              with state-of-the-art facilities and expert instructors.
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
                Enroll Now - Thane Campus
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call: 099870 58393
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Thane Campus Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our Thane Campus - Flagship Location
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience world-class Data Engineering education at our main campus
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
                  <h3 className="font-bold text-foreground mb-3">Thane Campus Address</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Location:</strong> 1st Floor, Awfis, Bhairav Milestone</p>
                    <p><strong>Area:</strong> Neheru Nagar, Wagle Industrial Estate</p>
                    <p><strong>City:</strong> Thane West, Thane, Maharashtra 400604</p>
                    <p><strong>Phone:</strong> 099870 58393</p>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Data Engineering Institute Thane Campus"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Companies */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leading Companies in Thane Region
            </h2>
            <p className="text-xl text-muted-foreground">
              Our Thane graduates are placed in top local and multinational companies
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

      <Footer />
    </div>
  );
};

export default ThaneCourse;
