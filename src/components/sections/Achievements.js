// src/components/sections/Achievements.js
import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';
import { achievements } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

// Podium finishes get a trophy; selections/shortlists get a medal
const getRankIcon = (title) => (/place/i.test(title) ? Trophy : Medal);

const Achievements = () => (
  <section id="achievements" className="border-y border-slate-900 bg-slate-900/30 px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements"
        subtitle="Competitive programming enthusiast — consistently taking part in hackathons and coding contests to sharpen problem-solving skills."
        icon={Award}
      />

      <ul className="grid gap-6 md:grid-cols-3">
        {achievements.map((achievement, idx) => {
          const RankIcon = getRankIcon(achievement.title);

          return (
            <Reveal
              as="li"
              key={achievement.event}
              delay={idx * 0.08}
              className="relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${achievement.color} opacity-20 blur-3xl`}
              />

              <div className="mb-5 flex items-center justify-between">
                <div className={`rounded-lg bg-gradient-to-br ${achievement.color} p-3 shadow-lg`}>
                  <RankIcon size={22} className="text-white" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 font-mono text-sm text-slate-300">
                  {achievement.year}
                </span>
              </div>

              <p className={`mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-2xl font-bold text-transparent md:text-3xl`}>
                {achievement.title}
              </p>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-100">{achievement.event}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{achievement.detail}</p>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Achievements;
