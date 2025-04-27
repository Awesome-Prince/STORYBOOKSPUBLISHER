import { useState } from 'react';
import { Link } from 'wouter';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <svg className="h-16 w-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <div className="ml-3">
            <h1 className="text-2xl font-playfair font-bold text-primary">Bondless</h1>
            <p className="text-sm text-neutral-600">Book Publisher</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/">
            <a className="nav-link text-neutral-800 hover:text-primary font-medium transition-colors">Home</a>
          </Link>
          
          <div className="dropdown">
            <a href="#services" className="nav-link text-neutral-800 hover:text-primary font-medium transition-colors">
              Services <i className="fas fa-chevron-down text-xs ml-1"></i>
            </a>
            <div className="dropdown-content pt-4">
              <div className="bg-white rounded-md shadow-lg p-4">
                <a href="#editing" className="block py-2 px-4 hover:bg-neutral-200 text-neutral-800 hover:text-primary">Editing Services</a>
                <a href="#design" className="block py-2 px-4 hover:bg-neutral-200 text-neutral-800 hover:text-primary">Book Design</a>
                <a href="#marketing" className="block py-2 px-4 hover:bg-neutral-200 text-neutral-800 hover:text-primary">Marketing & Promotion</a>
                <a href="#distribution" className="block py-2 px-4 hover:bg-neutral-200 text-neutral-800 hover:text-primary">Distribution</a>
              </div>
            </div>
          </div>
          
          <a href="#books" className="nav-link text-neutral-800 hover:text-primary font-medium transition-colors">Books</a>
          <a href="#about" className="nav-link text-neutral-800 hover:text-primary font-medium transition-colors">About Us</a>
          <a href="#contact" className="nav-link text-neutral-800 hover:text-primary font-medium transition-colors">Contact</a>
          
          <a href="#getstarted" className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-md shadow-md transition-all transform hover:-translate-y-1">
            Get Started
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white w-full absolute top-full left-0 z-50 shadow-lg`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link href="/">
            <a onClick={closeMobileMenu} className="text-neutral-800 hover:text-primary font-medium py-2 border-b border-neutral-200">Home</a>
          </Link>
          <a onClick={closeMobileMenu} href="#services" className="text-neutral-800 hover:text-primary font-medium py-2 border-b border-neutral-200">Services</a>
          <a onClick={closeMobileMenu} href="#books" className="text-neutral-800 hover:text-primary font-medium py-2 border-b border-neutral-200">Books</a>
          <a onClick={closeMobileMenu} href="#about" className="text-neutral-800 hover:text-primary font-medium py-2 border-b border-neutral-200">About Us</a>
          <a onClick={closeMobileMenu} href="#contact" className="text-neutral-800 hover:text-primary font-medium py-2 border-b border-neutral-200">Contact</a>
          <a onClick={closeMobileMenu} href="#getstarted" className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md shadow-md text-center">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
