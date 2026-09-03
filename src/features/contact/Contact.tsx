"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

          {/* LEFT: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 flex flex-col gap-10"
          >
            <div>
              <span className="text-sm md:text-base text-white/50 tracking-widest uppercase mb-4 font-medium block">
                Get In Touch
              </span>
              <h2 className="text-4xl sm:text-5xl font-light tracking-wide text-white">
                Contact Information
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                  <a href="mailto:hello@example.com" className="text-white/60 hover:text-white transition-colors font-light">
                    hello@example.com
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                  <a href="tel:+91XXXXXXXXXX" className="text-white/60 hover:text-white transition-colors font-light">
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Visit Us</h3>
                  <p className="text-white/60 font-light">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="pt-4">
              <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <span className="sr-only">Facebook</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <span className="sr-only">Instagram</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <span className="sr-only">LinkedIn</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-[#0f0f0f] rounded-3xl p-6 sm:p-10 border border-white/10">
              <span className="text-sm md:text-base text-white/50 tracking-widest uppercase mb-4 font-medium block">
                Send Us a Message
              </span>

              <form className="mt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm text-white/70">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all font-light"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm text-white/70">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all font-light"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-white/70">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all font-light"
                    placeholder="jane.doe@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all font-light resize-y min-h-[120px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-all text-sm tracking-widest font-medium uppercase"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
