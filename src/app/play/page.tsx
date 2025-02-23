import VideoPlayer from "@/components/player/VideoPlayer";

export default function Play() {
    return <div className='w-screen h-screen'>
        <VideoPlayer src='https://video-caribbean.s3.us-east-2.amazonaws.com/public/videos/Alone+in+New+York+_+Short+Film+(2018).mp4' title="Alone In NewYork" shortDescription='Short movie from Alan Film School'/>
    </div>
}