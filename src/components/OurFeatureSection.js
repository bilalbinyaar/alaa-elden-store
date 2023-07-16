import React from 'react';
import { BiSolidTruck } from 'react-icons/bi';
import { BsHeadset, BsBookmarkCheck } from 'react-icons/bs';

const OurFeatureSection = () => {
  return (
    <div>
      <div className="container">
        <div className="section-tag">
          <div className="tag-shape"></div>
          <div className="tag-title">
            <h3>Features</h3>
          </div>
        </div>
        <div className="section-title">
          <h2>Our Features</h2>
        </div>
        <div className="features-for-customers">
          <div className="feature-item-wrapper">
            <div className="feature-items">
              <div className="feature-item">
                <BiSolidTruck />
              </div>
            </div>
            <h2 className="feature-item-title">Fast Delivery</h2>
            <p className="feature-item-des">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="feature-item-wrapper">
            <div className="feature-items">
              <div className="feature-item">
                <BsHeadset />
              </div>
            </div>
            <h2 className="feature-item-title">24/7 Customer Service</h2>
            <p className="feature-item-des">Friendly 24/7 customer support</p>
          </div>
          <div className="feature-item-wrapper">
            <div className="feature-items">
              <div className="feature-item">
                <BsBookmarkCheck />
              </div>
            </div>
            <h2 className="feature-item-title">Money Back Guarantee</h2>
            <p className="feature-item-des">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatureSection;
