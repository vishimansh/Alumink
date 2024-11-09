import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve donationDetails from location.state
  const donationDetails = location.state?.donationDetails;

  const onBackToHome = () => {
    navigate('/');  // Adjust this path as necessary for your home route
  };

  // Conditional rendering to handle missing donationDetails
  if (!donationDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-[#0D2C48]">
        <div className="text-center text-lg">Error: No donation details available.</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-semibold text-[#0D2C48] mb-6">Thank You for Your Donation!</h2>
        <div className="space-y-4 text-lg">
          <p>
            <strong className="font-medium text-[#0D2C48]">Name:</strong> {donationDetails.name}
          </p>
          <p>
            <strong className="font-medium text-[#0D2C48]">Email:</strong> {donationDetails.email}
          </p>
          <p>
            <strong className="font-medium text-[#0D2C48]">Amount:</strong> ₹{donationDetails.amount}
          </p>
        </div>
        <button
          onClick={onBackToHome}
          className="bg-[#0D2C48] hover:bg-[#1A3760] text-white px-5 py-3 rounded-lg mt-8 font-semibold shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
