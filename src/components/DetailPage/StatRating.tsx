import React from 'react'

const StatRating = () => {
    return (
        <div className='py-5'>
            <p className="text-start text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
            <div className="flex items-center mt-4">
                <span className="text-sm font-medium text-black dark:text-white">5 star</span>
                <div className="w-72 h-5 mx-1 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5 bg-yellow-400 rounded" style={{ width: "70%" }}></div>
                </div>
                <span className="text-sm font-medium text-black dark:text-white">70%</span>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-sm font-medium text-black dark:text-white">4 star</span>
                <div className="w-72 h-5 mx-1 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5 bg-yellow-400 rounded" style={{ width: "17%" }}></div>
                </div>
                <span className="text-sm font-medium text-black dark:text-white">17%</span>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-sm font-medium text-black dark:text-white">3 star</span>
                <div className="w-72 h-5 mx-1 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5 bg-yellow-400 rounded" style={{ width: "8%" }}></div>
                </div>
                <span className="text-sm font-medium text-black dark:text-white">8%</span>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-sm font-medium text-black dark:text-white">2 star</span>
                <div className="w-72 h-5 mx-1 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5 bg-yellow-400 rounded" style={{ width: "4%" }}></div>
                </div>
                <span className="text-sm font-medium text-black dark:text-white">4%</span>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-sm font-medium text-black dark:text-white">1 star</span>
                <div className="w-72 h-5 mx-1 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5 bg-yellow-400 rounded" style={{ width: "1%" }}></div>
                </div>
                <span className="text-sm font-medium text-black dark:text-white">1%</span>
            </div>
        </div>
    )
}

export default StatRating