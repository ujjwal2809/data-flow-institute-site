
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email", 
      details: ["info@dataengineeringinstitute.com", "admissions@dataengineeringinstitute.com"],
      description: "Send us your queries anytime"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      description: "We're here to help during business hours"
    }
  ];

  const campusLocations = [
    {
      name: "Mumbai Central Campus",
      address: "Plot No. 15, Sector 7, Andheri East, Mumbai - 400069",
      phone: "+91 98765 43210",
      email: "mumbai@dataengineeringinstitute.com"
    },
    {
      name: "Thane Branch",
      address: "Office No. 302, Viviana Mall Complex, Thane West - 400601", 
      phone: "+91 98765 43211",
      email: "thane@dataengineeringinstitute.com"
    },
    {
      name: "Navi Mumbai Center",
      address: "3rd Floor, Palm Beach Galleria, Vashi, Navi Mumbai - 400703",
      phone: "+91 98765 43212", 
      email: "navimumbai@dataengineeringinstitute.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2">📞 Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact
              <span className="text-primary block">Data Engineering Institute</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your career? Get in touch with our team for personalized guidance, 
              course information, and admission support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email address" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Course Interest
                      </label>
                      <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                        <option>Data Engineering Certification</option>
                        <option>Cloud Data Engineering</option>
                        <option>Advanced Data Engineering</option>
                        <option>Corporate Training</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us about your background and goals..."
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full text-lg py-6">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Campus Locations */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Campuses</h2>
                
                {campusLocations.map((campus, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{campus.name}</h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary mt-1" />
                          <p className="text-muted-foreground">{campus.address}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary" />
                          <p className="text-muted-foreground">{campus.phone}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <p className="text-muted-foreground">{campus.email}</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="mt-4 w-full">
                        Get Directions
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Quick answers to common questions about our courses and admissions
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                {
                  question: "What is the admission process?",
                  answer: "Fill out the application form, attend a counseling session, and complete the enrollment process with fee payment."
                },
                {
                  question: "Do you offer weekend batches?",
                  answer: "Yes, we offer both weekday and weekend batches to accommodate working professionals."
                },
                {
                  question: "Is there any entrance exam?",
                  answer: "No entrance exam required. We assess your background during the counseling session."
                },
                {
                  question: "What are the payment options?",
                  answer: "We offer flexible payment options including installments, education loans, and corporate sponsorship."
                }
              ].map((faq, index) => (
                <Card key={index} className="text-left">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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

export default Contact;
