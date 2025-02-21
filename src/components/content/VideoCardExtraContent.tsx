import { VideoCardExtraContentParams } from "@/types/video.card.types";

const VideoCardExtraContent = ({ title, time, details }: VideoCardExtraContentParams) => {
    return (
        <div className="text-gray-700 dark:text-gray-300">
            <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300 mt-1">{title}</h3>
            <p className="text-xs text-gray-400 dark:text-gray-500">{details}</p>
        </div>
    );
};

export default VideoCardExtraContent;
