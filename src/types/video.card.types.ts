import { ReactNode } from "react";

export type VideoCardParams = {
    src: string;
    progress?: number;
    tag?: string;
    lowerBage?: string;
    onWatch?: () => void;
}

export type VideoTallCardParams = {
    id: string;
    posterSrc: string;
    landscapeSrc: string;
    tag?: string;
    logoSrc: string;
    detail?: string;
    badges?: (string | ReactNode)[];
    onWatchNow?: (id: string) => void;
}

export type VideoCardExtraContentParams = {
    title: string;
    time: string;
    details: string;
}