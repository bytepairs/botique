import React from 'react';

export const LuxuryFrame = ({
  children,
  className = '',
  style = {},
  withCorners = true,
  variant = 'ivory' // 'ivory' | 'champagne' | 'dark'
}) => {
  const bgStyles = {
    ivory: 'var(--color-ivory)',
    champagne: '#FBF5EE',
    dark: 'var(--color-espresso)'
  };

  const borderColors = {
    ivory: 'var(--color-border-subtle)',
    champagne: 'var(--color-border)',
    dark: 'rgba(201, 154, 82, 0.3)'
  };

  const textColor = variant === 'dark' ? 'var(--color-ivory)' : 'var(--color-text)';

  return (
    <div
      className={`luxury-frame ${className}`}
      style={{
        position: 'relative',
        backgroundColor: bgStyles[variant],
        border: `1px solid ${borderColors[variant]}`,
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(1.75rem, 4vw, 3rem)',
        color: textColor,
        boxShadow: 'var(--shadow-sm)',
        ...style
      }}
    >
      {withCorners && (
        <>
          {/* Top-Left Corner Ornament */}
          <span
            style={{
              position: 'absolute',
              top: '-1px',
              left: '-1px',
              width: '14px',
              height: '14px',
              borderTop: '2px solid var(--color-light-gold)',
              borderLeft: '2px solid var(--color-light-gold)',
              borderTopLeftRadius: '3px',
              pointerEvents: 'none'
            }}
          />
          {/* Top-Right Corner Ornament */}
          <span
            style={{
              position: 'absolute',
              top: '-1px',
              right: '-1px',
              width: '14px',
              height: '14px',
              borderTop: '2px solid var(--color-light-gold)',
              borderRight: '2px solid var(--color-light-gold)',
              borderTopRightRadius: '3px',
              pointerEvents: 'none'
            }}
          />
          {/* Bottom-Left Corner Ornament */}
          <span
            style={{
              position: 'absolute',
              bottom: '-1px',
              left: '-1px',
              width: '14px',
              height: '14px',
              borderBottom: '2px solid var(--color-light-gold)',
              borderLeft: '2px solid var(--color-light-gold)',
              borderBottomLeftRadius: '3px',
              pointerEvents: 'none'
            }}
          />
          {/* Bottom-Right Corner Ornament */}
          <span
            style={{
              position: 'absolute',
              bottom: '-1px',
              right: '-1px',
              width: '14px',
              height: '14px',
              borderBottom: '2px solid var(--color-light-gold)',
              borderRight: '2px solid var(--color-light-gold)',
              borderBottomRightRadius: '3px',
              pointerEvents: 'none'
            }}
          />
        </>
      )}
      {children}
    </div>
  );
};
