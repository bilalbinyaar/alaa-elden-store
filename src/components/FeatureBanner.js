import React from 'react';
import featureBanner from '../assets/feature-banner.png';

const FeatureBanner = () => {
  return (
    <div className="feature-banner">
      <div className="container">
        <img
          className="feature-banner-img"
          src={featureBanner}
          alt="feature-img"
        />
      </div>
    </div>
  );
};

export default FeatureBanner;
