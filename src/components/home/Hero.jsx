import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BotanicalBranch, GoldHeart } from '../common/BotanicalDecoration';
import { ScrollReveal } from '../common/ScrollReveal';
import { BOUTIQUE_CONFIG } from '../../config/boutiqueConfig';

export const Hero = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-primary)',
        overflow: 'hidden',
        paddingTop: 'clamp(2rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            alignItems: 'center',
            gap: 'clamp(2rem, 5vw, 4.5rem)'
          }}
        >
          {/* LEFT: Editorial Typography & CTAs */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <ScrollReveal delay={0.1}>
              {/* Small Eyebrow with Botanical Ornament */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span className="eyebrow">{BOUTIQUE_CONFIG.name}</span>
                <GoldHeart size={12} color="var(--color-warm-gold)" />
              </div>

              {/* Main Heading */}
              <h1
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text)',
                  marginBottom: '1.25rem'
                }}
              >
                Elegance, Wrapped in Every Detail.
              </h1>

              {/* Supporting Text */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.95rem, 1.25vw, 1.125rem)',
                  lineHeight: 1.7,
                  color: 'var(--color-muted)',
                  maxWidth: '520px',
                  marginBottom: '2rem'
                }}
              >
                Discover thoughtfully curated hijabs and modest styles designed to make every moment beautifully yours. Opening in Puducherry on 10th September 2026.
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.85rem',
                  alignItems: 'center',
                  marginBottom: '2.5rem'
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
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--color-border-subtle)',
                  flexWrap: 'wrap'
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
                      letterSpacing: '0.12em',
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
                    letterSpacing: '0.1em',
                    color: 'var(--color-warm-gold)',
                    fontWeight: 600
                  }}
                >
                  Muthialpet, Puducherry
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Editorial Fashion Visual & Gold Fabric Composition */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <ScrollReveal delay={0.25} style={{ width: '100%', maxWidth: '460px' }}>
              {/* Botanical Leaf flourish overlapping container */}
              <BotanicalBranch
                style={{
                  position: 'absolute',
                  top: '-35px',
                  left: '-20px',
                  width: '80px',
                  height: '200px',
                  zIndex: 1,
                  opacity: 0.6,
                  transform: 'rotate(-8deg)'
                }}
              />

              {/* Main Editorial Image Card */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5.2',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(8px, 2vw, 12px)',
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
                      bottom: '14px',
                      left: '14px',
                      right: '14px',
                      padding: '0.85rem 1rem',
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
                          fontSize: '0.625rem',
                          fontWeight: 600,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--color-warm-gold)'
                        }}
                      >
                        Inaugural Feature
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif-display)',
                          fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                          fontWeight: 600,
                          color: 'var(--color-text)'
                        }}
                      >
                        Aurora Silk Hijab
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
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
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255, 253, 248, 0.95)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.45rem 1rem',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 3
                }}
              >
                <Sparkles size={13} style={{ color: 'var(--color-warm-gold)' }} />
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-espresso)'
                  }}
                >
                  PREMIUM MODEST FASHION
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 'clamp(2rem, 4vw, 3.5rem)',
            gap: '6px'
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
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
              height: '30px',
              background: 'linear-gradient(to bottom, var(--color-warm-gold), transparent)'
            }}
          />
        </div>
      </div>
    </section>
  );
};
