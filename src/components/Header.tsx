import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="text-[#D4A017] w-8 h-8" />
            <span className="text-2xl font-bold text-[#2E1A0F] font-montserrat">
              Malang Coffee House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-[#D4A017] ${
                isActive('/') ? 'text-[#D4A017]' : 'text-[#2E1A0F]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-[#D4A017] ${
                isActive('/about') ? 'text-[#D4A017]' : 'text-[#2E1A0F]'
              }`}
            >
              About
            </Link>
            <Link
              to="/menu"
              className={`font-medium transition-colors hover:text-[#D4A017] ${
                isActive('/menu') ? 'text-[#D4A017]' : 'text-[#2E1A0F]'
              }`}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className={`font-medium transition-colors hover:text-[#D4A017] ${
                isActive('/gallery') ? 'text-[#D4A017]' : 'text-[#2E1A0F]'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className={`font-medium transition-colors hover:text-[#D4A017] ${
                isActive('/blog') ? 'text-[#D4A017]' : 'text-[#2E1A0F]'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-[#D4A017] ${
                isActive('/contact') ? 'text-[#D4A017]' : 'text-[#2E1A0F]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#2E1A0F] hover:text-[#D4A017] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`block py-2 px-4 rounded font-medium transition-colors hover:bg-[#F8F4E9] ${
                isActive('/') ? 'text-[#D4A017] bg-[#F8F4E9]' : 'text-[#2E1A0F]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`block py-2 px-4 rounded font-medium transition-colors hover:bg-[#F8F4E9] ${
                isActive('/about') ? 'text-[#D4A017] bg-[#F8F4E9]' : 'text-[#2E1A0F]'
              }`}
            >
              About
            </Link>
            <Link
              to="/menu"
              onClick={toggleMenu}
              className={`block py-2 px-4 rounded font-medium transition-colors hover:bg-[#F8F4E9] ${
                isActive('/menu') ? 'text-[#D4A017] bg-[#F8F4E9]' : 'text-[#2E1A0F]'
              }`}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMenu}
              className={`block py-2 px-4 rounded font-medium transition-colors hover:bg-[#F8F4E9] ${
                isActive('/gallery') ? 'text-[#D4A017] bg-[#F8F4E9]' : 'text-[#2E1A0F]'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              onClick={toggleMenu}
              className={`block py-2 px-4 rounded font-medium transition-colors hover:bg-[#F8F4E9] ${
                isActive('/blog') ? 'text-[#D4A017] bg-[#F8F4E9]' : 'text-[#2E1A0F]'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className={`block py-2 px-4 rounded font-medium transition-colors hover:bg-[#F8F4E9] ${
                isActive('/contact') ? 'text-[#D4A017] bg-[#F8F4E9]' : 'text-[#2E1A0F]'
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