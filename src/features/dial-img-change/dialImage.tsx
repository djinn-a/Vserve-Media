"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./dialImage.module.css";
import { SEQUENCE_IMAGES } from "@/constants/sequence-data";

export default function DialImage() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const { top, height } = containerRef.current.getBoundingClientRect();
            // Calculate total scrollable distance within the container
            // The container height is 400vh, the sticky viewport is 100vh
            const scrollDistance = height - window.innerHeight;
            
            if (scrollDistance > 0) {
              const scrolled = -top;
              let progress = scrolled / scrollDistance;
              progress = Math.max(0, Math.min(1, progress));
              
              let step = 1;
              if (progress < 0.25) step = 1;
              else if (progress < 0.50) step = 2;
              else if (progress < 0.75) step = 3;
              else step = 4;

              setActiveStep((prev) => (prev !== step ? step : prev));
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Use only the first 4 images from the existing sequence data
  const images = SEQUENCE_IMAGES.slice(0, 4);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.stickyArea}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            {images.map((item, index) => {
              const step = index + 1;
              return (
                <div 
                  key={item.id} 
                  className={`${styles.imageContainer} ${activeStep === step ? styles.active : ''}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt || `Sequence image ${step}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={item.priority}
                    placeholder={item.blurDataURL ? "blur" : "empty"}
                    blurDataURL={item.blurDataURL}
                    className={styles.image}
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
              );
            })}
          </div>

          <div className={styles.dialWrapper}>
            <div className={styles.dial}>
              {/* 4 Markers around the circle */}
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step}
                  className={styles.markerContainer} 
                  style={{ transform: `rotate(${(step - 1) * 90}deg)` }}
                >
                  <div className={`${styles.marker} ${activeStep === step ? styles.markerActive : styles.markerInactive}`}></div>
                </div>
              ))}
              
              {/* Rotating Pointer / Arrow */}
              <div 
                className={styles.pointerContainer} 
                style={{ transform: `rotate(${(activeStep - 1) * 90}deg)` }}
              >
                <div className={styles.pointer}>
                  {/* Inner arrow pointing towards the center of the dial */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
