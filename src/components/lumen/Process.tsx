'use client';
import { motion } from 'framer-motion';

export default function LumenProcess() {
  return (
    <section id="essence" className="py-48 relative z-20 bg-gradient-to-b from-[#0a0602]/0 via-[#0a0602]/60 to-[#0a0602]/80">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-3xl mx-auto"
        >
          <span className="block text-[#d97706] text-[10px] tracking-[0.5em] mb-8 uppercase font-semibold">
            The Awakening
          </span>
          <h2 className="text-5xl md:text-7xl text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Liquid <br/>
            <span className="italic text-[#d97706]">Gold.</span>
          </h2>
          <p className="text-white/70 text-sm md:text-base font-light tracking-wide leading-relaxed mb-16 uppercase">
            We extract the purest essence from meticulously sourced beans. A process that captures the soul of the coffee, resulting in a cup that is brilliantly rich and undeniably vibrant.
          </p>

          <button className="px-12 py-4 border border-[#d97706]/50 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#d97706] hover:text-[#0a0602] hover:border-[#d97706] transition-all duration-500">
            Discover the Process
          </button>
        </motion.div>
      </div>
    </section>
  );
}
