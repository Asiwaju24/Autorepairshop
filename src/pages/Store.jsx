import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import React from "react";
import { Home } from 'lucide-react';

const Store = () => {
  
    return (
        <>  
        <nav className='sticky top-17 z-50 backdrop-blur flex justify-between text-balance p-4 shadow-lg'>
            <h2 className='text-2xl font-bold flex items-center gap-2 hover:text-yellow-700 cursor-pointer'>Car Store</h2>
            <ul className="hidden md:flex gap-6 font-medium">
                <li className='hover:text-yellow-400 flex items-center gap-1 transition-colors cursor-pointer'>Spare Parts</li>
                <li className='hover:text-yellow-400 flex items-center gap-1 transition-colors cursor-pointer'>Sell</li>
                <li className='hover:text-yellow-400 flex items-center gap-1 transition-colors cursor-pointer'>Swap</li>
                <li className='hover:text-yellow-400 flex items-center gap-1 transition-colors cursor-pointer'>Buy</li>
            </ul>
        </nav>      
        <div className="flex flex-col mx-16 items-center justify-center my-24 gap-16">
            <h1 className='text-5xl font-extrabold text-red-700'>This Service Is Currently Not Available</h1>
            <Link className="hover:text-red-900 flex items-center gap-1 font-bold
            transition-colors shadow-2xl border p-3 rounded-md" to="/">
              <Home size={18} /> Back To Home
            </Link>
        </div>
        </>

  )
}

export default Store;
