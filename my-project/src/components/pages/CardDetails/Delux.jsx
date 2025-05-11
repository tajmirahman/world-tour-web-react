import React from 'react';

const Delux = () => {
    return (
        <div className="max-w-sm bg-white shadow-md rounded-xl p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Standard package</h2>

            <div className="border-t border-purple-600 w-16"></div>

            <div className="flex justify-between text-sm text-gray-700">
                <div>
                    <p className="font-semibold">Valid from</p>
                    <p className="bg-blue-100 text-blue-800 px-2 py-1 mt-1 rounded w-max text-xs font-medium">
                        01 Feb 2022
                    </p>
                </div>
                <div>
                    <p className="font-semibold">Valid till</p>
                    <p className="text-gray-600 text-xs mt-1">15 Feb 2022</p>
                </div>
            </div>

            <div>
                <h3 className="text-md font-semibold text-gray-800 mt-2 mb-1">
                    Package details
                </h3>
                <div className="border-t border-purple-600 w-16 mb-2"></div>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>Buffet breakfast as per the itinerary</li>
                    <li>Visit eight villages showcasing Polynesian culture</li>
                    <li>Complimentary Camel safari, Bonfire</li>
                    <li>All toll tax, parking, fuel, and driver allowances</li>
                    <li>Comfortable and hygienic vehicle</li>
                </ul>
            </div>

            <div>
                <h3 className="text-md font-semibold text-gray-800">Price</h3>
                <div className="mt-1 text-gray-600 text-sm">
                    <span className="line-through text-gray-400 mr-2">$35,500</span>
                    <span className="text-purple-600 font-bold text-lg">$30,500</span>
                    <span className="text-sm text-gray-500"> /Per person</span>
                </div>
            </div>

            <button className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 border-0 text-white mt-2">
                Select offer
            </button>
        </div>
    );
};

export default Delux;