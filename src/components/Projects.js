// src/components/Projects.js
import React, { useState } from 'react';
import { FolderGit2, Check, CheckCircle2, CalendarDays, Github, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { getTechIcon } from '../utils/techIcons';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const StatusBadge = ({ status }) => {
  const base =
    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md';

  if (/ongoing/i.test(status)) {
    return (
      <span className={`${base} border-amber-400/40 bg-amber-950/70 text-amber-200`}>
        <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
        {status}
      </span>
    );
  }
  if (/completed/i.test(status)) {
    return (
      <span className={`${base} border-emerald-400/40 bg-emerald-950/70 text-emerald-200`}>
        <CheckCircle2 size={12} aria-hidden="true" />
        {status}
      </span>
    );
  }
  return (
    <span className={`${base} border-slate-500/40 bg-slate-950/70 text-slate-200`}>
      <CalendarDays size={12} aria-hidden="true" />
      {status}
    </span>
  );
};

const ProjectImage = ({ project, wide }) => {
  const [failed, setFailed] = useState(!project.image);

  return (
    <div
      className={`relative aspect-video overflow-hidden bg-slate-900 ${
        wide ? 'md:aspect-auto md:min-h-[18rem] md:w-1/2 md:shrink-0' : ''
      }`}
    >
      {failed ? (
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.borderGradient} opacity-25`} />
          <Code2 size={56} className="relative text-white/50" />
        </div>
      ) : (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          decoding="async"
          width="640"
          height="360"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {/* Keeps the badge legible on any image */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      <div className="absolute right-3 top-3">
        <StatusBadge status={project.status} />
      </div>
    </div>
  );
};

const ProjectLinks = ({ project }) => {
  if (!project.github && !project.demo) return null;
  const linkClass =
    'inline-flex h-10 items-center gap-2 rounded-lg border border-slate-700 px-4 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-cyan-400/60 hover:text-cyan-300';

  return (
    <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-800 pt-5">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Github size={16} aria-hidden="true" />
          Source
          <span className="sr-only">code for {project.title} (opens in a new tab)</span>
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <ExternalLink size={16} aria-hidden="true" />
          Live demo
          <span className="sr-only">of {project.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
};

const ProjectCard = ({ project, wide }) => (
  <article
    className={`flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 ${
      wide ? 'md:flex-row' : ''
    }`}
  >
    <ProjectImage project={project} wide={wide} />

    <div className="flex flex-1 flex-col p-6">
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-cyan-400">{project.type}</p>
      <h3 className="mb-3 text-xl font-bold leading-snug text-slate-50">{project.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <ul className="mb-6 space-y-2">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-slate-300">
            <Check size={16} className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>

      <ul className="mt-auto flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tech.map((tech) => {
          const { icon: TechIcon, color } = getTechIcon(tech);
          return (
            <li
              key={tech}
              className="flex items-center gap-1.5 rounded-md border border-slate-700/80 bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-200"
            >
              <TechIcon size={12} className={color} aria-hidden="true" />
              {tech}
            </li>
          );
        })}
      </ul>

      <ProjectLinks project={project} />
    </div>
  </article>
);

const Projects = () => {
  const hasOddCount = projects.length % 2 === 1;

  return (
    <section id="projects" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          subtitle="Research, full-stack and machine-learning projects — from IoT medical monitoring to deepfake detection."
          icon={FolderGit2}
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, idx) => {
            // An odd last card spans the full row instead of leaving an empty gap
            const wide = hasOddCount && idx === projects.length - 1;
            return (
              <Reveal key={project.title} delay={(idx % 2) * 0.08} className={wide ? 'md:col-span-2' : ''}>
                <ProjectCard project={project} wide={wide} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
