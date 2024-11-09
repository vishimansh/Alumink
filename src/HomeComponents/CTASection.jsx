import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const CTASection = () => {
  const navigate = useNavigate();  // Initialize navigate function

  // Function to handle button click and redirect to /form route
  const handleRegisterClick = () => {
    navigate('/form');
  };

  return (
    <div className="bg-[#0D2C48] text-[#FFFFFF] p-12 text-center flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">
        Ready to connect with your alumni network?
      </h2>
      <p className="text-lg md:text-xl opacity-90">
        Join our growing community and stay connected...
      </p>
      <button
        onClick={handleRegisterClick}  // Attach the onClick handler
        className="mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0D2C48] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 ease-in-out"
      >
        Register Now
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CTASection;
