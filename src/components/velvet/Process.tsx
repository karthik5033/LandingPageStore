'use client';
import { motion } from 'framer-motion';

export default function VelvetProcess() {
  return (
    <section id="origin" className="py-48 relative z-20 bg-[#0a0806]/10">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-3xl mx-auto"
        >
          <span className="block text-[#d4af37] text-[10px] tracking-[0.5em] mb-8 uppercase">
            The Sourcing
          </span>
          <h2 className="text-5xl md:text-7xl text-white mb-10 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            From high altitude <br/>
            <span className="italic text-[#d4af37]">to your cup.</span>
          </h2>
          <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-16">
            We journey to the most remote, high-elevation coffee farms on earth. By sourcing directly from generational farmers, we ensure sustainable practices and secure micro-lots of unprecedented quality.
          </p>

          <button className="px-12 py-4 border border-[#d4af37]/50 text-white text-[10px] tracking-[0.3em] uppercase hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-500">
            Read Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
