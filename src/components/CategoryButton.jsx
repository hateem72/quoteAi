import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const CategoryButton = ({ category, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative bg-white bg-opacity-10 backdrop-blur-lg text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all transform hover:shadow-xl hover:shadow-pink-500/30 border border-white border-opacity-20 overflow-hidden group font-montserrat"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className="relative flex items-center justify-center text-lg">
        <FaQuoteLeft className="mr-2 text-yellow-300 group-hover:text-white transition-colors" />
        {category}
      </span>
    </button>
  );
};

export default CategoryButton;