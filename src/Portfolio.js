// src/Portfolio.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Portfolio = () => (
  <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-950"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Portfolio;
