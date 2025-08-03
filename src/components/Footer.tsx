import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E1A0F] text-[#F8F4E9] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="text-[#D4A017] w-8 h-8" />
              <span className="text-2xl font-bold font-montserrat">
                Malang Coffee House
              </span>
            </div>
            <p className="text-[#F0E6D2] leading-relaxed mb-4">
              Experience the finest coffee in Malang with our carefully crafted blends, 
              warm atmosphere, and exceptional service. Your perfect cup awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D4A017] hover:text-[#F8F4E9] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#D4A017] hover:text-[#F8F4E9] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#D4A017] hover:text-[#F8F4E9] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#F0E6D2] hover:text-[#D4A017] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F0E6D2] hover:text-[#D4A017] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-[#F0E6D2] hover:text-[#D4A017] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#F0E6D2] hover:text-[#D4A017] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#F0E6D2] hover:text-[#D4A017] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F0E6D2] hover:text-[#D4A017] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#D4A017] w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-[#F0E6D2] text-sm">
                  Jl. Semarang No. 45, Lowokwaru<br />
                  Malang, East Java 65141
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#D4A017] w-5 h-5" />
                <span className="text-[#F0E6D2] text-sm">+62 341-555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#D4A017] w-5 h-5" />
                <span className="text-[#F0E6D2] text-sm">hello@malangcoffeehouse.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-[#D4A017] w-5 h-5 mt-1" />
                <span className="text-[#F0E6D2] text-sm">
                  Monday - Sunday<br />
                  7:00 AM - 10:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#8B5A2B] pt-8 text-center">
          <p className="text-[#F0E6D2] text-sm">
            &copy; 2025 Malang Coffee House. All rights reserved. Crafted with love in Malang, Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;