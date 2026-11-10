import { useState } from 'react';
import { MapPin, Search, Shield, Compass, Layers } from 'lucide-react';

const Hero = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ location, service });
    }
  };

  const quickSearchOptions = [
    'Vet Clinics',
    'Emergency Care',
    'Pet Boarding',
    'Diagnostics'
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: 'Trusted Care Providers',
      description: 'Verified professionals'
    },
    {
      icon: Compass,
      title: 'Easy Discovery',
      description: 'Find care nearby'
    },
    {
      icon: Layers,
      title: 'Multiple Care Services',
      description: 'All in one platform'
    }
  ];

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight">
                Because Every Paw Deserves the{' '}
                <span className="text-primary">Best Care</span>.
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                Discover trusted veterinarians, animal hospitals, boarding facilities and essential pet-care services near you. Everything your furry friend needs, all in one place.
              </p>
            </div>

            {/* Search Interface */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-lg p-4 md:p-6 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input
                    type="text"
                    placeholder="Enter city or location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-main"
                  />
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input
                    type="text"
                    placeholder="What care does your pet need?"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-main"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  Find Care
                </button>
              </div>

              {/* Quick Search Suggestions */}
              <div className="flex flex-wrap gap-2">
                {quickSearchOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setService(option)}
                    className="px-4 py-2 bg-mint text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-mint rounded-full mb-2">
                    <indicator.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-main text-sm mb-1">
                    {indicator.title}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {indicator.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-mint to-white rounded-3xl p-8 md:p-12 h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-6xl md:text-8xl">🐕</span>
                </div>
                <p className="text-text-secondary text-sm md:text-base">
                  Trusted by pet parents across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
