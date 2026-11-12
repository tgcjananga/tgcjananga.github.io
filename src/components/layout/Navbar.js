// src/components/layout/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { scrollToSection } from '../../utils/scroll';

const NAV_ITEMS = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  // Background on scroll + scroll-spy, batched to one update per animation frame
  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);

      let current = NAV_ITEMS[0];
      if (y >= maxScroll - 4) {
        current = NAV_ITEMS[NAV_ITEMS.length - 1];
      } else {
        const threshold = window.innerHeight * 0.35;
        for (const id of NAV_ITEMS) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= threshold) current = id;
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu on Escape or when resizing up to desktop
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    const desktop = window.matchMedia('(min-width: 768px)');
    const onBreakpoint = (e) => e.matches && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [isMenuOpen]);

  const goTo = (sectionId) => (event) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const showSolidBg = scrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        showSolidBg
          ? 'border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={goTo('home')}
            aria-label={`${personalInfo.name} — back to top`}
            className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-mono text-2xl font-bold text-transparent"
          >
            {personalInfo.initials}
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((section) => {
              const isActive = activeSection === section;
              return (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={goTo(section)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative rounded-md px-3 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                      isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {section}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-px h-0.5 origin-left rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button (44×44 touch target) */}
          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg md:hidden">
          <ul className="space-y-1 px-4 py-3">
            {NAV_ITEMS.map((section) => {
              const isActive = activeSection === section;
              return (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={goTo(section)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`block rounded-lg px-3 py-3 capitalize transition-colors ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                    }`}
                  >
                    {section}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Scroll progress */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-blue-500 to-cyan-400"
        style={{ scaleX: progress }}
      />
    </header>
  );
};

export default Navbar;
