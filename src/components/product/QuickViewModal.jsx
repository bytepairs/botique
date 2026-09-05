import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, MessageCircle, Heart, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { getProductWhatsAppLink } from '../../config/boutiqueConfig';

export const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || '');
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!isOpen || !product) return null;

  const isFavorite = isInWishlist(product.id);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 11000,
        backgroundColor: 'rgba(23, 20, 18, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-ivory)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-ivory)',
            border: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-espresso)',
            zIndex: 10
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Product Media Gallery */}
        <div style={{ position: 'relative', backgroundColor: '#F5ECE1' }}>
          <img
            src={product.images[activeImgIndex] || product.images[0]}
            alt={product.name}
            style={{ width: '100%', height: '100%', minHeight: '360px', maxHeight: '480px', objectFit: 'cover' }}
          />

          {/* Thumbnails if multiple */}
          {product.images.length > 1 && (
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', display: 'flex', gap: '8px' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: activeImgIndex === idx ? '2px solid var(--color-warm-gold)' : '1px solid #FFF',
                    opacity: activeImgIndex === idx ? 1 : 0.7
                  }}
                >
                  <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details & Actions */}
        <div style={{ padding: 'clamp(1.5rem, 3.5vw, 2.25rem)', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <span className="eyebrow" style={{ fontSize: '0.7rem' }}>
              {product.badge || 'Modest Collection'}
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.65rem', marginTop: '4px' }}>
              {product.name}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.compareAtPrice && (
              <span style={{ fontSize: '0.95rem', color: '#9B8E85', textDecoration: 'line-through' }}>
                ₹{product.compareAtPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span style={{ fontSize: '0.75rem', color: '#2E7D32', fontWeight: 600, marginLeft: 'auto' }}>
              ● {product.availability}
            </span>
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {product.description}
          </p>

          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
            <strong>Fabric:</strong> {product.fabric}
          </div>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)', display: 'block', marginBottom: '8px' }}>
                Select Color: <span style={{ fontWeight: 400, color: 'var(--color-muted)' }}>{selectedColor}</span>
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 10px',
                      borderRadius: 'var(--radius-sm)',
                      border: selectedColor === c.name ? '1px solid var(--color-warm-gold)' : '1px solid var(--color-border-subtle)',
                      backgroundColor: selectedColor === c.name ? 'rgba(168, 106, 29, 0.08)' : 'transparent',
                      fontSize: '0.75rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: c.hex, display: 'inline-block' }} />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  addToCart(product, selectedColor);
                  onClose();
                }}
                className="btn-primary"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                <ShoppingBag size={16} />
                Add to Bag
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  color: isFavorite ? '#E53E3E' : 'var(--color-espresso)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Wishlist"
              >
                <Heart size={18} fill={isFavorite ? '#E53E3E' : 'none'} />
              </button>
            </div>

            <a
              href={getProductWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <MessageCircle size={16} />
              Enquire on WhatsApp
            </a>

            <Link
              to={`/product/${product.slug}`}
              onClick={onClose}
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-espresso)',
                textAlign: 'center',
                marginTop: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              View Full Product Details & Care Guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
