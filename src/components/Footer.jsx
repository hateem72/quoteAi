import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-white font-montserrat">
          © 2025 QuoteAI. All rights reserved.
        </p>
        <p className="text-sm text-gray-300 mt-2 font-inter">
          Made with <i className="fas fa-heart text-pink-400"></i> by Mohd Hateem Ansari
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://linkedin.com/in/mohd-hateem-ansari" className="text-white hover:text-yellow-300 transition-colors">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://github.com/hateemansari" className="text-white hover:text-yellow-300 transition-colors">
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;