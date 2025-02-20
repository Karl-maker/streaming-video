"use client";

import { ContentBannerParams, ContentBannerPreviewInput } from "@/types/content.banner.types";
import { useRef, useState } from "react";
import WatchNowButton from "./WatchNowButton";
import BubbleSelector from "./BubbleSelector";
import AudioButton from "./AudioButton";

const ContentBanner = ({
    content,
}: ContentBannerParams) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = (): void => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    if(typeof content  === 'undefined') return <></>;

    return (
        <div id='content-banner-container'>
            <div id="content-banner-title-details" className="relative w-full">
                <div id='content-banner-audio-button' className='absolute top-10 right-10 z-10 '>
                    {content[selectedIndex]?.previewSrc && <AudioButton isMuted={isMuted} toggleMute={toggleMute} />}
                </div>
                
                <div className="relative w-full h-[40vh] sm:h-[40vh] md:h-[70vh] overflow-hidden fade-mask">
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
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img 
                                    id="content-banner-main-img"
                                    src={content[selectedIndex]?.imageSrc ?? ""}
                                    alt={content[selectedIndex]?.title ?? "No Banner Image"} 
                                    className="w-full h-full object-cover"
                                />
                                </>
                            )}
                        </>
                    ) : (
                        <>{content[selectedIndex]?.imageSrc && <img 
                            src={content[selectedIndex]?.imageSrc ?? ""}
                            alt={content[selectedIndex]?.title ?? "No Banner Image"} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={() => {}}
                        />}</>
                    )}
                </div>

                <div className="absolute bottom-4 left-4 z-0 max-w-[30vw]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={content[selectedIndex]?.logoSrc ?? ""} 
                            alt={`${content[selectedIndex]?.title ?? 'Unknown'} Logo`}
                            className="w-full h-auto object-contain mb-3 max-w-[30vw] md:max-w-[20vw]" 
                        />
                        <div>
                            <p className="text-xl font-medium hidden lg:block"> 
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
