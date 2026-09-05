import React, { useEffect } from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { getProductWhatsAppLink } from '../../config/boutiqueConfig';

export const WishlistDrawer = () => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  useEffect(() => {
    if (isWishlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isWishlistOpen]);

  if (!isWishlistOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(23, 20, 18, 0.55)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={() => setIsWishlistOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: 'var(--color-ivory)',
          borderLeft: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 1.75rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            backgroundColor: '#FAF5EE'
          }}
        >
          <div>
            <span className="eyebrow" style={{ fontSize: '0.6875rem' }}>Saved Styles</span>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.4rem' }}>
              Your Wishlist ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            style={{
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-ivory)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-espresso)'
            }}
            aria-label="Close wishlist"
          >
            <X size={18} />
          </button>
        </div>

        {/* Wishlist Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.75rem' }}>
          {wishlist.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 1.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-surface-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-muted)'
                }}
              >
                <Heart size={26} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                Your Wishlist is Empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                Tap the heart icon on any hijab or modest ensemble to save it for later.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {wishlist.map(product => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{
                      width: '74px',
                      height: '92px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-subtle)'
                    }}
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{product.name}</h4>
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          style={{ color: 'var(--color-muted)' }}
                          aria-label="Remove"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-espresso)', marginTop: '4px' }}>
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                      <button
                        onClick={() => {
                          addToCart(product);
                          removeFromWishlist(product.id);
                        }}
                        style={{
                          flex: 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '0.45rem',
                          backgroundColor: 'var(--color-espresso)',
                          color: 'var(--color-ivory)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        <ShoppingBag size={13} />
                        Add to Bag
                      </button>

                      <a
                        href={getProductWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.45rem 0.75rem',
                          backgroundColor: '#25D366',
                          color: '#FFF',
                          fontSize: '0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        title="Enquire on WhatsApp"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
