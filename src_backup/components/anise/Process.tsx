'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="w-full max-w-4xl border border-[#4b0082]/30 p-16 md:p-32 rounded-[3rem] text-center bg-black/60 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#4b0082]/20 rounded-full blur-[100px]" />
          <span className="text-[#9370db] text-xs font-bold tracking-[0.6em] uppercase mb-8 block">The Midnight Harvest</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Plucked by <span className="italic text-[#9370db]">Moonlight.</span>
          </h2>
          <p className="text-white/50 font-light leading-relaxed text-lg max-w-xl mx-auto">
            The star-shaped pods are harvested exclusively at night when the temperature drops, preventing the highly volatile licorice-scented essential oils from evaporating in the sun.
          </p>
        </motion.div>
      </div>
    </section>
  );
}