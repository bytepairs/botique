import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SplashScreen } from './components/layout/SplashScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchOverlay } from './components/layout/SearchOverlay';
import { CartDrawer } from './components/layout/CartDrawer';
import { WishlistDrawer } from './components/layout/WishlistDrawer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { ThemeDrawer } from './components/common/ThemeDrawer';
import { ScrollProgressBar } from './components/common/ScrollReveal';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Collections } from './pages/Collections';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [showSplashForced, setShowSplashForced] = useState(false);

  const handleReplaySplash = () => {
    setShowSplashForced(true);
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 0. Silky Framer Motion Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Animated Splash Screen */}
      <SplashScreen
        forceShow={showSplashForced}
        onComplete={() => setShowSplashForced(false)}
      />

      {/* 2. Sticky Navbar with Search & Drawers Triggers */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* 3. Main Page Routing */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 4. Luxury Footer with Replay Splash Trigger */}
      <Footer onReplaySplash={handleReplaySplash} />

      {/* 5. Mobile Sticky Conversion Bar */}
      <MobileStickyBar />

      {/* 6. Overlays & Modals */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
      <WishlistDrawer />
      <ThemeDrawer />
    </div>
  );
};

export default App;
