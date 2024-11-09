import React, { useState } from "react";
import { useNavigate } from "react-router";

const DonationForm = ({ onDonate }) => {
  const [formData, setFormData] = useState({ name: "", email: "", amount: "" });

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onDonate(formData);   
    navigate('/Donation/Confirmation', { state: { donationDetails: formData } });  
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F0F4F8]">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#0D2C48] mb-6">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-[#0D2C48] rounded-lg px-4 py-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0D2C48] transition-all duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#0D2C48] rounded-lg px-4 py-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0D2C48] transition-all duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label htmlFor="amount" className="block font-medium text-gray-700 mb-2">
              Donation Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="border border-[#0D2C48] rounded-lg px-4 py-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0D2C48] transition-all duration-200 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#0D2C48] hover:bg-[#1A3760] text-white px-6 py-3 rounded-lg w-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
