import React from 'react';
import { BsTools } from 'react-icons/bs';
import { AiOutlineApartment } from 'react-icons/ai';
import { IoHardwareChipOutline } from 'react-icons/io5';

const BrowseByCategory = () => {
  return (
    <div className="browse-category">
      <div className="container">
        <div className="section-tag">
          <div className="tag-shape"></div>
          <div className="tag-title">
            <h3>Categories</h3>
          </div>
        </div>
        <div className="section-title">
          <h2>Browse By Categories</h2>
        </div>
        <div className="browse-category-div">
          <div className="browse-category-items">
            <div className="category-item">
              <BsTools />
              <h2>Tools</h2>
            </div>
          </div>
          <div className="browse-category-items">
            <div className="category-item">
              <AiOutlineApartment />
              <h2>Parts</h2>
            </div>
          </div>
          <div className="browse-category-items">
            <div className="category-item">
              <IoHardwareChipOutline />
              <h2>Hardware</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
