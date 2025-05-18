import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Loader = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin-pulse {
            0% {
              transform: rotate(0deg) scale(1);
              opacity: 1;
            }
            50% {
              transform: rotate(180deg) scale(1.2);
              opacity: 0.7;
            }
            100% {
              transform: rotate(360deg) scale(1);
              opacity: 1;
            }
          }

          @keyframes ring-orbit {
            0% {
              transform: rotate(0deg) translateY(0);
              border-color: #F472B6;
            }
            25% {
              transform: rotate(90deg) translateY(20px);
              border-color: #4F46E5;
            }
            50% {
              transform: rotate(180deg) translateY(0);
              border-color: #FBBF24;
            }
            75% {
              transform: rotate(270deg) translateY(-20px);
              border-color: #34D399;
            }
            100% {
              transform: rotate(360deg) translateY(0);
              border-color: #F472B6;
            }
          }

          @keyframes icon-pulse {
            0%, 100% {
              transform: scale(1);
              color: #FCD34D;
            }
            50% {
              transform: scale(1.5);
              color: #F472B6;
            }
          }
        `}
      </style>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5"></div>
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 blur-3xl opacity-20 animate-pulse right-0 bottom-0"></div>

        {/* Loader Container */}
        <div className="relative flex items-center justify-center">
          {/* Outer Ring */}
          <div
            className="absolute w-32 h-32 rounded-full border-4 border-pink-500 border-opacity-50 animate-[spin-pulse_3s_ease-in-out_infinite,ring-orbit_4s_ease-in-out_infinite] bg-white bg-opacity-10 backdrop-blur-lg"
          ></div>
          {/* Middle Ring */}
          <div
            className="absolute w-24 h-24 rounded-full border-4 border-indigo-500 border-opacity-50 animate-[spin-pulse_2.5s_ease-in-out_infinite,ring-orbit_3.5s_ease-in-out_infinite] bg-white bg-opacity-10 backdrop-blur-lg"
          ></div>
          {/* Inner Ring */}
          <div
            className="absolute w-16 h-16 rounded-full border-4 border-yellow-400 border-opacity-50 animate-[spin-pulse_2s_ease-in-out_infinite,ring-orbit_3s_ease-in-out_infinite] bg-white bg-opacity-10 backdrop-blur-lg"
          ></div>
          {/* Central Icon */}
          <div className="relative flex items-center justify-center">
            <FaQuoteLeft className="text-4xl text-yellow-300 animate-[icon-pulse_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;