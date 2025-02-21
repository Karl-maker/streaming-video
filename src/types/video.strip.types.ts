import { VideoCardParams } from "./video.card.types";

export type VideStripParams = {
    title: string;
    videos: VideStripItem[];
}

export type VideStripItem = VideoCardParams;