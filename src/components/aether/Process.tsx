'use client';
import { motion } from 'framer-motion';

export default function AetherProcess() {
  return (
    <section id="vision" className="relative z-10 py-40 px-6">
      <div className="max-w-4xl mx-auto text-center p-12 md:p-24 bg-gradient-to-b from-black/0 via-black/60 to-black/0 backdrop-blur-sm">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
        >
          <span className="block text-gray-500 text-[9px] font-bold tracking-[0.4em] mb-8 uppercase">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mastery of <br/><span className="italic text-gray-400">Micro-Mechanics.</span>
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl mx-auto mb-16 tracking-wide">
            We believe that a watch is more than an instrument that tells time; it is a profound testament to human ingenuity. Aether timepieces are assembled by hand over 300 hours, pushing the absolute limits of mechanical precision and architectural design.
          </p>

          <button className="px-12 py-4 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
            Discover Our Heritage
          </button>
        </motion.div>
      </div>
    </section>
  );
}
