import { ReactNode } from "react";

export type HeaderContentParams = {
    logoSrc: string;
    items: {
        name: string;
        icon: ReactNode;
        path: string;
    }[];
}