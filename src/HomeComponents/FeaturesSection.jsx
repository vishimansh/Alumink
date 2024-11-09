import React from 'react';
import { Users, Briefcase, Calendar, DollarSign } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="w-16 h-16 flex items-center justify-center bg-[#0D2C48] rounded-full mb-4">
      <Icon className="text-white text-2xl" />
    </div>
    <h3 className="text-xl font-semibold text-[#0D2C48] mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-[#F9F2EC] p-12">
    <FeatureCard icon={Users} title="Networking Hub" description="Connect with fellow alumni..." />
    <FeatureCard icon={DollarSign} title="Donation" description="Donate for the future..." />
    <FeatureCard icon={Briefcase} title="Job Portal" description="Explore career opportunities..." />
    <FeatureCard icon={Calendar} title="Events" description="Stay updated with alumni meets..." />
  </div>
);

export default FeaturesSection;
