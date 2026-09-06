import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
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
        <ScrollReveal>
          <SectionHeading
            eyebrow="INAUGURAL SELECTION"
            title="Curated For You"
            subtitle="Elegant pieces chosen to complement every mood, moment and style. Designed with breathable silks and artisan finishes."
          />
        </ScrollReveal>

        {/* Responsive Products Grid (2-columns on mobile, auto-fill on desktop) */}
        <ScrollReveal delay={0.15}>
          <div className="product-grid-responsive" style={{ marginBottom: '3.5rem' }}>
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={prod => setQuickViewProduct(prod)}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div style={{ textAlign: 'center' }}>
            <Link to="/shop" className="btn-secondary">
              View Complete Boutique Catalog
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
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
