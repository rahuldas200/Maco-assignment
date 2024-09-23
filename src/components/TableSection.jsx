import React from 'react'
import { useState } from 'react';

const tableData = [
    { id: 1, itemName: "Product A", quantity: 5, price: 20 },
    { id: 2, itemName: "Product B", quantity: 2, price: 40 },
    { id: 3, itemName: "Product C", quantity: 10, price: 15 },
];


export default function () {

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
        <div>
            <div className=' flex justify-between pr-8'>
                <div>
                    <p>Vender Activity history  </p>
                    <p>Hence you can track your venders perfomence every day    </p>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <button className='p-2 bg-blue-500 rounded-md'>Filter</button>
                    <button className=' p-2 bg-red-400 rounded-md'>Add customer</button>
                </div>
            </div>
            {/* Search Bars and Clear All Button Section */}
            <div className="mt-6 flex items-center space-x-4">
                {searchValues.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Search ${index + 1}`}
                        value={value}
                        onChange={(e) => handleSearchChange(index, e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 flex-1"
                    />
                ))}
                <button
                    onClick={handleClearAll}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Clear All
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto mt-8">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Item Name</th>
                            <th className="py-3 px-6 text-left">Quantity</th>
                            <th className="py-3 px-6 text-left">Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {tableData.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{item.itemName}</td>
                                <td className="py-3 px-6">{item.quantity}</td>
                                <td className="py-3 px-6">${item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></div>
    )
}
