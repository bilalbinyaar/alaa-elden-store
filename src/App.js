import Banner from './components/Banner';
import BrowseByCategory from './components/BrowseByCategory';
import FeatureBanner from './components/FeatureBanner';
import Navbar from './components/Navbar';
import OurProductsSection from './components/OurProductsSection';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <BrowseByCategory />
      <FeatureBanner />
      <OurProductsSection />
    </div>
  );
}

export default App;
