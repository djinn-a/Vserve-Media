"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface PortfolioData {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface PortfolioCardProps {
  portfolio: PortfolioData;
  index: number;
}

export function PortfolioCard({ portfolio, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-end w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg cursor-pointer"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          className="w-full h-full relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={portfolio.image}
            alt={portfolio.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-2 pointer-events-none">
        <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white leading-tight">
          {portfolio.title}
        </h3>
        <span className="text-xs sm:text-sm font-light text-white/70 tracking-widest uppercase flex items-center gap-2 mt-2">
          <span className="text-white/40 text-[10px]">✦</span> {portfolio.category}
        </span>
      </div>
    </motion.div>
  );
}
