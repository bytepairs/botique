import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { InstagramIcon } from '../common/SocialIcons';
import { ScrollReveal } from '../common/ScrollReveal';
import { BOUTIQUE_CONFIG } from '../../config/boutiqueConfig';

export const InstagramGrid = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=700&q=80',
      caption: 'The Aurora Silk drape in morning light • Opening 10 Sept'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80',
      caption: 'Soft sand and warm champagne tones arriving at our atelier'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80',
      caption: 'Occasion wear & heirloom textures curated for modern celebrations'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80',
      caption: 'Breathable modal weaves made for coastal Puducherry elegance'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80',
      caption: 'Behind the scenes: Preparing our opening gift packages'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80',
      caption: 'New Arrivals teaser • Senthamarai Nagar, Muthialpet'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)', borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="COMMUNITY & LOOKBOOK"
            title="Follow Our Journey"
            subtitle={`${BOUTIQUE_CONFIG.contact.instagramHandle} • Sneak peeks, styling tutorials, and boutique opening moments.`}
          />
        </ScrollReveal>

        {/* 6-Item Responsive Grid */}
        <ScrollReveal delay={0.15}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: 'clamp(0.5rem, 1.5vw, 1rem)',
              marginBottom: '2.5rem'
            }}
          >
          {posts.map((post, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <a
                key={post.id}
                href={BOUTIQUE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  aspectRatio: '1 / 1',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-subtle)',
                  backgroundColor: '#EDE4D8',
                  display: 'block'
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* Hover Soft Overlay with Instagram Icon & Caption */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(74, 42, 22, 0.72)',
                    backdropFilter: 'blur(3px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    textAlign: 'center',
                    color: '#FFF',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <InstagramIcon size={24} color="var(--color-champagne)" style={{ marginBottom: '6px' }} />
                  <p style={{ fontSize: '0.75rem', lineHeight: 1.35, color: 'var(--color-ivory)' }}>
                    {post.caption}
                  </p>
                </div>
              </a>
            );
          })}
          </div>
        </ScrollReveal>

        {/* Instagram CTA */}
        <ScrollReveal delay={0.25}>
          <div style={{ textAlign: 'center' }}>
            <a
              href={BOUTIQUE_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <InstagramIcon size={17} />
              Follow @nafminboutique
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
