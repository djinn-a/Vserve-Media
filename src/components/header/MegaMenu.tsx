"use client";

import React, { useEffect, useState } from "react";
import { primaryNavigation } from "@/constants/navigation";
import { NavigationItem } from "../navigation/NavigationItem";
import { MegaMenuBackground } from "./MegaMenuBackground";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset active index when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setActiveIndex(0), 700); // Reset after close animation finishes
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/95 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-4"
      }`}
      aria-hidden={!isOpen}
    >
      <MegaMenuBackground activeIndex={activeIndex} />
      
      <div className="relative z-10 h-full w-full overflow-y-auto overflow-x-hidden pt-24 md:pt-32 lg:pt-40 pb-16 px-6 md:px-12 lg:px-24 flex items-start justify-center">
        <div className="w-full flex justify-center">
          
          {/* Primary Navigation - Horizontal on Desktop, Vertical on Mobile */}
          <nav className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
            {primaryNavigation.map((item, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  isOpen 
                    ? "opacity-100 lg:translate-y-0 translate-y-0" 
                    : "opacity-0 lg:translate-y-12 translate-y-8"
                }`}
                style={{ transitionDelay: `${isOpen ? i * 75 + 200 : 0}ms` }}
              >
                <NavigationItem 
                  item={item} 
                  onNavigate={onClose} 
                  index={i}
                  isActive={activeIndex === i}
                  onHover={setActiveIndex}
                />
              </div>
            ))}
          </nav>
          
        </div>
      </div>
    </div>
  );
}
