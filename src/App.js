import React from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Home from './screens/Home';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
