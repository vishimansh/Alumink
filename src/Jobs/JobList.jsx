import React from "react";
import { useNavigate } from "react-router-dom";

const JobList = ({ jobs }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleJobSelect = (jobId) => {
    navigate(`/job-details/${jobId}`); // Navigate to job details page
  };

  const handlePostJob = () => {
    navigate("/post-job"); // Navigate to post job page
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 relative">
      <div className="max-w-7xl w-full">
        {/* Post Job Button */}
        <button
          onClick={handlePostJob}
          className="absolute top-8 right-8 bg-[#0D2C48] text-white px-6 py-3 rounded-lg text-lg font-semibold transform hover:bg-[#0A1C31] transition-all duration-300"
        >
          Post a Job
        </button>

        <h2 className="text-4xl font-bold text-[#0D2C48] text-center mb-12">
          Available Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-xl rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-[#0D2C48]">{job.title}</h3>
              <p className="text-[#0D2C48] text-lg mt-2">{job.company}</p>
              <p className="text-[#0D2C48] text-lg">{job.location}</p>
              <p className="text-gray-600 mt-4 text-base">{job.description}</p>
              <button
                onClick={() => handleJobSelect(job.id)}  // On click, navigate to job details page
                className="mt-6 bg-[#0D2C48] text-white px-6 py-3 rounded-lg text-lg font-semibold transform hover:bg-[#0A1C31] transition-all duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
