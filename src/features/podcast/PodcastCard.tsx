"use client";

export interface PodcastVideoData {
  id: number;
  src: string;
  poster?: string;
  alt: string;
}

interface PodcastCardProps {
  video: PodcastVideoData;
  className?: string;
}

export function PodcastCard({ video, className = "" }: PodcastCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 ${className}`}>
      <video
        src={video.src}
        poster={video.poster}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="h-full w-full object-cover"
        aria-label={video.alt}
      />
    </div>
  );
}
