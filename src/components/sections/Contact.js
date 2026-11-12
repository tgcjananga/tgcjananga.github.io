// src/components/sections/Contact.js
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const cardClass =
  'group relative flex h-full items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-colors duration-200 hover:border-cyan-500/50 hover:bg-slate-900';

const IconTile = ({ icon: Icon }) => (
  <div className="shrink-0 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 transition-colors duration-200 group-hover:bg-cyan-500/20">
    <Icon className="text-cyan-400" size={22} aria-hidden="true" />
  </div>
);

/** Whole card is clickable via a stretched link; extra controls sit above it with `relative z-10`. */
const ContactCard = ({ icon, label, value, href, external, children }) => (
  <div className={cardClass}>
    <IconTile icon={icon} />
    <div className="min-w-0 flex-1">
      <p className="mb-0.5 text-sm text-slate-400">{label}</p>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="block break-words font-semibold text-slate-100 transition-colors after:absolute after:inset-0 after:rounded-2xl after:content-[''] group-hover:text-cyan-300"
      >
        {value}
      </a>
    </div>
    {children || (
      <ArrowUpRight
        size={20}
        aria-hidden="true"
        className="shrink-0 text-slate-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
      />
    )}
  </div>
);

const CopyButton = ({ text }) => {
  const [status, setStatus] = useState('idle'); // idle | copied | failed
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('idle'), 2000);
  };

  const label = status === 'copied' ? 'Copied!' : status === 'failed' ? 'Copy failed' : 'Copy email address';

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        title={label}
        className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-cyan-400"
      >
        {status === 'copied' ? (
          <Check size={20} className="text-emerald-400" aria-hidden="true" />
        ) : (
          <Copy size={20} aria-hidden="true" />
        )}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {status === 'copied' ? 'Email address copied to clipboard' : status === 'failed' ? 'Could not copy email address' : ''}
      </span>
    </>
  );
};

const Contact = () => (
  <section id="contact" className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-5xl">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="I'm currently looking for opportunities in Software Engineering, ML and Cloud Computing. Whether you have a role, a project or just want to say hi — my inbox is open."
        icon={Mail}
      />

      <Reveal className="mb-10 flex flex-col items-center gap-4">
        <a
          href={`mailto:${personalInfo.email}?subject=${encodeURIComponent("Let's connect")}`}
          className="group inline-flex h-12 items-center gap-2 rounded-lg bg-cyan-400 px-8 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors duration-200 hover:bg-cyan-300"
        >
          Say hello
          <Send size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        <p className="inline-flex items-center gap-2 text-sm text-slate-400">
          <MapPin size={16} className="text-cyan-400" aria-hidden="true" />
          Based in {personalInfo.location}
        </p>
      </Reveal>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <Reveal as="li" className="md:col-span-2 lg:col-span-1">
          <ContactCard icon={Mail} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`}>
            <CopyButton text={personalInfo.email} />
          </ContactCard>
        </Reveal>
        <Reveal as="li" delay={0.08}>
          <ContactCard
            icon={Phone}
            label="Phone"
            value={personalInfo.phone}
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
          />
        </Reveal>
        <Reveal as="li" delay={0.16}>
          <ContactCard icon={Linkedin} label="LinkedIn" value="Connect with me" href={personalInfo.linkedin} external />
        </Reveal>
      </ul>
    </div>
  </section>
);

export default Contact;
