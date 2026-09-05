import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, MapPin, Feather, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { LuxuryFrame } from '../components/common/LuxuryFrame';
import { BotanicalBranch, LuxuryQuatrefoil } from '../components/common/BotanicalDecoration';
import { BOUTIQUE_CONFIG } from '../config/boutiqueConfig';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-about" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: '6rem' }}>
      <div className="container">
        <SectionHeading
          eyebrow="OUR ATELIER & PHILOSOPHY"
          title="The Story of NAFMIN"
          subtitle="Redefining everyday modest fashion with timeless textiles, intentional craftsmanship, and boutique intimacy."
        />

        {/* Hero Narrative Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center',
            marginBottom: '6rem'
          }}
        >
          <div>
            <span className="eyebrow" style={{ marginBottom: '1rem' }}>PUDUCHERRY 2026</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                lineHeight: 1.2,
                color: 'var(--color-text)',
                marginBottom: '1.5rem'
              }}
            >
              Created for Women Who Appreciate Effortless Elegance.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-serif-editorial)',
                fontSize: '1.35rem',
                color: 'var(--color-espresso)',
                fontStyle: 'italic',
                lineHeight: 1.5,
                marginBottom: '1.5rem'
              }}
            >
              "We believe modesty is not a compromise—it is a deeply personal expression of poise, self-respect, and timeless beauty."
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              NAFMIN BOUTIQUE was founded out of a desire to create a dedicated space where modest women no longer have to settle for synthetic, unbreathable scarves or generic mass-produced fast fashion. Located on Kamaraj Street in Muthialpet, our boutique is designed as a peaceful haven where fabrics can be touched, drapes can be tailored, and personal consultations take place over warm hospitality.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
              From morning college runs and corporate boardrooms to festive weddings and Eid evenings, every hijab in our collection is curated to stay securely in place, feel featherlight in humid coastal weather, and drape with fluid grace.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn-primary">
                Explore The Atelier
              </Link>
              <Link to="/contact" className="btn-secondary">
                Visit Us in Muthialpet
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border)',
                aspectRatio: '4 / 5'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
                alt="Modest fashion elegance"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <BotanicalBranch
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-20px',
                width: '80px',
                height: '200px',
                opacity: 0.6,
                transform: 'rotate(15deg)',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>

        {/* Brand Principles */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">OUR COMMITMENT</span>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '2.2rem', marginTop: '6px' }}>
              The NAFMIN Standard
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            <LuxuryFrame variant="ivory">
              <Feather size={26} color="var(--color-warm-gold)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Breathable Weaves
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                Carefully selected modal silks, natural bamboo fibers, and high-density Korean chiffons engineered for coastal airflow and gentle non-slip wear.
              </p>
            </LuxuryFrame>

            <LuxuryFrame variant="ivory">
              <Sparkles size={26} color="var(--color-warm-gold)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Artisanal Finishing
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                Micro-rolled hems, delicately stitched edges, and bespoke zari borders made by skilled artisans to withstand repeated wear without fraying.
              </p>
            </LuxuryFrame>

            <LuxuryFrame variant="ivory">
              <Heart size={26} color="var(--color-warm-gold)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Warm Personal Care
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                No rushed buying. Try different drapes in our private mirrors, test fabrics under natural light, and receive one-on-one styling guidance.
              </p>
            </LuxuryFrame>
          </div>
        </div>

        {/* Boutique Location Highlight */}
        <LuxuryFrame variant="champagne" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          <LuxuryQuatrefoil size={28} color="var(--color-warm-gold)" style={{ margin: '0 auto 1rem auto' }} />
          <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', marginBottom: '0.75rem' }}>
            Visit Our Puducherry Atelier
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--color-muted)', marginBottom: '1.5rem', maxWidth: '640px', margin: '0 auto 1.5rem auto' }}>
            Opening on <strong>{BOUTIQUE_CONFIG.openingDate}</strong> at {BOUTIQUE_CONFIG.location.fullAddress}. We warmly invite you to explore our opening collection and receive our complimentary opening gift on purchases above ₹2500.
          </p>
          <Link to="/contact" className="btn-primary">
            Plan Your Visit
          </Link>
        </LuxuryFrame>
      </div>
    </div>
  );
};
