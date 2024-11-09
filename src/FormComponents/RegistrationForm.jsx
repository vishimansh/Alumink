import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:shadow-xl ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-[#0D2C48] to-[#1E3A5F]">
    <h3 className="text-lg font-semibold text-white">{children}</h3>
  </div>
);

const CardContent = ({ children }) => (
  <div className="px-8 py-6 space-y-6">
    {children}
  </div>
);

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-600">
    {children}
  </label>
);

const Input = ({ type, name, value, onChange, placeholder, required }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm border-gray-300 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
    placeholder={placeholder}
    required={required}
  />
);

const Button = ({ type, className, children }) => (
  <button
    type={type}
    className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#0D2C48] to-[#1E3A5F] text-white font-semibold rounded-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-90 ${className}`}
  >
    {children}
  </button>
);

const RegistrationForm = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    graduationYear: '',
    course: '',
    company: '',
    position: '',
    experience: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F2EC] to-[#E0E6ED] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <h2>Join AlumLink</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <Label htmlFor="type">I am a:</Label>
                <div className="mt-2 flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="student"
                    checked={isStudent}
                    onChange={() => setIsStudent(true)}
                    className="focus:ring-[#0D2C48] h-4 w-4 text-[#0D2C48] border-gray-300"
                  />
                  <Label htmlFor="type" className="ml-3 text-sm text-gray-700">
                    Student
                  </Label>
                  <input
                    type="radio"
                    name="type"
                    value="alumni"
                    checked={!isStudent}
                    onChange={() => setIsStudent(false)}
                    className="focus:ring-[#0D2C48] h-4 w-4 text-[#0D2C48] border-gray-300 ml-6"
                  />
                  <Label htmlFor="type" className="ml-3 text-sm text-gray-700">
                    Alumni
                  </Label>
                </div>
              </div>

              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter a secure password"
                  required
                />
              </div>

              {isStudent && (
                <>
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                      type="number"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      placeholder="Enter your graduation year"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="course">Course of Study</Label>
                    <Input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="Enter your course of study"
                      required
                    />
                  </div>
                </>
              )}

              {!isStudent && (
                <>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Enter your job position"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Enter your years of experience"
                      required
                    />
                  </div>
                </>
              )}

              <div>
                <Button type="submit" className="w-full">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
