import React from 'react';

const getRandomColor = () => {
  const colors = [
    'bg-gradient-to-r from-purple-500 to-pink-500',
    'bg-gradient-to-r from-indigo-500 to-blue-500',
    'bg-gradient-to-r from-yellow-400 to-orange-500',
    'bg-gradient-to-r from-pink-500 to-red-500',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const QuoteCard = ({ quote, onClick }) => {
  const cardColor = getRandomColor();

  return (
    <div
      className={`${cardColor} bg-opacity-20 backdrop-blur-lg p-6 rounded-xl w-80 h-80 shadow-lg transform transition-all hover:scale-105 flex flex-col items-center justify-center text-center cursor-pointer border border-white border-opacity-20`}
      onClick={onClick}
    >
      <p className="text-lg font-bold italic text-white font-lobster">"{quote}"</p>
      <p className="text-sm absolute bottom-3 left-1/2 transform -translate-x-1/2 font-inter text-gray-300">
        @QuoteAI
      </p>
    </div>
  );
};

export default QuoteCard;