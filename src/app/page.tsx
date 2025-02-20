"use client"

import ContentBanner from "@/components/content/ContentBanner";
import VideoStrip from "@/components/content/VideoStrip";
import { ContentBannerPreviewInput } from "@/types/content.banner.types";

export default function Home() {
  const videos = [
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-cottonbro-7792259.jpg"
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-lkloeppel-466685.jpg"
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-cottonbro-7792259.jpg"
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-lkloeppel-466685.jpg"
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-cottonbro-7792259.jpg"
    },
    {
      src: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-lkloeppel-466685.jpg"
    }
  ]
  const item : ContentBannerPreviewInput[] = [
    {
      id: "32hd02y-1udh1-1d32fwe",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/logos/heineken-14-logo-svgrepo-com-cropped.svg",
      imageSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-lkloeppel-466685.jpg",
      description: "Documentary on nature in its most primal and dangerious form. Come with us today as we look into the life of the brown bear and understand the battles this preditor faces.",
      title: "Beer Factories"
    },
    {
      id: "32hd02y-1udh1-1d32ewwe",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/logos/forbes-logo-svgrepo-com-cropped.svg",
      imageSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-cottonbro-7792259.jpg",
      description: "Documentary on nature in its most primal and dangerious form. Come with us today as we look into the life of the brown bear and understand the battles this preditor faces.",
      title: "Ninja and Samurai",
      previewSrc: 'https://video-caribbean.s3.us-east-2.amazonaws.com/public/videos/Alone+in+New+York+_+Short+Film+(2018).mp4'
    },
    {
      id: "32hd02dy-1udh1-1d32ewwe",
      logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/logos/forbes-logo-svgrepo-com-cropped.svg",
      imageSrc: "",
      description: "Documentary on nature in its most primal and dangerious form. Come with us today as we look into the life of the brown bear and understand the battles this preditor faces.",
      title: "Unknown",
      previewSrc: ''
    },
  ]

  return (
    <div className="">
      <main className="">
        <ContentBanner content={[...item]} />

          <VideoStrip 
            videos={[...videos, ...videos, ...videos]} 
            title="Featured"
          />

          <VideoStrip 
            videos={[...videos, ...videos, ...videos]} 
            title="Documentation"
          />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
