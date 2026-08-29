"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuButton } from "./MenuButton";
import { MegaMenu } from "./MegaMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header Container */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between text-white pointer-events-none bg-gradient-to-b from-black/80 via-black/30 to-transparent">
        
        {/* Logo / Brand Name */}
        <div className="pointer-events-auto relative z-50 flex items-center">
          <Link 
            href="/" 
            className="relative block w-[140px] md:w-[170px] lg:w-[190px] h-[35px] md:h-[45px] lg:h-[50px]"
            onClick={closeMenu}
            aria-label="Vserve Media Home"
          >
            <Image
              src="/images/logo.png"
              alt="Vserve Media Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>
        </div>

        {/* Menu Toggle Button */}
        <div className="pointer-events-auto">
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </header>

      {/* Mega Menu Overlay */}
      <MegaMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
