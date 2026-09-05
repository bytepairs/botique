import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, MessageCircle } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { getProductWhatsAppLink } from '../../config/boutiqueConfig';

export const ProductCard = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isFavorite = isInWishlist(product.id);
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  return (
    <div
      className="product-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-ivory)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        transition: 'all var(--transition-smooth)',
        position: 'relative'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Area */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '3 / 4',
          overflow: 'hidden',
          backgroundColor: '#F5ECE1'
        }}
      >
        <Link to={`/product/${product.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img
            src={isHovered && secondaryImage ? secondaryImage : primaryImage}
            alt={product.name}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease'
            }}
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              padding: '4px 10px',
              backgroundColor: 'rgba(255, 253, 248, 0.94)',
              backdropFilter: 'blur(4px)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-espresso)'
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 253, 248, 0.94)',
            backdropFilter: 'blur(4px)',
            border: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isFavorite ? '#E53E3E' : 'var(--color-espresso)',
            transition: 'all var(--transition-fast)',
            zIndex: 2
          }}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart size={16} fill={isFavorite ? '#E53E3E' : 'none'} />
        </button>

        {/* Hover Quick Actions Bar (Desktop) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            gap: '8px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 3
          }}
        >
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '0.65rem',
                backgroundColor: 'rgba(255, 253, 248, 0.96)',
                backdropFilter: 'blur(6px)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-espresso)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Eye size={14} />
              Quick View
            </button>
          )}

          <button
            onClick={() => addToCart(product, selectedColor)}
            style={{
              padding: '0.65rem 0.85rem',
              backgroundColor: 'var(--color-espresso)',
              color: 'var(--color-ivory)',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}
            title="Add to Bag"
            aria-label="Add to bag"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Fabric Tag */}
        <span
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-warm-gold)',
            fontWeight: 600,
            marginBottom: '4px'
          }}
        >
          {product.fabric.split(',')[0]}
        </span>

        {/* Product Title */}
        <h3 style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.3, marginBottom: '4px' }}>
          <Link
            to={`/product/${product.slug}`}
            style={{ color: 'var(--color-text)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-warm-gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
          >
            {product.name}
          </Link>
        </h3>

        {/* Descriptor */}
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--color-muted)',
            lineHeight: 1.45,
            marginBottom: '0.85rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {product.descriptor}
        </p>

        {/* Swatches & Pricing */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          {/* Color Swatches */}
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {product.colors?.slice(0, 4).map(c => (
              <span
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                title={c.name}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: c.hex,
                  border: selectedColor === c.name ? '2px solid var(--color-warm-gold)' : '1px solid rgba(0,0,0,0.15)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>

          {/* Pricing */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            {product.compareAtPrice && (
              <span style={{ fontSize: '0.8rem', color: '#9B8E85', textDecoration: 'line-through' }}>
                ₹{product.compareAtPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Mobile quick actions bar (always visible on mobile) */}
        <div className="mobile-product-actions" style={{ marginTop: '0.85rem', display: 'none', gap: '6px' }}>
          <button
            onClick={() => addToCart(product, selectedColor)}
            style={{
              flex: 1,
              padding: '0.5rem',
              backgroundColor: 'var(--color-espresso)',
              color: 'var(--color-ivory)',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
          >
            <ShoppingBag size={13} />
            Add
          </button>
          <a
            href={getProductWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.5rem 0.65rem',
              backgroundColor: '#25D366',
              color: '#FFF',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Enquire on WhatsApp"
          >
            <MessageCircle size={14} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-product-actions {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};
