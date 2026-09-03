"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-between h-[450px] sm:h-[500px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300"
    >
      <div className="p-8 flex flex-col gap-4 z-10">
        <span className="text-lg md:text-xl font-light text-white/40">{service.id}.</span>
        <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
          {service.title}
        </h3>
        <p className="text-white/60 text-base font-light leading-relaxed max-w-sm">
          {service.description}
        </p>
      </div>

      <div className="relative w-[calc(100%-3rem)] mx-auto h-[200px] mt-auto mb-6 overflow-hidden rounded-xl bg-black/20">
        <motion.div
          className="w-full h-full relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
