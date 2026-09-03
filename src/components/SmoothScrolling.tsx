"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Lower lerp makes the scroll smoother and slower to catch up
      wheelMultiplier: 0.6, // Reduces the raw scroll speed/distance per wheel tick
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis globally so we can stop/start it for scroll locking
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
