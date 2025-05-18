import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import { FaSearch, FaSpinner } from 'react-icons/fa';

const categories = [
  'Motivational', 'Attitude', 'Success', 'Love', 'Life', 'Wisdom',
  'Leadership', 'Happiness', 'Friendship', 'Hard Work', 'Self-Improvement',
  'Mindfulness', 'Entrepreneurship', 'Positivity', 'Spirituality',
  'Overcoming Failure', 'Creativity', 'Courage', 'Kindness', 'Patience',
  'Health & Wellness', 'Philosophy', 'Personal Growth', 'Resilience',
  'Dreams & Goals', 'Innovation', 'Humor', 'Family', 'Learning & Education',
  'Time Management'
];

const Home = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleCategoryClick = (category) => {
    navigate(`/quotes/${category}`);
  };

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      navigate(`/quotes/${encodeURIComponent(searchInput.trim())}`);
      setSearchInput('');
      setIsSearching(false);
    }, 500); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-8 relative font-poppins">
     
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10">
        {/* Header */}
        <h1 className="text-5xl font-bold text-white text-center mb-8 font-lobster">
          Explore Quote Categories
        </h1>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-full p-2 border border-white border-opacity-20">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a custom category..."
              className="flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-300 focus:outline-none font-inter"
            />
            <button
              onClick={handleSearch}
              disabled={isSearching || !searchInput.trim()}
              className={`p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isSearching ? (
                <FaSpinner className="animate-spin text-2xl" />
              ) : (
                <FaSearch className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category}
              className="transform transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryButton
                category={category}
                onClick={() => handleCategoryClick(category)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;