'use client';
import { motion } from 'framer-motion';
import { Leaf, Wind, Sun } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-12">
          {[ { i: Leaf, t: 'Volatile Oils', d: 'High carvone content for that distinct rye-bread aroma.' },
             { i: Wind, t: 'Air Dried', d: 'Slowly cured in open barns to preserve essential compounds.' },
             { i: Sun, t: 'Wild Harvested', d: 'Sourced from the untamed edges of European forests.' } ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex gap-6 items-start bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/5">
              <f.i className="text-[#556b2f] flex-shrink-0" size={32} strokeWidth={1} />
              <div>
                <h4 className="text-xl text-white font-serif mb-2">{f.t}</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">{f.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 w-full flex justify-center">
          <div className="w-72 h-72 rounded-full border border-[#556b2f]/40 flex items-center justify-center relative bg-black/20 backdrop-blur-sm">
            <div className="absolute inset-4 border border-[#556b2f]/20 rounded-full animate-pulse" />
            <span className="text-3xl text-white font-light text-center" style={{ fontFamily: "'Playfair Display', serif" }}>100%<br/><span className="text-[#556b2f] text-sm tracking-widest uppercase font-sans">Organic</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}