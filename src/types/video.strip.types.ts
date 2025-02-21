import { ReactNode } from "react";
import { VideoCardParams } from "./video.card.types";

export type VideStripParams = {
    title: string;
    children: ReactNode;
}

export type VideStripItem = VideoCardParams;