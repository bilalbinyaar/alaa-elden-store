import React from 'react';
import thumbImg from '../assets/products/p-1.png';
import thumbImg1 from '../assets/products/p-2.png';
import thumbImg2 from '../assets/products/p-3.png';
import visa from '../assets/checkout/Visa.png';
import masterCard from '../assets/checkout/Mastercard.png';
import voda from '../assets/checkout/vodafone.png';

const CheckoutComp = () => {
  return (
    <div className="checkout">
      <div className="container">
        <div className="section-title">
          <h2>Billing Details</h2>
        </div>
        <div className="checkout-wrapper">
          <div className="checkout-content-left">
            <form className="biiling-form">
              <input placeholder="Name" required />
              <input placeholder="Street Address" required />
              <input placeholder="Apartment, floor, etc" />
              <input placeholder="Town/City" required />
              <input placeholder="Phone Number" required />
              <input placeholder="Email" required />
            </form>
          </div>
          <div className="checkout-content-right">
            <div className="checkout-products">
              <div className="checkout-products-list">
                <div className="checkout-product-img">
                  <img src={thumbImg} alt="checkout product" />
                  <h3>Lorem ipsum dolor</h3>
                </div>
                <div className="checkout-product-price">
                  <h3>$650</h3>
                </div>
              </div>

              <div className="checkout-products-list">
                <div className="checkout-product-img">
                  <img src={thumbImg1} alt="checkout product" />
                  <h3>Lorem ipsum dolor</h3>
                </div>
                <div className="checkout-product-price">
                  <h3>$350</h3>
                </div>
              </div>

              <div className="checkout-products-list">
                <div className="checkout-product-img">
                  <img src={thumbImg2} alt="checkout product" />
                  <h3>Lorem ipsum dolor</h3>
                </div>
                <div className="checkout-product-price">
                  <h3>$150</h3>
                </div>
              </div>
            </div>

            {/* SUBTOTAL SECTION */}
            <div className="checkout-subtotal">
              <div className="checkokut-subtotal-fields">
                <h3>Subtotal</h3>
                <h3>$1150</h3>
              </div>
              <div className="checkokut-subtotal-fields borders">
                <h3>Shipping</h3>
                <h3>Free</h3>
              </div>
              <div className="checkokut-subtotal-fields">
                <h3>Total</h3>
                <h3>$1150</h3>
              </div>
            </div>
            <div className="checkout-billing">
              <div className="billing-details">
                <div className="billing-selection">
                  <input type="radio" name="billing_opt" /> <h3>Bank</h3>
                </div>
                <div className="billing-icons">
                  <img src={visa} alt="visa" />
                  <img src={masterCard} alt="master card" />
                </div>
              </div>
              <div className="billing-details">
                <div className="billing-selection">
                  <input type="radio" name="billing_opt" /> 
                  <h3>Vodafone Cash</h3>
                </div>
                <img src={voda} alt="master card" />
              </div>
              <div className="billing-details">
                <div className="billing-selection">
                  <input type="radio" name="billing_opt" /> 
                  <h3>Cash on Delivery</h3>
                </div>
                <div className="billing-icons v-hidden">icons</div>
              </div>
            </div>
            <div className="checkout-place order">
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComp;
