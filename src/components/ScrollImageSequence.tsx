"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { SEQUENCE_IMAGES } from "@/constants/sequence-data";

const INTERVAL = 1 / 7;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getR2LTranslateX = (
  progress: number,
  startProgress: number,
  peakProgress: number,
  i: number
) => {
  // First image is initially visible (already at 0)
  if (i === 1 && progress <= peakProgress) return 0;
  
  // Phase 1: Entering (from 100 down to 0)
  if (progress <= peakProgress) {
    const enterRatio = clamp((progress - startProgress) / INTERVAL, 0, 1);
    return 100 - (enterRatio * 100);
  }
  
  // Phase 2: Exiting (from 0 to 100 or -100)
  const exitRatio = clamp((progress - peakProgress) / INTERVAL, 0, 1);
  return (i === 4 ? 100 : -100) * exitRatio;
};

const getL2RTranslateX = (
  progress: number,
  startProgress: number,
  peakProgress: number,
  i: number
) => {
  // Last image stays visible (at 0) after its peak
  if (i === 8 && progress >= peakProgress) return 0;
  
  // Phase 1: Entering (from -100 up to 0)
  if (progress <= peakProgress) {
    const enterRatio = clamp((progress - startProgress) / INTERVAL, 0, 1);
    return -100 + (enterRatio * 100);
  }
  
  // Phase 2: Exiting (from 0 up to 100)
  const exitRatio = clamp((progress - peakProgress) / INTERVAL, 0, 1);
  return 100 * exitRatio;
};

export function ScrollImageSequence() {
  const containerRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;
    let cachedScrollDistance = 0;
    let cachedTop = 0;

    const updateMeasurements = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        // Calculate absolute top relative to document body, not viewport
        cachedTop = window.scrollY + top;
        cachedScrollDistance = height - window.innerHeight;
      }
    };

    const renderTransforms = (scrollY: number) => {
      if (cachedScrollDistance <= 0) return;
      
      const scrolled = scrollY - cachedTop;
      let progress = scrolled / cachedScrollDistance;
      progress = clamp(progress, 0, 1);
      
      panelsRef.current.forEach((panel, index) => {
        if (!panel) return;
        
        const i = index + 1;
        const startProgress = (index - 1) * INTERVAL;
        const peakProgress = index * INTERVAL;
        
        const translateX = i <= 4
          ? getR2LTranslateX(progress, startProgress, peakProgress, i)
          : getL2RTranslateX(progress, startProgress, peakProgress, i);
          
        panel.style.transform = `translate3d(${translateX}%, 0, 0)`;
      });
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          renderTransforms(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const handleResize = () => {
      updateMeasurements();
      renderTransforms(window.scrollY);
    };

    // Initial setup
    updateMeasurements();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Initial paint
    renderTransforms(window.scrollY);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="mobile-scroll-sequence" 
      className="relative w-full bg-black block h-[3000vh]"
    >
      <div className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden select-none">
        <div className="relative w-full h-full">
          {SEQUENCE_IMAGES.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (panelsRef.current) {
                  panelsRef.current[index] = el;
                }
              }}
              className="absolute inset-0 w-full h-full overflow-hidden transition-none"
              style={{
                zIndex: (index + 1) * 10,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt || `Sequence image ${index + 1}`}
                fill
                sizes="100vw"
                priority={item.priority}
                placeholder={item.blurDataURL ? "blur" : "empty"}
                blurDataURL={item.blurDataURL}
                className="object-cover pointer-events-none select-none"
                style={{ objectPosition: item.objectPosition }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollImageSequence;