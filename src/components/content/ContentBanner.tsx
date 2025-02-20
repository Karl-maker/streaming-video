"use client";

import { ContentBannerParams } from "@/types/content.banner.types";
import { useState } from "react";
import WatchNowButton from "./WatchNowButton";
import BubbleSelector from "./BubbleSelector";

const ContentBanner = ({
    content,
}: ContentBannerParams) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <div id='content-banner-container'>
            <div id="content-banner-title-details" className="relative w-full">
                <div className="relative w-full max-h-[60vh] overflow-hidden fade-mask">
                    {content[selectedIndex]?.previewSrc ? (
                        <>
                            <video 
                                src={content[selectedIndex].previewSrc} 
                                autoPlay 
                                muted 
                                loop 
                                className={`w-full h-full object-cover ${isVideoLoaded ? '' : 'hidden'}`} 
                                onLoadedData={() => setIsVideoLoaded(true)} 
                            />
                            {!isVideoLoaded && ( 
                                <img 
                                    src={content[selectedIndex]?.imageSrc ?? ""}
                                    alt={content[selectedIndex]?.title ?? "No Banner Image"} 
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </>
                    ) : (
                        <img 
                            src={content[selectedIndex]?.imageSrc ?? ""}
                            alt={content[selectedIndex]?.title ?? "No Banner Image"} 
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                <div className="absolute bottom-4 left-4 max-w-[40vw] max-h-[30vw]">
                    <img 
                        src={content[selectedIndex]?.logoSrc ?? ""} 
                        alt={`${content[selectedIndex]?.title ?? 'Unknown'} Logo`}
                        className="w-full h-auto object-contain mb-3" 
                    />
                    <div>
                        <p className="text-xl font-medium"> 
                            {content[selectedIndex]?.description ?? ""}
                        </p>
                    </div>
                </div>
            </div>

            <div id='content-banner-action-section' className='p-4'>
                <WatchNowButton onClick = {
                    () => {
                        if(content[selectedIndex] && content[selectedIndex]?.onWatchNow) (content[selectedIndex] as any).onWatchNow(content[selectedIndex].id);
                    }
                }/>
            </div>

            <div id='content-banner-selection-status' className='justify-self-center'>
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
