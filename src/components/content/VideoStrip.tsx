import { VideStripParams } from "@/types/video.strip.types";

const VideoStrip = ({ videos, title }: VideStripParams) => {
  return (
    <div className="w-full">
      <h2 className="text-[#2C3A47] dark:font-semibold dark:text-white text-xl font-bold ml-5">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {videos.map((video, index) => (
          
            <img
                key={index}
                src={video.src}
                alt={`Video ${index}`}
                loading="lazy"
                className="w-80 h-44 rounded-xl object-cover flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-transparent dark:hover:border-white hover:shadow-md"
            />
         
        ))}
      </div>
    </div>
  );
};

export default VideoStrip;
