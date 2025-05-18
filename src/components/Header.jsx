import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`bg-white bg-opacity-10 backdrop-blur-lg border-b border-white border-opacity-20 sticky top-0 z-20 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300 font-lobster cursor-pointer">
            QuoteAI
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/home">
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all transform hover:scale-105">
              Categories
            </button>
          </Link>
          <Link to="/profile">
            <button className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white font-bold hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105">
              About Me
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pb-4 px-6`}>
        <div className="flex flex-col space-y-4">
          <Link 
            to="/home" 
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-bold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Categories
          </Link>
          <Link 
            to="/profile" 
            className="px-6 py-3 bg-transparent border-2 border-white rounded-full text-white font-bold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;