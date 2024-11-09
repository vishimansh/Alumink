import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const alumniData = [
  // Sample alumni data (add more data to ensure 8 popular alumni display correctly)
  { id: 1, name: 'John Doe', batch: '2020', image: 'https://via.placeholder.com/150', achievements: 'Started a tech startup.' },
  { id: 2, name: 'Jane Smith', batch: '2019', image: 'https://via.placeholder.com/150', achievements: 'Author of a bestselling book.' },
  { id: 3, name: 'Alice Brown', batch: '2020', image: 'https://via.placeholder.com/150', achievements: 'Developed an innovative app.' },
  { id: 4, name: 'Robert Wilson', batch: '2021', image: 'https://via.placeholder.com/150', achievements: 'Founded a charity organization.' },
  { id: 5, name: 'Emily Johnson', batch: '2021', image: 'https://via.placeholder.com/150', achievements: 'Launched a popular podcast.' },
  { id: 6, name: 'Michael Lee', batch: '2022', image: 'https://via.placeholder.com/150', achievements: 'Created a viral blog.' },
  { id: 7, name: 'Laura Kim', batch: '2018', image: 'https://via.placeholder.com/150', achievements: 'Innovated a community project.' },
  { id: 8, name: 'Daniel Zhang', batch: '2019', image: 'https://via.placeholder.com/150', achievements: 'Won an international award.' },
  // Add more alumni data if needed
];

const popularAlumni = alumniData.slice(0, 8); // Limit to the first 8 alumni for the default display

const NetworkingHub = () => {
  const [searchName, setSearchName] = useState('');
  const [searchBatch, setSearchBatch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (searchName) {
      const resultByName = alumniData.filter(alumni => alumni.name.toLowerCase().includes(searchName.toLowerCase()));
      setResults(resultByName);
    } else if (searchBatch) {
      const resultByBatch = alumniData.filter(alumni => alumni.batch === searchBatch);
      setResults(resultByBatch);
    } else {
      setResults([]);
    }
  };


  return (
    <div className="p-8 bg-[#F3F4F6] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#0D2C48]">Networking Hub</h1>
      
      {/* Search Section */}
      <div className="flex flex-col items-center mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => { setSearchName(e.target.value); setSearchBatch(''); }}
          className="p-3 w-full max-w-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D2C48]"
        />
        <input
          type="text"
          placeholder="Search by batch (e.g., 2020)"
          value={searchBatch}
          onChange={(e) => { setSearchBatch(e.target.value); setSearchName(''); }}
          className="p-3 w-full max-w-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D2C48]"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-[#0D2C48] text-white rounded-md hover:bg-[#09334a] transition-all duration-200 ease-in-out"
        >
          Search
        </button>
      </div>

      {/* Results Section */}
      <div>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.slice(0, 8).map((alumni) => (
              <div key={alumni.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out">
                <img src={alumni.image} alt={alumni.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-center">{alumni.name}</h2>
                <p className="text-center text-gray-500">Batch of {alumni.batch}</p>
                <p className="text-gray-700 mt-2 text-center">{alumni.achievements}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Popular Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularAlumni.map((alumni) => (
                <div key={alumni.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out">
                  <img src={alumni.image} alt={alumni.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-center">{alumni.name}</h2>
                  <p className="text-center text-gray-500">Batch of {alumni.batch}</p>
                  <p className="text-gray-700 mt-2 text-center">{alumni.achievements}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NetworkingHub;
