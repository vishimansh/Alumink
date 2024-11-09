import React from 'react';

const NavLink = ({ href, text }) => (
  <a href={href} className="text-[#FFFFFF] px-3 py-2 text-sm font-medium">
    {text}
  </a>
);

export default NavLink;
