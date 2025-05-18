import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

// Check if the API key is defined
if (!API_KEY) {
  console.error("API Key is not defined. Please check your environment variables.");
}



export const fetchAifyResponse = async (inputText, type) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
  
    // Prompt to generate multiple quotes
    const prompt = `Generate 20-30 quotes about ${inputText}. Each quote should be unique, concise, and meaningful. Return the quotes as a numbered list.`;
  
    const messageToSend = [
      {
        parts: [{ text: prompt }],
        role: 'user',
      },
    ];
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: messageToSend }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const resjson = await response.json();
      const generatedText = resjson.candidates[0].content.parts[0].text;
  
      // Extract quotes from the generated text
      const quotes = generatedText
        .split('\n') // Split by new lines
        .map((line) => line.replace(/^\d+\.\s*/, '').trim()) // Remove numbering
        .filter((line) => line.length > 0); // Filter out empty lines
  
      return quotes;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      throw error;
    }
  };
