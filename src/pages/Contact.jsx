import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, Navigation, CheckCircle, Send } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { LuxuryFrame } from '../components/common/LuxuryFrame';
import { BOUTIQUE_CONFIG, getWhatsAppLink } from '../config/boutiqueConfig';

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'General Inquiry',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-contact" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: '6rem' }}>
      <div className="container">
        <SectionHeading
          eyebrow="ATELIER VISIT & INQUIRIES"
          title="Connect With NAFMIN"
          subtitle="Whether planning your boutique visit, inquiring about opening exclusives, or requesting bridal drape styling, we are here to assist you."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'start',
            marginBottom: '5rem'
          }}
        >
          {/* Left Column: Boutique Information & Rapid Direct Channels */}
          <div>
            <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>STORE DETAILS</span>
            <h2 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '2rem', marginBottom: '1.5rem' }}>
              NAFMIN BOUTIQUE
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {/* Address */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <MapPin size={22} style={{ color: 'var(--color-warm-gold)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '1rem', color: 'var(--color-espresso)', display: 'block' }}>
                    {BOUTIQUE_CONFIG.location.doorNo}, {BOUTIQUE_CONFIG.location.street}
                  </strong>
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-muted)' }}>
                    {BOUTIQUE_CONFIG.location.area},<br />
                    {BOUTIQUE_CONFIG.location.city} - {BOUTIQUE_CONFIG.location.pincode}
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-warm-gold)', marginTop: '4px' }}>
                    Landmark: {BOUTIQUE_CONFIG.location.landmark}
                  </p>
                </div>
              </div>

              {/* Opening Date */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Calendar size={20} style={{ color: 'var(--color-warm-gold)', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', display: 'block' }}>Boutique Grand Opening</span>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--color-espresso)' }}>
                    {BOUTIQUE_CONFIG.openingDate}
                  </strong>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={20} style={{ color: 'var(--color-warm-gold)', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', display: 'block' }}>Opening Hours</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>
                    {BOUTIQUE_CONFIG.contact.visitingHours}
                  </span>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={20} style={{ color: 'var(--color-warm-gold)', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', display: 'block' }}>Phone / WhatsApp</span>
                  <a href={`tel:${BOUTIQUE_CONFIG.contact.phone}`} style={{ fontSize: '0.95rem', color: 'var(--color-espresso)', fontWeight: 600 }}>
                    {BOUTIQUE_CONFIG.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={20} style={{ color: 'var(--color-warm-gold)', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', display: 'block' }}>Email Enquiries</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>
                    {BOUTIQUE_CONFIG.contact.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Quick Conversion Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href={BOUTIQUE_CONFIG.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Navigation size={16} />
                Get Directions
              </a>

              <a
                href={getWhatsAppLink("Hi NAFMIN BOUTIQUE, I'd like to ask a question regarding your Puducherry store.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Premium Contact Form / Success State */}
          <LuxuryFrame variant="ivory">
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(168, 106, 29, 0.12)',
                    color: 'var(--color-warm-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                  Thank You, {formData.name || 'Valued Guest'}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Your message has been received by our boutique team. We look forward to connecting with you shortly or welcoming you to our grand opening on 10th September 2026.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', interest: 'General Inquiry', message: '' });
                  }}
                  className="btn-secondary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="eyebrow" style={{ fontSize: '0.7rem' }}>GET IN TOUCH</span>
                  <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.5rem', marginTop: '4px' }}>
                    Send an Atelier Inquiry
                  </h3>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Zahra"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: '#FFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: '#FFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px' }}>
                    Reason for Contact
                  </label>
                  <select
                    value={formData.interest}
                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option>Opening Offer & Grand Opening Inquiry</option>
                    <option>Product & Fabric Availability</option>
                    <option>Bridal / Occasion Styling Consultation</option>
                    <option>Custom Orders / Bulk Gifting</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the styles or colors you are looking for..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  Submit Inquiry
                </button>
              </form>
            )}
          </LuxuryFrame>
        </div>

        {/* Full-width Map View */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="eyebrow">LOCATION GUIDE</span>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', marginTop: '6px' }}>
              Find Us on Kamaraj Street
            </h3>
          </div>

          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              height: '400px',
              backgroundColor: '#EDE3D5'
            }}
          >
            <iframe
              title="NAFMIN BOUTIQUE Google Map Route"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.8200%2C11.9450%2C79.8450%2C11.9650&amp;layer=mapnik&amp;marker=11.9548%2C79.8335"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                filter: 'sepia(18%) contrast(98%)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
