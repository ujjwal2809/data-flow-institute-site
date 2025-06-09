
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3c2?w=150&h=150&fit=crop&crop=face",
      company: "Google",
      testimonial: "The classroom training at Data Engineering Institute was exceptional. The hands-on approach and expert mentorship helped me land my dream job at Google.",
      package: "28 LPA"
    },
    {
      name: "Rahul Patel",
      role: "Senior Data Engineer at Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      company: "Microsoft",
      testimonial: "The curriculum is industry-relevant and the placement support is outstanding. I got placed at Microsoft within 3 months of completing the course.",
      package: "32 LPA"
    },
    {
      name: "Ananya Singh",
      role: "Data Engineer at Amazon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      company: "Amazon",
      testimonial: "Coming from a non-tech background, I was worried about the transition. But the institute's support and comprehensive training made it possible.",
      package: "25 LPA"
    },
    {
      name: "Vikram Kumar",
      role: "Lead Data Engineer at Flipkart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      company: "Flipkart",
      testimonial: "The real-world projects and industry connections provided by the institute are unmatched. Highly recommend for anyone serious about data engineering.",
      package: "22 LPA"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our alumni who have transformed their careers and secured top positions in leading companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.company}
                  </Badge>
                  <Badge className="text-xs bg-green-100 text-green-800 hover:bg-green-100">
                    {testimonial.package}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
