'use client'

import { VideoCardParams } from "@/types/video.card.types";
import Image from "next/image";
import { useState } from "react";
import SkeletonLoader from "../loading/Skeleton";

const VideoCard = ({ lowerBage, src, progress, tag, onWatch }: VideoCardParams) => {
    const isValidProgress = typeof progress === "number" && progress > 0 && progress <= 100;
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleFinishLoading = () => {
        setIsImageLoaded(true);
    }

    return (
        <div className="relative w-80 h-44 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-transparent dark:hover:border-white hover:shadow-md" onClick={() => {
            if(onWatch) onWatch();
        }}>
            {!isImageLoaded && <SkeletonLoader />}
            <Image
                src={src}
                alt={`Video ${src}`}
                className={`w-full h-full object-cover ${!isImageLoaded ? 'collapse' : ''}`}
                onLoad={handleFinishLoading}
                layout="fill"
                quality={100}
            />

            {tag && (
                <div className="absolute top-2 right-2 bg-white text-black font-bold text-md font-semibold px-2 py-0.5 rounded-md shadow-md">
                    {tag}
                </div>
            )}

            {lowerBage && (
                <div
                    className={`absolute text-white font-bold text-xs font-semibold px-2 py-0.5 rounded-md transition-all duration-300
                        ${isValidProgress ? "bottom-5 left-3" : "bottom-2 left-2"}
                        ${lowerBage === "LIVE" ? "bg-red-600" : "bg-blue-600"}
                    `}
                >
                    {lowerBage}
                </div>
            )}

            {isValidProgress && (
                <div className="absolute bottom-2 left-3 right-3 h-2 bg-gray-800/60 rounded-full">
                    <div
                        className={`h-full rounded-full transition-all duration-300 ${
                            lowerBage === "LIVE" ? "bg-red-600" : "bg-gradient-to-r from-white to-white"
                        }`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
        </div>

    );
};

export default VideoCard;
