const secondsToMinutes = (seconds: number): string => {
    if (seconds < 0) return '0:00'
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};
  
export default secondsToMinutes;
  