'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>The Botanical Collection</h2>
        <div className="flex flex-col gap-6">
          {['Whole Caraway Seed', 'Toasted Rye Blend', 'Aromatic Powder'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex justify-between items-center p-8 bg-black/50 backdrop-blur-md border border-[#556b2f]/20 rounded-2xl hover:border-[#556b2f] transition-all group">
              <h3 className="text-2xl text-white font-light group-hover:text-[#556b2f] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{p}</h3>
              <button className="text-[#556b2f] text-[10px] tracking-widest uppercase border border-[#556b2f] px-6 py-2 rounded-full hover:bg-[#556b2f] hover:text-black transition-colors">Select - $18</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}