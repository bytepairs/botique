import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedFabric, setSelectedFabric] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Extract unique fabrics for filtering
  const fabricOptions = useMemo(() => {
    const set = new Set();
    PRODUCTS.forEach(p => {
      const main = p.fabric.split(',')[0].trim();
      set.add(main);
    });
    return Array.from(set);
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    if (selectedFabric !== 'all') {
      list = list.filter(p => p.fabric.toLowerCase().includes(selectedFabric.toLowerCase()));
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    }

    return list;
  }, [selectedCategory, selectedFabric, sortBy]);

  return (
    <div className="page-shop" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: '6rem' }}>
      <div className="container">
        <SectionHeading
          eyebrow="ATELIER CATALOG"
          title="Curated Modest Wardrobe"
          subtitle="Explore our inaugural collection of breathable silks, Korean chiffons, and heirloom occasion drapes."
        />

        {/* Category Pills Filter */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            justifyContent: 'center',
            marginBottom: '2.5rem'
          }}
        >
          <button
            onClick={() => handleCategoryChange('all')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              border: selectedCategory === 'all' ? '1px solid var(--color-espresso)' : '1px solid var(--color-border)',
              backgroundColor: selectedCategory === 'all' ? 'var(--color-espresso)' : 'var(--color-ivory)',
              color: selectedCategory === 'all' ? 'var(--color-ivory)' : 'var(--color-text)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            All Pieces ({PRODUCTS.length})
          </button>

          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: selectedCategory === cat.id ? '1px solid var(--color-espresso)' : '1px solid var(--color-border)',
                backgroundColor: selectedCategory === cat.id ? 'var(--color-espresso)' : 'var(--color-ivory)',
                color: selectedCategory === cat.id ? 'var(--color-ivory)' : 'var(--color-text)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Secondary Filter & Sorting Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1.25rem 1.75rem',
            backgroundColor: 'var(--color-ivory)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
              Showing <strong>{filteredProducts.length}</strong> styles
            </span>

            {/* Fabric Filter Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>Fabric:</span>
              <select
                value={selectedFabric}
                onChange={e => setSelectedFabric(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'transparent',
                  fontSize: '0.8rem',
                  color: 'var(--color-text)',
                  outline: 'none'
                }}
              >
                <option value="all">All Weaves</option>
                {fabricOptions.map(f => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowUpDown size={15} style={{ color: 'var(--color-warm-gold)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'transparent',
                fontSize: '0.8rem',
                color: 'var(--color-text)',
                outline: 'none',
                fontWeight: 500
              }}
            >
              <option value="featured">Curated & Featured</option>
              <option value="newest">New Arrivals First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
              No pieces match your selected filter
            </h3>
            <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
              Try resetting the fabric or category filter to explore all available styles.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedFabric('all');
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.25rem)'
            }}
          >
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={prod => setQuickViewProduct(prod)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
