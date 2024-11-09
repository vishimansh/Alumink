import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetails = ({ jobs, onApply }) => {
  const { jobId } = useParams(); // Get jobId from URL
  const job = jobs.find((job) => job.id === parseInt(jobId)); // Find the job based on jobId
  const navigate = useNavigate(); // Hook for navigation

  if (!job) {
    return <div className="text-center text-lg text-gray-500">Job not found</div>; // Handle case if jobId is invalid
  }

  const handleApply = () => {
    onApply(job);
    navigate(`/job-application/${job.id}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7]">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl w-full flex flex-col items-center">
        <button
          onClick={() => navigate("/Jobs")} // Navigate back to job list
          className="text-[#0D2C48] text-lg mb-6 self-start"
        >
          &larr; Back to Job List
        </button>
        <h2 className="text-4xl font-bold text-[#0D2C48] mb-4 text-center">{job.title}</h2>
        <p className="text-[#0D2C48] text-lg font-semibold text-center mb-2">{job.company}</p>
        <p className="text-[#0D2C48] text-md text-center mb-4">{job.location}</p>
        <p className="text-gray-600 text-base text-center mb-6 leading-relaxed">{job.description}</p>
        <button
          onClick={handleApply}
          className="bg-[#0D2C48] text-white text-lg px-6 py-3 rounded-lg font-semibold transform hover:bg-[#0A1C31] transition-all duration-300"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
