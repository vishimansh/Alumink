import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EventRegistrationForm = () => {
  const location = useLocation();
  const { event } = location.state || {}; // Get event data from location state

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Handle form submission (send data to server or API)
  };

  if (!event) {
    return <div className="text-center text-xl text-red-500">Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        {/* Event Image or Logo */}
        <div className="relative mb-6">
          <img
            src="https://via.placeholder.com/800x400" // Placeholder image
            alt={event.name}
            className="w-full h-56 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 right-4 bg-[#0D2C48] bg-opacity-80 text-white text-xs px-4 py-2 rounded-full">
            {event.date}
          </div>
        </div>

        {/* Form Heading */}
        <h2 className="text-3xl font-semibold text-[#0D2C48] mb-6 text-center">
          Register for {event.name}
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 mb-2"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border border-[#161B33] rounded-lg px-4 py-2 w-full"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-2"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-[#161B33] rounded-lg px-4 py-2 w-full"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={() => window.history.back()} // Go back to event details
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md w-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#0D2C48] hover:bg-[#1F4B67] text-white px-6 py-2 rounded-md w-full"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
