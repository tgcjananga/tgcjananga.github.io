// src/components/Footer.js
import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-gray-800 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              {personalInfo.initials}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Engineer passionate about building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">Connect</h3>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-700/50"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-gray-800 hover:bg-cyan-600 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-600/50"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom Section */}
<div className="flex flex-col md:flex-row justify-center items-center gap-4">
  <p className="text-gray-400 text-sm flex items-center gap-2 text-center">
    © {currentYear} {personalInfo.name}. All rights reserved.
  </p>
</div>

        {/* Back to Top Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;