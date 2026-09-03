"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhyVservePoint, { WhyVservePointData } from "./WhyVservePoint";

const whyVservePoints: WhyVservePointData[] = [
  {
    id: "01",
    title: "Creative-First Approach",
    description: "We combine strategy, creativity, and technology to create meaningful digital experiences that help brands stand out.",
    side: "left",
  },
  {
    id: "02",
    title: "Connected Expertise",
    description: "Our teams work across branding, content, production, and digital solutions to create a more connected brand experience.",
    side: "left",
  },
  {
    id: "03",
    title: "Performance Focused",
    description: "We build solutions with clear goals, thoughtful execution, and measurable outcomes in mind.",
    side: "right",
  },
  {
    id: "04",
    title: "Built For Growth",
    description: "Our flexible approach helps brands evolve, scale, and adapt as their business grows.",
    side: "right",
  },
];

export default function WhyVserveMedia() {
  const leftPoints = whyVservePoints.filter((p) => p.side === "left");
  const rightPoints = whyVservePoints.filter((p) => p.side === "right");

  return (
    <section className="relative w-full py-16 md:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-white">
            Why Vserve Media
          </h2>
        </motion.div>

        {/* Desktop Layout: 3 Columns. Mobile: Logo then Points */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-8">

          {/* Left Points */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:gap-20 items-start lg:items-end justify-center">
            {leftPoints.map((point, index) => (
              <WhyVservePoint key={point.id} point={point} index={index} />
            ))}
          </div>

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center w-full lg:w-1/3 shrink-0"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-full bg-white flex items-center justify-center p-6 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo.png"
                  alt="Vserve Media"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Points */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:gap-20 items-start justify-center">
            {rightPoints.map((point, index) => (
              <WhyVservePoint key={point.id} point={point} index={index + 2} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
