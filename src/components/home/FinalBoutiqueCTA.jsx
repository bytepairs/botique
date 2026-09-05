import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { LuxuryQuatrefoil } from '../common/BotanicalDecoration';
import { BOUTIQUE_CONFIG, getWhatsAppLink } from '../../config/boutiqueConfig';

export const FinalBoutiqueCTA = () => {
  return (
    <section
      style={{
        padding: 'clamp(4.5rem, 8vw, 7rem) 1.5rem',
        backgroundColor: '#F3E8DC',
        position: 'relative',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border)'
      }}
    >
      <div className="container-narrow">
        <LuxuryQuatrefoil size={32} color="var(--color-warm-gold)" style={{ margin: '0 auto 1.25rem auto' }} />

        <span className="eyebrow" style={{ marginBottom: '0.85rem' }}>
          GRAND OPENING CELEBRATION
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: '1.25rem'
          }}
        >
          We Can't Wait to Welcome You.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-serif-editorial)',
            fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
            color: 'var(--color-espresso)',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            lineHeight: 1.5
          }}
        >
          Join us on 10th September 2026 at Kamaraj Street, Muthialpet. Experience the drape, enjoy our opening gift offer, and discover modesty reimagined.
        </p>

        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--color-muted)',
            marginBottom: '2.5rem',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Have questions regarding specific colors or pre-ordering opening exclusive styles? Our boutique stylists are readily available on WhatsApp.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a
            href={getWhatsAppLink("Hi NAFMIN BOUTIQUE, I'd like to RSVP / ask about your boutique opening on 10th September.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '1rem 2rem' }}
          >
            <MessageCircle size={18} />
            Chat with Our Stylist
          </a>

          <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2rem' }}>
            <MapPin size={16} />
            Find Store Location
          </Link>
        </div>
      </div>
    </section>
  );
};
