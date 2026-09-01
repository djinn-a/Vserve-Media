"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What does Vserve Media do?",
    answer: "We are a 360° creative ecosystem offering production, brand building, content, and performance marketing solutions for modern brands."
  },
  {
    question: "What types of services do you offer?",
    answer: "We cover creative production, brand strategy, digital presence, performance marketing, and podcast/content studio services."
  },
  {
    question: "Do you work with startups or only established brands?",
    answer: "We work with both. Our approach is adaptable based on the brand’s stage and goals."
  },
  {
    question: "Do you offer end-to-end solutions or only specific services?",
    answer: "We offer both—brands can work with us for complete ecosystem support or specific service requirements."
  },
  {
    question: "How is your approach different from a regular agency?",
    answer: "We operate as a connected system where production, branding, and performance work together instead of in isolation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex flex-col pt-4">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white mb-2 leading-tight">
              Frequently Asked<br className="hidden lg:block" /> Questions
            </h2>

            <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[360px] mt-4 lg:mt-8">
              <Image
                src="/images/hero-img/faq-page.webp"
                alt="FAQ Reference Image"
                fill
                className="object-contain object-center lg:object-left"
              />
            </div>
          </div>

          {/* Right Column (Accordion) */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg md:text-xl font-light text-white pr-8">
                      {index + 1}. {item.question}
                    </span>
                    <span className="text-3xl text-white/70 flex-shrink-0 font-light leading-none relative w-6 h-6 flex items-center justify-center">
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute block origin-center"
                      >
                        +
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed font-light">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
