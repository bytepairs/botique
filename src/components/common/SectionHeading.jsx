import React from 'react';
import { GoldDivider } from './GoldDivider';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  scriptAccent,
  align = 'center',
  withDivider = true,
  className = '',
  style = {}
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: align,
        marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
        ...style
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '0.75rem' }}>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}

      {scriptAccent && (
        <span
          className="font-script"
          style={{
            display: 'block',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            color: 'var(--color-warm-gold)',
            lineHeight: 1,
            marginBottom: '-0.35rem'
          }}
        >
          {scriptAccent}
        </span>
      )}

      <h2
        style={{
          fontFamily: 'var(--font-serif-display)',
          fontSize: 'clamp(1.85rem, 4vw, 3rem)',
          fontWeight: 500,
          letterSpacing: '-0.015em',
          color: 'var(--color-text)',
          lineHeight: 1.2
        }}
      >
        {title}
      </h2>

      {withDivider && (
        <GoldDivider style={{ margin: isCenter ? '1.1rem auto' : '1.1rem 0' }} />
      )}

      {subtitle && (
        <p
          style={{
            maxWidth: '620px',
            margin: isCenter ? '0 auto' : '0',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.0625rem)',
            color: 'var(--color-muted)',
            lineHeight: 1.65,
            fontWeight: 400
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
