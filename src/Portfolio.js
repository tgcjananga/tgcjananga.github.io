// src/Portfolio.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;