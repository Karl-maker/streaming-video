"use client";

import { VideoPlayerParams } from "@/types/video.player.types";
import React, { useRef, useState, useEffect, useCallback } from "react";
import secondsToMinutes from "@/utils/seconds.to.minutes.util";
import { Fullscreen, Minimize } from "lucide-react";
import { MdPlayArrow } from "@react-icons/all-files/md/MdPlayArrow";
import { MdPause } from "@react-icons/all-files/md/MdPause";
import { MdForward10 } from "@react-icons/all-files/md/MdForward10";
import { MdReplay10 } from "@react-icons/all-files/md/MdReplay10";

const VideoPlayer = ({ src, title, shortDescription }: VideoPlayerParams) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState({ elapsed: 0, duration: 0 });
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [previewTime, setPreviewTime] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [previewPosition, setPreviewPosition] = useState(0);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
    resetHideControls();
  };

  const fastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
    resetHideControls();
  };

  const rewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
    resetHideControls();
  };

  const toggleFullscreen = () => {
    const container = document.getElementById("video-player-container");
    if (!document.fullscreenElement) {
      container?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    resetHideControls();
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setTime((prev) => ({ ...prev, elapsed: videoRef?.current?.currentTime || 0 }));
    }
  };

  const resetHideControls = useCallback(() => {
    setShowControls(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    resetHideControls();
    return () => hideTimeout.current && clearTimeout(hideTimeout.current);
  }, [resetHideControls]);

  useEffect(() => {
    if (videoRef.current) {
      setTime((prev) => ({ ...prev, duration: videoRef?.current?.duration || 0 }));
    }
  }, []);

  return (
    <div
      id="video-player-container"
      className={`relative w-full h-full justify-center overflow-hidden bg-black flex items-center ${isFullscreen ? "h-screen" : ""}`}
      onMouseMove={resetHideControls}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        onClick={togglePlay}
        onLoadedMetadata={() => setTime((prev) => ({ ...prev, duration: videoRef.current?.duration || 0 }))}
        onTimeUpdate={handleTimeUpdate}
        className={`w-full cursor-pointer ${isFullscreen ? "h-auto max-h-full" : ""}`}
      />
      {showControls && (
        <div id="video-player-overlay" className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
          <div id="video-player-overlay-info" className="mb-1">
            <h2 className="m-0 text-xl font-semibold">{title}</h2>
            <p className="m-0 text-md opacity-80">{shortDescription}</p>
          </div>
          <div id="video-player-controls" className="flex items-center justify-between mt-2">
            <div
              className="relative w-full h-[4px] bg-gray-500 rounded-lg"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const newTime = (offsetX / rect.width) * time.duration;
                setPreviewTime(newTime);
                setShowPreview(true);

                if (previewVideoRef.current) {
                  previewVideoRef.current.currentTime = newTime;
                }

                setPreviewPosition(Math.max(0, Math.min(offsetX, rect.width - 64))); // Keep within bounds
              }}
              onMouseLeave={() => setShowPreview(false)}
            >
              <div className="absolute top-0 left-0 h-full bg-white rounded-lg transition-all" style={{ width: `${(time.elapsed / time.duration) * 100}%` }} />
              <input
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
              {showPreview && (
                <div
                  className="absolute bottom-6 p-2 bg-black/80 text-white text-xs rounded-md transition-transform"
                  style={{ 
                    left: `${Math.min(previewPosition, window.innerWidth - 100)}px`, 
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="w-40 md:w-80"> 
                    <video 
                      ref={previewVideoRef} 
                      src={src} 
                      className="w-full rounded-md" 
                      muted 
                    />
                    <div className="text-center text-lg mt-1"> 
                      {secondsToMinutes(previewTime)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <span className="text-lg ml-3">{secondsToMinutes(time.duration - time.elapsed)}</span>
            <button onClick={toggleFullscreen} className="ml-3 p-2">
              {isFullscreen ? <Minimize size={30} /> : <Fullscreen size={30} />}
            </button>
          </div>
        </div>
      )}
      {showControls && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex space-x-10 pointer-events-auto">
            <button onClick={rewind} className="text-white text-7xl opacity-80 hover:opacity-100">
              <MdReplay10 />
            </button>
            <button onClick={togglePlay} className="text-white text-6xl opacity-80 hover:opacity-100">
              {videoRef.current?.paused ? <MdPlayArrow /> : <MdPause />}
            </button>
            <button onClick={fastForward} className="text-white text-7xl opacity-80 hover:opacity-100">
              <MdForward10 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;