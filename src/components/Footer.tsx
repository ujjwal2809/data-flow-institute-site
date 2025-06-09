
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, FileText, User, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Data Engineering Institute</span>
            </Link>
            <p className="text-muted-foreground">
              India's premier institute for placement-focused Data Engineering training. 
              Transform your career with expert guidance.
            </p>
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

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <div className="space-y-2">
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Career Guide</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Student Portal</a>
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

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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
