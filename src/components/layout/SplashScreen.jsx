import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo/nafmin-logo.png';
import { BOUTIQUE_CONFIG } from '../../config/boutiqueConfig';

export const SplashScreen = ({ forceShow = false, onComplete }) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (forceShow) return true;
    try {
      const shown = sessionStorage.getItem('nafmin_splash_seen');
      return !shown;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!isVisible) return;

    // Auto-dismiss after 2.8 seconds
    const timer = setTimeout(() => {
      dismissSplash();
    }, 2800);

    return () => clearTimeout(timer);
  }, [isVisible]);

  const dismissSplash = () => {
    try {
      sessionStorage.setItem('nafmin_splash_seen', 'true');
    } catch {
      // ignore
    }
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#F8F1E8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Golden Glow */}
          <div
            style={{
              position: 'absolute',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201, 154, 82, 0.15) 0%, rgba(248, 241, 232, 0) 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Animated Botanical & Golden Logo Container */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {/* Golden Rotating Ring Effect */}
            <motion.div
              initial={{ rotate: -15 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                padding: '12px',
                border: '1px solid rgba(201, 154, 82, 0.5)',
                boxShadow: '0 0 35px rgba(201, 154, 82, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 253, 248, 0.85)',
                backdropFilter: 'blur(4px)',
                position: 'relative',
                marginBottom: '1.75rem'
              }}
            >
              <img
                src={logoImg}
                alt="NAFMIN BOUTIQUE Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />

              {/* Decorative Pulsing Golden Dot */}
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '36px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-warm-gold)'
                }}
              />
            </motion.div>

            {/* Brand Title Animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-warm-gold)',
                  marginBottom: '0.5rem'
                }}
              >
                {BOUTIQUE_CONFIG.eyebrow}
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: 'var(--color-text)',
                  lineHeight: 1.1
                }}
              >
                NAFMIN BOUTIQUE
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-serif-editorial)',
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  color: 'var(--color-muted)',
                  marginTop: '0.35rem'
                }}
              >
                {BOUTIQUE_CONFIG.tagline}
              </p>
            </motion.div>

            {/* Opening Badge & Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.45rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-ivory)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-espresso)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-warm-gold)'
                  }}
                />
                Opening {BOUTIQUE_CONFIG.openingDate} • Puducherry
              </div>

              {/* Skip / Enter Action */}
              <button
                onClick={dismissSplash}
                style={{
                  marginTop: '1.25rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-espresso)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
              >
                Enter Boutique &rarr;
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
