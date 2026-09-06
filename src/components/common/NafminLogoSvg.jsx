import React from 'react';

/**
 * High-Precision Vector SVG of the NAFMIN BOUTIQUE Brand Emblem
 * Recreated accurately from the original boutique invitation:
 * - Double gold concentric rings
 * - Delicate botanical laurel branch wrapping along the left arc
 * - Subtle luxury dotted accents along the upper right ring
 * - Golden quatrefoil rosette emblem at top-right
 * - Distinctive serif "NAFMIN" with stylized high-fashion typography
 * - Tracked "— BOUTIQUE —"
 * - Solid gold heart accent at the bottom
 */
export const NafminLogoSvg = ({
  size = 180,
  variant = 'gold', // 'gold' | 'dark' | 'light'
  animate = false,
  className = '',
  style = {}
}) => {
  const goldPrimary = '#A86A1D';
  const goldLight = '#C99A52';
  const goldBright = '#E6C687';
  const darkEspresso = '#2F190C';
  const textDark = '#171412';

  const mainColor = variant === 'light' ? '#FFFDF8' : variant === 'dark' ? darkEspresso : goldPrimary;
  const secondaryColor = variant === 'light' ? '#E8D1B5' : goldLight;
  const textColor = variant === 'light' ? '#FFFDF8' : textDark;
  const heartColor = variant === 'light' ? '#E8D1B5' : goldPrimary;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`nafmin-logo-svg ${className}`}
      style={{ display: 'inline-block', flexShrink: 0, overflow: 'visible', ...style }}
      aria-label="NAFMIN BOUTIQUE Logo"
    >
      <defs>
        {/* Rich Warm Gold Gradient */}
        <linearGradient id="nafminGoldGrad" x1="40" y1="40" x2="280" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C99A52" />
          <stop offset="45%" stopColor="#A86A1D" />
          <stop offset="85%" stopColor="#D8AD68" />
          <stop offset="100%" stopColor="#8A5214" />
        </linearGradient>

        <linearGradient id="leafGrad" x1="30" y1="20" x2="100" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4A75E" />
          <stop offset="50%" stopColor="#A86A1D" />
          <stop offset="100%" stopColor="#7D4A14" />
        </linearGradient>

        <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#C99A52" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Outer Main Ring */}
      <circle
        cx="160"
        cy="160"
        r="134"
        stroke="url(#nafminGoldGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="800"
        strokeDashoffset={animate ? "800" : "0"}
        style={animate ? { animation: 'drawRing 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' } : {}}
      />

      {/* Inner Concentric Fine Ring */}
      <circle
        cx="160"
        cy="160"
        r="126"
        stroke="url(#nafminGoldGrad)"
        strokeWidth="1.2"
        strokeOpacity="0.75"
        strokeDasharray="4 3"
      />

      {/* Dotted Accents along outer right arc */}
      <circle cx="218" cy="46" r="2.2" fill={secondaryColor} />
      <circle cx="235" cy="56" r="2.2" fill={secondaryColor} />
      <circle cx="251" cy="68" r="2.2" fill={secondaryColor} />
      <circle cx="266" cy="83" r="2.2" fill={secondaryColor} />
      <circle cx="278" cy="100" r="2.2" fill={secondaryColor} />
      <circle cx="288" cy="119" r="2.2" fill={secondaryColor} />
      <circle cx="294" cy="140" r="2.2" fill={secondaryColor} />

      {/* Dotted Accents along lower left inner arc */}
      <circle cx="68" cy="225" r="2" fill={secondaryColor} />
      <circle cx="76" cy="242" r="2" fill={secondaryColor} />
      <circle cx="88" cy="257" r="2" fill={secondaryColor} />
      <circle cx="102" cy="270" r="2" fill={secondaryColor} />
      <circle cx="118" cy="280" r="2" fill={secondaryColor} />

      {/* Botanical Laurel Branch on the Left Arc */}
      <g filter="url(#goldGlow)">
        {/* Main Stem curving around the left circle */}
        <path
          d="M86 272 C50 220 40 140 68 55 C74 42 84 30 96 22"
          stroke="url(#leafGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Top Tip Leaves */}
        <path d="M96 22 C90 10 106 6 112 18 C108 22 102 24 96 22Z" fill="url(#leafGrad)" />
        <path d="M94 25 C82 18 78 30 86 38 C90 35 94 30 94 25Z" fill="url(#leafGrad)" />

        {/* Pair 1 */}
        <path d="M80 46 C66 36 60 52 70 60 C76 56 80 50 80 46Z" fill="url(#leafGrad)" />
        <path d="M84 48 C96 40 106 52 98 62 C92 58 86 54 84 48Z" fill="url(#leafGrad)" />

        {/* Pair 2 */}
        <path d="M68 76 C52 68 46 86 58 94 C64 89 68 82 68 76Z" fill="url(#leafGrad)" />
        <path d="M72 80 C86 72 96 86 86 96 C80 91 74 86 72 80Z" fill="url(#leafGrad)" />

        {/* Pair 3 */}
        <path d="M58 112 C40 104 36 122 48 132 C54 126 58 118 58 112Z" fill="url(#leafGrad)" />
        <path d="M62 116 C76 108 86 122 76 132 C70 127 64 122 62 116Z" fill="url(#leafGrad)" />

        {/* Pair 4 */}
        <path d="M52 152 C34 146 32 166 44 174 C50 167 54 158 52 152Z" fill="url(#leafGrad)" />
        <path d="M56 156 C70 150 78 166 68 174 C63 169 58 162 56 156Z" fill="url(#leafGrad)" />

        {/* Pair 5 */}
        <path d="M52 195 C36 190 34 210 46 216 C52 209 54 201 52 195Z" fill="url(#leafGrad)" />
        <path d="M56 198 C68 192 76 208 66 216 C61 211 58 205 56 198Z" fill="url(#leafGrad)" />

        {/* Pair 6 (Lower) */}
        <path d="M60 236 C46 232 44 250 56 254 C60 248 62 241 60 236Z" fill="url(#leafGrad)" />
        <path d="M66 238 C76 232 84 246 76 254 C72 249 68 243 66 238Z" fill="url(#leafGrad)" />
      </g>

      {/* Ornate Gold 4-Petal Rosette / Quatrefoil Emblem at Top-Right (~2 o'clock) */}
      <g transform="translate(225, 102)">
        <circle cx="0" cy="-6" r="6" stroke="url(#nafminGoldGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="6" cy="0" r="6" stroke="url(#nafminGoldGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="6" r="6" stroke="url(#nafminGoldGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="-6" cy="0" r="6" stroke="url(#nafminGoldGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="2.5" fill="url(#nafminGoldGrad)" />
      </g>

      {/* Typography: "NAFMIN" */}
      <text
        x="160"
        y="162"
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "44px",
          fontWeight: "600",
          letterSpacing: "0.14em",
          textShadow: variant === 'light' ? '0 1px 4px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        NAFMIN
      </text>

      {/* Fine gold stylized crossbar flourish for 'A' & 'F' */}
      <path
        d="M118 162 Q130 156 142 163 T166 160"
        stroke="url(#nafminGoldGrad)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Typography: "— BOUTIQUE —" */}
      <text
        x="160"
        y="196"
        textAnchor="middle"
        dominantBaseline="central"
        fill={secondaryColor}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "13px",
          fontWeight: "600",
          letterSpacing: "0.38em",
          textTransform: "uppercase"
        }}
      >
        — BOUTIQUE —
      </text>

      {/* Bottom Center Solid Gold Heart */}
      <path
        d="M160 236 C160 236 153 230 148 224 C144 219 146 213 151 213 C154 213 158 216 160 218 C162 216 166 213 169 213 C174 213 176 219 172 224 C167 230 160 236 160 236Z"
        fill="url(#nafminGoldGrad)"
      />

      {/* Subtle bottom decorative arc */}
      <path
        d="M130 252 Q160 258 190 252"
        stroke="url(#nafminGoldGrad)"
        strokeWidth="1"
        strokeOpacity="0.6"
        fill="none"
      />

      <style>{`
        @keyframes drawRing {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
};
