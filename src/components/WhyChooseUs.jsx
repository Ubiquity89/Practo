import { Search, Shield, MapPin, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Search,
      title: 'Easy Discovery',
      description: 'Find relevant animal-care services without searching endlessly. Our smart platform connects you with the right care providers quickly and efficiently.'
    },
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'Access a network of trusted and experienced veterinarians, hospitals, and care providers who meet our quality standards.'
    },
    {
      icon: MapPin,
      title: 'Location-Based',
      description: 'Discover services near you with our intelligent location matching. Find care providers in your neighborhood for convenient access.'
    },
    {
      icon: Heart,
      title: 'Comprehensive Care',
      description: 'From routine checkups to emergency services, find all types of animal care in one platform. Your pet\'s health journey, simplified.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Better Care Starts with Better Connections.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We make it simple to find trusted animal-care services for your beloved pets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-mint rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-main mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
