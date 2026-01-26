// src/components/Hero.js
import React from 'react';
import { Mail, Github, Linkedin, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Avatar */}
        <div className="mb-8 inline-block relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl transform group-hover:scale-105 transition-transform">
            <img 
              src="/images/profile.jpg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl font-bold">${personalInfo.initials}</div>`;
              }}
            />
          </div>
        </div>

        {/* Name with Gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
          {personalInfo.title}
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.description}
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-gray-700/50 hover:-translate-y-1"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform" /> 
            <span>GitHub</span>
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-600/50 hover:-translate-y-1"
          >
            <Linkedin size={20} className="group-hover:rotate-12 transition-transform" /> 
            <span>LinkedIn</span>
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-cyan-600/50 hover:-translate-y-1"
          >
            <Mail size={20} className="group-hover:rotate-12 transition-transform" /> 
            <span>Contact</span>
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-cyan-500/50"
        >
          View My Work 
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;