import React from 'react';

const StatsSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-12 bg-white">
    {[
      { label: 'Alumni', value: '5000+' },
      { label: 'Job Postings', value: '1000+' },
      { label: 'Annual Events', value: '50+' },
      { label: 'Countries', value: '30+' },
    ].map(({ label, value }) => (
      <div key={label} className="flex flex-col items-center space-y-2">
        <div className="text-4xl font-bold text-[#0D2C48]">{value}</div>
        <div className="text-gray-600 text-sm font-medium">{label}</div>
      </div>
    ))}
  </div>
);

export default StatsSection;
