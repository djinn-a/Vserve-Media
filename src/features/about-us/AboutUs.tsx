"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative w-full py-10 md:py-16 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">

        {/* Subtle Fade-up Animation Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Large Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide uppercase mb-8">
            About Us
          </h2>

          {/* Clean Readable Content Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-6xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quis illum minima vero molestias, maxime eligendi iusto suscipit, est consequuntur aliquid odit, architecto sit accusantium sunt? Iusto rerum expedita voluptatibus numquam culpa atque illum id ex aspernatur ullam. Officiis accusamus molestiae a beatae optio corrupti, dolor provident nesciunt! Corrupti dolorum deserunt minima ullam quasi sit quibusdam porro repellat, sunt, commodi provident inventore! Incidunt similique provident, tempore omnis ad quaerat soluta sequi, dicta fuga vitae natus qui quasi blanditiis repudiandae et rerum. Reprehenderit, fugiat corporis. Aspernatur pariatur tenetur eaque asperiores aperiam quis enim quo fuga nemo illum harum facilis, obcaecati beatae?
          </p>
        </motion.div>

      </div>
    </section>
  );
}
