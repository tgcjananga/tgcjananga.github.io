// src/components/Hero.js
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, ChevronDown, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { handleAnchorClick } from '../utils/scroll';

const socialLinks = [
  { label: 'GitHub', href: personalInfo.github, icon: Github, external: true },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail, external: false },
];

const Hero = () => {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  // Staggered entrance for hero content
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  };
  const item = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pb-24 pt-28"
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-dot-grid absolute inset-0" />
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl md:h-96 md:w-96" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 animate-pulse rounded-full bg-cyan-500/10 blur-3xl [animation-delay:1s] md:h-96 md:w-96" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Avatar */}
        <motion.div variants={item} className="relative mb-8 inline-block">
          <div aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-60 blur-xl" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-cyan-400/40 shadow-2xl md:h-36 md:w-36">
            {avatarFailed ? (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 font-mono text-4xl font-bold text-slate-950">
                {personalInfo.initials}
              </div>
            ) : (
              <img
                src="/images/profile.jpg"
                alt={`Portrait of ${personalInfo.name}`}
                width="144"
                height="144"
                fetchPriority="high"
                className="h-full w-full object-cover"
                onError={() => setAvatarFailed(true)}
              />
            )}
          </div>
        </motion.div>

        {/* Availability */}
        {personalInfo.openToWork && (
          <motion.p variants={item} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </span>
          </motion.p>
        )}

        <motion.h1
          variants={item}
          className="mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text pb-1 text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p variants={item} className="mb-6 text-xl font-medium text-slate-200 md:text-2xl">
          {personalInfo.title}
        </motion.p>

        <motion.p variants={item} className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          {personalInfo.description}
        </motion.p>

        {/* Primary + secondary CTA */}
        <motion.div variants={item} className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            onClick={handleAnchorClick('projects')}
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors duration-200 hover:bg-cyan-300 sm:w-auto"
          >
            View my work
            <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={handleAnchorClick('contact')}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-7 font-semibold text-slate-100 transition-colors duration-200 hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
          >
            Get in touch
          </a>
          {personalInfo.resume && (
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-5 font-semibold text-slate-300 transition-colors duration-200 hover:text-white sm:w-auto"
            >
              <FileText size={18} aria-hidden="true" />
              Résumé
            </a>
          )}
        </motion.div>

        {/* Social icons */}
        <motion.ul variants={item} className="flex items-center justify-center gap-2" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:bg-slate-800 hover:text-cyan-400"
              >
                <Icon size={22} aria-hidden="true" />
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#about"
        onClick={handleAnchorClick('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-cyan-400 sm:inline-flex"
      >
        <ChevronDown size={26} aria-hidden="true" className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
