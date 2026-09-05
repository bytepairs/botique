import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { BrandIntro } from '../components/home/BrandIntro';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedCollection } from '../components/home/FeaturedCollection';
import { OpeningOfferBanner } from '../components/home/OpeningOfferBanner';
import { BoutiqueExperience } from '../components/home/BoutiqueExperience';
import { BrandStory } from '../components/home/BrandStory';
import { StoreLocation } from '../components/home/StoreLocation';
import { InstagramGrid } from '../components/home/InstagramGrid';
import { FinalBoutiqueCTA } from '../components/home/FinalBoutiqueCTA';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-home">
      {/* 1. Cinematic Luxury Hero */}
      <Hero />

      {/* 2. Brand Introduction */}
      <BrandIntro />

      {/* 3. Category Section */}
      <CategoryGrid />

      {/* 4. Featured Collection */}
      <FeaturedCollection />

      {/* 5. Opening Offer Highlight */}
      <OpeningOfferBanner />

      {/* 6. Boutique Experience */}
      <BoutiqueExperience />

      {/* 7. Brand Story */}
      <BrandStory />

      {/* 8. Store Location */}
      <StoreLocation />

      {/* 9. Instagram Lookbook */}
      <InstagramGrid />

      {/* 10. Final Boutique Invitation CTA */}
      <FinalBoutiqueCTA />
    </div>
  );
};
