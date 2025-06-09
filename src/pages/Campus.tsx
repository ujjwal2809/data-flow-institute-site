
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Car, Coffee, Users, Laptop } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Campus = () => {
  const campuses = [
    {
      name: "Mumbai Central Campus",
      address: "Plot No. 15, Sector 7, Andheri East, Mumbai - 400069",
      features: ["40 Seater Smart Classrooms", "High-Speed Internet", "Parking Available", "Cafeteria"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Thane Branch",
      address: "Office No. 302, Viviana Mall Complex, Thane West - 400601",
      features: ["25 Seater Classroom", "Modern Lab Facilities", "24/7 Access", "Student Lounge"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Navi Mumbai Center",
      address: "3rd Floor, Palm Beach Galleria, Vashi, Navi Mumbai - 400703",
      features: ["30 Seater Classroom", "Project Rooms", "Library Access", "Food Court"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const facilities = [
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art classrooms equipped with the latest technology and high-end workstations"
    },
    {
      icon: <Wifi className="w-8 h-8 text-primary" />,
      title: "High-Speed Internet",
      description: "Dedicated high-speed internet connection for seamless learning and project work"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Small Batch Sizes",
      description: "Maximum 20 students per batch ensuring personalized attention and better learning outcomes"
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Convenient Location",
      description: "Easily accessible by public transport and ample parking space available"
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Student Amenities",
      description: "Comfortable seating areas, cafeteria, and recreational spaces for breaks"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Strategic Locations",
      description: "Campuses located in prime areas of Mumbai, Thane, and Navi Mumbai"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2">🏢 World-Class Infrastructure</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              State-of-the-Art
              <span className="text-primary block">Learning Campuses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience learning in modern, well-equipped campuses designed to provide the best 
              educational environment for aspiring data engineers across Mumbai metropolitan area.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Campus Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategically located across Mumbai, Thane, and Navi Mumbai for easy accessibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {campuses.map((campus, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {campus.name}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <p className="text-muted-foreground text-sm">{campus.address}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground mb-3">Facilities:</h3>
                    {campus.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              World-Class Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for an optimal learning experience in data engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {facility.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{facility.title}</h3>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Take a Virtual Tour
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Can't visit our campus in person? Take our virtual tour to explore our 
                  state-of-the-art facilities, modern classrooms, and learning environments 
                  from the comfort of your home.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Interactive 360° classroom views</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Lab and facility walkthroughs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Student common areas</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Campus Virtual Tour"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white text-primary font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                    Start Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Campus;
