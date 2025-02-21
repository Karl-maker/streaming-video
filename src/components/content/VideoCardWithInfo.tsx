import { VideoCardExtraContentParams, VideoCardParams } from "@/types/video.card.types";
import VideoCard from "./VideoCard";
import VideoCardExtraContent from "./VideoCardExtraContent";

const VideoCardWithInfo = (video: VideoCardExtraContentParams & VideoCardParams) => {
    return <div>
        <VideoCard src={video.src} tag={video.tag} progress={video.progress} lowerBage={video.lowerBage}/>
        <div className=" mt-2">
        <VideoCardExtraContent title={video.title} time={video.time} details={video.details} />
        </div>
    </div>
}

export default VideoCardWithInfo;