import { VideoCardParams } from "@/types/video.card.types";

const VideoCard = ({ lowerBage, src, progress, tag }: VideoCardParams) => {
    const isValidProgress = typeof progress === "number" && progress > 0 && progress <= 100;

    return (
        <div className="relative w-80 h-44 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-transparent dark:hover:border-white hover:shadow-md">
            {/* Video Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={`Video ${src}`}
                loading="lazy"
                className="w-full h-full object-cover"
            />

            {/* Tag (Badge) */}
            {tag && (
                <div className="absolute top-2 right-2 bg-white text-black font-bold text-md font-semibold px-2 py-0.5 rounded-md shadow-md">
                    {tag}
                </div>
            )}


            {/* Progress Bar */}

            {/* Always render lowerBadge */}
            <div className="relative">
            {/* Always render lowerBadge */}
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

            {/* Render progress bar only if isValidProgress */}
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


         
        </div>
    );
};

export default VideoCard;
