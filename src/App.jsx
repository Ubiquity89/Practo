import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExploreServices from './components/ExploreServices';
import ProviderDiscovery from './components/ProviderDiscovery';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  const [searchFilters, setSearchFilters] = useState({});

  const handleSearch = (filters) => {
    setSearchFilters(filters);
    // Scroll to provider discovery section
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (serviceName) => {
    setSearchFilters({ service: serviceName });
    // Scroll to provider discovery section
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onSearch={handleSearch} />
      <ExploreServices onServiceSelect={handleServiceSelect} />
      <ProviderDiscovery initialFilters={searchFilters} />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
