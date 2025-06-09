
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Briefcase, ArrowRight } from 'lucide-react';

const AnimatedHowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Enroll in Classroom Training",
      description: "Join our intensive classroom program designed for working professionals",
      icon: <GraduationCap className="w-16 h-16 text-primary" />
    },
    {
      step: "02", 
      title: "Learn from Industry Experts",
      description: "Get mentored by senior data engineers from top tech companies",
      icon: <Code className="w-16 h-16 text-primary" />
    },
    {
      step: "03",
      title: "Get Placed in Top Companies",
      description: "Secure high-paying roles with our dedicated placement support",
      icon: <Briefcase className="w-16 h-16 text-primary" />
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven 3-step process to transform you into a skilled data engineer
          </p>
        </div>
        
        {/* Desktop Horizontal Flow */}
        <div className="hidden md:flex items-center justify-center max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center group">
                <Card className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 glow-effect bg-gradient-to-br from-primary/5 to-accent/10 w-80">
                  <CardContent className="p-8 text-center">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <div className="mb-6 mt-4 flex justify-center">
                      <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              {index < steps.length - 1 && (
                <div className="mx-8 text-primary">
                  <ArrowRight className="w-8 h-8 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Vertical Flow */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 glow-effect bg-gradient-to-br from-primary/5 to-accent/10">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-6 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                  <div className="mb-4 mt-2 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-px h-8 bg-primary/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedHowItWorks;
