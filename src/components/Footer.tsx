
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, MapPin, Phone, Mail, Shield, Award, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Data Engineering Institute</span>
            </Link>
            <p className="text-muted-foreground">
              India's premier institute for placement-focused Data Engineering training. 
              Transform your career with expert guidance.
            </p>
            
            {/* Trust Seals */}
            <div className="flex flex-wrap gap-4 py-4">
              <div className="flex items-center space-x-2 bg-primary/10 px-3 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/10 px-3 py-2 rounded-lg">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">GCP Authorized Partner</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-800">100% Placement</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" size="sm">LinkedIn</Button>
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">YouTube</Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/courses" className="block text-muted-foreground hover:text-primary transition-colors">Courses</Link>
              <Link to="/campus" className="block text-muted-foreground hover:text-primary transition-colors">Campus</Link>
              <Link to="/placements" className="block text-muted-foreground hover:text-primary transition-colors">Placements</Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            </div>
          </div>

          {/* Popular Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Courses by Location</h3>
            <div className="space-y-2">
              <Link to="/courses/mumbai" className="block text-muted-foreground hover:text-primary transition-colors">Data Engineering Course in Mumbai</Link>
              <Link to="/courses/thane" className="block text-muted-foreground hover:text-primary transition-colors">Data Engineering Course in Thane</Link>
              <Link to="/courses/navi-mumbai" className="block text-muted-foreground hover:text-primary transition-colors">Data Engineering Course in Navi Mumbai</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest updates on courses and placements.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* NAP Information */}
        <div className="mt-12 mb-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Data Engineering Institute - Python, SQL, Spark, Kafka, ETL Databricks Training</p>
                  <p className="text-muted-foreground text-sm">
                    1st Floor, Awfis, Bhairav Milestone, Neheru Nagar,<br />
                    Wagle Industrial Estate, Thane West, Thane,<br />
                    Maharashtra 400604
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919987058393" className="text-muted-foreground hover:text-primary transition-colors">
                  099870 58393
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@datainstitute.in" className="text-muted-foreground hover:text-primary transition-colors">
                  info@datainstitute.in
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Find Us</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden border tech-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8978317891626!2d72.97554431490123!3d19.218315387020458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8e8b6b8b6b7%3A0x8e8e8e8e8e8e8e8e!2sAwfis%20Wagle%20Estate!5e0!3m2!1sen!2sin!4v1735635000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Data Engineering Institute Location - Awfis Wagle Estate, Thane, Maharashtra"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Data Engineering Institute. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
