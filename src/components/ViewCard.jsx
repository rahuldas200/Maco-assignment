import React from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoTrendingUp } from "react-icons/io5";

export default function YourComponent({ data }) {
    return (
        <div className="bg-white border p-3 rounded-lg shadow-md h-40 w-full ">
            {/* Header with Icon and Menu */}
            <div className="flex justify-between items-center mb-4">
                {/* Icon with rounded background */}
                <div className="p-3 bg-blue-100 text-blue-500 rounded-full">
                    {data.icon}
                </div>
                {/* Menu icon (three dots) */}
                <div className="text-gray-500 cursor-pointer">
                    <CiMenuKebab />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col">
                {/* Card Name */}
                <div className="text-sm font-semibold text-gray-500 text- mb-1">
                    {data.cardName}
                </div>

                {/* User Amount and Percentage */}
                <div className="flex justify-between items-center mt-1">
                    {/* User Amount */}
                    <p className="text-2xl font-bold text-gray-900">
                        {data.userAmount}
                    </p>

                    {/* Monthly Percentage (positive/negative trend) */}
                    <   div className="flex  items-center">
                        {/* Show percentage change if available */}
                        {data.pasentageParManthVisiter !== undefined && data.pasentageParManthVisiter !== null ? (
                            data.pasentageParManthVisiter < 0 ? (
                                <>
                                    <div className="flex  text-red-500 ">
                                        <FaArrowTrendDown className="mr-1" />

                                        <p className="text-sm font-medium">
                                        {Math.abs(data.pasentageParManthVisiter)}% vs last month
                                    </p>
                                    </div>
                                   
                                </>
                            ) : (
                                <div className="flex  text-green-500">
                                    <IoTrendingUp className="mr-1" />
                                    <p className="text-sm font-medium">
                                        {data.pasentageParManthVisiter}% vs last month
                                    </p>
                                </div>
                            )
                        ) : (
                            <p className="text-gray-400 text-sm">No data available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
