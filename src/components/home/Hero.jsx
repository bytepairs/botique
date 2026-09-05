import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BotanicalBranch, GoldHeart } from '../common/BotanicalDecoration';
import { BOUTIQUE_CONFIG } from '../../config/boutiqueConfig';

export const Hero = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-primary)',
        overflow: 'hidden',
        paddingTop: 'clamp(2rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      {/* Background Subtle Luxury Fabric Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 209, 181, 0.45) 0%, rgba(248, 241, 232, 0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 154, 82, 0.08) 0%, rgba(248, 241, 232, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        {/* Asymmetric Editorial Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(2.5rem, 6vw, 5rem)'
          }}
        >
          {/* LEFT: Editorial Typography & CTAs */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Small Eyebrow with Botanical Ornament */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className="eyebrow">{BOUTIQUE_CONFIG.name}</span>
              <GoldHeart size={12} color="var(--color-warm-gold)" />
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2.4rem, 5.2vw, 4.75rem)',
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--color-text)',
                marginBottom: '1.5rem'
              }}
            >
              Elegance, Wrapped in Every Detail.
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.35vw, 1.1875rem)',
                lineHeight: 1.7,
                color: 'var(--color-muted)',
                maxWidth: '540px',
                marginBottom: '2.5rem'
              }}
            >
              Discover thoughtfully curated hijabs and modest styles designed to make every moment beautifully yours. Opening in Puducherry on 10th September 2026.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '3rem'
              }}
            >
              <Link to="/shop" className="btn-primary">
                Explore Collection
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Visit Our Boutique
              </Link>
            </div>

            {/* Micro Details: Opening Badge & Golden Separator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-warm-gold)'
                  }}
                />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-espresso)'
                  }}
                >
                  Grand Opening 10 Sept 2026
                </span>
              </div>
              <span style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-border)' }} />
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-warm-gold)',
                  fontWeight: 600
                }}
              >
                Muthialpet, Puducherry
              </span>
            </div>
          </div>

          {/* RIGHT: Editorial Fashion Visual & Gold Fabric Composition */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Botanical Leaf flourish overlapping container */}
            <BotanicalBranch
              style={{
                position: 'absolute',
                top: '-40px',
                left: '-25px',
                width: '90px',
                height: '220px',
                zIndex: 1,
                opacity: 0.65,
                transform: 'rotate(-8deg)'
              }}
            />

            {/* Main Editorial Image Card */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                aspectRatio: '4 / 5.2',
                borderRadius: 'var(--radius-md)',
                padding: '12px',
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 2
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'calc(var(--radius-md) - 6px)',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=85"
                  alt="NAFMIN BOUTIQUE Editorial Modest Fashion"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />

                {/* Subtle warm champagne gradient film */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(74, 42, 22, 0.45) 0%, transparent 50%)'
                  }}
                />

                {/* Floating Bottom Card Label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'rgba(255, 253, 248, 0.94)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-warm-gold)'
                      }}
                    >
                      Featured Inaugural Piece
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif-display)',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--color-text)'
                      }}
                    >
                      The Aurora Silk Hijab
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--color-espresso)'
                    }}
                  >
                    ₹899
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Editorial Badge (Top-Right) */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '-10px',
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)',
                padding: '0.55rem 1.25rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 3
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--color-warm-gold)' }} />
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-espresso)'
                }}
              >
                PREMIUM MODEST FASHION
              </span>
            </div>

            {/* Thin Decorative Gold Corner Frame */}
            <div
              style={{
                position: 'absolute',
                bottom: '-15px',
                left: '-15px',
                width: '90px',
                height: '90px',
                borderBottom: '2px solid var(--color-light-gold)',
                borderLeft: '2px solid var(--color-light-gold)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 'clamp(2rem, 5vw, 4rem)',
            gap: '8px'
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              fontWeight: 600
            }}
          >
            SCROLL TO DISCOVER
          </span>
          <div
            style={{
              width: '1px',
              height: '35px',
              background: 'linear-gradient(to bottom, var(--color-warm-gold), transparent)',
              animation: 'pulse 2s infinite'
            }}
          />
        </div>
      </div>
    </section>
  );
};
