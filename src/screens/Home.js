import React from 'react';
import Banner from '../components/Banner';
import BrowseByCategory from '../components/BrowseByCategory';
import FeatureBanner from '../components/FeatureBanner';
import OurProductsSection from '../components/OurProductsSection';
import BrowseByManufacture from '../components/BrowseByManufacture';
import OurFeatureSection from '../components/OurFeatureSection';

const Home = () => {
  return (
    <div>
      <Banner />
      <BrowseByCategory />
      <FeatureBanner />
      <OurProductsSection />
      <BrowseByManufacture />
      <OurFeatureSection />
    </div>
  );
};

export default Home;
