import React from 'react';
import EGP_FLAG from '../assets/flags/Flag_of_Egypt.svg';
import UK_FLAG from '../assets/flags/Flag_of_United_Kingdom.svg';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-wrapper">
          <div className="top-bar-text">
            <p>
              Bulk Sale For All Products And Free Express Delivery - OFF UPTO
              50%!
            </p>
          </div>
          <div className="top-bar-lang">
            <div className="lang-text">
              <p>English</p>
            </div>
            <div className="flag-div">
              <img src={UK_FLAG} alt="flag" />
            </div>
            <div className="colen-div"></div>
            <div className="flag-div">
              <img src={EGP_FLAG} alt="flag" />
            </div>
            <div className="lang-text">
              <p>عربي</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
