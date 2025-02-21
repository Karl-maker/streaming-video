import { VideStripParams } from "@/types/video.strip.types";
import VideoCard from "./VideoCard";

const VideoStrip = ({ videos, title }: VideStripParams) => {
  return (
    <div className="w-full">
      <h2 className="text-[#2C3A47] dark:font-semibold dark:text-white text-xl font-bold ml-5">
        {title}
      </h2>
      <div className="w-full overflow-x-auto scrollbar-hide p-3">
        <div className="flex gap-4 min-w-max">
          {videos.map((video, index) => (
            <VideoCard src={video.src} key={index} progress={video.progress} tag={video.tag}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoStrip;
