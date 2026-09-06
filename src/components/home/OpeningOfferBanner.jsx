import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Calendar, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { LuxuryFrame } from '../common/LuxuryFrame';
import { BotanicalBranch, LuxuryQuatrefoil } from '../common/BotanicalDecoration';
import { ScrollReveal } from '../common/ScrollReveal';
import { BOUTIQUE_CONFIG, getOfferWhatsAppLink } from '../../config/boutiqueConfig';

export const OpeningOfferBanner = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container">
        <ScrollReveal>
          {/* Luxury Framed Container Inspired directly by the Invitation */}
          <LuxuryFrame
            variant="champagne"
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              padding: 'clamp(1.75rem, 5vw, 4.5rem)',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid var(--color-border)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
          {/* Decorative Corner Botanical Motifs */}
          <BotanicalBranch
            style={{
              position: 'absolute',
              top: '-30px',
              left: '-20px',
              width: '85px',
              height: '220px',
              opacity: 0.5,
              transform: 'rotate(-10deg)',
              pointerEvents: 'none'
            }}
          />

          <BotanicalBranch
            style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-20px',
              width: '85px',
              height: '220px',
              opacity: 0.5,
              transform: 'rotate(170deg)',
              pointerEvents: 'none'
            }}
          />

          {/* Centered Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '780px',
              margin: '0 auto'
            }}
          >
            {/* Top Emblem & Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.45rem 1.25rem',
                backgroundColor: 'rgba(168, 106, 29, 0.1)',
                border: '1px solid rgba(168, 106, 29, 0.3)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem'
              }}
            >
              <LuxuryQuatrefoil size={16} color="var(--color-warm-gold)" />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-espresso)'
                }}
              >
                {BOUTIQUE_CONFIG.openingOffer.badge}
              </span>
            </div>

            {/* Main Title */}
            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: 'var(--color-text)',
                marginBottom: '1rem'
              }}
            >
              {BOUTIQUE_CONFIG.openingOffer.title}
            </h2>

            {/* Subheading */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                color: 'var(--color-muted)',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '620px'
              }}
            >
              Visit <strong>{BOUTIQUE_CONFIG.name}</strong> at Senthamarai Nagar, Muthialpet and receive a special complimentary boutique gift on purchases above ₹2500.
            </p>

            {/* Striking Highlight Pill */}
            <div
              style={{
                backgroundColor: 'var(--color-ivory)',
                border: '2px dashed var(--color-warm-gold)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(0.85rem, 3vw, 1.25rem) clamp(1rem, 4vw, 2.25rem)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 8px 25px rgba(168, 106, 29, 0.12)',
                marginBottom: '2.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(168, 106, 29, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-warm-gold)',
                  flexShrink: 0
                }}
              >
                <Gift size={22} />
              </div>

              <div style={{ textAlign: 'left' }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-gold)'
                  }}
                >
                  EXCLUSIVELY IN-STORE
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                    fontWeight: 700,
                    color: 'var(--color-espresso)',
                    letterSpacing: '0.04em'
                  }}
                >
                  {BOUTIQUE_CONFIG.openingOffer.highlight}
                </span>
              </div>
            </div>

            {/* Opening Date Metadata */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                fontSize: '0.875rem',
                color: 'var(--color-espresso)',
                marginBottom: '2.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={18} style={{ color: 'var(--color-warm-gold)' }} />
                <span>
                  Opening: <strong>{BOUTIQUE_CONFIG.openingDate}</strong>
                </span>
              </div>
              <span style={{ color: 'var(--color-border)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} style={{ color: 'var(--color-warm-gold)' }} />
                <span>Muthialpet, Puducherry</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">
                Visit Us & Directions
                <ArrowRight size={16} />
              </Link>
              <a
                href={getOfferWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Claim Opening Offer on WhatsApp
              </a>
            </div>
          </div>
        </LuxuryFrame>
        </ScrollReveal>
      </div>
    </section>
  );
};
