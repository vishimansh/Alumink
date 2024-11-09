import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation when the button is clicked
  const handleJoinNowClick = () => {
    navigate('/Form');
  };

  return (
    <div className="relative overflow-hidden pt-20 bg-white">
      <div className="text-center mt-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D2C48] leading-tight tracking-tight">
          Welcome to AlumLink
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
          Connecting alumni, fostering growth...
        </p>
        <button
          onClick={handleJoinNowClick} // Attach the click handler
          className="mt-8 inline-flex items-center justify-center mb-12 px-8 py-4 bg-[#0D2C48] text-[#FFFFFF] text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
        >
          Join Now <ArrowRight className="ml-3 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
