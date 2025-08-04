import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-[#00965E] to-[#00784A] rounded-full">
                <Coffee className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-montserrat text-white">
                Malang Coffee House
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Experience the finest coffee in Malang with our carefully crafted blends, 
              warm atmosphere, and exceptional service. Your perfect cup awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-[#00965E] rounded-full hover:bg-[#00784A] transition-colors duration-300 group">
                <Facebook size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="p-3 bg-[#00965E] rounded-full hover:bg-[#00784A] transition-colors duration-300 group">
                <Instagram size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="p-3 bg-[#00965E] rounded-full hover:bg-[#00784A] transition-colors duration-300 group">
                <Twitter size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#00965E] transition-colors duration-300 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#00965E] transition-colors duration-300 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-[#00965E] transition-colors duration-300 font-medium">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-[#00965E] transition-colors duration-300 font-medium">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#00965E] transition-colors duration-300 font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#00965E] transition-colors duration-300 font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-[#00965E] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Jl. Semarang No. 45, Lowokwaru<br />
                  Malang, East Java 65141
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-[#00965E] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm">+62 341-555-0123</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-[#00965E] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm">hello@malangcoffeehouse.com</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-[#00965E] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Monday - Sunday<br />
                  7:00 AM - 10:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Malang Coffee House. All rights reserved. Crafted with love in Malang, Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;