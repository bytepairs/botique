import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NafminLogoSvg } from '../common/NafminLogoSvg';
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

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Smooth progress counter
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          dismissSplash();
          return 100;
        }
        return prev + 1.6;
      });
    }, 35);

    return () => clearInterval(interval);
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
            scale: 1.04,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: '#FAF5ED',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201, 154, 82, 0.22) 0%, rgba(250, 245, 237, 0) 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Golden Corner Accents */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              width: '32px',
              height: '32px',
              borderTop: '2px solid var(--color-light-gold)',
              borderLeft: '2px solid var(--color-light-gold)',
              opacity: 0.6
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '32px',
              height: '32px',
              borderTop: '2px solid var(--color-light-gold)',
              borderRight: '2px solid var(--color-light-gold)',
              opacity: 0.6
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              width: '32px',
              height: '32px',
              borderBottom: '2px solid var(--color-light-gold)',
              borderLeft: '2px solid var(--color-light-gold)',
              opacity: 0.6
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '24px',
              width: '32px',
              height: '32px',
              borderBottom: '2px solid var(--color-light-gold)',
              borderRight: '2px solid var(--color-light-gold)',
              opacity: 0.6
            }}
          />

          {/* Central Logo & Reveal Presentation */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '520px',
              width: '100%',
              position: 'relative',
              zIndex: 2
            }}
          >
            {/* Top Eyebrow Tag */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-warm-gold)',
                marginBottom: '1.75rem'
              }}
            >
              {BOUTIQUE_CONFIG.eyebrow}
            </motion.p>

            {/* Pristine Vector Logo Seal with Glow & Stroke Reveal */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                filter: 'drop-shadow(0 12px 35px rgba(168, 106, 29, 0.22))',
                marginBottom: '1.75rem'
              }}
            >
              <NafminLogoSvg
                size={window.innerWidth < 480 ? 210 : 250}
                variant="gold"
                animate={true}
              />
            </motion.div>

            {/* Subtitle & Opening Information */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif-editorial)',
                  fontSize: 'clamp(1.15rem, 3vw, 1.45rem)',
                  fontStyle: 'italic',
                  color: 'var(--color-espresso)',
                  marginBottom: '1rem',
                  lineHeight: 1.4
                }}
              >
                "Elegance, Wrapped in Every Detail."
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.45rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'rgba(255, 253, 248, 0.95)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-espresso)',
                  boxShadow: '0 2px 10px rgba(74, 42, 22, 0.05)'
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
                Puducherry • Grand Opening 10 Sept 2026
              </div>
            </motion.div>

            {/* Bottom Progress Hairline & Enter Boutique Trigger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                marginTop: '2.5rem',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              {/* Progress Line */}
              <div
                style={{
                  width: '160px',
                  height: '2px',
                  backgroundColor: 'rgba(217, 192, 160, 0.4)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--color-light-gold), var(--color-warm-gold))',
                    transition: 'width 0.04s linear'
                  }}
                />
              </div>

              <button
                onClick={dismissSplash}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-espresso)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-warm-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-espresso)'}
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
