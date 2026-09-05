import React, { createContext, useContext, useState, useEffect } from 'react';
import { BOUTIQUE_CONFIG, getWhatsAppLink } from '../config/boutiqueConfig';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('nafmin_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('nafmin_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  const addToCart = (product, selectedColor, quantity = 1) => {
    const itemColor = selectedColor || (product.colors && product.colors[0]?.name) || 'Standard';
    const cartItemId = `${product.id}-${itemColor}`;

    setCart(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          ...product,
          cartItemId,
          selectedColor: itemColor,
          quantity
        }
      ];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const qualifiesForFreeGift = subtotal >= BOUTIQUE_CONFIG.openingOffer.threshold;
  const amountNeededForFreeGift = Math.max(0, BOUTIQUE_CONFIG.openingOffer.threshold - subtotal);

  // Generate WhatsApp Order Consultation Message
  const getCheckoutWhatsAppUrl = () => {
    if (cart.length === 0) return getWhatsAppLink();

    const itemsSummary = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.name}* (${item.selectedColor}) × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
      )
      .join('\n');

    const giftStatus = qualifiesForFreeGift
      ? `\n🎉 *QUALIFIED FOR OPENING FREE GIFT!* (Purchase above ₹2500)`
      : `\nℹ️ Add ₹${amountNeededForFreeGift.toLocaleString('en-IN')} more to receive the Opening Free Gift!`;

    const message = `Salam / Hi NAFMIN BOUTIQUE,\n\nI would like to enquire about / reserve the following boutique pieces:\n\n${itemsSummary}\n\n*Estimated Total: ₹${subtotal.toLocaleString('en-IN')}*${giftStatus}\n\nPlease confirm availability and payment/pickup details for your Puducherry boutique. Thank you!`;

    return getWhatsAppLink(message);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        totalItems,
        qualifiesForFreeGift,
        amountNeededForFreeGift,
        getCheckoutWhatsAppUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
