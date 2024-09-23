import React, { useState } from 'react';
import ViewCard from '../components/ViewCard';
import { IoMdCash } from "react-icons/io";
import TableSection from '../components/TableSection';

const data = [
    { id: 1, name: "Overview" },
    { id: 2, name: "General" },
    { id: 3, name: "List view" },
    { id: 4, name: "Grid view" },
    { id: 5, name: "Normal view" }
];

const CartData = [
    {
        id: 1,
        icon: <IoMdCash />,
        cardName: "Total Customers",
        userAmount: 21877,
        pasentageParManthVisiter: "18",
    },
    {
        id: 2,
        icon: <IoMdCash />,
        cardName: "Total Members",
        userAmount: 21877,
        pasentageParManthVisiter: "-88",
    },
    {
        id: 3,
        icon: <IoMdCash />,
        cardName: "Active Users",
        userAmount: 21877,
    }
];

const tableData = [
    { id: 1, itemName: "Product A", quantity: 5, price: 20 },
    { id: 2, itemName: "Product B", quantity: 2, price: 40 },
    { id: 3, itemName: "Product C", quantity: 10, price: 15 },
];

export default function Profile() {
    const [selectedItem, setSelectedItem] = useState();
    const [searchValues, setSearchValues] = useState(["", "", ""]);

    const handleCLick = (id) => {
        console.log(id);
        setSelectedItem(id);
    };

  

  

    return (
        <>
            <header className='flex gap-6 border-b-2 border-opacity-20 border-black'>
                {data.map((item) => (
                    <div
                        onClick={() => handleCLick(item.id)}
                        key={item.id}
                        className={`text-base p-1 font-semibold ${selectedItem === item.id ? 'border-b-2 border-blue-500' : ''}`}>
                        {item.name}
                    </div>
                ))}
            </header>

            <main>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    {CartData.map((data, index) => (
                        <ViewCard key={index} data={data} />
                    ))}
                </div>

                <div>
                    <TableSection/>
                </div>
            </main>
        </>
    );
}
