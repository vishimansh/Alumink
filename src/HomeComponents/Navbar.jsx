import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';  // Import the User icon
import { useNavigate } from 'react-router-dom';  // Import useNavigate for routing
import NavLink from './NavLink';
import MobileNavLink from './MobileNavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();  // Initialize navigate function

  // Function to handle profile logo click
  const handleProfileClick = () => {
    navigate('/Profile');  // Redirect to the Profile page
  };
  
  const handlenetworkClick = () => {
    navigate('/Network');
  };
  return (
    <nav className="bg-[#0D2C48] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center"> {/* Added items-center for vertical centering */}
          <div className="flex items-center">
            <span className="text-[#FFFFFF] text-2xl font-bold">Alum<span className="text-[#F9F2EC]">Link</span></span>
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              <NavLink href="#" text="Home" />
              <NavLink href="/Donation" text="Donation" />
              <NavLink  href="/Network" text="Networking" />
              <NavLink href="/Jobs" text="Jobs" />
              <NavLink href="/Events" text="Events" />
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <button className="px-4 py-2 text-[#0D2C48] bg-[#F9F2EC] rounded-md">Sign In</button>
            <button className="px-4 py-2 text-[#FFFFFF] border-2 border-[#FFFFFF] rounded-md">Sign Up</button>
          </div>

          {/* Profile Logo Button - Centered vertically */}
          <button 
            onClick={handleProfileClick}  // Redirect to Profile page on click
            className="md:flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#0D2C48] hover:bg-gray-100 transition-all duration-200 ease-in-out"
          >
            <User className="h-6 w-6" />
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#FFFFFF] p-2 rounded-md">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0D2C48]">
          <MobileNavLink href="#" text="Home" />
          <MobileNavLink href="#" text="Donation" />
          <MobileNavLink href="#" text="Networking" />
          <MobileNavLink href="#" text="Jobs" />
          <MobileNavLink href="#" text="Events" />
          <button className="w-full px-4 py-2 text-[#0D2C48] bg-[#F9F2EC]">Sign In</button>
          <button className="w-full px-4 py-2 text-[#FFFFFF] border-2 border-[#FFFFFF]">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
