import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const redirect = useNavigate();
  let submitHandler = async (e) => {
    e.preventDefault();
    if (email === 'admin@alaaden.com' && password === 'abcd@1234') {
      redirect('/dashboard');
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert('Invalid Login Information');
    }
  };
  return (
    <div className="admin-login">
      <div className="container">
        <div className="admin-login-wrapper">
          <form className="admin-login-form">
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input type="submit" value="Login" onClick={submitHandler} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginComp;
