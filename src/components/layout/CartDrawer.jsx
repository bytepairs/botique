import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, Gift, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BOUTIQUE_CONFIG } from '../../config/boutiqueConfig';
import confetti from 'canvas-confetti';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
    qualifiesForFreeGift,
    amountNeededForFreeGift,
    getCheckoutWhatsAppUrl
  } = useCart();

  useEffect(() => {
    if (qualifiesForFreeGift && isCartOpen) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#A86A1D', '#C99A52', '#E8D1B5', '#4A2A16']
      });
    }
  }, [qualifiesForFreeGift, isCartOpen]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const giftPercentage = Math.min(100, Math.round((subtotal / BOUTIQUE_CONFIG.openingOffer.threshold) * 100));

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
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: 'var(--color-ivory)',
          borderLeft: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
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
            <span className="eyebrow" style={{ fontSize: '0.6875rem' }}>
              Your Atelier Selection
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.4rem' }}>
              Shopping Bag ({totalItems})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-ivory)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-espresso)'
            }}
            aria-label="Close bag"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Gift Milestone Progress (Inspired by Opening Poster) */}
        <div
          style={{
            padding: '1rem 1.75rem',
            backgroundColor: qualifiesForFreeGift ? 'rgba(168, 106, 29, 0.08)' : 'rgba(232, 209, 181, 0.3)',
            borderBottom: '1px solid var(--color-border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Gift
              size={18}
              style={{
                color: qualifiesForFreeGift ? 'var(--color-warm-gold)' : 'var(--color-muted)',
                flexShrink: 0
              }}
            />
            <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text)' }}>
              {qualifiesForFreeGift ? (
                <span style={{ color: 'var(--color-warm-gold)', fontWeight: 600 }}>
                  🎉 Grand Opening Free Gift Unlocked!
                </span>
              ) : (
                <>
                  Add <strong style={{ color: 'var(--color-espresso)' }}>₹{amountNeededForFreeGift.toLocaleString('en-IN')}</strong> more for your <strong>FREE GIFT</strong>
                </>
              )}
            </p>
          </div>

          <div
            style={{
              width: '100%',
              height: '5px',
              backgroundColor: 'rgba(74, 42, 22, 0.1)',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${giftPercentage}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--color-light-gold), var(--color-warm-gold))',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '0.7rem', color: 'var(--color-muted)' }}>
            <span>Opening Offer</span>
            <span>Spend ₹2,500</span>
          </div>
        </div>

        {/* Bag Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.75rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 1.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-surface-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-warm-gold)'
                }}
              >
                <Gift size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Your Bag is Empty
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginBottom: '1.75rem' }}>
                Discover our opening collection of premium silks, airy chiffons, and timeless modest styles.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                }}
                className="btn-primary"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {cart.map(item => (
                <div
                  key={item.cartItemId}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
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
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          style={{ color: 'var(--color-muted)', padding: '2px' }}
                          aria-label="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: '2px' }}>
                        Color: {item.selectedColor}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                      {/* Quantity Stepper */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: '#FFF'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          style={{ padding: '4px 8px', color: 'var(--color-espresso)' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, minWidth: '24px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          style={{ padding: '4px 8px', color: 'var(--color-espresso)' }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-espresso)' }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / WhatsApp Checkout */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '1.5rem 1.75rem',
              borderTop: '1px solid var(--color-border)',
              backgroundColor: '#FAF5EE'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>Subtotal</span>
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)' }}>
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
              Taxes included. Boutique pickup or courier delivery available across India.
            </p>

            {/* Direct WhatsApp Order CTA */}
            <a
              href={getCheckoutWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', padding: '1rem', textDecoration: 'none', marginBottom: '0.75rem' }}
            >
              <MessageCircle size={18} />
              Enquire & Order on WhatsApp
            </a>

            <button
              onClick={() => setIsCartOpen(false)}
              style={{
                width: '100%',
                padding: '0.65rem',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                textAlign: 'center'
              }}
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
