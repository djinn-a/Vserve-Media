"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SEQUENCE_IMAGES } from "@/constants/sequence-data";

/**
 * Pure calculation helper returning exact transform, opacity, z-index, and visibility for each slide.
 * No React state, zero allocation overhead inside rAF loop.
 */
const SLIDE_TIMINGS = [
  { inS: -1, inE: 0, outS: 0.06, outE: 0.2, dir: 1 },
  { inS: 0.06, inE: 0.2, outS: 0.26, outE: 0.38, dir: 1 },
  { inS: 0.26, inE: 0.38, outS: 0.44, outE: 0.56, dir: 1 },
  { inS: 0.44, inE: 0.56, outS: 0.62, outE: 0.74, dir: -1 },
  { inS: 0.62, inE: 0.74, outS: 0.8, outE: 0.9, dir: -1 },
  { inS: 0.8, inE: 0.9, outS: 2, outE: 3, dir: -1 },
];

function getPanelTransform(index: number, p: number): {
  x: number;
  opacity: number;
  zIndex: number;
  visibility: "visible" | "hidden";
} {
  const timing = SLIDE_TIMINGS[index];
  if (!timing) return { x: 0, opacity: 0, zIndex: 0, visibility: "hidden" };

  const { inS, inE, outS, outE, dir } = timing;
  const z = (index + 1) * 10;

  if (p < inS) {
    return { x: dir * 100, opacity: 0, zIndex: 0, visibility: "hidden" };
  } else if (p < inE) {
    const t = (p - inS) / (inE - inS);
    return { x: dir * 100 * (1 - t), opacity: 1, zIndex: z, visibility: "visible" };
  } else if (p <= outS) {
    return { x: 0, opacity: 1, zIndex: z, visibility: "visible" };
  } else if (p <= outE) {
    const t = (p - outS) / (outE - outS);
    return { x: dir * -100 * t, opacity: 1, zIndex: z, visibility: "visible" };
  }
  
  return { x: dir * -100, opacity: 0, zIndex: 0, visibility: "hidden" };
}

export function ScrollImageSequence() {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !sticky) return;

    // 1. Lock sticky container height to measured innerHeight in pixels
    const lockStickyHeight = () => {
      const h = window.innerHeight;
      sticky.style.height = `${h}px`;
    };
    lockStickyHeight();

    // 2. Cache metrics on mount/resize (NEVER getBoundingClientRect in rAF)
    let cachedOffsetTop = 0;
    let cachedScrollDistance = 0;

    const measureLayout = () => {
      lockStickyHeight();
      const rect = wrapper.getBoundingClientRect();
      cachedOffsetTop = rect.top + window.scrollY;
      cachedScrollDistance = Math.max(1, wrapper.offsetHeight - window.innerHeight);
    };

    measureLayout();

    const resizeObserver = new ResizeObserver(() => {
      measureLayout();
    });
    resizeObserver.observe(wrapper);

    window.addEventListener("resize", measureLayout, { passive: true });
    window.addEventListener("orientationchange", measureLayout, { passive: true });

    // 3. rAF Engine
    let animationFrameId: number | null = null;
    let targetProgress = 0;
    let currentProgress = -1;

    const applyProgressToDOM = (progress: number) => {
      // Direct DOM writes to all 6 panels via refs (ZERO React re-renders)
      for (let i = 0; i < SEQUENCE_IMAGES.length; i++) {
        const panel = panelRefs.current[i];
        if (!panel) continue;

        const { x, opacity, zIndex, visibility } = getPanelTransform(i, progress);

        panel.style.transform = `translate3d(${x.toFixed(2)}%, 0, 0)`;
        panel.style.opacity = opacity.toFixed(3);
        panel.style.zIndex = zIndex.toString();
        panel.style.visibility = visibility;
      }
    };

    // Calculate initial position on load
    const calculateInitialProgress = () => {
      const scrollY = window.scrollY;
      const rawProgress = (scrollY - cachedOffsetTop) / cachedScrollDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      targetProgress = clamped;
      currentProgress = clamped;
      applyProgressToDOM(clamped);
    };
    calculateInitialProgress();

    // The easing loop for buttery smooth momentum scrolling
    const renderLoop = () => {
      // Lerp current towards target (0.08 is the easing factor, lower is smoother/slower)
      currentProgress += (targetProgress - currentProgress) * 0.08;

      // If we are close enough to target, stop the loop to save CPU/battery
      if (Math.abs(targetProgress - currentProgress) > 0.0001) {
        applyProgressToDOM(currentProgress);
        animationFrameId = requestAnimationFrame(renderLoop);
      } else {
        // Snap to exact target to avoid microscopic jitter
        currentProgress = targetProgress;
        applyProgressToDOM(currentProgress);
        animationFrameId = null;
      }
    };

    // Scroll listener just updates target and ensures loop is running
    const onScroll = () => {
      const scrollY = window.scrollY;
      const rawProgress = (scrollY - cachedOffsetTop) / cachedScrollDistance;
      targetProgress = Math.max(0, Math.min(1, rawProgress));

      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measureLayout);
      window.removeEventListener("orientationchange", measureLayout);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      id="mobile-scroll-sequence"
      className="relative w-full bg-black block"
      style={{ height: "800vh" }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden select-none"
        style={{ willChange: "transform" }}
      >
        <div className="relative w-full h-full">
          {SEQUENCE_IMAGES.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                panelRefs.current[index] = el;
              }}
              className="absolute inset-0 w-full h-full overflow-hidden transition-none"
              style={{
                zIndex: (index + 1) * 10,
                transform: index === 0 ? "translate3d(0%, 0, 0)" : "translate3d(100%, 0, 0)",
                opacity: index === 0 ? 1 : 0,
                visibility: index === 0 ? "visible" : "hidden",
                willChange: "transform, opacity",
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
