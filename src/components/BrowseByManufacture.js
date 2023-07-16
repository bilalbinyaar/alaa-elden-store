import React from 'react';
import { SiSamsung } from 'react-icons/si';
import { AiFillApple, AiFillAndroid, AiOutlineShareAlt } from 'react-icons/ai';

const BrowseByManufacture = () => {
  return (
    <div className="browse-category">
      <div className="container">
        <div className="section-tag">
          <div className="tag-shape"></div>
          <div className="tag-title">
            <h3>Manufacturer</h3>
          </div>
        </div>
        <div className="section-title">
          <h2>Browse By Manufacturer</h2>
        </div>
        <div className="browse-category-div">
          <div className="browse-category-items">
            <div className="category-item">
              <AiFillApple />
              <h2>Apple</h2>
            </div>
          </div>
          <div className="browse-category-items">
            <div className="category-item">
              <SiSamsung />
              <h2>Samsung</h2>
            </div>
          </div>
          <div className="browse-category-items">
            <div className="category-item">
              <AiFillAndroid />
              <h2>Techno</h2>
            </div>
          </div>
          <div className="browse-category-items">
            <div className="category-item">
              <AiOutlineShareAlt />
              <h2>Realme</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByManufacture;
