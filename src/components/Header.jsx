import React from 'react'
import { HiOutlineCloudUpload } from "react-icons/hi";


export default function Header() {
    return (
        <div className="p-4  min-h-14 flex justify-between items-center">
            <div className="text-xl font-bold">Customer overview</div>
            <div className="flex items-center space-x-4">
                <div className='flex gap-2 justify-center bg-blue-500 items-center px-4 py-1 rounded-2xl'>
                    <HiOutlineCloudUpload className=' text-xl'/>
                    <button className=" text-white px-2 py-1 rounded">
                        Export
                    </button>

                </div>
                <div className='min-w-6 min-h-6 p-4 rounded-full bg-slate-600'>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
