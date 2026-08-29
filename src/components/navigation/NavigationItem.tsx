import React from "react";
import Link from "next/link";
import { NavigationLink } from "@/constants/navigation";

interface NavigationItemProps {
  item: NavigationLink;
  onNavigate: () => void;
  index: number;
  isActive: boolean;
  onHover: (index: number) => void;
}

export function NavigationItem({ item, onNavigate, index, isActive, onHover }: NavigationItemProps) {
  return (
    <div 
      className="group overflow-hidden"
      onMouseEnter={() => onHover(index)}
    >
      <Link
        href={item.href}
        onClick={(e) => {
          // On mobile, tap might just activate the background first if not active.
          // But since it's a Link, it will navigate. We'll ensure it also updates active state.
          onHover(index);
          onNavigate();
        }}
        className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
        }`}
      >
        {/* Main text */}
        <span className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight transition-colors duration-500 ${isActive ? "text-white drop-shadow-md" : "text-white/70"}`}>
          {item.label}
        </span>
      </Link>
    </div>
  );
}
