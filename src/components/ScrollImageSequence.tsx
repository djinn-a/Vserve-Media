"use client";

import React from "react";
import Image from "next/image";
import { SEQUENCE_IMAGES } from "@/constants/sequence-data";

interface ScrollImageSequenceProps {
  id: string; // Unique ID for CSS scoping
  startIndex: number;
  endIndex: number;
  reverseAnimation?: boolean;
}

const generateKeyframes = (id: string, panelCount: number, reverseAnimation?: boolean) => {
  const cssInterval = 100 / (panelCount - 1);
  let css = '';
  
  const initialTranslation = reverseAnimation ? '-100%' : '100%';
  const exitTranslation = reverseAnimation ? '30%' : '-30%';
  
  for (let index = 0; index < panelCount; index++) {
    const i = index + 1;
    const start = (index - 1) * cssInterval;
    const peak = index * cssInterval;
    const end = (index + 1) * cssInterval;
    
    let keyframeBody = '';
    let overlayBody = '';
    
    // Initial state: waiting on the side
    if (start >= 0) {
      keyframeBody += `  0%${start > 0 ? `, ${start.toFixed(4)}%` : ''} { transform: translate3d(${initialTranslation}, 0, 0) scale(1.0001); filter: blur(0px); }\n`;
      overlayBody += `  0%${start > 0 ? `, ${start.toFixed(4)}%` : ''} { opacity: 0; }\n`;
    } else if (i === 1) {
      keyframeBody += `  0% { transform: translate3d(0%, 0, 0) scale(1.0001); filter: blur(0px); }\n`;
      overlayBody += `  0% { opacity: 0; }\n`;
    }
    
    // Peak state: fully visible
    if (peak > 0 && peak < 100) {
      keyframeBody += `  ${peak.toFixed(4)}% { transform: translate3d(0%, 0, 0) scale(1.0001); filter: blur(0px); }\n`;
      overlayBody += `  ${peak.toFixed(4)}% { opacity: 0; }\n`;
    } else if (peak >= 100) {
      keyframeBody += `  100% { transform: translate3d(0%, 0, 0) scale(1.0001); filter: blur(0px); }\n`;
      overlayBody += `  100% { opacity: 0; }\n`;
    }
    
    // Exit state: moved off-screen
    if (i !== panelCount) {
      const quickFade = peak + ((end - peak) * 0.3); // Rapid fade-in point
      
      if (end < 100) {
        keyframeBody += `  ${end.toFixed(4)}%, 100% { transform: translate3d(${exitTranslation}, 0, 0) scale(1.0001); filter: blur(15px); }\n`;
        overlayBody += `  ${quickFade.toFixed(4)}% { opacity: 0.85; }\n`;
        overlayBody += `  ${end.toFixed(4)}%, 100% { opacity: 0.95; }\n`;
      } else {
        keyframeBody += `  100% { transform: translate3d(${exitTranslation}, 0, 0) scale(1.0001); filter: blur(15px); }\n`;
        if (quickFade < 100) {
          overlayBody += `  ${quickFade.toFixed(4)}% { opacity: 0.85; }\n`;
        }
        overlayBody += `  100% { opacity: 0.95; }\n`;
      }
    }
    
    css += `@keyframes scroll-sequence-${id}-panel-${index} {\n${keyframeBody}}\n`;
    css += `@keyframes scroll-sequence-overlay-${id}-panel-${index} {\n${overlayBody}}\n`;
  }
  return css;
};

export function ScrollImageSequence({ id, startIndex, endIndex, reverseAnimation = false }: ScrollImageSequenceProps) {
  const images = SEQUENCE_IMAGES.slice(startIndex, endIndex);
  const panelCount = images.length;

  return (
    <section 
      id={id} 
      className={`sequence-section-${id} relative w-full bg-black block [contain:layout_paint_size] h-[400vh] md:h-[1000vh]`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @supports (animation-timeline: scroll()) or (animation-timeline: view()) {
          .sequence-section-${id} {
            view-timeline-name: --seq-timeline-${id};
            view-timeline-axis: block;
          }
          .sequence-panel-${id} {
            animation-timeline: --seq-timeline-${id};
            animation-range: contain;
            animation-fill-mode: both;
            animation-timing-function: linear;
            will-change: transform, filter;
          }
          
          .sequence-panel-${id}::after {
            content: '';
            position: absolute;
            inset: 0;
            background: #000;
            pointer-events: none;
            opacity: 0;
            animation-name: scroll-sequence-overlay-${id}-panel-index; /* Placeholder, overwritten inline */
            animation-timeline: --seq-timeline-${id};
            animation-range: contain;
            animation-fill-mode: both;
            animation-timing-function: linear;
            will-change: opacity;
          }
          ${generateKeyframes(id, panelCount, reverseAnimation)}
        }
      ` }} />
      <div className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden select-none">
        <div className="relative w-full h-full">
          {images.map((item, index) => {
            const isPriority = index === 0 || !!item.priority;
            const initialTranslation = reverseAnimation ? '-100%' : '100%';
            const initialTransform = index === 0 
              ? `translate3d(0%, 0, 0) scale(1.0001)` 
              : `translate3d(0, ${initialTranslation}, 0) scale(1.0001)`;
            
            return (
              <div
                key={item.id}
                className={`sequence-panel-${id} absolute inset-0 will-change-transform w-full h-full`}
                style={{
                  animationName: `scroll-sequence-${id}-panel-${index}`,
                  zIndex: index,
                  transform: initialTransform,
                }}
              >
                <style>{`
                  .sequence-panel-${id}:nth-child(${index + 1})::after {
                    animation-name: scroll-sequence-overlay-${id}-panel-${index};
                  }
                `}</style>
                <Image
                  src={item.src}
                  alt={item.alt || `Sequence image ${startIndex + index + 1}`}
                  fill
                  sizes="100vw"
                  priority={isPriority}
                  fetchPriority={isPriority ? "high" : "low"}
                  loading={isPriority ? "eager" : "lazy"}
                  decoding="async"
                  placeholder={item.blurDataURL ? "blur" : "empty"}
                  blurDataURL={item.blurDataURL}
                  className="object-cover pointer-events-none select-none"
                  style={{ objectPosition: item.objectPosition }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ScrollImageSequence;