import React from 'react';
import {
  AiFillDelete,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import thumbImg from '../assets/products/p-1.png';
import thumbImg1 from '../assets/products/p-2.png';
import thumbImg2 from '../assets/products/p-3.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="screen-title">
          <h1>Cart</h1>
        </div>
        <div className="cart-wrapper">
          {/* <div className="cart-info-bar cart-bar">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3 className="v-hidden">Delete</h3>
          </div> */}
          <div className="cart-product-bar cart-bar">
            <div className="product-img-text">
              <img src={thumbImg} alt="product-cart-thumb" />
              <h3>Lorem ipsum dolor</h3>
            </div>
            <h3>$250</h3>
            <div className="product-quantity">
              <AiFillPlusCircle />
              <h3>1</h3>
              <AiFillMinusCircle />
            </div>
            <AiFillDelete className="del-btn-icon" />
          </div>
          <div className="cart-product-bar cart-bar">
            <div className="product-img-text">
              <img src={thumbImg1} alt="product-cart-thumb" />
              <h3>Lorem ipsum dolor</h3>
            </div>
            <h3>$350</h3>
            <div className="product-quantity">
              <AiFillPlusCircle />
              <h3>10</h3>
              <AiFillMinusCircle />
            </div>
            <AiFillDelete className="del-btn-icon" />
          </div>
          <div className="cart-product-bar cart-bar">
            <div className="product-img-text">
              <img src={thumbImg2} alt="product-cart-thumb" />
              <h3>Lorem ipsum dolor</h3>
            </div>
            <h3>$150</h3>
            <div className="product-quantity">
              <AiFillPlusCircle />
              <h3>2</h3>
              <AiFillMinusCircle />
            </div>
            <AiFillDelete className="del-btn-icon" />
          </div>
          <div className="cart-btn">
            <Link to="/shop">
              <button>Return to Shop</button>
            </Link>
          </div>
          <div className="cart-total">
            <div className="screen-title">
              <h2>Cart Total</h2>
            </div>
            <div className="price-bars">
              <h3 className="less-fw">Subtotal</h3>
              <h3>$1000</h3>
            </div>
            <div className="price-bars borders">
              <h3 className="less-fw">Shipping</h3>
              <h3>Free</h3>
            </div>
            <div className="price-bars">
              <h3 className="less-fw">Total</h3>
              <h3>$1000</h3>
            </div>
            <div className="check-out-btn">
              <button className="btn-co">
                <Link to="/checkout">Proceed to checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
