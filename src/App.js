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
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
