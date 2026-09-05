import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ProductCard } from '../product/ProductCard';
import { QuickViewModal } from '../product/QuickViewModal';
import { PRODUCTS } from '../../data/products';

export const FeaturedCollection = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Take featured products
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 6);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="INAUGURAL SELECTION"
          title="Curated For You"
          subtitle="Elegant pieces chosen to complement every mood, moment and style. Designed with breathable silks and artisan finishes."
        />

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.25rem)',
            marginBottom: '3.5rem'
          }}
        >
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={prod => setQuickViewProduct(prod)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/shop" className="btn-secondary">
            View Complete Boutique Catalog
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
