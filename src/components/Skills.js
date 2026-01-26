// src/components/Skills.js
import React from 'react';
import { Code } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { getSkillIcon, getTechIcon } from '../utils/techIcons';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center group">
          <Code className="inline mr-3 text-cyan-400 group-hover:rotate-12 transition-transform" size={36} />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            const CategoryIcon = getSkillIcon(category);
            
            return (
              <div
                key={category}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-cyan-500/30 mr-3">
                    <CategoryIcon className="text-cyan-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-400">{category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => {
                    const { icon: SkillIcon, color } = getTechIcon(skill);
                    
                    return (
                      <span
                        key={idx}
                        className="group/skill px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm hover:from-cyan-600 hover:to-blue-600 transition-all cursor-default border border-gray-600 hover:border-cyan-400 flex items-center gap-1.5"
                      >
                        <SkillIcon size={14} className={`${color} group-hover/skill:text-white transition-colors`} />
                        <span className="group-hover/skill:text-white">{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;