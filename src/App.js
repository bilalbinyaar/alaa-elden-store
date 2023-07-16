import React from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Home from './screens/Home';

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Navbar />
      <div>
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
