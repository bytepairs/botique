import React from 'react';
import { Link } from 'react-router-dom';
import { NafminLogoSvg } from './NafminLogoSvg';

export const BrandLogo = ({
  size = 'md', // 'sm' | 'md' | 'lg' | 'hero'
  variant = 'dark', // 'dark' | 'light' | 'gold'
  showMark = true,
  asLink = true,
  className = '',
  style = {}
}) => {
  const sizeMap = {
    sm: { markSize: 44, text: '1.25rem', sub: '0.55rem' },
    md: { markSize: 56, text: '1.45rem', sub: '0.625rem' },
    lg: { markSize: 76, text: '1.85rem', sub: '0.725rem' },
    hero: { markSize: 110, text: '2.5rem', sub: '0.9rem' }
  };

  const current = sizeMap[size] || sizeMap.md;

  const content = (
    <div
      className={`brand-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
        ...style
      }}
    >
      {/* Crisp Vector Seal Mark */}
      {showMark && (
        <div
          style={{
            width: current.markSize,
            height: current.markSize,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: variant === 'light' ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' : 'drop-shadow(0 2px 6px rgba(168,106,29,0.15))'
          }}
        >
          <NafminLogoSvg
            size={current.markSize}
            variant={variant === 'light' ? 'light' : 'gold'}
          />
        </div>
      )}

      {/* Typography Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: current.text,
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: variant === 'light' ? 'var(--color-ivory)' : 'var(--color-text)',
            transition: 'color var(--transition-fast)'
          }}
        >
          NAFMIN
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: current.sub,
            fontWeight: 600,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--color-warm-gold)',
            marginTop: '3px'
          }}
        >
          BOUTIQUE
        </span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" aria-label="NAFMIN BOUTIQUE Home" style={{ textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return content;
};
