import React from 'react';
import image from '../assets/my.png';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-12 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 mb-6 border-4 border-yellow-300 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img src={image} alt="Mohd Hateem Ansari" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-2 font-lobster">Mohd Hateem Ansari</h1>
          <p className="text-xl text-gray-200 font-montserrat">Web Developer | AI Enthusiast | Musician</p>
        </div>

        <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white border-opacity-20">
          <h2 className="text-3xl font-semibold text-white mb-4 font-montserrat">About Me</h2>
          <p className="text-lg text-gray-200 leading-relaxed font-inter">
            I am a passionate web developer with expertise in full-stack development. Currently, I am a second-year BTech student exploring AI and ML, alongside working on various web-based projects.
            I have experience with technologies like Express.js, MongoDB, and MySQL, and I have developed platforms like{' '}
            <span className="font-semibold text-yellow-300">SkillBhartiya</span>, a freelancing website with AI-powered features.
          </p>
        </div>

        <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white border-opacity-20">
          <h2 className="text-3xl font-semibold text-white mb-4 font-montserrat">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-200 font-inter">
            <li className="flex items-center">
              <i className="fas fa-code text-yellow-300 mr-2"></i> Frontend & Backend Web Development
            </li>
            <li className="flex items-center">
              <i className="fas fa-database text-yellow-300 mr-2"></i> Python, C, JavaScript, MongoDB, MySQL
            </li>
            <li className="flex items-center">
              <i className="fas fa-tasks text-yellow-300 mr-2"></i> Project Management & Leadership
            </li>
            <li className="flex items-center">
              <i className="fas fa-robot text-yellow-300 mr-2"></i> AI/ML Basics & Recommendation Systems
            </li>
            <li className="flex items-center">
              <i className="fas fa-music text-yellow-300 mr-2"></i> Music & Videography (Band: RYTHEM)
            </li>
          </ul>
        </div>

        <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white border-opacity-20">
          <h2 className="text-3xl font-semibold text-white mb-4 font-montserrat">Projects</h2>
          <ul className="space-y-4 text-lg text-gray-200 font-inter">
            <li>
              <span className="font-semibold text-yellow-300">SkillBhartiya</span> - A freelancing platform with AI-driven portfolio enhancement.
            </li>
            <li>
              <span className="font-semibold text-yellow-300">PhilatelicBuddy</span> - A national web community for philatelists with a rating system.
            </li>
            <li>
              Cafe Website & Study Management System - Full-stack projects demonstrating UI/UX & database design.
            </li>
          </ul>
        </div>

        <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white border-opacity-20">
          <h2 className="text-3xl font-semibold text-white mb-4 font-montserrat">Contact</h2>
          <p className="text-lg text-gray-200 mb-6 font-inter">Let's connect! Feel free to reach out for collaborations or opportunities.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/mohd-hateem-ansari" className="text-yellow-300 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a href="https://github.com/hateemansari" className="text-yellow-300 hover:text-white transition-colors">
              <i className="fab fa-github text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;