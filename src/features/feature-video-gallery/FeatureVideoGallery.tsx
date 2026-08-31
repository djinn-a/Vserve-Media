"use client";

import React, { useState, useEffect } from "react";
import { motion, PanInfo, AnimatePresence } from "framer-motion";

export interface FeatureVideo {
  id: number;
  src: string;
  poster: string;
  title: string;
}

const featureVideos: FeatureVideo[] = [
  {
    id: 1,
    src: "/images/hero-img/airbasket-v.mp4",
    poster: "/images/lifestyle-1.jpg",
    title: "Feature One",
  },
  {
    id: 2,
    src: "/images/hero-img/vserve wealth Ad-video.mp4",
    poster: "/images/lifestyle-2.jpg",
    title: "Feature Two",
  },
  {
    id: 3,
    src: "/images/hero-img/airbasket-v.mp4",
    poster: "/images/lifestyle-3.jpg",
    title: "Feature Three",
  },
  {
    id: 4,
    src: "/images/hero-img/vserve wealth Ad-video.mp4",
    poster: "/images/lifestyle-4.jpg",
    title: "Feature Four",
  },
  {
    id: 5,
    src: "/images/hero-img/airbasket-v.mp4",
    poster: "/images/lifestyle-5.jpg",
    title: "Feature Five",
  },
];

const getOffset = (index: number, currentIndex: number, length: number) => {
  let offset = (index - currentIndex) % length;
  if (offset > Math.floor(length / 2)) {
    offset -= length;
  } else if (offset < -Math.floor(length / 2)) {
    offset += length;
  }
  return offset;
};

export default function FeatureVideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<FeatureVideo | null>(null);
  
  // Track previous index to detect wrap-around jumps
  const prevIndexRef = React.useRef(currentIndex);
  useEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featureVideos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const swipeConfidenceThreshold = 50;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      setCurrentIndex((prev) => (prev + 1) % featureVideos.length);
    } else if (swipe > swipeConfidenceThreshold) {
      setCurrentIndex((prev) => (prev - 1 + featureVideos.length) % featureVideos.length);
    }
  };

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden flex flex-col items-center">
      
      {/* Section Header */}
      <div className="text-center mb-16 px-6 z-10">
        <span className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-4 block">
          Featured
        </span>
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide">
          Our Best Work
        </h2>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center perspective-[1000px]"
      >
        {/* Base Wrapper for exactly 1 card size to anchor the absolute positioning */}
        <div className="relative w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16]">
          {featureVideos.map((video, index) => {
            const offset = getOffset(index, currentIndex, featureVideos.length);
            const prevOffset = getOffset(index, prevIndexRef.current, featureVideos.length);
            const isCenter = offset === 0;
            
            // Detect if this specific card is wrapping around the back to avoid the 'flying across' jhatka
            const isWrap = Math.abs(offset - prevOffset) > 1;

            // Calculate responsive visual stacking
            const xOffset = offset * 110; 
            const scale = isCenter ? 1 : Math.max(0.7, 1 - Math.abs(offset) * 0.15);
            const opacity = isCenter ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.4);
            const zIndex = 30 - Math.abs(offset);
            const blur = isCenter ? "0px" : `${Math.abs(offset) * 2}px`;

            return (
              <motion.div
                key={video.id}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-white/5"
                initial={false}
                animate={{
                  x: `${xOffset}%`,
                  scale,
                  opacity,
                  zIndex,
                  filter: `blur(${blur}) brightness(${isCenter ? 1 : 0.6})`
                }}
                transition={{
                  duration: isWrap ? 0 : 0.8,
                  ease: isWrap ? "linear" : [0.22, 1, 0.36, 1] // Premium smooth easing curve, instant if wrapping
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  if (!isCenter) {
                    setCurrentIndex(index);
                  } else {
                    setSelectedVideo(video);
                  }
                }}
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
                
                {/* Optional overlay label for the center card */}
                {isCenter && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-6 left-0 right-0 text-center pointer-events-none"
                  >
                    <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                      {video.title}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl z-[110] p-2 hover:scale-110 transition-transform"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo.src}
                poster={selectedVideo.poster}
                autoPlay
                playsInline
                controls
                className="max-w-full max-h-full rounded-xl shadow-2xl object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
