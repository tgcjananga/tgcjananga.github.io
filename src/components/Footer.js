// src/components/Footer.js
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { handleAnchorClick, scrollToSection } from '../utils/scroll';

const QUICK_LINKS = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

const socialLinks = [
  { label: 'GitHub', href: personalInfo.github, icon: Github, external: true },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail, external: false },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              {personalInfo.name}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Software Engineer passionate about building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="mb-3 font-mono text-sm uppercase tracking-widest text-slate-300">Quick links</h2>
            <ul className="grid grid-cols-2 gap-x-4 sm:block sm:space-y-1">
              {QUICK_LINKS.map((link) => {
                const id = link.toLowerCase();
                return (
                  <li key={link}>
                    <a
                      href={`#${id}`}
                      onClick={handleAnchorClick(id)}
                      className="inline-block py-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="mb-3 font-mono text-sm uppercase tracking-widest text-slate-300">Connect</h2>
            <ul className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors duration-200 hover:border-cyan-500/50 hover:text-cyan-400"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="group inline-flex h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-cyan-400 transition-colors hover:bg-slate-900 hover:text-cyan-300"
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
