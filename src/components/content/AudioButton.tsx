"use client"

import { FiVolumeX } from "@react-icons/all-files/fi/FiVolumeX";
import { FiVolume2 } from "@react-icons/all-files/fi/FiVolume2";
import { AudioButtonParams } from "@/types/audio.button.types";

const AudioButton = (params: AudioButtonParams) => {
    return <button 
        onClick={params.toggleMute} 
        className="bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80 transition w-10 h-10"
    >
        {params.isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
    </button>
}

export default AudioButton;