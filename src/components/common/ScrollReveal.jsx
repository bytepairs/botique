import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.75,
  yOffset = 22,
  className = '',
  style = {}
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};
