import { Star, MapPin, Clock, Phone, Mail, X, Calendar } from 'lucide-react';

const ProviderModal = ({ provider, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-main">
              {provider.name}
            </h2>
            <p className="text-primary font-medium">{provider.category}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-text-secondary" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="h-64 bg-gradient-to-br from-mint to-primary/20 rounded-xl flex items-center justify-center">
            <span className="text-8xl">🏥</span>
          </div>

          {/* Rating and Location */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="text-lg font-semibold text-text-main">
                {provider.rating}
              </span>
              <span className="text-text-secondary">({provider.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <MapPin className="w-5 h-5" />
              <span>{provider.location}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-text-main mb-2">About</h3>
            <p className="text-text-secondary">{provider.description}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-text-main mb-3">Services Offered</h3>
            <div className="flex flex-wrap gap-2">
              {provider.services.map((service, index) => (
                <span
                  key={index}
                  className="bg-mint text-primary px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-text-main mb-1">Opening Hours</h3>
              <p className="text-text-secondary">{provider.hours}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-off-white rounded-xl p-4 space-y-3">
            <h3 className="text-lg font-semibold text-text-main mb-3">Contact Information</h3>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-text-secondary">Phone</p>
                <p className="text-text-main font-medium">{provider.contact}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-text-secondary">Email</p>
                <p className="text-text-main font-medium">{provider.email}</p>
              </div>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="bg-accent/20 rounded-lg p-4">
            <p className="text-sm text-text-main">
              <strong>Demo Listing:</strong> This is sample data for demonstration purposes only.
              Contact information and details are fictional.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderModal;
