import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostJobForm = ({ onPostJob }) => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostJob(jobData);
    navigate("/Jobs"); // Redirect to job list after posting a job
  };

  return (
    <div className="bg-white p-6 px-16 rounded-lg  shadow-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            className="bg-white border border-[#161B33] rounded px-3 py-2 w-full max-w-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            className="bg-white border border-[#161B33] rounded px-3 py-2 w-full max-w-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            className="bg-white border border-[#161B33] rounded px-3 py-2 w-full max-w-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Job Description</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            className="bg-white border border-[#161B33] rounded px-3 py-2 w-full max-w-md"
            rows="4"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[#0D2C48] text-white px-6 py-3 rounded-lg text-lg font-semibold transform hover:bg-[#0A1C31] transition-all duration-300"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;
