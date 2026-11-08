// src/components/About.js
import React from 'react';
import { GraduationCap, Briefcase, User } from 'lucide-react';
import { education, experience } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const TimelineItem = ({ children }) => (
  <li className="relative border-l-2 border-slate-800 pb-6 pl-6 last:pb-0">
    <span
      aria-hidden="true"
      className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950"
    />
    {children}
  </li>
);

const Card = ({ icon: Icon, title, children }) => (
  <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
    <div className="mb-6 flex items-center gap-4">
      <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3">
        <Icon className="text-cyan-400" size={24} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-slate-50 md:text-2xl">{title}</h3>
    </div>
    {children}
  </div>
);

const About = () => (
  <section id="about" className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="About me" title="Education & experience" icon={User} />

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <Reveal>
          <Card icon={GraduationCap} title="Education">
            <ol>
              {education.map((edu) => (
                <TimelineItem key={edu.degree}>
                  <h4 className="text-lg font-semibold text-slate-100">{edu.degree}</h4>
                  <p className="mt-1 text-slate-400">{edu.institution}</p>
                  {edu.period && <p className="mt-1 font-mono text-sm text-slate-400">{edu.period}</p>}
                  {(edu.gpa || edu.achievement) && (
                    <p className="mt-3 inline-block rounded-md bg-cyan-500/10 px-2.5 py-1 text-sm font-semibold text-cyan-300">
                      {edu.gpa ? `GPA ${edu.gpa}` : edu.achievement}
                    </p>
                  )}
                </TimelineItem>
              ))}
            </ol>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card icon={Briefcase} title="Experience">
            <ol>
              {experience.map((exp) => (
                <TimelineItem key={exp.role}>
                  <h4 className="text-lg font-semibold text-slate-100">{exp.role}</h4>
                  <p className="mt-1 text-slate-400">{exp.organization}</p>
                  <p className="mt-1 font-mono text-sm text-slate-400">{exp.period}</p>
                  <p className="mb-2 mt-4 text-sm font-medium text-slate-300">Courses supported</p>
                  <ul className="flex flex-wrap gap-2">
                    {exp.courses.map((course) => (
                      <li
                        key={course}
                        className="rounded-md border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-sm text-slate-200"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </ol>
          </Card>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
