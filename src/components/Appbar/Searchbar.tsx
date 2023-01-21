import React from 'react'
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
    return (
        <div className="relative mx-auto text-gray-600 flex items-center justify-center">
            <input className="border-2 w-96 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search electronic" />
            <button type="submit" className="absolute right-0 px-4">
                <span className="text-gray-600 text-xl font-bold h-4 w-4 fill-current"><CiSearch /></span>
            </button>
        </div>
    )
}

export default Searchbar