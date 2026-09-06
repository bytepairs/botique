import React from 'react';
import { MapPin, Navigation, MessageCircle, Clock, Calendar, Phone } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { LuxuryFrame } from '../common/LuxuryFrame';
import { ScrollReveal } from '../common/ScrollReveal';
import { BOUTIQUE_CONFIG, getWhatsAppLink } from '../../config/boutiqueConfig';

export const StoreLocation = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="PHYSICAL BOUTIQUE"
            title="Come Visit Us"
            subtitle="Experience our fabrics in person, receive bespoke drape consultations, and celebrate our opening in Puducherry."
          />
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'stretch'
          }}
        >
          {/* Left: Boutique Details & Direct CTAs */}
          <LuxuryFrame
            variant="champagne"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <span className="eyebrow" style={{ fontSize: '0.7rem' }}>BOUTIQUE ADDRESS</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: 'var(--color-espresso)',
                  marginBottom: '1rem'
                }}
              >
                {BOUTIQUE_CONFIG.name}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--color-text)' }}>
                {/* Physical Address */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <MapPin size={22} style={{ color: 'var(--color-warm-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-espresso)' }}>
                      {BOUTIQUE_CONFIG.location.doorNo}, {BOUTIQUE_CONFIG.location.street}
                    </strong>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-muted)' }}>
                      {BOUTIQUE_CONFIG.location.area},<br />
                      {BOUTIQUE_CONFIG.location.city} - {BOUTIQUE_CONFIG.location.pincode}
                    </span>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-warm-gold)', marginTop: '4px' }}>
                      Landmark: {BOUTIQUE_CONFIG.location.landmark}
                    </p>
                  </div>
                </div>

                {/* Grand Opening Date */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Calendar size={20} style={{ color: 'var(--color-warm-gold)', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', display: 'block' }}>Grand Opening</span>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-espresso)' }}>
                      {BOUTIQUE_CONFIG.openingDate}
                    </strong>
                  </div>
                </div>

                {/* Boutique Hours */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Clock size={20} style={{ color: 'var(--color-warm-gold)', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', display: 'block' }}>Visiting Hours</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>
                      {BOUTIQUE_CONFIG.contact.visitingHours}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Phone size={20} style={{ color: 'var(--color-warm-gold)', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', display: 'block' }}>Phone Enquiries</span>
                    <a href={`tel:${BOUTIQUE_CONFIG.contact.phone}`} style={{ fontSize: '0.95rem', color: 'var(--color-espresso)', fontWeight: 600 }}>
                      {BOUTIQUE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)' }}>
              <a
                href={BOUTIQUE_CONFIG.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <Navigation size={16} />
                Get Directions
              </a>

              <a
                href={getWhatsAppLink("Hi NAFMIN BOUTIQUE, I'd like directions and timing details for visiting your Muthialpet boutique.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </LuxuryFrame>

          {/* Right: Interactive Styled Map View */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              minHeight: '420px',
              backgroundColor: '#EDE3D5'
            }}
          >
            {/* Interactive OpenStreetMap Embed for Muthialpet, Puducherry */}
            <iframe
              title="NAFMIN BOUTIQUE Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.8200%2C11.9450%2C79.8450%2C11.9650&amp;layer=mapnik&amp;marker=11.9548%2C79.8335"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '420px',
                border: 'none',
                filter: 'sepia(18%) contrast(98%)'
              }}
            />

            {/* Floating Boutique Pin Card Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '16px',
                backgroundColor: 'rgba(255, 253, 248, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.85rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-warm-gold)' }}>
                  Puducherry Destination
                </span>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Kamaraj St, Muthialpet
                </p>
              </div>

              <a
                href={BOUTIQUE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-espresso)',
                  padding: '6px 12px',
                  backgroundColor: 'var(--color-surface-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
