import React from 'react';
import BannerCategories from './BannerCategories';
import BannerSlider from './BannerSlider';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <BannerCategories />
          <BannerSlider />
        </div>
      </div>
    </div>
  );
};

export default Banner;
