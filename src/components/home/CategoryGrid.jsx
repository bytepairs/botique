import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CATEGORIES } from '../../data/categories';

export const CategoryGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="TAILORED AESTHETICS"
          title="Discover Your Style"
          subtitle="Explore distinct drape textures and silhouettes curated for daily ease and unforgettable occasions."
        />

        {/* Editorial Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)'
          }}
        >
          {CATEGORIES.map(category => {
            const isHovered = hoveredId === category.id;

            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  backgroundColor: 'var(--color-ivory)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: isHovered ? '1px solid var(--color-light-gold)' : '1px solid var(--color-border-subtle)',
                  boxShadow: isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container with editorial zoom */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 11',
                    overflow: 'hidden',
                    backgroundColor: '#EDE4D8'
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />

                  {/* Gradient film */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(23, 20, 18, 0.4) 0%, transparent 60%)'
                    }}
                  />

                  {/* Item count tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(255, 253, 248, 0.92)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      color: 'var(--color-espresso)'
                    }}
                  >
                    {category.itemCount} Designs
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span
                    style={{
                      fontSize: '0.725rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-warm-gold)',
                      fontWeight: 600,
                      marginBottom: '4px'
                    }}
                  >
                    {category.tagline}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.45rem',
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {category.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.55,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {category.description}
                  </p>

                  {/* Action Link & Gold Underline */}
                  <div
                    style={{
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--color-border-subtle)',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: isHovered ? 'var(--color-warm-gold)' : 'var(--color-espresso)',
                        transition: 'color var(--transition-fast)'
                      }}
                    >
                      Explore Styles
                    </span>

                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? 'var(--color-espresso)' : 'var(--color-surface-card)',
                        color: isHovered ? 'var(--color-ivory)' : 'var(--color-espresso)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isHovered ? 'translate(2px, -2px)' : 'none',
                        transition: 'all var(--transition-smooth)'
                      }}
                    >
                      <ArrowUpRight size={15} />
                    </div>

                    {/* Gold hairline animation on hover */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: 0,
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: 'var(--color-warm-gold)',
                        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
