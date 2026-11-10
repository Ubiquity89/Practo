import { useState, useMemo } from 'react';
import { providers, services } from '../data/mockData';
import { Search, Star, Clock, Phone, MapPin, Filter } from 'lucide-react';
import ProviderCard from './ProviderCard';
import ProviderModal from './ProviderModal';

const ProviderDiscovery = ({ initialFilters = {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialFilters.service || '');
  const [selectedRating, setSelectedRating] = useState('');
  const [openNow, setOpenNow] = useState(false);
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [sortBy, setSortBy] = useState('rating');
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [showContactModal, setShowContactModal] = useState(null);

  const filteredProviders = useMemo(() => {
    let filtered = [...providers];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(provider =>
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(provider => provider.category === selectedCategory);
    }

    // Rating filter
    if (selectedRating) {
      const minRating = parseFloat(selectedRating);
      filtered = filtered.filter(provider => provider.rating >= minRating);
    }

    // Open now filter
    if (openNow) {
      filtered = filtered.filter(provider => provider.isOpen);
    }

    // Emergency filter
    if (emergencyOnly) {
      filtered = filtered.filter(provider => provider.emergencyAvailable);
    }

    // Sort
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedRating, openNow, emergencyOnly, sortBy]);

  const handleViewDetails = (provider) => {
    setSelectedProvider(provider);
  };

  const handleContact = (provider) => {
    setShowContactModal(provider);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Find Trusted Animal-Care Providers
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore nearby services and choose the care that suits your pet.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="text"
                placeholder="Search providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-main"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-main bg-white"
            >
              <option value="">All Categories</option>
              {services.map(service => (
                <option key={service.id} value={service.name}>{service.name}</option>
              ))}
            </select>

            {/* Rating Filter */}
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-main bg-white"
            >
              <option value="">All Ratings</option>
              <option value="4.5">4.5+ Stars</option>
              <option value="4.0">4.0+ Stars</option>
              <option value="3.5">3.5+ Stars</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-main bg-white"
            >
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          {/* Toggle Filters */}
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={openNow}
                onChange={(e) => setOpenNow(e.target.checked)}
                className="w-4 h-4 text-primary rounded focus:ring-primary"
              />
              <span className="text-text-secondary">Open Now</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={emergencyOnly}
                onChange={(e) => setEmergencyOnly(e.target.checked)}
                className="w-4 h-4 text-primary rounded focus:ring-primary"
              />
              <span className="text-text-secondary">Emergency Available</span>
            </label>
          </div>
        </div>

        {/* Demo Listing Notice */}
        <div className="mb-6 text-center">
          <span className="inline-block bg-accent/20 text-text-main text-sm px-4 py-2 rounded-full">
            Demo Listings - Sample data for demonstration purposes
          </span>
        </div>

        {/* Provider Cards */}
        {filteredProviders.length === 0 ? (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-main mb-2">
              No providers found
            </h3>
            <p className="text-text-secondary">
              Try adjusting your filters or search terms
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onViewDetails={handleViewDetails}
                onContact={handleContact}
              />
            ))}
          </div>
        )}
      </div>

      {/* Provider Detail Modal */}
      {selectedProvider && (
        <ProviderModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-text-main mb-4">
              Contact {showContactModal.name}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-text-secondary">Phone</p>
                  <p className="text-text-main font-medium">{showContactModal.contact}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-text-secondary">Location</p>
                  <p className="text-text-main font-medium">{showContactModal.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-text-secondary">Hours</p>
                  <p className="text-text-main font-medium">{showContactModal.hours}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-text-secondary mb-4">
                Demo contact information for demonstration purposes
              </p>
              <button
                onClick={() => setShowContactModal(null)}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProviderDiscovery;
