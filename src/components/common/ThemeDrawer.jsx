import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles, RefreshCw, Palette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeDrawer = () => {
  const { themes, themeId, setThemeId, isThemeDrawerOpen, closeThemeDrawer } = useTheme();

  return (
    <AnimatePresence>
      {isThemeDrawerOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000 }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeThemeDrawer}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(23, 20, 18, 0.45)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)'
            }}
          />

          {/* Drawer Container (Bottom-sheet on mobile, Slide-over on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="theme-drawer-panel"
            style={{
              position: 'absolute',
              backgroundColor: 'var(--color-ivory)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--color-primary)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-gold-glow)',
                    border: '1px solid var(--color-gold-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-warm-gold)'
                  }}
                >
                  <Palette size={17} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif-display)',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: 'var(--color-espresso)',
                        margin: 0
                      }}
                    >
                      Boutique Palettes
                    </h3>
                    <Sparkles size={14} style={{ color: 'var(--color-warm-gold)' }} />
                  </div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-muted)',
                      margin: 0,
                      letterSpacing: '0.04em'
                    }}
                  >
                    10 Bespoke themes crafted for modest luxury
                  </p>
                </div>
              </div>

              <button
                onClick={closeThemeDrawer}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-espresso)',
                  backgroundColor: 'rgba(74, 42, 22, 0.06)',
                  transition: 'background-color var(--transition-fast)'
                }}
                aria-label="Close theme palette"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile Drag Indicator */}
            <div className="mobile-drag-bar" style={{ padding: '6px 0', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '4px', borderRadius: '2px', backgroundColor: 'var(--color-border)' }} />
            </div>

            {/* Scrollable Themes List */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              {themes.map((theme) => {
                const isSelected = theme.id === themeId;
                return (
                  <motion.div
                    key={theme.id}
                    whileHover={{ scale: 1.012 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => setThemeId(theme.id)}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? 'var(--color-surface-card)' : 'var(--color-ivory)',
                      border: isSelected
                        ? '1.5px solid var(--color-warm-gold)'
                        : '1px solid var(--color-border-subtle)',
                      boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative'
                    }}
                  >
                    {/* Left: Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif-display)',
                            fontSize: '0.98rem',
                            fontWeight: 600,
                            color: 'var(--color-espresso)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {theme.name}
                        </span>
                        {isSelected && (
                          <span
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              padding: '2px 7px',
                              borderRadius: '12px',
                              backgroundColor: 'var(--color-warm-gold)',
                              color: '#FFF'
                            }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          fontSize: '0.725rem',
                          color: 'var(--color-muted)',
                          margin: 0,
                          lineHeight: 1.3
                        }}
                      >
                        {theme.tagline} • <span style={{ opacity: 0.85 }}>{theme.mood}</span>
                      </p>
                    </div>

                    {/* Right: Color Swatches & Status */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        {theme.swatches.map((hex, sIdx) => (
                          <span
                            key={sIdx}
                            style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              backgroundColor: hex,
                              border: '1px solid rgba(0, 0, 0, 0.12)',
                              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                              display: 'inline-block'
                            }}
                          />
                        ))}
                      </div>

                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          border: isSelected ? '1.5px solid var(--color-warm-gold)' : '1.5px solid var(--color-border)',
                          backgroundColor: isSelected ? 'var(--color-warm-gold)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFF',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {isSelected && <Check size={14} strokeWidth={2.5} />}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer / Reset button */}
            <div
              style={{
                padding: '0.85rem 1.25rem',
                borderTop: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--color-primary)'
              }}
            >
              <button
                onClick={() => setThemeId('signature-ivory')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  color: 'var(--color-muted)',
                  fontWeight: 500
                }}
              >
                <RefreshCw size={13} />
                <span>Reset to Signature Classic</span>
              </button>

              <button
                onClick={closeThemeDrawer}
                className="btn-primary"
                style={{
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.78rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                Done
              </button>
            </div>
          </motion.div>

          <style>{`
            /* Drawer Responsive Layout */
            @media (min-width: 641px) {
              .theme-drawer-panel {
                top: 0;
                right: 0;
                bottom: 0;
                width: 420px;
                max-width: 90vw;
                border-left: 1px solid var(--color-border);
                border-top: none;
                border-right: none;
                border-bottom: none;
              }
              .mobile-drag-bar {
                display: none !important;
              }
            }

            @media (max-width: 640px) {
              .theme-drawer-panel {
                left: 0;
                right: 0;
                bottom: 0;
                height: 82vh;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                border-bottom: none;
                border-left: none;
                border-right: none;
              }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
};
