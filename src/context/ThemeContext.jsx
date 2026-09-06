import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'signature-ivory',
    name: 'Ivory & Rose Gold',
    tagline: 'Signature Boutique Classic',
    mood: 'Warm, timeless & elegant modesty',
    swatches: ['#F8F1E8', '#FFFDF8', '#C99A52', '#4A2A16'],
    colors: {
      '--color-primary': '#F8F1E8',
      '--color-ivory': '#FFFDF8',
      '--color-champagne': '#E8D1B5',
      '--color-soft-beige': '#DCC3A5',
      '--color-sand': '#F2E8DC',
      '--color-warm-gold': '#A86A1D',
      '--color-light-gold': '#C99A52',
      '--color-deep-gold': '#7D4A14',
      '--color-gold-glow': 'rgba(168, 106, 29, 0.12)',
      '--color-gold-border': 'rgba(201, 154, 82, 0.4)',
      '--color-espresso': '#4A2A16',
      '--color-espresso-dark': '#2F190C',
      '--color-text': '#171412',
      '--color-muted': '#75685E',
      '--color-muted-light': '#9B8E85',
      '--color-border': '#D9C0A0',
      '--color-border-subtle': 'rgba(217, 192, 160, 0.45)',
      '--color-surface-card': '#FAF4EC',
      '--color-surface-elevated': '#FFFDF9'
    }
  },
  {
    id: 'blush-peony',
    name: 'Blush Peony & Mauve',
    tagline: 'Soft & Romantic Feminine',
    mood: 'Delicate dusty rose petals & silk ribbon',
    swatches: ['#FCF2F4', '#FFF9FA', '#D97A8F', '#461E28'],
    colors: {
      '--color-primary': '#FCF2F4',
      '--color-ivory': '#FFF9FA',
      '--color-champagne': '#F3D3DB',
      '--color-soft-beige': '#E8BAC5',
      '--color-sand': '#F7E5EA',
      '--color-warm-gold': '#B85368',
      '--color-light-gold': '#D97A8F',
      '--color-deep-gold': '#873447',
      '--color-gold-glow': 'rgba(184, 83, 104, 0.14)',
      '--color-gold-border': 'rgba(217, 122, 143, 0.4)',
      '--color-espresso': '#461E28',
      '--color-espresso-dark': '#2D1118',
      '--color-text': '#201014',
      '--color-muted': '#785660',
      '--color-muted-light': '#9B7983',
      '--color-border': '#E3BAC4',
      '--color-border-subtle': 'rgba(227, 186, 196, 0.5)',
      '--color-surface-card': '#FAF0F2',
      '--color-surface-elevated': '#FFFFFF'
    }
  },
  {
    id: 'sage-silk',
    name: 'Sage & Pistachio Silk',
    tagline: 'Serene Botanical Grace',
    mood: 'Organic botanical mist & soothing olive cream',
    swatches: ['#F2F5F0', '#FAFCF9', '#89A27F', '#203424'],
    colors: {
      '--color-primary': '#F2F5F0',
      '--color-ivory': '#FAFCF9',
      '--color-champagne': '#D6E0D3',
      '--color-soft-beige': '#C0CFC0',
      '--color-sand': '#E8EFE6',
      '--color-warm-gold': '#647B5A',
      '--color-light-gold': '#89A27F',
      '--color-deep-gold': '#43593B',
      '--color-gold-glow': 'rgba(100, 123, 90, 0.14)',
      '--color-gold-border': 'rgba(137, 162, 127, 0.4)',
      '--color-espresso': '#203424',
      '--color-espresso-dark': '#132216',
      '--color-text': '#112015',
      '--color-muted': '#57685A',
      '--color-muted-light': '#7B8D7E',
      '--color-border': '#C6D4C4',
      '--color-border-subtle': 'rgba(198, 212, 196, 0.5)',
      '--color-surface-card': '#EDF3EB',
      '--color-surface-elevated': '#FFFFFF'
    }
  },
  {
    id: 'lavender-cashmere',
    name: 'Lavender & Cashmere',
    tagline: 'Royal Mulberry & Amethyst',
    mood: 'Delicate French lilac with royal mulberry depth',
    swatches: ['#F5F1F8', '#FCF9FD', '#A574B7', '#351B3D'],
    colors: {
      '--color-primary': '#F5F1F8',
      '--color-ivory': '#FCF9FD',
      '--color-champagne': '#DECFE6',
      '--color-soft-beige': '#CDB7D7',
      '--color-sand': '#EFE7F4',
      '--color-warm-gold': '#7E528E',
      '--color-light-gold': '#A574B7',
      '--color-deep-gold': '#593267',
      '--color-gold-glow': 'rgba(126, 82, 142, 0.14)',
      '--color-gold-border': 'rgba(165, 116, 183, 0.4)',
      '--color-espresso': '#351B3D',
      '--color-espresso-dark': '#210F27',
      '--color-text': '#1B0E20',
      '--color-muted': '#695470',
      '--color-muted-light': '#8E7995',
      '--color-border': '#D2BFDA',
      '--color-border-subtle': 'rgba(210, 191, 218, 0.5)',
      '--color-surface-card': '#F1EBF5',
      '--color-surface-elevated': '#FFFFFF'
    }
  },
  {
    id: 'champagne-blossom',
    name: 'Champagne Blossom',
    tagline: 'Sunset Peach & Honey',
    mood: 'Luminous sunset warm bronze & fresh apricot silk',
    swatches: ['#FAF2EC', '#FFFAF5', '#D88D60', '#462516'],
    colors: {
      '--color-primary': '#FAF2EC',
      '--color-ivory': '#FFFAF5',
      '--color-champagne': '#EED7C3',
      '--color-soft-beige': '#DFC1A7',
      '--color-sand': '#F4E7DC',
      '--color-warm-gold': '#B86B3E',
      '--color-light-gold': '#D88D60',
      '--color-deep-gold': '#8A4A22',
      '--color-gold-glow': 'rgba(184, 107, 62, 0.14)',
      '--color-gold-border': 'rgba(216, 141, 96, 0.4)',
      '--color-espresso': '#462516',
      '--color-espresso-dark': '#2D160C',
      '--color-text': '#1E1008',
      '--color-muted': '#75594C',
      '--color-muted-light': '#9B7E71',
      '--color-border': '#DEC3AF',
      '--color-border-subtle': 'rgba(222, 195, 175, 0.5)',
      '--color-surface-card': '#F6ECE4',
      '--color-surface-elevated': '#FFFFFF'
    }
  },
  {
    id: 'parisian-vanilla',
    name: 'Parisian Pearl & Vanilla',
    tagline: 'Timeless Quiet Luxury',
    mood: 'Pristine neutral French cream & antique caramel gold',
    swatches: ['#FAF7F2', '#FFFFFC', '#BF955B', '#3A271B'],
    colors: {
      '--color-primary': '#FAF7F2',
      '--color-ivory': '#FFFFFC',
      '--color-champagne': '#EADFCF',
      '--color-soft-beige': '#D7C7B0',
      '--color-sand': '#F2EAE0',
      '--color-warm-gold': '#9A723D',
      '--color-light-gold': '#BF955B',
      '--color-deep-gold': '#6E4D21',
      '--color-gold-glow': 'rgba(154, 114, 61, 0.14)',
      '--color-gold-border': 'rgba(191, 149, 91, 0.4)',
      '--color-espresso': '#3A271B',
      '--color-espresso-dark': '#25170F',
      '--color-text': '#1A120D',
      '--color-muted': '#6E5D52',
      '--color-muted-light': '#948378',
      '--color-border': '#D7C8B6',
      '--color-border-subtle': 'rgba(215, 200, 182, 0.5)',
      '--color-surface-card': '#F5F0E7',
      '--color-surface-elevated': '#FFFFFF'
    }
  },
  {
    id: 'powder-azure',
    name: 'Powder Blue & Silk Azure',
    tagline: 'Dreamy Cinderella Elegance',
    mood: 'Ethereal powder sky with refined French slate accents',
    swatches: ['#F0F5F9', '#F9FBFE', '#7197BA', '#172A3C'],
    colors: {
      '--color-primary': '#F0F5F9',
      '--color-ivory': '#F9FBFE',
      '--color-champagne': '#CFDEEC',
      '--color-soft-beige': '#B5CBDE',
      '--color-sand': '#E4EDF5',
      '--color-warm-gold': '#4B7293',
      '--color-light-gold': '#7197BA',
      '--color-deep-gold': '#2F4E6A',
      '--color-gold-glow': 'rgba(75, 114, 147, 0.14)',
      '--color-gold-border': 'rgba(113, 151, 186, 0.4)',
      '--color-espresso': '#172A3C',
      '--color-espresso-dark': '#0D1924',
      '--color-text': '#0D1924',
      '--color-muted': '#526677',
      '--color-muted-light': '#748A9C',
      '--color-border': '#BFD3E3',
      '--color-border-subtle': 'rgba(191, 211, 227, 0.5)',
      '--color-surface-card': '#E9F1F7',
      '--color-surface-elevated': '#FFFFFF'
    }
  },
  {
    id: 'terracotta-rose',
    name: 'Terracotta & Desert Rose',
    tagline: 'Warm Earth & Desert Clay',
    mood: 'Rich Moroccan terracotta and blushing desert clay',
    swatches: ['#FBF2ED', '#FFF9F6', '#CF6F53', '#3F1D14'],
    colors: {
      '--color-primary': '#FBF2ED',
      '--color-ivory': '#FFF9F6',
      '--color-champagne': '#EFD2C3',
      '--color-soft-beige': '#DEB7A2',
      '--color-sand': '#F6E3D8',
      '--color-warm-gold': '#A94F35',
      '--color-light-gold': '#CF6F53',
      '--color-deep-gold': '#7A321E',
      '--color-gold-glow': 'rgba(169, 79, 53, 0.14)',
      '--color-gold-border': 'rgba(207, 111, 83, 0.4)',
      '--color-espresso': '#3F1D14',
      '--color-espresso-dark': '#27100B',
      '--color-text': '#1B0C08',
      '--color-muted': '#735249',
      '--color-muted-light': '#9A776D',
      '--color-border': '#DFBCAC',
      '--color-border-subtle': 'rgba(223, 188, 172, 0.5)',
      '--color-surface-card': '#F7ECE5',
      '--color-surface-elevated': '#FFFFFF'
    }
  },
  {
    id: 'emerald-gold',
    name: 'Royal Emerald & Antique Gold',
    tagline: 'Regal Modest Glamour',
    mood: 'Majestic deep forest emerald and brilliant antique gold',
    swatches: ['#EFF5F1', '#F8FCF9', '#D8AA47', '#133020'],
    colors: {
      '--color-primary': '#EFF5F1',
      '--color-ivory': '#F8FCF9',
      '--color-champagne': '#CEE2D5',
      '--color-soft-beige': '#B5CFC0',
      '--color-sand': '#E4EFE8',
      '--color-warm-gold': '#B3862A',
      '--color-light-gold': '#D8AA47',
      '--color-deep-gold': '#855F14',
      '--color-gold-glow': 'rgba(179, 134, 42, 0.15)',
      '--color-gold-border': 'rgba(216, 170, 71, 0.45)',
      '--color-espresso': '#133020',
      '--color-espresso-dark': '#0B1C13',
      '--color-text': '#08170F',
      '--color-muted': '#4F6557',
      '--color-muted-light': '#738C7C',
      '--color-border': '#B8D3C2',
      '--color-border-subtle': 'rgba(184, 211, 194, 0.5)',
      '--color-surface-card': '#E7F1EA',
      '--color-surface-elevated': '#FFFFFF'
    }
  },
  {
    id: 'midnight-noir',
    name: 'Midnight Noir & Rose Gold',
    tagline: 'Sensual Dark Velvet',
    mood: 'Evening obsidian luxury with luminous glowing rose gold',
    swatches: ['#151317', '#242027', '#F5BC8E', '#FAF4EC'],
    colors: {
      '--color-primary': '#151317',
      '--color-ivory': '#242027',
      '--color-champagne': '#3A3340',
      '--color-soft-beige': '#4D4454',
      '--color-sand': '#2C2631',
      '--color-warm-gold': '#E0A370',
      '--color-light-gold': '#F5BC8E',
      '--color-deep-gold': '#B37745',
      '--color-gold-glow': 'rgba(224, 163, 112, 0.22)',
      '--color-gold-border': 'rgba(245, 188, 142, 0.45)',
      '--color-espresso': '#FAF4EC',
      '--color-espresso-dark': '#FFFFFF',
      '--color-text': '#FAF4EC',
      '--color-muted': '#B8ADB9',
      '--color-muted-light': '#8F8490',
      '--color-border': '#42394A',
      '--color-border-subtle': 'rgba(66, 57, 74, 0.7)',
      '--color-surface-card': '#1D1920',
      '--color-surface-elevated': '#29242E'
    }
  }
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem('nafmin_theme_id');
      if (saved && THEMES.some(t => t.id === saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'signature-ivory';
  });

  const [isThemeDrawerOpen, setIsThemeDrawerOpen] = useState(false);

  // Apply colors to documentElement
  useEffect(() => {
    const current = THEMES.find(t => t.id === themeId) || THEMES[0];
    const root = document.documentElement;

    Object.entries(current.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    root.setAttribute('data-theme', current.id);

    try {
      localStorage.setItem('nafmin_theme_id', themeId);
    } catch {
      // ignore
    }
  }, [themeId]);

  const currentTheme = THEMES.find(t => t.id === themeId) || THEMES[0];

  const value = {
    themeId,
    currentTheme,
    themes: THEMES,
    setThemeId,
    isThemeDrawerOpen,
    setIsThemeDrawerOpen,
    openThemeDrawer: () => setIsThemeDrawerOpen(true),
    closeThemeDrawer: () => setIsThemeDrawerOpen(false)
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
