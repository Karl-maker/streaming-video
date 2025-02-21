import { ReactNode } from "react";

export type VideoCardParams = {
    src: string;
    progress?: number;
    tag?: string;
    lowerBage?: string;
}

export type VideoTallCardParams = {
    posterSrc: string;
    landscapeSrc: string;
    tag?: string;
    logoSrc: string;
    detail?: string;
    badges?: (string | ReactNode)[];
}

export type VideoCardExtraContentParams = {
    title: string;
    time: string;
    details: string;
}