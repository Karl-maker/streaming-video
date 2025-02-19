const getAudioType = (audioSrc: string): string => {
    if (!audioSrc) throw new Error('Unknown audio format');

    const ext = audioSrc.split('.').pop()?.toLowerCase();
  
    switch (ext) {
      case 'mp3':
        return 'mpeg';
      case 'aac':
        return 'aac';
      case 'ogg':
        return 'ogg';
      case 'wav':
        return 'wav';
      case 'flac':
        return 'flac';
      default:
        throw new Error('Unknown audio format');
    }
};
  

export default getAudioType;
  
  