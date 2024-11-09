import React, { useState } from "react";

const JobApplicationForm = ({ job, onBack }) => {
  if (!job) {
    return <div className="text-center text-secondary mt-8">Loading...</div>;
  }

  const [formData, setFormData] = useState({ name: "", email: "", resume: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <JobConfirmationPage
        jobDetails={{ ...formData, title: job.title }}
        onBackToForm={() => setIsSubmitted(false)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <button className="text-secondary mb-4" onClick={onBack}>
        &larr; Back to Job Details
      </button>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-secondary mb-6">
          Apply for {job.title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-secondary font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary text-secondary"
              required
            />
          </div>
          <div>
            <label className="block text-secondary font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary text-secondary"
              required
            />
          </div>
          <div>
            <label className="block text-secondary font-semibold">Resume (URL)</label>
            <input
              type="text"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary text-secondary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0D2C48] text-white py-3 rounded font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

const JobConfirmationPage = ({ jobDetails, onBackToForm }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#0D2C48]">Application Submitted!</h2>
        <p className="text-secondary mb-4">
          Thank you, {jobDetails.name}, for applying for the position of {jobDetails.title}.
        </p>
        <button
          onClick={onBackToForm}
          className="bg-[#0D2C48] text-white py-3 px-6 rounded font-semibold hover:bg-opacity-90 transition duration-300"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default JobApplicationForm;
