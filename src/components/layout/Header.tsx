import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigation occurs
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Hospitals', path: '/hospitals' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-white">
            <AlertCircle size={20} />
          </div>
          <span className="font-heading font-bold text-xl text-primary-700">MedBedTrack</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`font-medium transition-colors hover:text-primary-500 ${location.pathname === link.path ? 'text-primary-500' : 'text-neutral-700'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Link to="/login" className="btn btn-outline text-sm px-5 py-2">Log In</Link>
            <Link to="/register" className="btn btn-primary text-sm px-5 py-2">Register</Link>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-700 hover:text-primary-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-neutral-100 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`py-3 px-4 font-medium ${location.pathname === link.path ? 'text-primary-500' : 'text-neutral-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 px-4">
              <Link to="/login" className="btn btn-outline text-center">Log In</Link>
              <Link to="/register" className="btn btn-primary text-center">Register</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;