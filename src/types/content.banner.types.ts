import { ReactNode } from "react";

export type ContentBannerPreviewInput = {
    id: string;
    logoSrc: string;
    imageSrc: string;
    previewSrc?: string;
    description: string;
    title: string;
    tags?: (string | ReactNode)[];
    details?: string;

    onWatchNow?: (id: string) => void;
}

export type ContentBannerParams = {
    content: ContentBannerPreviewInput[];
}

export type BubbleSelectorParams = {
    bubbles: number;
    onSelected: (i: number) => void;
    selectedIndex: number;
}