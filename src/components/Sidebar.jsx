import { Link } from 'react-router-dom';
import React from 'react';
// Example of an icon set, feel free to replace these with actual icons if you use a library
import { FaHome, FaUser, FaChartBar } from 'react-icons/fa'; // Assuming you're using Font Awesome

export default function Sidebar({ isSidebarOpen }) {
  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
    { name: 'Reports', path: '/reports', icon: <FaChartBar /> },
  ];

  return (
    <div className={`text-black h-screen p-6 flex flex-col gap-3 border-r-2 border-black bg-white ${isSidebarOpen ? 'w-56' : 'w-16'}`}>
      {isSidebarOpen ? (
        <div className="text-2xl font-bold mb-6">Dashboard</div>
      ) : (
        // <div className="text-2xl font-bold mb-6 text-center">D</div> // Optional small title when collapsed
        <></>
      )}
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-200 ${
            !isSidebarOpen ? 'justify-center' : ''
          }`}
        >
          {/* Show only icon if the sidebar is closed */}
          <span className="text-xl">{link.icon}</span>
          {isSidebarOpen && <span>{link.name}</span>} {/* Show text only when sidebar is open */}
        </Link>
      ))}
    </div>
  );
}
