"use client";

import { BubbleSelectorParams } from '@/types/content.banner.types';
import React from 'react';

const BubbleSelector = ({ bubbles, onSelected, selectedIndex }: BubbleSelectorParams) => {

    const handleBubbleClick = (index: number) => {
        onSelected(index);
    };

    return (
        <div className="flex space-x-2">
            {Array.from({ length: bubbles }).map((_, index) => (
                <div
                    key={index}
                    onClick={() => handleBubbleClick(index)}
                    className={`rounded-full bg-black dark:bg-white flex items-center justify-center cursor-pointer transition-all duration-300 
                    ${selectedIndex === index ? 'w-8' : 'w-3 md:w-2'} h-3 md:h-2`} 
                >
                    {/* Optional: Add content inside the bubble if needed */}
                </div>
            ))}
        </div>
    );
};

export default BubbleSelector;