import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAifyResponse } from '../api/quoteApi';
import QuoteCard from '../components/QuoteCard';
import Loader from '../components/Loader';
import QuotePopup from '../components/QuotePopup';

const QuotesPage = () => {
  const { category } = useParams();
  const [infoMessage] = useState("Click on any quote to customize and download it.");
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const quotes = await fetchAifyResponse(category, 'quotes');
        if (quotes.length === 0) {
          throw new Error('No quotes were generated. Please try again.');
        }
        setQuotes(quotes);
      } catch (error) {
        console.error('Error fetching quotes:', error);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, [category]);

  if (loading) {
    return <div className="text-center mt-8"><Loader /></div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-8 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="mr-4 p-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl">
            <i className="fas fa-arrow-left"></i> Back
          </Link>
          <h1 className="text-4xl font-bold text-white font-lobster">{category} Quotes</h1>
        </div>
        <div className="text-center mb-4">
          <p className="text-lg text-gray-200 font-inter">{infoMessage}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} onClick={() => setSelectedQuote(quote)} />
          ))}
        </div>
        {selectedQuote && (
          <QuotePopup
            quote={selectedQuote}
            onClose={() => setSelectedQuote(null)}
          />
        )}
      </div>
    </div>
  );
};

export default QuotesPage;