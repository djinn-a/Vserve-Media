"use client";

import { motion } from "framer-motion";

export interface WhyVservePointData {
  id: string;
  title: string;
  description: string;
  side: "left" | "right";
}

interface WhyVservePointProps {
  point: WhyVservePointData;
  index: number;
}

export default function WhyVservePoint({ point, index }: WhyVservePointProps) {
  const isLeft = point.side === "left";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-2 max-w-sm w-full ${
        isLeft ? "lg:items-end lg:text-right text-left items-start" : "items-start text-left"
      }`}
    >
      <span className="text-white/40 font-mono text-sm tracking-wider">
        {point.id}.
      </span>
      <h3 className="text-xl md:text-2xl font-medium tracking-wide text-white">
        {point.title}
      </h3>
      <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
        {point.description}
      </p>
    </motion.div>
  );
}
