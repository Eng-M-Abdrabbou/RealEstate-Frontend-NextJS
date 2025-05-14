'use client';

import React from 'react';
import Image from 'next/image';

interface VideoPlayerTriggerProps {
  thumbnailSrc: string;
  videoUrl: string; // For opening in modal or playing inline
  playButtonText?: string;
  onPlayClick?: () => void; // If you handle modal externally
}

// Basic Play Icon SVG
const PlayIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);


const VideoPlayerTrigger: React.FC<VideoPlayerTriggerProps> = ({
  thumbnailSrc,
  videoUrl,
  playButtonText = "Play Video",
  onPlayClick,
}) => {
  const handlePlay = () => {
    if (onPlayClick) {
      onPlayClick();
    } else {
      // Default behavior: open video in new tab or implement inline player/modal
      console.log("Playing video:", videoUrl);
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div className="relative group cursor-pointer" onClick={handlePlay}>
      <Image
        src={thumbnailSrc}
        alt="Video thumbnail"
        width={600} // Adjust as needed
        height={400} // Adjust as needed
        className="rounded-lg object-cover shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300 flex flex-col items-center justify-center rounded-lg">
        <div className="bg-white bg-opacity-80 p-4 rounded-full shadow-xl">
          <PlayIcon className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
        </div>
        {playButtonText && (
          <p className="mt-3 text-white text-sm font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
            {playButtonText}
          </p>
        )}
      </div>
    </div>
  );
};
export default VideoPlayerTrigger;