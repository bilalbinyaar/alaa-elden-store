import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="nav-logo">
            <h2>Alaa Elden</h2>
          </div>
          <div className="nav-links">
            <ul className="nav-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {' '}
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/sign-up">My Account</Link>
              </li>
            </ul>
          </div>
          <div className="search-cart">
            <div className="nav-search-bar">
              <input type="text" placeholder="What are you looking for?" />
            </div>
            <div className="cart-icon-div">
              <Link to="/cart">
                <AiOutlineShoppingCart className="cart-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
