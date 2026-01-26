// src/components/Achievements.js
import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  const getRankIcon = (title) => {
    if (title.includes('First')) return Trophy;
    if (title.includes('Second')) return Trophy;
    if (title.includes('Third')) return Trophy;
    if (title.includes('Fourth')) return Trophy;
    return Star;
  };

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center group">
          <Award className="inline mr-3 text-cyan-400 group-hover:rotate-12 transition-transform" size={36} />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const RankIcon = getRankIcon(achievement.title);
            
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-500 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Icon */}
                <div className="mb-4 flex items-center justify-between">
                  <div className={`p-3 bg-gradient-to-br ${achievement.color} rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                    <RankIcon size={24} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                    {achievement.year}
                  </span>
                </div>

                {/* Title */}
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                  {achievement.title}
                </div>
                
                {/* Event Name */}
                <h4 className="font-semibold text-lg mb-2 text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {achievement.event}
                </h4>
                
                {/* Details */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.detail}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-cyan-400">Competitive Programming Enthusiast</span>
            </p>
            <p className="text-gray-400 text-sm">
              Consistently participating in hackathons and coding competitions to sharpen problem-solving skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;