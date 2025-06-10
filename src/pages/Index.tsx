import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQ from '@/components/FAQ';
import AnimatedHowItWorks from '@/components/AnimatedHowItWorks';
import AnimatedFeatures from '@/components/AnimatedFeatures';
import CoursesSection from '@/components/CoursesSection';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  const publications = [
    "TechCrunch", "Forbes", "Economic Times", "YourStory", "Analytics India Magazine"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 text-sm px-4 py-2 bg-white/20 text-white border-white/30 glow-effect">🚀 #1 Data Engineering Institute in Mumbai</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Career with
                <span className="text-accent block">Data Engineering</span>
                <span className="text-xl md:text-2xl lg:text-3xl block mt-4 text-white/90">
                  Placement-Focused Cloud Training in Mumbai, Thane & Navi Mumbai
                </span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
                Join Mumbai's most trusted institute for placement-focused Data Engineering training. 
                Learn from industry experts and get guaranteed placement in top companies.
              </p>
              <a href="tel:+919987058393">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-primary hover:bg-white/90 glow-effect hover-scale">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 99870 58393
                </Button>
              </a>
            </div>
            
            <div className="relative max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border tech-border glow-effect">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Data Engineering Institute Classroom Training in Mumbai, Thane, Navi Mumbai"
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="p-6 section-gradient">
                  <p className="text-center text-muted-foreground font-medium">
                    State-of-the-art classroom facilities in Mumbai, Thane & Navi Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Moved up */}
      <TestimonialCarousel />

      {/* How It Works Section */}
      <AnimatedHowItWorks />

      {/* Courses Section */}
      <CoursesSection />

      {/* Featured In Section - Moved down */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">FEATURED IN</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {publications.map((pub, index) => (
                <div key={index} className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors">
                  {pub}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedFeatures />

      {/* Mission Statement Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              "Helping Professionals transition into High-Paying Data Engineering Careers"
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              We believe in the power of classroom learning combined with industry expertise. 
              Our placement-driven approach ensures that every student not only learns cutting-edge 
              data engineering skills but also secures their dream job in top companies. 
              With personalized attention and hands-on training, we bridge the gap between 
              academic knowledge and industry requirements.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-white/90">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-white/90">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">12 LPA</div>
                <div className="text-white/90">Average Package</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Floating Mobile Buttons */}
      <FloatingButtons />

      <Footer />
    </div>
  );
};

export default Index;
