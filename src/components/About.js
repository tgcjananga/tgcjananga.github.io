// src/components/About.js
import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { education, experience } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center group">
          <GraduationCap className="inline mr-3 text-cyan-400 group-hover:rotate-12 transition-transform" size={36} />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-cyan-500/30">
                <GraduationCap className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-cyan-400">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="pl-4 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors">
                  <h4 className="font-semibold text-lg text-gray-100">{edu.degree}</h4>
                  <p className="text-gray-400 mt-1">{edu.institution}</p>
                  {edu.period && (
                    <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
                  )}
                  {edu.gpa && (
                    <p className="text-cyan-400 text-sm mt-1 font-semibold">GPA: {edu.gpa}</p>
                  )}
                  {edu.achievement && (
                    <p className="text-cyan-400 text-sm mt-1 font-semibold">{edu.achievement}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Card */}
          <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-cyan-500/30">
                <Briefcase className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-cyan-400">Experience</h3>
            </div>
            
            {experience.map((exp, idx) => (
              <div key={idx} className="pl-4 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors">
                <h4 className="font-semibold text-lg text-gray-100">{exp.role}</h4>
                <p className="text-gray-400 mt-1">{exp.organization}</p>
                <p className="text-gray-500 text-sm mt-1 mb-3">{exp.period}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.courses.map((course, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full border border-gray-600 hover:border-cyan-500/50 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;