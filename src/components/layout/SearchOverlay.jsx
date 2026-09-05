import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';

export const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        p =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.descriptor.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
          p.fabric.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectProduct = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  const handleSelectCategory = (catId) => {
    onClose();
    navigate(`/shop?category=${catId}`);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(23, 20, 18, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(1rem, 5vw, 4rem) 1.5rem',
        animation: 'fadeIn 0.25s ease forwards'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          backgroundColor: 'var(--color-ivory)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            gap: '1rem'
          }}
        >
          <Search size={22} style={{ color: 'var(--color-warm-gold)' }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search hijabs, fabrics, modal silk, occasion wear..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              fontSize: '1.125rem',
              color: 'var(--color-text)',
              outline: 'none',
              fontFamily: 'var(--font-sans)'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ color: 'var(--color-muted)', padding: '4px' }}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              padding: '6px 12px',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-espresso)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            ESC
          </button>
        </div>

        {/* Search Body Content */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '1.75rem' }}>
          {!query.trim() ? (
            <div>
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-warm-gold)',
                  marginBottom: '1rem'
                }}
              >
                Popular Categories & Tags
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    style={{
                      padding: '0.55rem 1.15rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-surface-card)',
                      border: '1px solid var(--color-border-subtle)',
                      fontSize: '0.85rem',
                      color: 'var(--color-text)',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--color-warm-gold)';
                      e.currentTarget.style.backgroundColor = '#FFF';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                      e.currentTarget.style.backgroundColor = 'var(--color-surface-card)';
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-warm-gold)',
                  marginBottom: '1rem'
                }}
              >
                Opening Featured Pieces
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {PRODUCTS.slice(0, 3).map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod.slug)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      transition: 'background var(--transition-fast)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-surface-card)'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{prod.name}</h4>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>₹{prod.price}</span>
                      </div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--color-warm-gold)' }} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--color-muted)',
                  marginBottom: '1.25rem'
                }}
              >
                Found {filteredProducts.length} results for "{query}"
              </p>
              {filteredProducts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <p style={{ color: 'var(--color-muted)', marginBottom: '1rem' }}>
                    No styles match your search. Explore our curated collections.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      navigate('/shop');
                    }}
                    className="btn-secondary"
                  >
                    View All Products
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {filteredProducts.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => handleSelectProduct(prod.slug)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#FFF';
                        e.currentTarget.style.borderColor = 'var(--color-light-gold)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img
                          src={prod.images[0]}
                          alt={prod.name}
                          style={{ width: '52px', height: '52px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <div>
                          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-warm-gold)' }}>
                            {prod.badge || 'Modest Luxury'}
                          </span>
                          <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>{prod.name}</h4>
                          <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-espresso)' }}>
                            ₹{prod.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={18} style={{ color: 'var(--color-warm-gold)' }} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
