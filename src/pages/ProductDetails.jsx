import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, MessageCircle, ShieldCheck, Truck, RefreshCw, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getProductWhatsAppLink, BOUTIQUE_CONFIG } from '../config/boutiqueConfig';
import { ProductCard } from '../components/product/ProductCard';

export const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.slug === slug);

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('details');

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product?.colors?.[0]?.name) {
      setSelectedColor(product.colors[0].name);
    }
    setActiveImgIndex(0);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '2rem', marginBottom: '1rem' }}>
          Product Not Found
        </h2>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>
          The requested boutique style is no longer listed or has moved.
        </p>
        <Link to="/shop" className="btn-primary">
          Return to Shop
        </Link>
      </div>
    );
  }

  const isFavorite = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="page-product-details" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--color-muted)', marginBottom: '2rem' }}>
          <button
            onClick={() => navigate(-1)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-muted)' }}
          >
            <ArrowLeft size={14} /> Back
          </button>
          <span>/</span>
          <Link to="/shop" style={{ color: 'var(--color-muted)' }}>Shop</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-espresso)', fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'start',
            marginBottom: '5rem'
          }}
        >
          {/* LEFT: Image Gallery */}
          <div>
            <div
              style={{
                position: 'relative',
                aspectRatio: '3 / 4',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#F5ECE1',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '1rem'
              }}
            >
              <img
                src={product.images[activeImgIndex] || product.images[0]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {product.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '5px 12px',
                    backgroundColor: 'rgba(255, 253, 248, 0.95)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-espresso)'
                  }}
                >
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '12px' }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    style={{
                      width: '74px',
                      height: '90px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: activeImgIndex === idx ? '2px solid var(--color-warm-gold)' : '1px solid var(--color-border-subtle)',
                      cursor: 'pointer',
                      opacity: activeImgIndex === idx ? 1 : 0.65,
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Information & Purchase Pathways */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
              {product.category.replace('-', ' ')}
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 500,
                color: 'var(--color-text)',
                lineHeight: 1.15,
                marginBottom: '0.75rem'
              }}
            >
              {product.name}
            </h1>

            {/* Price & Stock */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.compareAtPrice && (
                <span style={{ fontSize: '1.1rem', color: '#9B8E85', textDecoration: 'line-through' }}>
                  ₹{product.compareAtPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span style={{ fontSize: '0.8rem', color: '#2E7D32', fontWeight: 600, marginLeft: 'auto' }}>
                ● {product.availability}
              </span>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              {product.description}
            </p>

            {/* Color Swatch Selector */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', display: 'block', marginBottom: '0.65rem' }}>
                  Available Shade: <span style={{ fontWeight: 500, color: 'var(--color-espresso)' }}>{selectedColor}</span>
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {product.colors.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: selectedColor === c.name ? '1.5px solid var(--color-warm-gold)' : '1px solid var(--color-border)',
                        backgroundColor: selectedColor === c.name ? 'rgba(168, 106, 29, 0.08)' : '#FFF',
                        fontSize: '0.8125rem',
                        cursor: 'pointer'
                      }}
                    >
                      <span style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: c.hex, display: 'inline-block' }} />
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions & Fabric Specs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                padding: '1rem 1.25rem',
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '2rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)', display: 'block' }}>
                  Fabric Composition
                </span>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>{product.fabric}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)', display: 'block' }}>
                  Dimensions
                </span>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>{product.size}</strong>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <button
                  onClick={() => addToCart(product, selectedColor, quantity)}
                  className="btn-primary"
                  style={{ flex: 1, padding: '1rem' }}
                >
                  <ShoppingBag size={18} />
                  Add to Bag
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-ivory)',
                    color: isFavorite ? '#E53E3E' : 'var(--color-espresso)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Save to wishlist"
                >
                  <Heart size={20} fill={isFavorite ? '#E53E3E' : 'none'} />
                </button>
              </div>

              {/* Dynamic WhatsApp Pre-filled Conversion */}
              <a
                href={getProductWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', padding: '1rem' }}
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp
              </a>
            </div>

            {/* Accordions */}
            <div style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
              {/* Accordion 1: Care Guide */}
              <div style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'care' ? '' : 'care')}
                  style={{
                    width: '100%',
                    padding: '1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-text)'
                  }}
                >
                  Fabric & Care Guide
                  {activeAccordion === 'care' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeAccordion === 'care' && (
                  <div style={{ paddingBottom: '1rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <p>{product.care}</p>
                    <p style={{ marginTop: '0.5rem' }}>
                      Recommended: Use magnet hijab pins to preserve delicate rolled hems and weave density.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Boutique Pickup & Delivery */}
              <div style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? '' : 'shipping')}
                  style={{
                    width: '100%',
                    padding: '1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-text)'
                  }}
                >
                  Boutique Pickup & Delivery
                  {activeAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeAccordion === 'shipping' && (
                  <div style={{ paddingBottom: '1rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <p>
                      <strong>In-Store Pickup:</strong> Complimentary signature gift packaging when picked up at 28, Kamaraj Street, Senthamarai Nagar, Muthialpet, Puducherry.
                    </p>
                    <p style={{ marginTop: '0.4rem' }}>
                      <strong>Pan-India Courier:</strong> Dispatched via premium express courier in 2–4 business days.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Opening Offer Eligibility */}
              <div style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'offer' ? '' : 'offer')}
                  style={{
                    width: '100%',
                    padding: '1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-espresso)'
                  }}
                >
                  Grand Opening Offer Status
                  {activeAccordion === 'offer' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeAccordion === 'offer' && (
                  <div style={{ paddingBottom: '1rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <p>
                      Purchases above ₹2500 qualify for our <strong>FREE GIFT</strong> during our grand opening beginning <strong>10th September 2026</strong>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Styles */}
        {relatedProducts.length > 0 && (
          <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '4rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', marginBottom: '2rem', textAlign: 'center' }}>
              Complementary Atelier Styles
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}
            >
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
