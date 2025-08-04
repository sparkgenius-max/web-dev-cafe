import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-r from-[#00965E] to-[#00784A] rounded-full group-hover:scale-110 transition-transform duration-300">
              <Coffee className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-[#222222] font-montserrat group-hover:text-[#00965E] transition-colors duration-300">
              Malang Coffee House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`font-semibold transition-all duration-300 hover:text-[#00965E] hover:scale-105 ${
                isActive('/') ? 'text-[#00965E]' : 'text-[#222222]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-semibold transition-all duration-300 hover:text-[#00965E] hover:scale-105 ${
                isActive('/about') ? 'text-[#00965E]' : 'text-[#222222]'
              }`}
            >
              About
            </Link>
            <Link
              to="/menu"
              className={`font-semibold transition-all duration-300 hover:text-[#00965E] hover:scale-105 ${
                isActive('/menu') ? 'text-[#00965E]' : 'text-[#222222]'
              }`}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className={`font-semibold transition-all duration-300 hover:text-[#00965E] hover:scale-105 ${
                isActive('/gallery') ? 'text-[#00965E]' : 'text-[#222222]'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className={`font-semibold transition-all duration-300 hover:text-[#00965E] hover:scale-105 ${
                isActive('/blog') ? 'text-[#00965E]' : 'text-[#222222]'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`font-semibold transition-all duration-300 hover:text-[#00965E] hover:scale-105 ${
                isActive('/contact') ? 'text-[#00965E]' : 'text-[#222222]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#222222] hover:text-[#00965E] transition-colors p-2 rounded-full hover:bg-gray-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 bg-white rounded-lg shadow-lg mt-2 p-4">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#00965E] hover:text-white ${
                isActive('/') ? 'text-[#00965E] bg-[#F5F5F5]' : 'text-[#222222]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#00965E] hover:text-white ${
                isActive('/about') ? 'text-[#00965E] bg-[#F5F5F5]' : 'text-[#222222]'
              }`}
            >
              About
            </Link>
            <Link
              to="/menu"
              onClick={toggleMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#00965E] hover:text-white ${
                isActive('/menu') ? 'text-[#00965E] bg-[#F5F5F5]' : 'text-[#222222]'
              }`}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#00965E] hover:text-white ${
                isActive('/gallery') ? 'text-[#00965E] bg-[#F5F5F5]' : 'text-[#222222]'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              onClick={toggleMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#00965E] hover:text-white ${
                isActive('/blog') ? 'text-[#00965E] bg-[#F5F5F5]' : 'text-[#222222]'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#00965E] hover:text-white ${
                isActive('/contact') ? 'text-[#00965E] bg-[#F5F5F5]' : 'text-[#222222]'
              }`}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;