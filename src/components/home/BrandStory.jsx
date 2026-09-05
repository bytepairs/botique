import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GoldDivider } from '../common/GoldDivider';
import { BotanicalBranch } from '../common/BotanicalDecoration';

export const BrandStory = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(3rem, 7vw, 6rem)'
          }}
        >
          {/* Left Column: Story Editorial Content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="eyebrow">OUR HERITAGE</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: 500,
                color: 'var(--color-text)',
                lineHeight: 1.15,
                marginBottom: '1.5rem'
              }}
            >
              More Than a Boutique.
            </h2>

            <GoldDivider style={{ margin: '1rem 0 1.75rem 0' }} />

            <p
              style={{
                fontFamily: 'var(--font-serif-editorial)',
                fontSize: 'clamp(1.2rem, 1.6vw, 1.45rem)',
                color: 'var(--color-espresso)',
                fontStyle: 'italic',
                lineHeight: 1.5,
                marginBottom: '1.5rem'
              }}
            >
              "Nafmin Boutique is created for women who appreciate elegance in its most effortless form. From everyday essentials to special occasion styles, every piece is selected with comfort, confidence and timeless beauty in mind."
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
                marginBottom: '2rem'
              }}
            >
              When we set out to build NAFMIN BOUTIQUE in Muthialpet, Puducherry, we wanted to bridge the gap between pure modest sensibility and modern fashion atelier craftsmanship. No rigid synthetic polyester, no unbreathable fabrics—only light, fluid textiles that honor the grace of the woman who wears them.
            </p>

            <Link to="/about" className="link-gold">
              Read Our Full Story <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Column: Editorial Lifestyle Gallery Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1100&q=85"
                alt="Nafmin Boutique Atmosphere and Styling"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Gold Inner Hairline */}
              <div
                style={{
                  position: 'absolute',
                  inset: '16px',
                  border: '1px solid rgba(255, 253, 248, 0.55)',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* Botanical Accent Flourish */}
            <BotanicalBranch
              style={{
                position: 'absolute',
                top: '-35px',
                right: '-20px',
                width: '85px',
                height: '210px',
                opacity: 0.6,
                transform: 'rotate(15deg)',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
