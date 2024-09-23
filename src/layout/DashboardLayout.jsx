import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const handleMouseEnter = () => {
    if (!isSidebarOpen) setIsSidebarOpen(true); 
  };

  const handleMouseLeave = () => {
    if (isSidebarOpen) setIsSidebarOpen(false); 
  };

  return (
    <div className="flex w-full">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed transition-all duration-300 bg-white h-screen ${isSidebarOpen ? 'w-56' : 'w-16'
          } border-gray-300 overflow-y-auto`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>




      
      <div className={`w-${isSidebarOpen ? '56' : '16'} flex-shrink-0`} />

     
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
