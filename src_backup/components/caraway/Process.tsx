'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#556b2f] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">The Soil</span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Born from the <span className="italic text-[#556b2f]">Earth.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-black/40 backdrop-blur-md border border-[#556b2f]/30 p-12 rounded-[2rem] rounded-tr-none hover:border-[#556b2f] transition-colors">
            <h3 className="text-3xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>01. Cultivation</h3>
            <p className="text-white/60 font-light leading-relaxed">Grown in mineral-rich, loamy soils without the use of synthetic fertilizers. We rely on ancient crop rotation techniques.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-black/40 backdrop-blur-md border border-[#556b2f]/30 p-12 rounded-[2rem] rounded-bl-none hover:border-[#556b2f] transition-colors mt-0 md:mt-16">
            <h3 className="text-3xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>02. Threshing</h3>
            <p className="text-white/60 font-light leading-relaxed">The umbels are hand-harvested just as they turn brown, then gently threshed to release the crescent-shaped seeds intact.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}