import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Animated background component
const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 opacity-20"></div>
      
      <div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 blur-3xl opacity-30 transition-all duration-1000 ease-out"
        style={{ 
          left: `${mousePosition.x - 200}px`, 
          top: `${mousePosition.y - 200}px`,
        }}
      ></div>
      
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
};

const AnimatedText = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      {children}
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white border-opacity-20 animate-fade-in-up group" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-4xl mb-6 text-white group-hover:text-yellow-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 font-display">
        {title}
      </h3>
      <p className="text-gray-200">
        {description}
      </p>
    </div>
  );
};

const LandingPage = () => {
  const [quoteInput, setQuoteInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerateQuote = () => {
    if (!quoteInput.trim()) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setQuoteInput('');
    }, 1500);
  };
  
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-32 text-center">
            <AnimatedText delay={300}>
              <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-400 mb-6 font-display leading-tight">
                Inspire Your World With AI Quotes
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={600}>
              <p className="text-2xl text-white mb-12 max-w-3xl mx-auto">
                Generate stunning, customizable quotes powered by AI that inspire, motivate, and captivate your audience.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={900}>
              <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
                <Link to="/home">
                  <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-full text-xl font-bold text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                    Explore Categories
                  </button>
                </Link>
                <Link to="/home">
                <button className="px-10 py-4 bg-transparent border-2 border-white rounded-full text-xl font-bold text-white hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105 focus:outline-none">
                  Generate Now
                </button>
                </Link>
              </div>
            </AnimatedText>
            
           
            
            
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-purple-900 relative">
          <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold text-white mb-6 font-display">Craft Your Perfect Quote</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                QuoteAI combines powerful AI technology with beautiful design options to create quotes that resonate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon="✨" 
                title="AI-Powered Generation" 
                description="Our advanced AI creates unique, meaningful quotes tailored to any topic or theme you choose."
                delay={300}
              />
              <FeatureCard 
                icon="🎨" 
                title="Beautiful Styling" 
                description="Customize your quotes with stunning backgrounds, typography options, and color schemes."
                delay={600}
              />
              <FeatureCard 
                icon="🚀" 
                title="Instant Download" 
                description="Save your masterpiece in high resolution for social media, prints, or anywhere inspiration is needed."
                delay={900}
              />
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-20 bg-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold text-white mb-6 font-display">Explore Popular Categories</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Find the perfect quote for any occasion, emotion, or message you want to convey.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {["Motivation", "Success", "Happiness", "Love", "Wisdom", "Leadership", "Friendship", "Mindfulness"].map((category, index) => (
                <Link key={category} to={`/quotes/${category}`}>
                  <div 
                    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/home">
                <button className="px-8 py-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-full text-white hover:bg-opacity-20 transition-all transform hover:scale-105 border border-white border-opacity-20">
                  View All Categories
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold text-white mb-6 font-display">What Our Users Say</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Join thousands of satisfied creators using QuoteAI for their inspiration needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "QuoteAI has transformed my social media content. The quotes are unique and always get amazing engagement!",
                  author: "Saniya Siddiqui",
                  role: "Content Creator"
                },
                {
                  text: "I use these quotes in my presentations and they always leave a lasting impression. The customization options are incredible.",
                  author: "Aman Khan",
                  role: "Business Coach"
                },
                {
                  text: "As a graphic designer, I love how easily I can create beautiful quote images that match my client's brand perfectly.",
                  author: "Arun",
                  role: "Graphic Designer"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-10"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6 text-yellow-300 text-4xl">❝</div>
                    <p className="text-gray-200 mb-6 flex-1">{testimonial.text}</p>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.author}</h4>
                      <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-indigo-900 to-black relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6 font-display">Ready to Create Your Perfect Quote?</h2>
              <p className="text-xl text-gray-200 mb-12">
                Join thousands of users creating inspiring, motivational, and beautiful quotes for all occasions.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link to="/home">
                  <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-full text-xl font-bold text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                    Get Started Now
                  </button>
                </Link>
                
                <Link to="/profile">
                  <button className="px-10 py-4 bg-transparent border-2 border-white rounded-full text-xl font-bold text-white hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105 focus:outline-none">
                    Learn About the Creator
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;