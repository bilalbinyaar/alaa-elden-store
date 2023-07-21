import React from 'react';
import dummy from '../assets/products/dummy.svg';
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProductComp = () => {
  return (
    <div className="product-comp">
      <div className="container">
        <div className="product-comp-wrapper">
          <div className="product-comp-content content-img">
            <div className="product-img">
              <img src={dummy} alt="product img" />
            </div>
          </div>
          <div className="product-comp-content">
            <div className="product-details-wrapper">
              <div className="product-comp-title">
                <h1>Lorem ipsum dolor</h1>
                <div className="product-comp-details">
                  <div className="ratings">
                    <span>
                      <AiFillStar className="rating-stars" />
                    </span>
                    <span>
                      <AiFillStar className="rating-stars" />
                    </span>
                    <span>
                      <AiFillStar className="rating-stars" />
                    </span>
                    <span>
                      <AiFillStar className="rating-stars" />
                    </span>
                    <span>
                      <AiFillStar className="rating-stars" />
                    </span>
                  </div>
                  <div className="number-of-ratings">
                    <p>(1000 Reviews)</p>
                  </div>
                  <div className="divider-prod"></div>
                  <div className="prod-stock">
                    <h3>In Stock</h3>
                  </div>
                </div>
                <p>
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive. PlayStation 5 Controller Skin High
                  quality vinyl with air channel adhesive for easy bubble free
                  install & mess free removal Pressure sensitive.
                </p>
              </div>
              <div className="products-selection-buy">
                <div className="product-selection">
                  <div className="selection-item for-hover">
                    <AiOutlineMinus />
                  </div>
                  <div className="selection-item">
                    <h3>2</h3>
                  </div>
                  <div className="selection-item for-hover">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="v-hidden">
                  <button>Buy Now</button>
                </div>
              </div>
              <div className="prod-comp-btn">
                <button>
                  <Link to="/cart">Add to cart</Link>
                </button>
                <button>
                  <Link to="/checkout">Buy Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComp;
