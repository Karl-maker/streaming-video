'use client'

import { useRouter } from 'next/navigation';
import ContentBanner from "@/components/content/ContentBanner";
import VideoCard from "@/components/content/VideoCard";
import VideoStrip from "@/components/content/VideoStrip";
import VideoTallCard from "@/components/content/VideoTallCard";
import { ContentBannerPreviewInput } from "@/types/content.banner.types";
import { VideoCardExtraContentParams, VideoCardParams, VideoTallCardParams } from "@/types/video.card.types";
import VideoCardWithInfo from "@/components/content/VideoCardWithInfo";
export default function Home() {
  const router = useRouter();
  const handlePlay = () => {
    router.push('/play');
  }
  const videos : VideoTallCardParams[] = [
    {
      id: '1',
      posterSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/naruto-poster.jpg",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/naruto-logo.png",
      landscapeSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/naruto-landscape.png",
      tag: 'NEW EPISODES',
      detail: '2024 • Action, Fantasy • 25m',
      badges: [
        'PG-13', 'CC', 'HD'
      ],
      onWatchNow: () => {
        handlePlay()
      }
    },
    {
      id: '1',
      posterSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-poster.webp",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-logo.svg.png",
      landscapeSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-landscape.jpg",
      detail: '2023 • Action, Crime • 2hr 10m',
      badges: [
        '16+', 'CC', '4K'
      ],
      onWatchNow: () => {
        handlePlay()
      }
    },
    {
      id: '1',
      posterSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/thor-poster.jpg",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/thor-logo.webp",
      landscapeSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/thor-landscape.jpg",
      detail: '2017 • Action, Fantasy • 1hr 40m',
      badges: [
        'PG-13', 'CC', '4K'
      ],
      onWatchNow: () => {
        handlePlay()
      }
    },
  ]

  const videosWatched = [
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-landscape.jpg",
      progress: 50,
      onWatch: () => {
        handlePlay()
      }
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/naruto-landscape.jpg",
      progress: 20,
      tag: 'NEW EPISODE',
      onWatch: () => {
        handlePlay()
      }
    }
  ]

  const sportsVideos : (VideoCardExtraContentParams & VideoCardParams)[] = [
    {
      src: "https://images6.alphacoders.com/648/648506.jpg",
      progress: 98,
      lowerBage: 'LIVE',
      title: 'Chelsea vs Madrid',
      time: 'Started 2 hours ago',
      details: 'FIFA • 2025 • Premere League',
      onWatch: () => {
        handlePlay()
      }
    },
    {
      src: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-08/240804-Noah-Lyles-vl-410p-037efa.jpg",
      lowerBage: "Upcoming",
      title: `Men's 100m Finals`,
      time: 'Summer - July 23rd',
      details: '2025 • IAAF World Championships',
      onWatch: () => {
        handlePlay()
      }
    }
  ]


  const item: ContentBannerPreviewInput[] = [
    {
      id: "batman-movie-id",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-logo.svg.png",
      imageSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-landscape.jpg",
      description: "In Gotham City, a dark knight rises to combat crime and corruption. Join Batman as he battles his greatest foes and struggles to maintain justice in a world filled with chaos.",
      title: "Batman: The Dark Knight",
      previewSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/videos/videoplayback+(5).mp4",
      tags: [
        'PG-13', 'CC', '4K'
      ],
      details: '2024 • Action, Adventure • 2h 32m',
      onWatchNow: () => {
        handlePlay()
      }
    },
    {
      id: "thor-dark-world-id",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/thor-logo.webp",
      imageSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/thor-landscape.jpg",
      description: "Thor battles to save Earth and the Nine Realms from a dark force that predates the universe itself. Join him on a thrilling journey as he faces his most powerful enemy yet.",
      title: "Thor: The Dark World",
      previewSrc: 'https://video-caribbean.s3.us-east-2.amazonaws.com/public/videos/Alone+in+New+York+_+Short+Film+(2018).mp4',
      tags: [
        'PG-13', 'CC', '4K'
      ],
      details: '2024 • Action, Fantasy • 1h 52m',
      onWatchNow: () => {
        handlePlay()
      }
    }
  ];
  

  return (
    <div className="">
        <ContentBanner content={[...item]} />
          <div className="flex flex-col gap-4 mt-2">
            <VideoStrip 
              title="Continue Watching"
            >
              {videosWatched.map((video, index) => {
                return <VideoCard key={index} src={video.src} tag={video.tag} progress={video.progress} />
              })}
            </VideoStrip>

            <VideoStrip 
              title="New Releases"
            >
              {videos.map((video, index) => {
                return <VideoTallCard {...video} key={index}/>
              })}
            </VideoStrip>

            <VideoStrip 
              title="Sports Today"
            >
              {sportsVideos.map((video, index) => {
                return <VideoCardWithInfo {...video} key={index} />
              })}
            </VideoStrip>
          </div>
    </div>
  );
}
