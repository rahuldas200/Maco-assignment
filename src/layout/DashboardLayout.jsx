import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar starts open

  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen w-full">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`transition-all duration-300 bg-white ${isSidebarOpen ? 'w-56' : 'w-16'} border-r-2 border-black`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} /> {/* Pass isSidebarOpen to Sidebar */}
      </div>
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 pr-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
