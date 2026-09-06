import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Enhanced luxury scroll reveal component with spring easing and subtle scale dynamics
 */
export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 26,
  direction = 'up',
  scaleFrom = 0.985,
  className = '',
  style = {}
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'left':
        return { x: -32, y: 0 };
      case 'right':
        return { x: 32, y: 0 };
      case 'down':
        return { x: 0, y: -yOffset };
      case 'fade':
        return { x: 0, y: 0 };
      case 'up':
      default:
        return { x: 0, y: yOffset };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: scaleFrom
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: '-30px', amount: 0.12 }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/**
 * Top viewport scroll progress indicator
 */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2.5px',
        backgroundColor: 'var(--color-warm-gold)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 99999,
        pointerEvents: 'none',
        boxShadow: '0 0 10px var(--color-gold-border)'
      }}
    />
  );
};
