"use client";

import React from "react";
import Image from "next/image";
import { primaryNavigation } from "@/constants/navigation";

interface MegaMenuBackgroundProps {
  activeIndex: number;
}

export function MegaMenuBackground({ activeIndex }: MegaMenuBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
      {primaryNavigation.map((item, index) => {
        if (!item.image) return null;
        
        const isActive = activeIndex === index;
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isActive 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        );
      })}
      
      {/* Dark overlay gradient to ensure text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
    </div>
  );
}
