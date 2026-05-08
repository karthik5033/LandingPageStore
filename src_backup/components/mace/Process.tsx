'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-[#daa520] text-xs font-bold tracking-[0.6em] uppercase mb-6 block">The Golden Aril</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Delicate <span className="italic text-[#daa520]">Extraction.</span>
          </h2>
        </motion.div>
        <div className="flex justify-center mb-16">
          <div className="w-px h-24 bg-gradient-to-b from-[#daa520] to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { t: 'The Harvest', d: 'Only perfectly ripe nutmeg fruits are selected, naturally split open.' },
            { t: 'The Separation', d: 'The crimson lacy aril (mace) is painstakingly peeled by hand from the nutmeg seed.' },
            { t: 'The Curing', d: 'Dried for months until the fiery crimson fades to a royal, brittle gold.' }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-black/30 backdrop-blur-md p-8 border border-[#daa520]/20 text-center hover:border-[#daa520] transition-colors rounded-sm">
              <span className="text-[#daa520] font-serif italic text-xl mb-4 block">Stage {i+1}</span>
              <h3 className="text-xl text-white font-serif mb-4">{s.t}</h3>
              <p className="text-white/60 font-light text-sm">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}