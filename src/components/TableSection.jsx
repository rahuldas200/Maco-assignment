import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { IoFilterOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";// Import the ProgressBar component
import { IoIosSearch } from "react-icons/io";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";

const tableData = [
    { id: 1, companyName: "Blox", performance: 28, description: "AI Content Creation App", lastChecked: "July 15, 2026", status: "Paid" },
    { id: 2, companyName: "Brotha Platforms", performance: 12, description: "AI Billing And Invoicing App", lastChecked: "July 8, 2026", status: "Failed" },
    { id: 3, companyName: "Layerz Softwares", performance: 71, description: "Data Aggregation App", lastChecked: "July 1, 2026", status: "Pending" },
    { id: 4, companyName: "Linez Technologies", performance: 20, description: "Social Media App", lastChecked: "June 28, 2026", status: "Paid" },
    { id: 5, companyName: "Planet X", performance: 30, description: "Rocket Management App", lastChecked: "June 11, 2026", status: "Paid" },
];

export default function VendorActivity() {
    const [searchValues, setSearchValues] = useState(["", "", ""]);

    const handleSearchChange = (index, value) => {
        const newValues = [...searchValues];
        newValues[index] = value;
        setSearchValues(newValues);
    };

    const handleClearAll = () => {
        setSearchValues(["", "", ""]);
    };

    return (
        <div className=" bg-white border border-gray-400 rounded-xl">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b border-gray-300 px-3 py-2">
                <div>
                    <h2 className=" mt-1 text-lg font-semibold items-center flex gap-2">Vendor Activity History
                        <div className='bg-violet-200 p-1 text-xs  rounded-md text-violet-700'>116 Total</div>
                    </h2>
                    <p className="text-gray-600 text-sm">Here you can track your vendors' performance every day.</p>
                </div>
                <div className="flex gap-3">
                    <div className=' flex gap-2 items-center border border-gray-400 rounded-2xl px-3 py-'>
                        <IoFilterOutline className='text-sm' />
                        <button className=" text-gray-700  transition duration-200 text-sm">Filter</button>
                    </div>
                    <div className=' flex gap-1 items-center border border-gray-400 rounded-2xl px-3 bg-violet-500 text-gray-50'>
                        <GoPlus />
                        <button className="p-2   rounded-md text-gray-50 transition duration-200 text-sm">Add Customer</button>
                    </div>
                </div>
            </div>

            {/* Search Bars and Clear All Button Section */}
            <div className="flex  justify-between items-center lg:flex-row lg:items-center lg:space-x-4 mt-3 px-3">
                <div className='flex gap-2 justify-between w-[50%]'>
                    <div className="  lg:mb-0 relative">
                        <input
                            type="text"
                            placeholder="Search Order"
                            value={searchValues[0]}
                            onChange={(e) => handleSearchChange(0, e.target.value)}
                            className="border border-gray-300 p-1 px-3 rounded-3xl  w-full text-sm"
                        />
                        <div className='absolute top-2.5 right-3'>
                            <IoIosSearch className='text-base text-gray-500' />
                        </div>

                    </div>
                    <div className=" lg:w-1/3  lg:mb-0 relative">
                        <select
                            value={searchValues[1]}
                            onChange={(e) => handleSearchChange(1, e.target.value)}
                            className="border border-gray-300 p-1.5 pl-8 rounded-3xl  w-full text-gray-500 text-sm"
                        >
                            <option value="" className='text-gray-400'>Paid</option>
                            <option value="Paid">Paid</option>
                            <option value="Failed">Failed</option>
                        </select>
                        <div className='absolute top-2.5 left-3'>
                            <PiCurrencyDollarSimpleBold className='text-base text-gray-500' />
                        </div>
                    </div>
                    <div className=" lg:w-1/3  lg:mb-0 relative">
                        <select
                            value={searchValues[2]}
                            onChange={(e) => handleSearchChange(2, e.target.value)}
                            className="border border-gray-300 p-1.5 pl-8 rounded-3xl  w-full text-gray-500 text-sm"
                        >
                            <option value="">All Category</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                        </select>
                        <div className='absolute top-2.5 left-3'>
                            <MdOutlineCategory className='text-base text-gray-500' />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-auto">
                    <div className=' px-3 py-1 flex items-center gap-2 rounded-3xl border border-gray-400'>
                        <IoMdClose />
                        <button
                            onClick={handleClearAll}
                            className="text-sm"
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto mt-3">
                <table className="min-w-full bg-white ">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Company Name</th>
                            <th className="py-3 px-6 text-left">Performance</th>
                            <th className="py-3 px-6 text-left">Description</th>
                            <th className="py-3 px-6 text-left">Last Checked</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {tableData.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{item.companyName}</td>
                                <td className="py-3 px-6 flex gap-3 justify-center  items-center">
                                    {/* Small, rounded blue progress bar */}
                                    <ProgressBar
                                        now={item.performance}
                                        style={{ height: '8px' }}
                                        variant="primary"
                                        className="rounded-full w-3/4"
                                    />
                                    <div>{item.performance}%</div>
                                </td>
                                <td className="py-3 px-6">{item.description}</td>
                                <td className="py-3 px-6">{item.lastChecked}</td>
                                <td className="py-3 px-6">
                                    <div className='p-1  bg-green-500 text-white rounded-full text-center'>
                                        {item.status}
                                    </div>
                                </td>
                                <td className="py-3 px-6"><CiMenuKebab/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
