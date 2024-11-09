import React from 'react';

const MobileNavLink = ({ href, text }) => (
  <a href={href} className="text-[#FFFFFF] block px-3 py-2 text-base font-medium">
    {text}
  </a>
);

export default MobileNavLink;
