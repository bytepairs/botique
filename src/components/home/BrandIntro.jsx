import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { BotanicalBranch, LuxuryQuatrefoil } from '../common/BotanicalDecoration';
import { ScrollReveal } from '../common/ScrollReveal';
import { BOUTIQUE_CONFIG } from '../../config/boutiqueConfig';

export const BrandIntro = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      <div className="container">
        {/* Editorial 2-Column Split with Whitespace */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            alignItems: 'center',
            gap: 'clamp(2.5rem, 6vw, 6rem)'
          }}
        >
          {/* Left Column: Atmospheric Fabric Detail */}
          <ScrollReveal delay={0.1}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 4.8',
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85"
                  alt="Modest Silk Drape Craftsmanship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '12px solid var(--color-ivory)'
                  }}
                />
              </div>

              {/* Botanical Motif Accent */}
              <BotanicalBranch
                style={{
                  position: 'absolute',
                  bottom: '-35px',
                  right: '-25px',
                  width: '80px',
                  height: '180px',
                  opacity: 0.75,
                  transform: 'rotate(20deg)',
                  pointerEvents: 'none'
                }}
              />

              {/* Floating Atelier Stamp */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '12px',
                  backgroundColor: 'var(--color-espresso)',
                  color: 'var(--color-ivory)',
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <LuxuryQuatrefoil size={16} color="var(--color-light-gold)" />
                <span style={{ fontSize: '0.725rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Puducherry Atelier
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Editorial Typography */}
          <ScrollReveal delay={0.25}>
            <div>
              <span className="eyebrow" style={{ marginBottom: '1rem' }}>
              OUR ESSENCE
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                color: 'var(--color-text)',
                marginBottom: '1.75rem'
              }}
            >
              Where Modesty Meets Elegance.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-serif-editorial)',
                fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)',
                lineHeight: 1.55,
                color: 'var(--color-espresso)',
                fontStyle: 'italic',
                marginBottom: '1.5rem'
              }}
            >
              "Nafmin Boutique brings together refined hijabs and elegant modest styles for women who believe fashion should feel beautiful, effortless and timeless."
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--color-muted)',
                marginBottom: '2rem'
              }}
            >
              Rooted in thoughtful design and crafted with the softest breathable silks, modal blends, and textured georgettes, our Puducherry boutique is conceived as a serene sanctuary for women seeking effortless sophistication and uncompromising comfort.
            </p>

            {/* Three key micro commitments */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border-subtle)'
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.4rem', color: 'var(--color-warm-gold)', display: 'block' }}>
                  100%
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Pure Drapes
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.4rem', color: 'var(--color-warm-gold)', display: 'block' }}>
                  Atelier
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Boutique Care
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.4rem', color: 'var(--color-warm-gold)', display: 'block' }}>
                  Puducherry
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Kamaraj St.
                </span>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
