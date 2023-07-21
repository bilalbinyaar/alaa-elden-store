import React from 'react';
import p_1 from '../assets/products/p-1.png';
import p_2 from '../assets/products/p-2.png';
import p_3 from '../assets/products/p-3.png';
import p_4 from '../assets/products/p-4.png';
import p_5 from '../assets/products/p-5.png';
import p_6 from '../assets/products/p-6.png';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const OurProductsSection = () => {
  return (
    <div className="our-production-section">
      <div className="container">
        <div className="section-tag">
          <div className="tag-shape"></div>
          <div className="tag-title">
            <h3>Our Products</h3>
          </div>
        </div>
        <div className="section-title">
          <h2>Explore Our Products</h2>
        </div>
        <div className="our-products-wrapper">
          <div className="our-products-items mb-items">
            <div className="our-products-item">
              <Link to="/product">
                <img src={p_2} alt="product" />
              </Link>
              <button>Add to cart</button>
              <h3>
                <Link to="/product">Lorem ipsum dolor</Link>
              </h3>
              <div className="price-rating">
                <div className="product-price">
                  <p>$100</p>
                </div>
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
                  <p>(1000)</p>
                </div>
              </div>
            </div>
            <div className="our-products-item">
              <Link to="/product">
                <img src={p_1} alt="product" />
              </Link>
              <button>Add to cart</button>
              <h3>
                <Link to="/product">Lorem ipsum dolor</Link>
              </h3>
              <div className="price-rating">
                <div className="product-price">
                  <p>$100</p>
                </div>
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
                  <p>(1000)</p>
                </div>
              </div>
            </div>
            <div className="our-products-item">
              <Link to="/product">
                <img src={p_2} alt="product" />
              </Link>
              <button>Add to cart</button>
              <h3>
                <Link to="/product">Lorem ipsum dolor</Link>
              </h3>
              <div className="price-rating">
                <div className="product-price">
                  <p>$100</p>
                </div>
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
                  <p>(1000)</p>
                </div>
              </div>
            </div>
            <div className="our-products-item">
              <Link to="/product">
                <img src={p_3} alt="product" />
              </Link>
              <button>Add to cart</button>
              <h3>
                <Link to="/product">Lorem ipsum dolor</Link>
              </h3>
              <div className="price-rating">
                <div className="product-price">
                  <p>$100</p>
                </div>
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
                  <p>(1000)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="our-products-items .mb-items">
            <div className="our-products-item">
              <Link to="/product">
                <img src={p_4} alt="product" />
              </Link>
              <button>Add to cart</button>
              <h3>
                <Link to="/product">Lorem ipsum dolor</Link>
              </h3>
              <div className="price-rating">
                <div className="product-price">
                  <p>$100</p>
                </div>
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
                  <p>(1000)</p>
                </div>
              </div>
            </div>
            <div className="our-products-item">
              <Link to="/product">
                <img src={p_5} alt="product" />
              </Link>
              <button>Add to cart</button>
              <h3>
                <Link to="/product">Lorem ipsum dolor</Link>
              </h3>
              <div className="price-rating">
                <div className="product-price">
                  <p>$100</p>
                </div>
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
                  <p>(1000)</p>
                </div>
              </div>
            </div>
            <div className="our-products-item">
              <Link to="/product">
                <img src={p_6} alt="product" />
              </Link>
              <button>Add to cart</button>
              <h3>
                <Link to="/product">Lorem ipsum dolor</Link>
              </h3>
              <div className="price-rating">
                <div className="product-price">
                  <p>$100</p>
                </div>
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
                  <p>(1000)</p>
                </div>
              </div>
            </div>
            <div className="our-products-item">
              <Link to="/product">
                <img src={p_1} alt="product" />
              </Link>
              <button>Add to cart</button>
              <h3>
                <Link to="/product">Lorem ipsum dolor</Link>
              </h3>
              <div className="price-rating">
                <div className="product-price">
                  <p>$100</p>
                </div>
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
                  <p>(1000)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="view-all">
            <button>
              <Link to="/shop">View All Products</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductsSection;
