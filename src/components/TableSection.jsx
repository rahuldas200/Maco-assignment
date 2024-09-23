import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

// API URL
const API_URL = "https://demo-backend.durbin.co.in/get-all-dashboard-data";

export default function VendorActivity() {
    const [searchValues, setSearchValues] = useState(["", "", ""]);
    const [data, setData] = useState([]); // Store data from API
    const [isDateInput, setIsDateInput] = useState(false); // Flag for date input
    const [filteredData, setFilteredData] = useState([]); // Filtered table data

    // Fetch data from API
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((json) => {
                setData(json.data);
                setFilteredData(json.data); // Set the initial filtered data to be the same as the fetched data
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Convert "Month Day, Year" format to a valid Date object
    const convertToDate = (dateStr) => {
        const dateObj = new Date(dateStr);
        return isNaN(dateObj.getTime()) ? null : dateObj; // Return null if invalid date
    };

    // Handle input change for search values
    const handleSearchChange = (index, value) => {
        const newValues = [...searchValues];
        newValues[index] = value;
        setSearchValues(newValues);

        console.log(value);

        // Detect if the first input is a valid date format (e.g. YYYY-MM-DD)
        const isDate = !isNaN(Date.parse(value));
        if (index === 0 && isDate) {
            console.log(true)
            setIsDateInput(true);
        } else if (index === 0 && value === "") {
            setIsDateInput(false);
        }

        // Filter data based on input
        filterTableData(newValues);
    };

    // Filter the table data based on the search criteria
    const filterTableData = (values) => {

        console.log("va", values);
        const filtered = data.filter((item) => {
            const matchesSearch = item.companyName.toLowerCase().includes(values[0].toLowerCase()) ||
                item.description.toLowerCase().includes(values[0].toLowerCase());
            const matchesStatus = values[1] === "" || item.status === values[1];
            const matchesCategory = values[2] === "" || item.details.toLowerCase().includes(values[2].toLowerCase());

            // Date filtering logic
            if (isDateInput && values[0]) {
                const inputDate = new Date(values[0]);
                const itemDate = convertToDate(item.lastChecked);

                if (itemDate && inputDate) {
                    // Compare only the date part (ignoring time)
                    return matchesSearch && matchesStatus && matchesCategory &&
                        itemDate.toISOString().split('T')[0] === inputDate.toISOString().split('T')[0];
                } else {
                    return false;
                }
            }

            return matchesSearch && matchesStatus && matchesCategory;
        });

        setFilteredData(filtered);
    };

    // Handle clear all button
    const handleClearAll = () => {
        setSearchValues(["", "", ""]);
        setFilteredData(data); // Reset the table data
        setIsDateInput(false); // Reset date input flag
    };

    return (
        <div className="bg-white border border-gray-400 rounded-xl">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b border-gray-300 px-3 py-2">
                <div>
                    <h2 className="mt-1 text-lg font-semibold flex gap-2 items-center">
                        Vendor Activity History
                        <div className='bg-violet-200 p-1 text-xs rounded-md text-violet-700'>
                            {filteredData.length} Total
                        </div>
                    </h2>
                    <p className="text-gray-600 text-sm">Track your vendors' performance.</p>
                </div>
                <div className="flex gap-3">
                    <button className="text-gray-700 text-sm border border-gray-400 rounded-2xl px-3">Filter</button>
                    <div className='flex gap-1 items-center border border-gray-400 rounded-2xl px-3 bg-violet-500 text-gray-50'>
                        <GoPlus />
                        <button className="p-2 text-sm">Add Customer</button>
                    </div>
                </div>
            </div>

            {/* Search and Clear All Section */}
            <div className="flex justify-between p-2 mt-3">
                <div className='w-[60%] flex gap-4'>
                    <div className=" w-1/3">
                        <input
                            type={isDateInput ? "date" : "text"}
                            placeholder="Search Order"
                            value={searchValues[0]}
                            onChange={(e) => handleSearchChange(0, e.target.value)}
                            className="border border-gray-300 p-1 px-10 rounded-3xl w-full text-sm" // Increased padding to prevent overlap
                        />
                        {/* Adjust icon position */}
                        {/* <div className='absolute top-1/2 right-3 transform -translate-y-1/2'>
                            <IoIosSearch className='text-base text-gray-500' />
                        </div> */}
                    </div>

                    <div className="  w-1/3">
                        <select
                            value={searchValues[1]}
                            onChange={(e) => handleSearchChange(1, e.target.value)}
                            className="border border-gray-300 p-1.5 pl-10 rounded-3xl w-full text-gray-500 text-sm" // Increased padding to prevent overlap
                        >
                            <option value="">All Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                            <option value="Failed">Failed</option>
                        </select>
                        {/* Adjust icon position */}
                        {/* <div className='absolute top-1/2 left-3 transform -translate-y-1/2'>
                            <PiCurrencyDollarSimpleBold className='text-base text-gray-500' />
                        </div> */}
                    </div>

                    <div className="w-1/3">
                        <select
                            value={searchValues[2]}
                            onChange={(e) => handleSearchChange(2, e.target.value)}
                            className="border border-gray-300 p-1.5 pl-10 rounded-3xl w-full text-gray-500 text-sm" // Increased padding to prevent overlap
                        >
                            <option value="">All Categories</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                        </select>
                        {/* Adjust icon position */}
                        {/* <div className='absolute top-1/2 left-3 transform -translate-y-1/2'>
                            <MdOutlineCategory className='text-base text-gray-500' />
                        </div> */}
                    </div>
                </div>


                <div className="flex items-center gap-2 rounded-3xl px-3 py-1 border border-gray-400">
                    <IoMdClose />
                    <button onClick={handleClearAll} className="text-sm  ">Clear All</button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto mt-3">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                            <th className="py-3 px-6 text-left">
                                <input type='checkbox' />
                            </th>
                            <th className="py-3 px-6 text-left">Company Name</th>
                            <th className="py-3 px-6 text-left">Performance</th>
                            <th className="py-3 px-6 text-left">Description</th>
                            <th className="py-3 px-6 text-left">Last Checked</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                        {filteredData.map((item) => (
                            <tr key={item.companyName} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className='py-3 px-6 '>
                                    <input type="checkbox" className='rounded-lg' />
                                </td>
                                <td className="py-3 px-6 ">
                                    <div className='text-base font-medium'>{item.companyName}</div>
                                    <div>{item.website}</div>
                                </td>
                                <td className="py-3 px-6 flex gap-3 items-center">
                                    <ProgressBar
                                        now={item.performance}
                                        style={{ height: '8px' }}
                                        variant="primary"
                                        className="rounded-full w-3/4 bg-violet-500 "
                                    />
                                    <div>{item.performance}%</div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className='text-base font-medium'>{item.description}</div>
                                    <div>{item.details}</div>
                                </td>
                                <td className="py-3 px-6">{item.lastChecked}</td>
                                <td className="py-3 px-6">
                                    <div className={`p-1 ${item.status === "Paid" ? 'bg-green-500' : item.status === "Pending" ? 'bg-yellow-500' : 'bg-red-500'} text-white rounded-full text-center`}>
                                        {item.status}
                                    </div>
                                </td>
                                <td className="py-3 px-6"><CiMenuKebab /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
