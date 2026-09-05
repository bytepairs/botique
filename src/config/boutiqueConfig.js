/**
 * Centralized Brand & Boutique Configuration
 * NAFMIN BOUTIQUE
 */

export const BOUTIQUE_CONFIG = {
  name: 'NAFMIN BOUTIQUE',
  shortName: 'NAFMIN',
  tagline: 'Premium Hijabs • Elegant Styles • Timeless You',
  eyebrow: 'PREMIUM MODEST FASHION',
  
  // Boutique Opening Details
  openingDate: '10th September 2026',
  openingYear: '2026',
  openingOffer: {
    title: 'Celebrate Our New Beginning',
    highlight: 'FREE GIFT ON PURCHASE ABOVE ₹2500',
    threshold: 2500,
    badge: 'GRAND OPENING OFFER',
    description: 'Visit NAFMIN BOUTIQUE on Kamaraj Street and receive an exclusive handcrafted boutique accessory gift with your purchase above ₹2500.'
  },

  // Physical Location in Puducherry
  location: {
    doorNo: '28',
    street: 'Kamaraj Street',
    area: 'Senthamarai Nagar, Muthialpet',
    city: 'Puducherry',
    pincode: '605003',
    fullAddress: '28, Kamaraj Street, Senthamarai Nagar, Muthialpet, Puducherry, 605003',
    landmark: 'Near Senthamarai Nagar Junction, Muthialpet',
    googleMapsUrl: 'https://maps.google.com/?q=28+Kamaraj+Street+Senthamarai+Nagar+Muthialpet+Puducherry+605003',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=28+Kamaraj+Street+Senthamarai+Nagar+Muthialpet+Puducherry+605003',
    coordinates: {
      lat: 11.9548,
      lng: 79.8335
    }
  },

  // Contact Channels
  contact: {
    phone: '+91 94882 10926',
    whatsappNumber: '919488210926', // Clean format for wa.me links
    email: 'contact@nafminboutique.com',
    instagramHandle: '@nafminboutique',
    instagramUrl: 'https://instagram.com/nafminboutique',
    visitingHours: 'Monday – Sunday: 10:00 AM – 9:30 PM'
  },

  // Brand Pillars
  pillars: [
    {
      id: 'curated',
      title: 'Curated Collections',
      description: 'Thoughtfully selected styles, cuts and drape textures for every occasion.'
    },
    {
      id: 'fabrics',
      title: 'Premium Fabrics',
      description: 'Breathable modal silks, Turkish crinkle, and luxury georgette chosen for everyday beauty.'
    },
    {
      id: 'service',
      title: 'Personal Service',
      description: 'A warm, private boutique styling consultation designed around you.'
    }
  ]
};

/**
 * Helper to construct instant WhatsApp consultation links
 */
export const getWhatsAppLink = (message) => {
  const encoded = encodeURIComponent(message || "Hi NAFMIN BOUTIQUE, I'd like to know more about your collection and boutique opening.");
  return `https://wa.me/${BOUTIQUE_CONFIG.contact.whatsappNumber}?text=${encoded}`;
};

/**
 * Product-specific WhatsApp inquiry message generator
 */
export const getProductWhatsAppLink = (product) => {
  const msg = `Hi NAFMIN BOUTIQUE, I'm interested in *${product.name}* (Price: ₹${product.price.toLocaleString('en-IN')}). Please share more details and fabric availability.`;
  return getWhatsAppLink(msg);
};

/**
 * Opening Offer WhatsApp Claim
 */
export const getOfferWhatsAppLink = () => {
  const msg = `Hi NAFMIN BOUTIQUE, I'm looking forward to your boutique opening on ${BOUTIQUE_CONFIG.openingDate}! Please reserve details for the Opening Free Gift offer.`;
  return getWhatsAppLink(msg);
};
