import React from 'react';
import { Layers, Sparkles, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { BOUTIQUE_CONFIG } from '../../config/boutiqueConfig';

export const BoutiqueExperience = () => {
  const icons = {
    curated: Layers,
    fabrics: Sparkles,
    service: HeartHandshake
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="IN-STORE SANCTUARY"
            title="A Boutique Experience, Made For You"
            subtitle="We believe shopping for hijabs and modest wear should be an intimate, uplifting, and restorative moment."
          />
        </ScrollReveal>

        {/* Three Feature Blocks */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2.5rem)'
          }}
        >
          {BOUTIQUE_CONFIG.pillars.map((pillar, idx) => {
            const Icon = icons[pillar.id] || Sparkles;

            return (
              <div
                key={pillar.id}
                className="luxury-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: 'clamp(2rem, 4vw, 3rem) 2rem',
                  backgroundColor: '#FAF5EE'
                }}
              >
                {/* Minimal Luxury Icon */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-ivory)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-warm-gold)',
                    marginBottom: '1.5rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <span
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-gold)',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}
                >
                  PILLAR 0{idx + 1}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.85rem'
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.65
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
