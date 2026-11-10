import { services } from '../data/mockData';
import {
  Stethoscope,
  Hospital,
  House,
  Microscope,
  Ambulance,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Stethoscope,
  Hospital,
  House,
  Microscope,
  Ambulance,
  HeartHandshake
};

const ExploreServices = ({ onServiceSelect }) => {
  return (
    <section id="explore" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Everything Your Pet Needs, All in One Place.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore essential animal-care services and find the right support for your companion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-off-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
                onClick={() => onServiceSelect && onServiceSelect(service.name)}
              >
                <div className="w-14 h-14 bg-mint rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-main mb-2">
                  {service.name}
                </h3>
                <p className="text-text-secondary mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreServices;
