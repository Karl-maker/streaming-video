import { VideStripParams } from "@/types/video.strip.types";

const VideoStrip = ({ children, title }: VideStripParams) => {
  return (
    <div className="w-full">
      <h2 className="text-[#2C3A47] dark:font-semibold dark:text-white text-xl font-bold ml-5">
        {title}
      </h2>
      <div className="w-full overflow-x-auto scrollbar-hide p-3">
        <div className="flex gap-4 min-w-max">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VideoStrip;
