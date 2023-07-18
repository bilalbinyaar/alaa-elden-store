import React from 'react';
import sideImage from '../../assets/Side-Image.png';
import { AiOutlineGoogle } from 'react-icons/ai';

const LoginComp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="signup-wrapper">
          <div className="signup-left">
            <img src={sideImage} alt="side-signup" />
          </div>
          <div className="signup-right">
            <h1>Login in your account</h1>
            <h3>Enter your details below</h3>
            <form className="signup-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" />
              <button>
                <AiOutlineGoogle />
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
