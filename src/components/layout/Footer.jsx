import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { InstagramIcon } from '../common/SocialIcons';
import { BOUTIQUE_CONFIG, getWhatsAppLink } from '../../config/boutiqueConfig';

export const Footer = ({ onReplaySplash }) => {
  return (
    <footer
      style={{
        backgroundColor: '#1E140E', // Rich deep espresso
        color: '#E8D1B5', // Champagne text
        paddingTop: 'clamp(4rem, 7vw, 6rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
        position: 'relative',
        borderTop: '1px solid rgba(201, 154, 82, 0.25)'
      }}
    >
      {/* Decorative top gold hairline glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'radial-gradient(ellipse at center, rgba(201, 154, 82, 0.6) 0%, transparent 80%)'
        }}
      />

      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(232, 209, 181, 0.12)'
          }}
        >
          {/* Col 1: Brand & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <BrandLogo size="md" variant="light" />
            <p
              style={{
                fontFamily: 'var(--font-serif-editorial)',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: 'var(--color-champagne)',
                lineHeight: 1.4
              }}
            >
              {BOUTIQUE_CONFIG.tagline}
            </p>
            <p style={{ fontSize: '0.875rem', color: '#B8A697', lineHeight: 1.6, maxWidth: '340px' }}>
              Puducherry's destination for refined modest fashion, handcrafted modal silks, and timeless hijab styling. Opening 10th September 2026.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href={BOUTIQUE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(232, 209, 181, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-champagne)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-light-gold)';
                  e.currentTarget.style.color = '#FFF';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(232, 209, 181, 0.25)';
                  e.currentTarget.style.color = 'var(--color-champagne)';
                }}
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(232, 209, 181, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-champagne)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.color = '#25D366';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(232, 209, 181, 0.25)';
                  e.currentTarget.style.color = 'var(--color-champagne)';
                }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-light-gold)',
                marginBottom: '1.5rem'
              }}
            >
              Explore Boutique
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <Link to="/" style={{ color: '#DCC3A5', fontSize: '0.9rem' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" style={{ color: '#DCC3A5', fontSize: '0.9rem' }}>
                  Curated Collections
                </Link>
              </li>
              <li>
                <Link to="/shop" style={{ color: '#DCC3A5', fontSize: '0.9rem' }}>
                  Shop All Hijabs
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#DCC3A5', fontSize: '0.9rem' }}>
                  Our Story & Atelier
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#DCC3A5', fontSize: '0.9rem' }}>
                  Boutique Visit & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Boutique Location & Opening */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-light-gold)',
                marginBottom: '1.5rem'
              }}
            >
              Visit Our Atelier
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: '#DCC3A5' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--color-light-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  {BOUTIQUE_CONFIG.location.doorNo}, {BOUTIQUE_CONFIG.location.street},<br />
                  {BOUTIQUE_CONFIG.location.area},<br />
                  {BOUTIQUE_CONFIG.location.city} - {BOUTIQUE_CONFIG.location.pincode}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={17} style={{ color: 'var(--color-light-gold)', flexShrink: 0 }} />
                <a href={`tel:${BOUTIQUE_CONFIG.contact.phone}`} style={{ color: '#DCC3A5' }}>
                  {BOUTIQUE_CONFIG.contact.phone}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={17} style={{ color: 'var(--color-light-gold)', flexShrink: 0 }} />
                <span>{BOUTIQUE_CONFIG.contact.email}</span>
              </div>

              <div
                style={{
                  marginTop: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'rgba(201, 154, 82, 0.12)',
                  border: '1px solid rgba(201, 154, 82, 0.3)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <p style={{ fontSize: '0.75rem', color: 'var(--color-champagne)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Grand Opening: 10th Sept 2026
                </p>
                <p style={{ fontSize: '0.8rem', color: '#FFFDF8', marginTop: '2px' }}>
                  {BOUTIQUE_CONFIG.openingOffer.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#9B8E85'
          }}
        >
          <p>© {BOUTIQUE_CONFIG.openingYear} {BOUTIQUE_CONFIG.name}. All Rights Reserved.</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {onReplaySplash && (
              <button
                onClick={onReplaySplash}
                style={{
                  color: 'var(--color-light-gold)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <Sparkles size={13} />
                Replay Splash Screen
              </button>
            )}
            <span>Puducherry, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
