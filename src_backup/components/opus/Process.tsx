'use client';
import { motion } from 'framer-motion';

export default function OpusProcess() {
  return (
    <section id="art" className="py-48 relative z-20 ">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-3xl mx-auto"
        >
          <span className="block text-[#a3a3a3] text-[9px] tracking-[0.5em] mb-8 uppercase font-light">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl text-[#f5f5f0] mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Perfect <br/>
            <span className="italic text-[#a3a3a3]">Pour.</span>
          </h2>
          <p className="text-[#a3a3a3]/80 text-[11px] font-light tracking-widest leading-relaxed mb-16 uppercase">
            We don't just pour coffee; we compose it. The precise amalgamation of milk and espresso requires not just technique, but an obsession with perfection. The result is a liquid masterpiece.
          </p>

          <button className="px-12 py-4 border border-[#f5f5f0]/30 text-[#f5f5f0] text-[9px] font-light tracking-[0.4em] uppercase hover:bg-[#f5f5f0] hover:text-[#050505] hover:border-[#f5f5f0] transition-all duration-700">
            Learn Our Technique
          </button>
        </motion.div>
      </div>
    </section>
  );
}
