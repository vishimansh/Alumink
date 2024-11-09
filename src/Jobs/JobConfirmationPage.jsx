import React from "react";

const JobConfirmationPage = ({ jobDetails, onBackToJobs }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md text-center border-t-4 border-secondary">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-secondary mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-secondary mb-4">Application Submitted!</h2>
        <p className="text-gray-600 text-lg mb-6">
          Thank you, <span className="font-semibold">{jobDetails.name}</span>, for applying for the position of{" "}
          <span className="font-semibold">{jobDetails.title}</span>. We’ll review your application and contact you soon!
        </p>
        <button
          onClick={onBackToJobs}
          className="mt-4 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition duration-300 ease-in-out"
        >
          Back to Jobs
        </button>
      </div>
    </div>
  );
};

export default JobConfirmationPage;
