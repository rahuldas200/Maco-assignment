import React from 'react';
import { CiMenuKebab } from 'react-icons/ci'; 
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoTrendingUp } from "react-icons/io5";

export default function YourComponent({ data }) {
    return (
        <div className="bg-white border border-opacity-30 border-black p-6 rounded-lg shadow-lg mx-4 mb-6">
            {/* Header with Icon and Menu */}
            <div className="flex justify-between items-center mb-4">
                <div className="p-3 bg-blue-100 text-blue-500 rounded-full">
                    {data.icon}
                </div>
                <div className="text-gray-500 cursor-pointer">
                    <CiMenuKebab />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-800 mb-2">
                    <p>{data.cardName}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold text-gray-900">
                        {data.userAmount}
                    </p>
                    <div className="flex items-center gap-2">
                        {/* Check if pasentageParManthVisiter is provided */}
                        {data.pasentageParManthVisiter !== undefined && data.pasentageParManthVisiter !== null ? (
                            data.pasentageParManthVisiter < 0 ? (
                                <div className="flex items-center text-red-500">
                                    <FaArrowTrendDown className="mr-1" />
                                    <p>{data.pasentageParManthVisiter}% vs last month</p>
                                </div>
                            ) : (
                                <div className="flex items-center text-green-500">
                                    <IoTrendingUp className="mr-1" />
                                    <p>{data.pasentageParManthVisiter}% vs last month</p>
                                </div>
                            )
                        ) : (
                            <p className="text-gray-400">No data available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
