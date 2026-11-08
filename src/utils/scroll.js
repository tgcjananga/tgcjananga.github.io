// src/utils/scroll.js
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Smooth-scroll to a section (instant when the user prefers reduced motion) and keep the URL hash in sync. */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  element.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });

  const hash = sectionId === 'home' ? window.location.pathname : `#${sectionId}`;
  window.history?.replaceState?.(null, '', hash);
};

/** onClick handler for in-page anchor links: keeps the href for no-JS / open-in-new-tab, but scrolls smoothly. */
export const handleAnchorClick = (sectionId) => (event) => {
  event.preventDefault();
  scrollToSection(sectionId);
};
