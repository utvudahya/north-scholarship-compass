
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Palette, School } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center group" onClick={handleLinkClick}>
                <School className="h-8 w-8 text-scholarship-purple mr-2 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                <span className="font-bold text-xl bg-gradient-to-r from-scholarship-purple to-scholarship-blue bg-clip-text text-transparent">NorthScholarship</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-scholarship-purple px-3 py-2 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-scholarship-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" onClick={handleLinkClick}>Home</Link>
              <Link to="/scholarships" className="text-gray-700 hover:text-scholarship-purple px-3 py-2 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-scholarship-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" onClick={handleLinkClick}>Scholarships</Link>
              <Link to="/colleges" className="text-gray-700 hover:text-scholarship-purple px-3 py-2 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-scholarship-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" onClick={handleLinkClick}>Colleges</Link>
              <Link to="/calculator" className="text-gray-700 hover:text-scholarship-purple px-3 py-2 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-scholarship-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" onClick={handleLinkClick}>EMI Calculator</Link>
              <Button className="ml-4 bg-gradient-to-r from-scholarship-purple to-indigo-500 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-0.5">
                <Palette className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-scholarship-purple"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-scholarship-purple hover:bg-gray-50" onClick={handleLinkClick}>Home</Link>
            <Link to="/scholarships" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-scholarship-purple hover:bg-gray-50" onClick={handleLinkClick}>Scholarships</Link>
            <Link to="/colleges" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-scholarship-purple hover:bg-gray-50" onClick={handleLinkClick}>Colleges</Link>
            <Link to="/calculator" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-scholarship-purple hover:bg-gray-50" onClick={handleLinkClick}>EMI Calculator</Link>
            <Button className="mx-2 my-2 w-auto bg-gradient-to-r from-scholarship-purple to-indigo-500">
              <Palette className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
