"use client";

import { ContentBannerParams } from "@/types/content.banner.types";
import { useRef, useState } from "react";
import WatchNowButton from "./WatchNowButton";
import BubbleSelector from "./BubbleSelector";
import AudioButton from "./AudioButton";
import SkeletonLoader from "../loading/Skeleton";
import Image from "next/image";

const ContentBanner = ({
    content,
}: ContentBannerParams) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = (): void => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleFinishLoading = () => {
        setIsImageLoaded(true);
    }

    if(typeof content  === 'undefined') return <></>;

    return (
        <div id='content-banner-container'>
            <div id="content-banner-title-details" className="relative w-full">
                <div id='content-banner-audio-button' className='absolute top-20 right-10 z-10 '>
                    {content[selectedIndex]?.previewSrc && <AudioButton isMuted={isMuted} toggleMute={toggleMute} />}
                </div>
                
                <div className="relative w-full h-[70vh] overflow-hidden fade-mask">
                    {content[selectedIndex]?.previewSrc ? (
                        <>
                            <video 
                                ref={videoRef}
                                src={content[selectedIndex].previewSrc} 
                                autoPlay 
                                muted 
                                loop 
                                className={`w-full h-full object-cover ${isVideoLoaded ? '' : 'hidden'}`} 
                                onLoadedData={() => setIsVideoLoaded(true)} 
                                playsInline 
                                disableRemotePlayback
                            />
                            {(!isVideoLoaded && (content[selectedIndex])) && (<>
                                {!isImageLoaded && <SkeletonLoader />}
                                <Image 
                                    id="content-banner-main-img"
                                    src={content[selectedIndex]?.imageSrc ?? ""}
                                    alt={content[selectedIndex]?.title ?? "No Banner Image"} 
                                    className={`w-full h-full object-cover ${!isImageLoaded ? 'collapse' : ''}`}
                                    onLoad={handleFinishLoading}
                                    layout="fill"
                                    quality={100}
                                />
                                </>
                            )}
                        </>
                    ) : (
                        <>{content[selectedIndex]?.imageSrc && 
                            <>
                                {!isImageLoaded && <SkeletonLoader />}
                                <Image 
                                    src={content[selectedIndex]?.imageSrc ?? ""}
                                    alt={content[selectedIndex]?.title ?? "No Banner Image"} 
                                    className={`w-full h-full object-cover ${!isImageLoaded ? 'collapse' : ''}`}
                                    onError={() => {}}
                                    onLoad={handleFinishLoading}
                                    layout="fill"
                                    quality={100}
                                />
                            </>
                        }
                        </>
                    )}
                </div>

                <div className="absolute bottom-4 left-4 z-0 max-w-[50vw] md:max-w-[40vw]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={content[selectedIndex]?.logoSrc ?? ""} 
                            alt={`${content[selectedIndex]?.title ?? 'Unknown'} Logo`}
                            className="w-full h-auto object-contain mb-3 max-w-[50vw] md:max-w-[40vw]" 
                            loading="lazy"
                        />
                 
                        {content[selectedIndex]?.tags && <div className="flex gap-1 mb-2">
                            {content[selectedIndex]?.tags?.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-2 py-1 text-sm font-large rounded-md bg-white dark:bg-gray-900 text-black dark:text-white dark:text-gray-300 backdrop-blur-md self-center"
                            >
                                {tag}
                            </span>
                            ))}

                        </div>}

                        {content[selectedIndex]?.details && <div className='mb-5'>
                                <p className="text-xs font-large">{content[selectedIndex]?.details}</p>
                        </div>}

                        <div className="hidden md:block">
                            <p className="text-xl font-medium overflow-hidden text-ellipsis whitespace-pre-line" style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2
                            }}>
                                {content[selectedIndex]?.description ?? ""}
                            </p>
                        </div>
                </div>
            </div>

            <div id='content-banner-action-section' className='p-4'>
                {content[selectedIndex] && <WatchNowButton onClick = {
                    () : void => {
                        content[selectedIndex]?.onWatchNow?.(content[selectedIndex].id);
                    }
                }/>}
            </div>

            <div id='content-banner-selection-status' className='mx-auto flex justify-center items-center'>
                <div className=''>
                    <BubbleSelector 
                        selectedIndex={selectedIndex}
                        bubbles={content.length} 
                        onSelected={function (i: number): void {
                            setSelectedIndex(i);
                        }  
                        } /> 
                </div>  
            </div>
        </div>
    );
};

export default ContentBanner;
