/// <reference types="jest" />
import getAudioType from "@/utils/audio.type.util";
import { expect } from '@jest/globals';

describe('getAudioType', () => {
  it('should return "mp3" for mp3 audio files', () => {
    const result = getAudioType('path/to/audio-file.mp3');
    expect(result).toBe('mpeg');
  });

  it('should return "aac" for aac audio files', () => {
    const result = getAudioType('path/to/audio-file.aac');
    expect(result).toBe('aac');
  });

  it('should return "ogg" for ogg audio files', () => {
    const result = getAudioType('path/to/audio-file.ogg');
    expect(result).toBe('ogg');
  });

  it('should return "wav" for wav audio files', () => {
    const result = getAudioType('path/to/audio-file.wav');
    expect(result).toBe('wav');
  });

  it('should return "flac" for flac audio files', () => {
    const result = getAudioType('path/to/audio-file.flac');
    expect(result).toBe('flac');
  });

  it('should throw error for unsupported formats', () => {
    expect(() => getAudioType('path/to/audio-file.mp4')).toThrow('Unknown audio format');
    expect(() => getAudioType('path/to/audio-file.zip')).toThrow('Unknown audio format');
    expect(() => getAudioType('path/to/audio-file.txt')).toThrow('Unknown audio format');
  });

  it('should throw error for empty audio source', () => {
    expect(() => getAudioType('')).toThrow('Unknown audio format');
  });

  it('should handle case insensitivity for file extensions', () => {
    const result = getAudioType('path/to/audio-file.MP3');
    expect(result).toBe('mpeg');
    
    const resultAac = getAudioType('path/to/audio-file.AAC');
    expect(resultAac).toBe('aac');
    
    const resultOgg = getAudioType('path/to/audio-file.OGG');
    expect(resultOgg).toBe('ogg');
    
    const resultWav = getAudioType('path/to/audio-file.WAV');
    expect(resultWav).toBe('wav');
    
    const resultFlac = getAudioType('path/to/audio-file.FLAC');
    expect(resultFlac).toBe('flac');
  });
});
