import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { COLLECTIONS } from '../data/collections';
import { PRODUCTS } from '../data/products';

export const Collections = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-collections" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: '6rem' }}>
      <div className="container">
        <SectionHeading
          eyebrow="EDITORIAL LOOKBOOKS"
          title="Curated Collections"
          subtitle="Explore distinct seasonal aesthetics designed around specific occasions, climates, and moments of timeless elegance."
        />

        {/* Collections Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {COLLECTIONS.map((col, idx) => {
            const colProducts = PRODUCTS.filter(p => col.productIds.includes(p.id));

            return (
              <div
                key={col.id}
                style={{
                  backgroundColor: 'var(--color-ivory)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-subtle)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                {/* Lookbook Hero Banner */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '21 / 9',
                    minHeight: '280px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={col.bannerImage}
                    alt={col.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, rgba(23, 20, 18, 0.85) 0%, rgba(23, 20, 18, 0.3) 70%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: 'clamp(2rem, 5vw, 4rem)',
                      color: 'var(--color-ivory)'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-light-gold)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      <Sparkles size={14} /> {col.season}
                    </span>

                    <h2
                      style={{
                        fontFamily: 'var(--font-serif-display)',
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                        fontWeight: 500,
                        color: '#FFF',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {col.title}
                    </h2>

                    <p
                      style={{
                        fontFamily: 'var(--font-serif-editorial)',
                        fontSize: '1.2rem',
                        color: 'var(--color-champagne)',
                        fontStyle: 'italic',
                        maxWidth: '560px'
                      }}
                    >
                      {col.subtitle}
                    </p>
                  </div>
                </div>

                {/* Collection Narrative & Products */}
                <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.7,
                      maxWidth: '820px',
                      marginBottom: '2.5rem'
                    }}
                  >
                    {col.description}
                  </p>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      marginBottom: '1.5rem',
                      color: 'var(--color-text)'
                    }}
                  >
                    Featured in this Lookbook
                  </h3>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '1.75rem'
                    }}
                  >
                    {colProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onQuickView={prod => setQuickViewProduct(prod)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
