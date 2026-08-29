import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0f0f0f] text-white pt-20 pb-8 px-6 md:px-12 lg:px-24">
      
      {/* Centered Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.08]">
        <div className="relative w-[680px] h-[680px] md:w-[840px] md:h-[840px] lg:w-[1020px] lg:h-[1020px]">
          <Image 
            src="/images/fev.jpeg" 
            alt="Vserve Media Icon Watermark" 
            fill 
            className="object-contain invert mix-blend-screen grayscale" 
            sizes="(max-width: 768px) 680px, (max-width: 1024px) 840px, 1020px"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Left Column - Logo & Socials */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-between">
            {/* Logo Area */}
            <div className="mb-16 lg:mb-32">
              <div className="relative w-full max-w-[400px] aspect-[16/9] lg:aspect-auto lg:h-[250px]">
                <Image 
                  src="/images/logo.png" 
                  alt="Vserve Media Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl md:text-2xl font-medium tracking-wide mb-6">
                Social Media
              </h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <span className="sr-only">Facebook</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <span className="sr-only">Instagram</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <span className="sr-only">LinkedIn</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <span className="sr-only">YouTube</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - About & Navigation */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between">
            {/* About Us */}
            <div className="mb-16 lg:mb-32 lg:max-w-md ml-auto">
              <h3 className="text-xl md:text-2xl font-medium tracking-wide mb-4">
                About us
              </h3>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                Crafting digital experiences that inspire, connect, and grow brands worldwide
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:max-w-md ml-auto w-full">
              <h3 className="text-xl md:text-2xl font-medium tracking-wide mb-6">
                Navigation
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "HOME", path: "/" },
                  { name: "ABOUT", path: "/about" },
                  { name: "SERVICES", path: "/services" },
                  { name: "PORTFOLIO", path: "/portfolio" },
                  { name: "CONTACT", path: "/contact" }
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.path}
                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all text-sm tracking-widest text-white/80 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-sm text-white/50">
          <p>
            Copyright © {currentYear} Vserve Media All rights reserved & Developed By Vserve Group
          </p>
          <div className="flex items-center gap-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>/</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
