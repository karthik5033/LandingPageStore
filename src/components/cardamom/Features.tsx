'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row bg-gradient-to-br from-black/80 to-black/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
          <div className="flex-1 p-12 md:p-20 border-b md:border-b-0 md:border-r border-white/5">
            <h2 className="text-4xl font-light text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Beyond the <span className="italic text-[#81c784]">Pod.</span></h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">Most commercial cardamom is pale, bleached, and devoid of essential oils. True Extra Bold cardamom is plump, vividly green, and so intensely aromatic that a single crushed pod can perfume an entire room.</p>
          </div>
          <div className="flex-1 grid grid-cols-2">
            <div className="p-12 border-b border-r border-white/5 flex flex-col justify-center items-center text-center">
              <span className="text-[#81c784] text-4xl mb-2 font-serif">8mm+</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Pod Diameter</span>
            </div>
            <div className="p-12 border-b border-white/5 flex flex-col justify-center items-center text-center">
              <span className="text-[#81c784] text-4xl mb-2 font-serif">10%</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Oil Content</span>
            </div>
            <div className="p-12 border-r border-white/5 flex flex-col justify-center items-center text-center">
              <span className="text-[#81c784] text-4xl mb-2 font-serif">Zero</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Bleaching</span>
            </div>
            <div className="p-12 flex flex-col justify-center items-center text-center">
              <span className="text-[#81c784] text-4xl mb-2 font-serif">100%</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Hand Sorted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}