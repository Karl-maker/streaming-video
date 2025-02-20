import { VideStripParams } from "@/types/video.strip.types";

const VideoStrip = ({ videos, title }: VideStripParams) => {
  return (
    <div className="w-full">
      <h2 className="text-black-800 dark:text-white text-xl font-semibold m-4 ml-5">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {videos.map((video, index) => (
          
            <img
                key={index}
                src={video.src}
                alt={`Video ${index}`}
                loading="lazy"
                className="w-80 h-44 rounded-lg object-cover flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-transparent hover:border-gray-900 dark:hover:border-white hover:shadow-xl"
            />
         
        ))}
      </div>
    </div>
  );
};

export default VideoStrip;
