import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';

function MusicalSphere({ isPlaying }) {
  const sphereRef = useRef();
  const notesRef = useRef([]);

  return (
    <>
      {/* Central Rotating Sphere */}
      <Float speed={1} rotationIntensity={isPlaying ? 1 : 0.2} floatIntensity={2}>
        <mesh ref={sphereRef}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshPhongMaterial 
            color="#00FFFF" 
            emissive="#FF00FF" 
            shininess={100} 
            wireframe={true} 
          />
        </mesh>
      </Float>

      {/* Floating Musical Notes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={3}>
          <Text3D
            position={[
              Math.sin(i) * 5,
              Math.cos(i) * 5,
              Math.sin(i * 0.5) * 5
            ]}
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.1}
            ref={el => notesRef.current[i] = el}
          >
            ♪
            <meshPhongMaterial color="#00FFFF" emissive="#FFFFFF" emissiveIntensity={isPlaying ? 1 : 0.3} />
          </Text3D>
        </Float>
      ))}

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FF00FF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00FFFF" />
    </>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const teamMembers = [
    { name: "Alex", role: "Vocalist", social: "@alexmusic" },
    { name: "Sam", role: "Guitarist", social: "@samstrings" },
    { name: "Riley", role: "Drummer", social: "@rileybeats" },
    { name: "Jordan", role: "Pianist", social: "@jordankeys" },
  ];

  const mentors = [
    { name: "Dr. Melody Note", role: "Faculty Coordinator", contact: "music.club@cosmos.edu" },
    { name: "Prof. Rhythm Pulse", role: "Music Advisor", contact: "rhythm@cosmos.edu" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Styles */}
      <style>{`
        @keyframes glowPulse { 0% { text-shadow: 0 0 10px #00FFFF; } 50% { text-shadow: 0 0 20px #FF00FF, 0 0 30px #00FFFF; } 100% { text-shadow: 0 0 10px #00FFFF; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .glow-pulse { animation: glowPulse 2s infinite; }
        .floating { animation: float 3s ease-in-out infinite; }
        .card-3d { transition: transform 0.6s, box-shadow 0.6s; transform-style: preserve-3d; perspective: 1000px; }
        .card-3d:hover { transform: rotateY(180deg) scale(1.1); box-shadow: 0 0 30px #00FFFF; }
        .neon-border { border: 2px solid #00FFFF; box-shadow: 0 0 20px #00FFFF; }
        .bg-gradient { background: radial-gradient(circle at center, #1a0033, #000000); }
      `}</style>

      {/* Hero Section with Three.js */}
      <section className="h-screen bg-gradient relative flex flex-col items-center justify-center">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <OrbitControls enableZoom={false} enablePan={false} />
            <MusicalSphere isPlaying={isPlaying} />
          </Canvas>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest glow-pulse mb-8">
            SYMPHONY
          </h1>
          <p className="text-2xl md:text-4xl text-purple-400 mb-12 floating">
            Feel the Rhythm, Live the Music
          </p>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-8 py-4 bg-transparent neon-border rounded-full text-xl glow-pulse hover:scale-110 transition-transform"
          >
            {isPlaying ? 'Pause the Cosmos' : 'Unleash the Sound'}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gradient">
        <h2 className="text-5xl font-bold text-center mb-16 glow-pulse">About the Club</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-300">
          <p className="mb-8 text-lg leading-relaxed">
            SYMPHONY – The Music Club is a sonic universe where creativity reverberates. 
            Founded in 2015, we bring together melody makers, rhythm rebels, and sound sculptors 
            to perform, innovate, and inspire. From electrifying concerts to intimate jam sessions, 
            we’re the pulse of campus culture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="floating">
              <h3 className="text-2xl text-cyan-400 glow-pulse">Mission</h3>
              <p>To amplify every beat and harmonize every soul.</p>
            </div>
            <div className="floating" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl text-cyan-400 glow-pulse">Events</h3>
              <p>Annual Fest, Open Mics, Workshops.</p>
            </div>
            <div className="floating" style={{ animationDelay: '1s' }}>
              <h3 className="text-2xl text-cyan-400 glow-pulse">Legacy</h3>
              <p>Over 50 performances, 10 awards won.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-24 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 glow-pulse">Our Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {mentors.map((mentor, i) => (
            <div key={i} className="card-3d relative h-64">
              <div className="absolute w-full h-full bg-gray-900 neon-border rounded-lg p-8 flex flex-col justify-center backface-hidden">
                <h3 className="text-2xl font-bold text-cyan-400 glow-pulse">{mentor.name}</h3>
                <p className="text-gray-300">{mentor.role}</p>
                <p className="text-gray-400 mt-4">{mentor.contact}</p>
              </div>
              <div className="absolute w-full h-full bg-gray-900 neon-border rounded-lg p-8 flex items-center justify-center backface-hidden transform rotate-y-180">
                <p className="text-purple-400 text-center glow-pulse">"Guiding the symphony of tomorrow."</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gradient">
        <h2 className="text-5xl font-bold text-center mb-16 glow-pulse">The Soundwave Crew</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <div key={i} className="card-3d relative h-80">
              <div className="absolute w-full h-full bg-gray-900 neon-border rounded-lg p-8 flex flex-col items-center justify-center backface-hidden">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6 animate-pulse"></div>
                <h3 className="text-2xl font-bold text-cyan-400 glow-pulse">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
              <div className="absolute w-full h-full bg-gray-900 neon-border rounded-lg p-8 flex items-center justify-center backface-hidden transform rotate-y-180">
                <p className="text-purple-400 glow-pulse">{member.social}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient text-center">
        <div className="flex justify-center gap-8 mb-8">
          {['instagram', 'youtube', 'twitter'].map((social) => (
            <a key={social} href="#" className="text-cyan-400 hover:text-purple-400 glow-pulse text-3xl transform hover:scale-125 transition-transform">♪</a>
          ))}
        </div>
        <p className="text-gray-400 mb-8">symphony@cosmos.edu | Interstellar Campus, Nebula Lane</p>
        <button className="px-10 py-4 bg-transparent neon-border rounded-full text-xl glow-pulse hover:scale-110 transition-transform">
          Join the Symphony
        </button>
      </footer>
    </div>
  );
}

export default App;