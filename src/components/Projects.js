// src/components/Projects.js
import React, { useState } from 'react';
import { Briefcase, ChevronRight, ExternalLink, Clock } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { getTechIcon } from '../utils/techIcons';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center group">
          <Briefcase className="inline mr-3 text-cyan-400 group-hover:rotate-12 transition-transform" size={36} />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`flex items-center gap-1 text-xs px-3 py-1.5 bg-cyan-600/90 text-white rounded-full border border-cyan-400/50 backdrop-blur-sm shadow-lg`}>
                    <Clock size={12} />
                    {project.status}
                  </span>
                </div>

                {/* Overlay gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full border border-cyan-500/30 whitespace-nowrap ml-2">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start group/item">
                        <ChevronRight 
                          size={16} 
                          className="text-cyan-400 mr-1 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" 
                        />
                        <span className="group-hover/item:text-gray-300 transition-colors">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => {
                    const { icon: TechIcon, color } = getTechIcon(tech);
                    
                    return (
                      <span
                        key={i}
                        className="group/tech text-xs px-3 py-1.5 bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30 hover:border-blue-400 hover:bg-blue-600/30 transition-all flex items-center gap-1.5"
                      >
                        <TechIcon size={12} className={`${color} group-hover/tech:scale-110 transition-transform`} />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* View Details Link (shows on hover) */}
                <div className={`mt-4 pt-4 border-t border-gray-700/50 transition-all ${
                  hoveredProject === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold group/link">
                    <span>View Details</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative corner gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.borderGradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;