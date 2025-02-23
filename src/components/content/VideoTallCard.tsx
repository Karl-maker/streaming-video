"use client";

import { VideoTallCardParams } from "@/types/video.card.types";
import WatchNowButton from "./WatchNowButton";
import { useState } from "react";
import Image from "next/image";
import SkeletonLoader from "../loading/Skeleton";

const VideoTallCard = ({ id, posterSrc, logoSrc, tag, landscapeSrc, detail, badges, onWatchNow }: VideoTallCardParams) => {
    const [isWideImageLoaded, setIsWideImageLoaded] = useState(false);
    const [isPortraitImageLoaded, setIsPortraitImageLoaded] = useState(false);

    const handleWideImageLoad = () => {
        setIsWideImageLoaded(true);
    }

    const handlePortraitImageLoad = () => {
        setIsPortraitImageLoaded(true);
    }

    return (
        <div className="relative w-80 h-145 rounded-xl overflow-hidden transition-width duration-300 ease-in-out group sm:hover:w-[50rem] border-2 border-transparent hover:shadow-lg">
            {landscapeSrc && (
                <>
                    {!isWideImageLoaded && <SkeletonLoader />}
                    <Image
                        style={
                            {
                                zIndex: '0'
                            }
                        }
                        src={landscapeSrc}
                        alt="Background"
                        layout="fill"
                        quality={100}
                        onLoad={handleWideImageLoad}
                        className={`absolute w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hidden sm:block ${!isWideImageLoaded ? 'collapse' : ''}`}
                    />
                </>
            )}
            {!isPortraitImageLoaded && <SkeletonLoader />}
            <Image
                style={{
                    zIndex: '-1'
                }}
                src={posterSrc}
                alt={`Video ${posterSrc}`}
                layout="fill"
                quality={100}
                onLoad={handlePortraitImageLoad}
                className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70 sm:group-hover:opacity-100 ${!isPortraitImageLoaded ? 'collapse' : ''}`}
            />

            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

            {tag && (
                <div className="absolute top-3 right-3 bg-white text-black font-semibold text-sm px-3 py-1 rounded-md shadow-md">
                    {tag}
                </div>
            )}

            {/* Watch Now Button - hidden on small screens */}
            <div className="absolute bottom-7 left-7 w-[40%] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hidden sm:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={logoSrc} 
                    alt="Overlay"
                    loading="lazy"
                    className="w-full h-auto object-contain mb-4" 
                />
                {badges && <div className="flex gap-1 mb-2">
                    {badges?.map((badge, index) => (
                        <span 
                            key={index} 
                            className="px-2 py-1 text-sm font-large rounded-md bg-white dark:bg-gray-900 text-black dark:text-white dark:text-gray-300 backdrop-blur-md self-center"
                        >
                            {badge}
                        </span>
                    ))}

                </div>}
                {detail && <div className='mb-5'>
                        <p className="text-xs font-large text-white">{detail}</p>
                </div>}
                <WatchNowButton onClick={function (): void {
                    if (onWatchNow) onWatchNow(id)
                }} />
            </div>
        </div>
    );
};

export default VideoTallCard;
