import { Star, MapPin, Clock, Phone, Calendar } from 'lucide-react';

const ProviderCard = ({ provider, onViewDetails, onContact }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-mint to-primary/20 flex items-center justify-center">
        <span className="text-6xl">🏥</span>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-text-main mb-1">
              {provider.name}
            </h3>
            <p className="text-sm text-primary font-medium">
              {provider.category}
            </p>
          </div>
          <div className="flex items-center space-x-1 bg-accent/20 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-semibold text-text-main">
              {provider.rating}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-text-secondary text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{provider.location}</span>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {provider.description}
        </p>

        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {provider.services.slice(0, 3).map((service, index) => (
            <span
              key={index}
              className="text-xs bg-mint text-primary px-3 py-1 rounded-full"
            >
              {service}
            </span>
          ))}
          {provider.services.length > 3 && (
            <span className="text-xs text-text-secondary">
              +{provider.services.length - 3} more
            </span>
          )}
        </div>

        {/* Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-text-secondary" />
            <span
              className={`text-sm font-medium ${
                provider.isOpen ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {provider.isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>
          {provider.emergencyAvailable && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-medium">
              Emergency
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={() => onViewDetails(provider)}
            className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg font-medium transition-colors duration-200"
          >
            View Details
          </button>
          <button
            onClick={() => onContact(provider)}
            className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 rounded-lg font-medium transition-colors duration-200"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
