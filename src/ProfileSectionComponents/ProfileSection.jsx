import React, { useState } from 'react';
import { User, Briefcase, Book, ArrowRight } from 'lucide-react';

const ProfileSection = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    graduationYear: 2020,
    course: 'Computer Science',
    company: 'Acme Inc.',
    position: 'Software Engineer',
    experience: 3
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(user);
  };

  return (
    <div className="min-h-screen bg-[#F9F2EC] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-extrabold text-[#0D2C48] mb-8 text-center">Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* General Information */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 mr-2 text-[#0D2C48]" />
              <h2 className="text-xl font-semibold text-[#0D2C48]">General Information</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0D2C48]">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:ring-[#0D2C48] focus:border-[#0D2C48]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0D2C48]">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:ring-[#0D2C48] focus:border-[#0D2C48]"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button type="submit" className="bg-[#0D2C48] text-white py-2 px-6 rounded-md flex items-center hover:bg-opacity-90">
                    Save Changes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Education Information */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Book className="h-6 w-6 mr-2 text-[#0D2C48]" />
              <h2 className="text-xl font-semibold text-[#0D2C48]">Education</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-medium text-[#0D2C48]">Graduation Year</label>
                  <input
                    type="number"
                    name="graduationYear"
                    value={user.graduationYear}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:ring-[#0D2C48] focus:border-[#0D2C48]"
                    placeholder="Enter your graduation year"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-[#0D2C48]">Course of Study</label>
                  <input
                    type="text"
                    name="course"
                    value={user.course}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:ring-[#0D2C48] focus:border-[#0D2C48]"
                    placeholder="Enter your course of study"
                    required
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button type="button" className="bg-[#0D2C48] text-white py-2 px-6 rounded-md flex items-center hover:bg-opacity-90">
                    Update Education
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Professional Information */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 mr-2 text-[#0D2C48]" />
              <h2 className="text-xl font-semibold text-[#0D2C48]">Professional</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#0D2C48]">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={user.company}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:ring-[#0D2C48] focus:border-[#0D2C48]"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-[#0D2C48]">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={user.position}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:ring-[#0D2C48] focus:border-[#0D2C48]"
                    placeholder="Enter your job position"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-[#0D2C48]">Years of Experience</label>
                  <input
                    type="number"
                    name="experience"
                    value={user.experience}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:ring-[#0D2C48] focus:border-[#0D2C48]"
                    placeholder="Enter your years of experience"
                    required
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button type="button" className="bg-[#0D2C48] text-white py-2 px-6 rounded-md flex items-center hover:bg-opacity-90">
                    Update Professional Info
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
