import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import React from 'react';
import { RiHomeLine } from "react-icons/ri";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { ImPower } from "react-icons/im";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Profile from '../assets/man.png';
import icon from '../assets/letter-s.png';

export default function Sidebar({ isSidebarOpen }) {
  const navLinks = [
    { name: 'Home', path: '/', icon: <RiHomeLine /> },
    { name: 'Graph', path: '/graph', icon: <GiNetworkBars /> },
    { name: 'User', path: '/users', icon: <FaRegUser /> },
    { name: 'Calender', path: '/calender', icon: <CiCalendar /> },
    { name: 'Reports', path: '/reports', icon: <ImPower /> },
    { name: 'Notification', path: '/notification', icon: <IoMdNotificationsOutline /> },
  ];

  // Get the current location
  const location = useLocation();

  return (
    <div className={`text-black h-screen flex pb-4 flex-col justify-between gap-3 border-r-[1px] border-gray-300 bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-56' : 'w-16'}`}>
      {/* Sidebar Header */}
      <div className='flex flex-col gap-4 py-3 px-3 mt-2'>
        <div className='flex'>
          {isSidebarOpen ? (
            <div className="flex items-center gap-2 ml-2">
              <img width={32} src={icon} alt="Dashboard Icon" />
              <div className='font-semibold'>Dashboard</div>
            </div>
          ) : (
            <div className='h-8 w-8 flex items-center ml-2'>
              <img  src={icon} alt="Dashboard Icon" />
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col gap-2 mt-1'>
          {navLinks.map((link) => {
            // Check if the current path matches the link path
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center ${isSidebarOpen ? 'gap-3 pl-3' : 'justify-center'} py-2 hover:bg-slate-200 hover:cursor-pointer rounded-lg transition-all duration-200 no-underline ${isActive ? 'text-blue-500' : 'text-gray-700'}`} // Apply blue color if active
                style={{ textDecoration: 'none' }}
              >
                <div className={`p-2 bg-gray-100 rounded-full text-xl ${isActive ? 'bg-blue-100' : ''}`}> {/* Optional: Highlight the icon background */}
                  {link.icon}
                </div>
                {isSidebarOpen && <div className={`font-normal ${isActive ? 'font-semibold' : ''}`}>{link.name}</div>} {/* Bold active link name */}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sidebar Footer (Settings and Profile) */}
      <div className={`flex items-center justify-between px-4 ${isSidebarOpen ? "" : "flex-col gap-3"}`}>
        <div>
          <IoSettingsOutline className='text-xl' />
        </div>
        <div className='w-8 h-8 rounded-full'>
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
}
