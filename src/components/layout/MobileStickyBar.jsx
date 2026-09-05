import React from 'react';
import { MessageCircle, Navigation } from 'lucide-react';
import { BOUTIQUE_CONFIG, getWhatsAppLink } from '../../config/boutiqueConfig';

export const MobileStickyBar = () => {
  return (
    <div
      className="mobile-sticky-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        backgroundColor: 'rgba(255, 253, 248, 0.96)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--color-border)',
        boxShadow: '0 -4px 20px rgba(74, 42, 22, 0.08)',
        padding: '0.65rem 1rem env(safe-area-inset-bottom, 0.65rem)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}
    >
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: '#25D366',
          color: '#FFF',
          padding: '0.75rem 0.5rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none'
        }}
      >
        <MessageCircle size={16} />
        Chat on WhatsApp
      </a>

      <a
        href={BOUTIQUE_CONFIG.location.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: 'var(--color-espresso)',
          color: 'var(--color-ivory)',
          padding: '0.75rem 0.5rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none'
        }}
      >
        <Navigation size={15} />
        Get Directions
      </a>

      <style>{`
        @media (min-width: 769px) {
          .mobile-sticky-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
