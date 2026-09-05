import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo/nafmin-logo.png';

export const BrandLogo = ({
  size = 'md', // 'sm' | 'md' | 'lg' | 'hero'
  variant = 'dark', // 'dark' | 'light' | 'gold'
  showMark = true,
  asLink = true,
  className = '',
  style = {}
}) => {
  const sizeMap = {
    sm: { height: '38px', text: '1.25rem', sub: '0.55rem' },
    md: { height: '52px', text: '1.5rem', sub: '0.625rem' },
    lg: { height: '76px', text: '2rem', sub: '0.75rem' },
    hero: { height: '110px', text: '2.75rem', sub: '0.95rem' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const content = (
    <div
      className={`brand-logo-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.85rem',
        textDecoration: 'none',
        ...style
      }}
    >
      {/* Brand Circular Emblem */}
      {showMark && (
        <div
          style={{
            height: currentSize.height,
            width: currentSize.height,
            flexShrink: 0,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <img
            src={logoImg}
            alt="NAFMIN BOUTIQUE Logo Seal"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: variant === 'light' ? 'brightness(1.2)' : 'none'
            }}
          />
        </div>
      )}

      {/* Brand Typography Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <span
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: currentSize.text,
            fontWeight: 600,
            letterSpacing: '0.08em',
            lineHeight: 1,
            color: variant === 'light' ? 'var(--color-ivory)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)'
          }}
        >
          NAFMIN
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: currentSize.sub,
            fontWeight: 600,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--color-warm-gold)',
            marginTop: '3px',
            lineHeight: 1
          }}
        >
          B O U T I Q U E
        </span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" aria-label="NAFMIN BOUTIQUE Homepage">
        {content}
      </Link>
    );
  }

  return content;
};
