import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./HomeComponents/Home";
import RegistrationForm from "./FormComponents/RegistrationForm";
import ErrorBoundary from "./FormComponents/Errorboundary";
import ProfileSection from "./ProfileSectionComponents/ProfileSection";
import NetworkingSection from "./NetworkingComponents/NetworkingSection";
import DonationForm from "./Donation/DonationForm";
import ConfirmationPage from "./Donation/ConfirmationPage";
import EventsList from "./Events/EventsList";
import EventDetails from "./Events/EventDetails"; 
import EventRegistrationForm from "./Events/EventRegistrationForm"; 
import CreateEventForm from "./Events/CreateEventForm"; 
import JobList from "./Jobs/JobList"; // Import the JobList component
import JobDetails from "./Jobs/JobDetails"; // Import JobDetails component
import PostJobForm from "./Jobs/PostJobForm"; // Import PostJobForm
import JobApplicationForm from "./Jobs/JobApplicationForm"; // Import JobApplicationForm
import JobConfirmationPage from "./Jobs/JobConfirmationPage"; // Import JobConfirmationPage

const handleDonation = (donationData) => {
  console.log("Donation data submitted:", donationData);
};

function App() {
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Conference", location: "San Francisco, USA", date: "2024-11-15", description: "A conference about the latest in tech." },
    { id: 2, name: "Art Workshop", location: "New York, USA", date: "2024-12-01", description: "A workshop for aspiring artists." },
    { id: 3, name: "Music Festival", location: "London, UK", date: "2024-12-10", description: "An outdoor music festival." },
  ]);
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "New York, USA", description: "Developing web interfaces." },
    { id: 2, title: "Backend Developer", company: "Dev Studio", location: "London, UK", description: "Working on server-side logic." },
    { id: 3, title: "Full Stack Developer", company: "Innovative Solutions", location: "San Francisco, USA", description: "Handling both frontend and backend development." },
  ]);

  const [jobApplication, setJobApplication] = useState(null);

  const handleApply = (job) => {
    setJobApplication(job);
  };

  const handleSubmitApplication = (formData) => {
    console.log("Application submitted:", formData);
    setJobApplication(null); // Reset after submission
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/form",
      element: <RegistrationForm />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/Profile",
      element: <ProfileSection />,
    },
    {
      path: "/Network",
      element: <NetworkingSection />,
    },
    {
      path: "/Donation",
      element: <DonationForm onDonate={handleDonation} />,
    },
    {
      path: "/Donation/Confirmation",
      element: <ConfirmationPage />,
    },
    {
      path: "/Events",
      element: <EventsList events={events} />,
    },
    {
      path: "/Events/:eventId",
      element: <EventDetails />,
    },
    {
      path: "/event-register",
      element: <EventRegistrationForm />,
    },
    {
      path: "/create-event", 
      element: <CreateEventForm onCreate={() => {}} />, 
    },
    {
      path: "/Jobs",
      element: <JobList jobs={jobs} />,
    },
    {
      path: "/job-details/:jobId",  
      element: <JobDetails jobs={jobs} onApply={handleApply} />,
    },
    {
      path: "/job-application/:jobId",
      element: <JobApplicationForm job={jobApplication} onApply={handleSubmitApplication} onBack={() => setJobApplication(null)} />,
    },
    {
      path: "/job-confirmation",  
      element: <JobConfirmationPage jobDetails={jobApplication} onBackToJobs={() => setJobApplication(null)} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
