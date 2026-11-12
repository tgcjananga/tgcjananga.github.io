// src/components/ui/SectionHeading.js
import React from 'react';
import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, subtitle, icon: Icon }) => (
  <Reveal className="mb-12 text-center md:mb-16">
    <p className="mb-3 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-cyan-400">
      {Icon && <Icon size={16} aria-hidden="true" />}
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">{subtitle}</p>
    )}
  </Reveal>
);

export default SectionHeading;
