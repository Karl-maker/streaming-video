import { VideoCardParams } from "@/types/video.card.types";

const VideoCard = ({ src, progress, tag }: VideoCardParams) => {
    const isValidProgress = typeof progress === "number" && progress > 0 && progress <= 100;

    return (
        <div className="relative w-80 h-44 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-transparent dark:hover:border-white hover:shadow-md">
            {/* Video Thumbnail */}
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
            {isValidProgress && (
                <div className="absolute bottom-2 left-3 right-3 h-2 bg-gray-800/60 rounded-full">
                    <div
                        className="h-full bg-gradient-to-r from-white to-white rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
        </div>
    );
};

export default VideoCard;
