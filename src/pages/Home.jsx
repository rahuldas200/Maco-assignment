import React, { useState } from 'react';
import ViewCard from '../components/ViewCard';
import { IoMdCash } from "react-icons/io";
import TableSection from '../components/TableSection';



const CartData = [
    {
        id: 1,
        icon: <IoMdCash />,
        cardName: "Total Customers",
        userAmount: "21,877",
        pasentageParManthVisiter: "18",
    },
    {
        id: 2,
        icon: <IoMdCash />,
        cardName: "Total Members",
        userAmount: 871,
        pasentageParManthVisiter: "-88",
    },
    {
        id: 3,
        icon: <IoMdCash />,
        cardName: "Active Users",
        userAmount: 28,
    }
];

const tableData = [
    { id: 1, itemName: "Product A", quantity: 5, price: 20 },
    { id: 2, itemName: "Product B", quantity: 2, price: 40 },
    { id: 3, itemName: "Product C", quantity: 10, price: 15 },
];

export default function Home() {
    
    const [searchValues, setSearchValues] = useState(["", "", ""]);

    return (
        <div className='p-4 border-none'>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {CartData.map((data, index) => (
                        <ViewCard key={index} data={data} />
                    ))}
                </div>

                <div className=' mt-4 '>
                    <TableSection/>
                </div>
            </div>
        </div>
    );
}
