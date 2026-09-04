"use client";

import { motion } from "framer-motion";
import { PodcastCard, PodcastVideoData } from "./PodcastCard";

const podcastVideos: PodcastVideoData[] = [
  {
    id: 1,
    src: "/images/hero-img/airbasket-v.mp4",
    alt: "Podcast conversation 1",
  },
  {
    id: 2,
    src: "/images/hero-img/airbasket-v.mp4",
    alt: "Podcast conversation 2",
  },
  {
    id: 3,
    src: "/images/hero-img/airbasket-v.mp4",
    alt: "Podcast conversation 3",
  },
];

export default function Podcast() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT: Video Collage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-[65%] sm:w-[60%] lg:w-[32%] xl:w-[28%] mx-auto lg:mx-0 grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="col-span-1 aspect-[3/4]">
              <PodcastCard video={podcastVideos[0]} className="w-full h-full shadow-lg" />
            </div>
            <div className="col-span-1 aspect-[3/4] mt-6 sm:mt-8">
              <PodcastCard video={podcastVideos[1]} className="w-full h-full shadow-lg" />
            </div>
            <div className="col-span-2 aspect-[16/6]">
              <PodcastCard video={podcastVideos[2]} className="w-full h-full shadow-lg" />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:flex-1 flex flex-col justify-center"
          >
            <span className="text-sm md:text-base text-white/50 tracking-widest uppercase mb-4 font-medium">
              Podcast
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white mb-8">
              Our Podcast
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa excepturi distinctio eaque eius. Deleniti laudantium optio, sit provident vero odit nulla hic, tempore obcaecati quis placeat impedit harum perspiciatis architecto soluta omnis, praesentium non sed vitae? Eligendi fugit maxime aliquid delectus neque voluptatibus, esse, sit quibusdam placeat blanditiis ex? Ratione minima velit numquam autem odio expedita quos at consequuntur quas atque sed, dolore incidunt fugiat iure voluptas consectetur ducimus placeat.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
