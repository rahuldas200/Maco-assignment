import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap'; // Import the ProgressBar component

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
        <div className="p-6 bg-gray-50">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-semibold">Vendor Activity History</h2>
                    <p className="text-gray-600">Here you can track your vendors' performance every day.</p>
                </div>
                <div className="flex gap-3">
                    <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">Filter</button>
                    <button className="p-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-200">Add Customer</button>
                </div>
            </div>

            {/* Search Bars and Clear All Button Section */}
            <div className="flex  justify-between items-center lg:flex-row lg:items-center lg:space-x-4 mb-6">
                <div className='flex gap-5 '>
                    <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                        <input
                            type="text"
                            placeholder="Search Order"
                            value={searchValues[0]}
                            onChange={(e) => handleSearchChange(0, e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                        <select
                            value={searchValues[1]}
                            onChange={(e) => handleSearchChange(1, e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        >
                            <option value="">All Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Failed">Failed</option>
                        </select>
                    </div>
                    <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                        <select
                            value={searchValues[2]}
                            onChange={(e) => handleSearchChange(2, e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        >
                            <option value="">All Category</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                        </select>
                    </div>
                </div>
                <div className="w-full lg:w-auto">
                    <button
                        onClick={handleClearAll}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 w-full lg:w-auto"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto mt-8">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Company Name</th>
                            <th className="py-3 px-6 text-left">Performance</th>
                            <th className="py-3 px-6 text-left">Description</th>
                            <th className="py-3 px-6 text-left">Last Checked</th>
                            <th className="py-3 px-6 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {tableData.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{item.companyName}</td>
                                <td className="py-3 px-6 flex gap-3 justify-center items-center">
                                    {/* Small, rounded blue progress bar */}
                                    <ProgressBar
                                        now={item.performance}
                                        style={{ height: '8px' }}
                                        variant="primary"
                                        className="rounded-full w-3/4"
                                    />
                                    <p>{item.performance}%</p>
                                </td>
                                <td className="py-3 px-6">{item.description}</td>
                                <td className="py-3 px-6">{item.lastChecked}</td>
                                <td className="py-3 px-6">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
