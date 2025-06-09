
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-between px-6 md:hidden">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919987058393?text=Hi, I'm interested in Data Engineering courses"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 mr-2"
      >
        <Button 
          size="lg" 
          className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full py-4"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp
        </Button>
      </a>
      
      {/* Call Button */}
      <a
        href="tel:+919987058393"
        className="flex-1 ml-2"
      >
        <Button 
          size="lg" 
          className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg rounded-full py-4"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;
