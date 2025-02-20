"use client"

import { FaPlay } from "@react-icons/all-files/fa/FaPlay";

const WatchNowButton = ({ onClick }: { onClick: () => void; }) => {
    return (
        <button 
            id='watch-now-button'
            className="flex items-center bg-gray-500 text-white text-xl font-semibold py-4 px-7 rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300"
            onClick={onClick}
            >
            <FaPlay className="mr-2" /> 
            Watch Now
        </button>
    );
};

export default WatchNowButton;
