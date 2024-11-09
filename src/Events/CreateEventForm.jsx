import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEventForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData); // Create new event and update the event list
    navigate("/Events"); // Redirect back to Events List page
  };

  return (
    <div className="bg-white p-6 px-16 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
            Event Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white border border-[#161B33] rounded px-3 py-2 w-full max-w-md"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block font-medium text-gray-700 mb-1">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="bg-white border border-[#161B33] rounded px-3 py-2 w-full max-w-md"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block font-medium text-gray-700 mb-1">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="bg-white border border-[#161B33] rounded px-3 py-2 w-full max-w-md"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block font-medium text-gray-700 mb-1"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-white border border-[#161B33] rounded px-3 py-2 w-full max-w-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0D2C48] text-white py-3 rounded-lg hover:bg-[#091a2a] transition duration-300 ease-in-out"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;
