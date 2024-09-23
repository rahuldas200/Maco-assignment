import React from 'react'
import { useState } from 'react';
import { HiOutlineCloudUpload } from "react-icons/hi";
import Profile from '../assets/man.png'

const data = [
    { id: 1, name: "Overview" },
    { id: 2, name: "General" },
    { id: 3, name: "List view" },
    { id: 4, name: "Grid view" },
    { id: 5, name: "Normal view" }
];


export default function Header() {
    const [selectedItem, setSelectedItem] = useState();
    const handleCLick = (id) => {
        console.log(id);
        setSelectedItem(id);
    };

    return (
        <div className=" flex flex-col gap- px-6 pt-3 border-b border-gray-200">
            <div className='flex justify-between items-center '>
                <div className='text-2xl font-bold'>
                    <p>Customer Overview</p>
                </div>
                <div className=" flex gap-2 items-center font-medium ">
                    <div className=' flex items-center px-2.5 py-1 gap-2 rounded-2xl bg-violet-600 text-white'>
                        <HiOutlineCloudUpload className='' />
                        <button className="text-sm cursor-pointer">
                            Export
                        </button>

                    </div>
                    <div className=''>
                        <img className=' max-w-8' src={Profile} alt="" />
                    </div>
                </div>
            </div>

            <header className='flex  gap-6'>
                {data.map((item) => (
                    <div
                        onClick={() => handleCLick(item.id)}
                        key={item.id}
                        className={`text-base p-1 font-semibold ${selectedItem === item.id ? 'border-b-2 border-blue-500' : ''}`}>
                        {item.name}
                    </div>
                ))}
            </header>
        </div>
    );
}
