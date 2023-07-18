import React from 'react';
import sideImage from '../../assets/Side-Image.png';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';

const SignUpComp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="signup-wrapper">
          <div className="signup-left">
            <img src={sideImage} alt="side-signup" />
          </div>
          <div className="signup-right">
            <h1>Create an account</h1>
            <h3>Enter your details below</h3>
            <form className="signup-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Create Account" />
              <button>
                <AiOutlineGoogle />
                Sign up with Google
              </button>
              <p>
                Already have account?
                <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;
