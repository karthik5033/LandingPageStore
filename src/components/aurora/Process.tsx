'use client';
import { motion } from 'framer-motion';

export default function AuroraProcess() {
  return (
    <section id="dawn" className="relative z-10 py-48 px-6 bg-gradient-to-b from-black/0 via-black/40 to-black/60">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-yellow-400 text-[10px] font-bold tracking-[0.5em] mb-8 uppercase">
            The Awakening
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Liquid <br/><span className="italic text-yellow-100">Morning.</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light tracking-widest leading-relaxed max-w-2xl mx-auto mb-16 uppercase">
            We harvest our citrus precisely at dawn, when the morning dew is still resting on the rind and the essential oils are at their most volatile, aromatic peak.
          </p>

          <button className="px-14 py-5 border border-yellow-500/30 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-500 rounded-full">
            Experience the Glow
          </button>
        </motion.div>
      </div>
    </section>
  );
}
