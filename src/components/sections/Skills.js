// src/components/sections/Skills.js
import React from 'react';
import { Code } from 'lucide-react';
import { skills } from '../../data/portfolioData';
import { getSkillIcon, getTechIcon } from '../../utils/techIcons';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const Skills = () => (
  <section id="skills" className="border-y border-slate-900 bg-slate-900/30 px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Toolbox" title="Technical skills" icon={Code} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], idx) => {
          const CategoryIcon = getSkillIcon(category);

          return (
            <Reveal key={category} delay={(idx % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-2">
                    <CategoryIcon className="text-cyan-400" size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50">{category}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => {
                    const { icon: SkillIcon, color } = getTechIcon(skill);
                    return (
                      <li
                        key={skill}
                        className="flex items-center gap-1.5 rounded-md border border-slate-700/80 bg-slate-800/70 px-2.5 py-1.5 text-sm text-slate-200"
                      >
                        <SkillIcon size={14} className={color} aria-hidden="true" />
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
