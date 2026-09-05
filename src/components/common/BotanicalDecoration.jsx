import React from 'react';

/**
 * Botanical Leaf Branch & Quatrefoil Emblem
 * Inspired directly by the NAFMIN BOUTIQUE opening invitation
 */
export const BotanicalBranch = ({ className = '', style = {}, color = 'var(--color-warm-gold)' }) => {
  return (
    <svg
      viewBox="0 0 120 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', ...style }}
      aria-hidden="true"
    >
      {/* Central Curved Stem */}
      <path
        d="M25 270C35 210 50 140 38 15"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      
      {/* Leaves branching gracefully */}
      <path
        d="M38 25C22 15 8 28 14 44C20 40 32 35 38 25Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M38 18C44 2 64 8 58 24C52 24 45 22 38 18Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M42 62C24 55 16 72 26 84C32 78 40 70 42 62Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M43 78C62 70 70 88 60 100C52 94 46 86 43 78Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M42 118C22 112 18 132 30 142C35 134 40 125 42 118Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M40 135C58 128 66 148 54 158C48 150 43 142 40 135Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M36 178C18 174 16 195 28 202C32 194 35 186 36 178Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M34 195C50 188 56 206 46 215C41 208 37 202 34 195Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M30 232C16 230 16 248 26 254C28 246 29 239 30 232Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
    </svg>
  );
};

export const LuxuryQuatrefoil = ({ size = 28, color = 'var(--color-warm-gold)', style = {} }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden="true"
    >
      <circle cx="20" cy="12" r="7" stroke={color} strokeWidth="1.5" />
      <circle cx="28" cy="20" r="7" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="28" r="7" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="20" r="7" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2.5" fill={color} />
    </svg>
  );
};

export const GoldHeart = ({ size = 16, color = 'var(--color-warm-gold)', style = {} }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden="true"
    >
      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
    </svg>
  );
};
