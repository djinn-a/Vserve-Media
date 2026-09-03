"use client";

import React from "react";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative z-50 flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10 overflow-hidden group"
      aria-expanded={isOpen}
      aria-label="Toggle navigation menu"
    >
      {/* Background that appears on hover/open */}
      <div 
        className={`absolute inset-0 rounded-full border border-white/20 transition-all duration-300 ${
          isOpen ? "bg-white/10 border-white/40" : "group-hover:border-white/40"
        }`} 
      />
      
      <div className="relative flex items-center justify-center w-16 overflow-hidden">
        <span
          className={`block transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          Menu
        </span>
        <span
          className={`absolute block transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Close
        </span>
      </div>
    </button>
  );
}
