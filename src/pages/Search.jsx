import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'AIzaSyCwXkQLTWWC9CKvJJv6jUE_qXZmDVg2oQk';
  const SEARCH_ENGINE_ID = '72b7c089046864d39';

  const searchGoogle = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?q=${query}&key=${API_KEY}&cx=${SEARCH_ENGINE_ID}`
      );
      setResults(response.data.items);
    } catch (error) {
      setError('Error fetching data. Please try again.');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Google Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Google..."
        className="border border-gray-300 rounded p-2 mb-2 w-full"
      />
      <button 
        onClick={searchGoogle} 
        className="bg-blue-500 text-white rounded p-2"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-4">
        {results.map((item) => (
          <div key={item.link} className="mb-4">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {item.title}
            </a>
            <p>{item.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
