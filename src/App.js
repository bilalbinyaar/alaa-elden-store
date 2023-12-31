import React from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Home from './screens/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import SignUp from './screens/SignUp';
import Shop from './screens/Shop';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Product from './screens/Product';
import AdminLogin from './screens/AdminLogin';
import DashboardPage from './components/admin/DashboardPage';

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<Product />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
