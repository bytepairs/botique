import React from 'react';

export const GoldDivider = ({ width = '140px', className = '', style = {} }) => {
  return (
    <div
      className={`gold-divider ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        margin: '1.25rem auto',
        width,
        ...style
      }}
    >
      <span
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--color-light-gold))'
        }}
      />
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: 'var(--color-warm-gold)' }}
      >
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="currentColor"
        />
      </svg>
      <span
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, var(--color-light-gold), transparent)'
        }}
      />
    </div>
  );
};
