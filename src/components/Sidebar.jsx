import { Link } from 'react-router-dom';
import React from 'react';
import { FaHome, FaUser, FaChartBar } from 'react-icons/fa';
import icon from '../assets/letter-s.png'
import { RiHomeLine } from "react-icons/ri";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { ImPower } from "react-icons/im";
import { IoMdNotificationsOutline } from "react-icons/io";
import Profile from '../assets/man.png'
import { IoSettingsOutline } from "react-icons/io5";


export default function Sidebar({ isSidebarOpen }) {
  const navLinks = [
    { name: 'Home', path: '/', icon: <RiHomeLine /> },
    { name: 'Graph', path: '/profile', icon: <GiNetworkBars /> },
    { name: 'User', path: '/reports', icon: <FaRegUser /> },
    { name: 'Calender', path: '/reports', icon: <CiCalendar /> },
    { name: 'Reports', path: '/reports', icon: <ImPower /> },
    { name: 'Notification', path: '/reports', icon: <IoMdNotificationsOutline /> },
  ];

  return (
    <div className={`text-black h-screen flex pb-4 flex-col justify-between gap-3 border-r-[1px] border-gray-300 bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-56' : 'w-16'}`}>
      <div className=' flex flex-col gap-4 py-3  px-3 mt-6' >
        <div className=' flex'>
          {
            isSidebarOpen ? (
              <div className="flex items-center gap-2 ml-2">
                <img width={32} src={icon} alt="" />
                <div className='font-semibold'>Dashboad</div>
              </div>
            ) : (<div className='h-8 w-8 flex items-center ml-2'>
              <img src={icon} />
            </div>)
          }
        </div>

        <div className=' flex flex-col gap-3 mt-3'> 
          {
            navLinks.map((link) => (
              <>
                {
                  isSidebarOpen ? (
                    <div className='flex gap-1 items-center ml-1 hover:bg-slate-200 hover:cursor-pointer rounded-lg '>
                      <div className='p-2  rounded-full'>
                        <div className=''>
                          {link.icon}
                        </div>
                      </div>
                      <div className='font-normal' >{link.name}</div>
                    </div>
                  ) : (
                    <div className='flex justify-center'>
                      <div className='p-2 bg-slate-200 rounded-full'>
                        <div className=''>{link.icon}</div>
                      </div>
                    </div>
                  )
                }
              </>
            ))}
        </div>
      </div>

      <div  className={`flex items-center justify-between px-4 ${isSidebarOpen? "" : " flex-col gap-3"}`} >
          <div className=''>
            <IoSettingsOutline className='text-xl' />
          </div>

          <div>
            <img className=' max-w-8 mt-1' src={Profile} alt="" />
          </div>
        </div>

    </div>
  );
}
