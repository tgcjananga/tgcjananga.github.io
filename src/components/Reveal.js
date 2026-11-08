// src/components/Reveal.js
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Fades and slides content up once when it scrolls into view. Renders a plain div for reduced-motion users. */
const Reveal = ({ as = 'div', children, className = '', delay = 0 }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return React.createElement(as, { className }, children);
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
