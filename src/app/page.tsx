"use client"

import ContentBanner from "@/components/content/ContentBanner";
import VideoCard from "@/components/content/VideoCard";
import VideoStrip from "@/components/content/VideoStrip";
import VideoTallCard from "@/components/content/VideoTallCard";
import { ContentBannerPreviewInput } from "@/types/content.banner.types";

export default function Home() {
  const videos = [
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/naruto-poster.jpg",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/naruto-logo.png",
      landscapeSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/naruto-landscape.png",
      tag: 'NEW EPISODES'
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-poster.webp",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-logo.svg.png",
      landscapeSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-landscape.jpg",
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/thor-poster.jpg",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/thor-logo.webp",
      landscapeSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/thor-landscape.jpg",
    },
  ]

  const videosWatched = [
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/batman-landscape.jpg",
      progress: 50,
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/movies/naruto-landscape.jpg",
      progress: 20,
      tag: 'NEW EPISODE'
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
      details: '2024 • Action, Adventure • 2h 32m'
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
      details: '2024 • Action, Fantasy • 1h 52m'
    }
  ];
  

  return (
    <div className="">
      <main className="">
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
                return <VideoTallCard key={index} posterSrc={video.src} tag={video?.tag ?? undefined} logoSrc={video.logoSrc} landscapeSrc={video.landscapeSrc}/>
              })}
            </VideoStrip>
          </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
