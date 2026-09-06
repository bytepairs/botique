import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { InstagramIcon } from '../common/SocialIcons';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { BOUTIQUE_CONFIG, getWhatsAppLink } from '../../config/boutiqueConfig';

export const Navbar = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { count: wishlistCount, setIsWishlistOpen } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(255, 253, 248, 0.96)' : 'rgba(248, 241, 232, 0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(74, 42, 22, 0.04)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Top Announcement Bar (Opening Offer & Grand Opening Notice) */}
        <div
          style={{
            backgroundColor: 'var(--color-espresso)',
            color: 'var(--color-ivory)',
            padding: '0.45rem 1rem',
            textAlign: 'center',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}
        >
          <span style={{ color: 'var(--color-light-gold)', fontSize: '0.65rem' }}>★</span>
          <span className="announcement-desktop">
            Boutique Opening: <strong>10th September 2026</strong> • {BOUTIQUE_CONFIG.openingOffer.highlight}
          </span>
          <span className="announcement-mobile">
            Opening 10 Sept • Free Gift Above ₹2500
          </span>
          <span style={{ color: 'var(--color-light-gold)', fontSize: '0.65rem' }}>★</span>
        </div>

        {/* Main Navbar Bar */}
        <div className="container" style={{ padding: '0.75rem clamp(1rem, 3vw, 2.5rem)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}
          >
            {/* Left: Brand Logo */}
            <BrandLogo size="sm" />

            {/* Center: Desktop Navigation Links */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '2.25rem'
              }}
              className="desktop-nav"
            >
              {navLinks.map(link => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--color-espresso)' : 'var(--color-muted)',
                      position: 'relative',
                      padding: '0.4rem 0',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-espresso)')}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-muted)';
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: '15%',
                          width: '70%',
                          height: '1.5px',
                          backgroundColor: 'var(--color-warm-gold)'
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Search Toggle */}
              <button
                onClick={onOpenSearch}
                style={{
                  padding: '8px',
                  color: 'var(--color-espresso)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color var(--transition-fast)'
                }}
                aria-label="Search collection"
                title="Search products"
              >
                <Search size={19} />
              </button>

              {/* Instagram link (desktop) */}
              <a
                href={BOUTIQUE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px',
                  color: 'var(--color-espresso)',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="desktop-social-link"
                aria-label="Visit Instagram"
                title="Follow @nafminboutique"
              >
                <InstagramIcon size={19} />
              </a>

              {/* WhatsApp Quick Consultation */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px',
                  color: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Chat on WhatsApp"
                title="WhatsApp Consultation"
              >
                <MessageCircle size={20} />
              </a>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                style={{
                  padding: '8px',
                  color: 'var(--color-espresso)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                aria-label="View wishlist"
                title="Saved Items"
              >
                <Heart size={19} />
                {wishlistCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      backgroundColor: 'var(--color-warm-gold)',
                      color: '#FFF',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag / Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                style={{
                  padding: '8px',
                  color: 'var(--color-espresso)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                aria-label="View shopping bag"
                title="Shopping Bag"
              >
                <ShoppingBag size={19} />
                {totalItems > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      backgroundColor: 'var(--color-espresso)',
                      color: 'var(--color-ivory)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  padding: '8px',
                  color: 'var(--color-espresso)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="mobile-menu-btn"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Silky Animated Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: 'var(--color-ivory)',
                borderTop: '1px solid var(--color-border-subtle)',
                borderBottom: '1px solid var(--color-border)',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                overflow: 'hidden'
              }}
            >
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: 'var(--font-serif-display)',
                        fontSize: '1.35rem',
                        color: location.pathname === link.path ? 'var(--color-warm-gold)' : 'var(--color-text)',
                        display: 'block',
                        padding: '0.4rem 0',
                        borderBottom: '1px solid rgba(217, 192, 160, 0.2)'
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div
                style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: 'var(--color-muted)' }}>
                  <MapPin size={16} style={{ color: 'var(--color-warm-gold)' }} />
                  <span>Muthialpet, Puducherry • Opens 10 Sept 2026</span>
                </div>

                <div style={{ display: 'flex', gap: '0.65rem' }}>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ flex: 1, padding: '0.75rem', fontSize: '0.78rem' }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </a>
                  <a
                    href={BOUTIQUE_CONFIG.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, padding: '0.75rem', fontSize: '0.78rem' }}
                  >
                    Directions
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Responsive Breakpoint CSS */}
      <style>{`
        .announcement-desktop {
          display: inline;
        }
        .announcement-mobile {
          display: none;
        }

        @media (max-width: 600px) {
          .announcement-desktop {
            display: none;
          }
          .announcement-mobile {
            display: inline;
          }
        }

        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-social-link {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
