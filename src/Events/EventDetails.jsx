import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EventDetails = () => {
  const navigate = useNavigate();
  
  const event = {
    id: 1, // Example event id
    name: "Tech Meetup",
    date: "2024-11-15",
    location: "Goa, India",
    description: "A meetup for tech enthusiasts to network and share ideas."
  }; // You can replace this with dynamic event data based on location.state or API

  const handleBackClick = () => {
    navigate("/Events"); // Navigate back to Events list
  };

  const handleRegisterClick = () => {
    navigate("/event-register", { state: { event } }); // Navigate to event registration with event data
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        {/* Back Button */}
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-md mb-6 transition duration-300 ease-in-out"
          onClick={handleBackClick}
        >
          &larr; Back to Events
        </button>

        {/* Event Image */}
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

        {/* Event Details */}
        <h2 className="text-3xl font-semibold text-[#0D2C48] mb-4">{event.name}</h2>
        <div className="space-y-4">
          <p>
            <strong className="font-medium text-gray-700">Location:</strong> {event.location}
          </p>
          <p className="text-lg text-gray-800">{event.description}</p>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegisterClick} // Call handleRegisterClick to navigate to the registration form
          className="w-full mt-8 bg-[#0D2C48] hover:bg-[#1F4B67] text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out"
        >
          Register for Event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
