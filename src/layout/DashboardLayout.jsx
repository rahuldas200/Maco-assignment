import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar starts collapsed

  const handleMouseEnter = () => {
    if (!isSidebarOpen) setIsSidebarOpen(true); // Expand sidebar on hover
  };

  const handleMouseLeave = () => {
    if (isSidebarOpen) setIsSidebarOpen(false); // Collapse sidebar when not hovered
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar - Fixed and scrollable */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed transition-all duration-300 bg-white h-screen ${isSidebarOpen ? 'w-56' : 'w-18'
          } border-gray-300 overflow-y-auto`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>




      {/* Space for Sidebar in Main Content */}
      <div className={`w-${isSidebarOpen ? '56' : '16'} flex-shrink-0`} />

      {/* Main Content Section */}
      <main className="flex flex-col w-full">
        <div className=" bg-white sticky top-0 right-0 ">
          <Header />
        </div>
        <div className='border-none'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
