"use client";

import { VideoPlayerParams } from "@/types/video.player.types";
import React, { useRef, useState, useEffect, useCallback } from "react";
import secondsToMinutes from "@/utils/seconds.to.minutes.util";

const VideoPlayer = ({ src, title, shortDescription }: VideoPlayerParams) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState({ elapsed: 0, duration: 0 });
  const [showControls, setShowControls] = useState(true);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setTime((prev) => ({
        ...prev,
        elapsed: videoRef.current?.currentTime || 0,
      }));
    }
  };

  const resetHideControls = useCallback(() => {
    setShowControls(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    resetHideControls();
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [resetHideControls]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateDuration = () => {
        setTime((prev) => ({ ...prev, duration: video.duration || 0 }));
      };

      video.addEventListener("loadedmetadata", updateDuration);

      return () => {
        video.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, []);

  return (
    <div
      id="video-player-container"
      className="relative w-full overflow-hidden"
      onMouseMove={resetHideControls}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        id="video-player"
        ref={videoRef}
        src={src}
        onClick={togglePlay}
        onLoadedMetadata={() =>
          setTime((prev) => ({ ...prev, duration: videoRef.current?.duration || 0 }))
        }
        onTimeUpdate={handleTimeUpdate}
        className="w-full cursor-pointer"
      />
      {showControls && (
        <div id="video-player-overlay" className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
          <div id="video-player-overlay-info" className="mb-1">
            <h2 className="m-0 text-lg font-semibold">{title}</h2>
            <p className="m-0 text-sm opacity-80">{shortDescription}</p>
          </div>
          <div id="video-player-controls" className="flex items-center justify-between mt-2">
            <span className="text-xs mr-3">{secondsToMinutes(time.elapsed)}</span>
            <div className="relative w-full h-[4px] bg-gray-500 rounded-lg">
              <div
                className="absolute top-0 left-0 h-full bg-white rounded-lg transition-all"
                style={{ width: `${(time.elapsed / time.duration) * 100}%` }}
              />
              <input
                id="video-player-controls-timeline"
                type="range"
                min="0"
                max={time.duration}
                value={time.elapsed}
                onChange={(e) => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = Number(e.target.value);
                  }
                }}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-xs ml-3">{secondsToMinutes(time.duration - time.elapsed)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
