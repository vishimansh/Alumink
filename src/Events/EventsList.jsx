import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const EventsList = ({ events }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); 

  // Filter events based on search query
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEventClick = (event) => {
    // Navigate to EventDetails page with event data as state
    navigate(`/Events/${event.id}`, { state: { event } });
  };

  const handleCreateEventClick = () => {
    // Navigate to the page for creating a new event
    navigate("/create-event");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      <button
        onClick={handleCreateEventClick}
        className="absolute top-6 right-6 bg-[#0D2C48] text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Create Your Own Event
      </button>

      <div className="p-6 w-full max-w-6xl">
        <h2 className="text-4xl font-extrabold text-[#0D2C48] mb-8 text-center">
          Upcoming Events
        </h2>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events by name..."
            className="w-full sm:w-96 px-6 py-3 text-lg text-[#0D2C48] border border-[#0D2C48] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D2C48] transition duration-300 ease-in-out"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-lg text-gray-500 col-span-full">
              No events found.
            </p>
          ) : (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/600x400" // Placeholder for event image
                    alt={event.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 bg-[#0D2C48] bg-opacity-80 text-white text-xs px-2 py-1 rounded-full">
                    {event.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#0D2C48] mb-3">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <button
                    className="bg-[#0D2C48] text-white px-6 py-2 rounded-lg font-semibold transform hover:scale-105 transition duration-300 ease-in-out"
                    onClick={() => handleEventClick(event)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
