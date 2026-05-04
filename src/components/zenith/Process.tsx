'use client';
import { motion } from 'framer-motion';

export default function ZenithProcess() {
  return (
    <section id="philosophy" className="py-48 relative z-20 ">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-3xl mx-auto"
        >
          <span className="block text-[#f2f0eb]/50 text-[9px] tracking-[0.5em] mb-8 uppercase font-light">
            The Philosophy
          </span>
          <h2 className="text-5xl md:text-7xl text-[#f2f0eb] mb-10 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Absolute <br/>
            <span className="italic text-[#f2f0eb]/70">Pinnacle.</span>
          </h2>
          <p className="text-[#f2f0eb]/60 text-[11px] font-light tracking-widest leading-relaxed mb-16 uppercase">
            We operate at the intersection of geometry and flavor. The perfect pour is not accidental; it is a calculated, meditative act that elevates coffee into an experience of absolute harmony.
          </p>

          <button className="px-12 py-4 border border-[#f2f0eb]/30 text-[#f2f0eb] text-[9px] font-light tracking-[0.4em] uppercase hover:bg-[#f2f0eb] hover:text-[#0a0908] hover:border-[#f2f0eb] transition-all duration-700">
            Read Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
