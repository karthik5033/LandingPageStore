'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl text-white font-light text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>The Royal Blades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {['Golden Mace Blades', 'Ground Imperial Mace'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-black/40 backdrop-blur-md border border-white/10 p-10 hover:border-[#daa520] transition-all group flex flex-col items-center text-center">
              <h3 className="text-3xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{p}</h3>
              <span className="text-[#daa520] font-serif italic mb-8">$45.00</span>
              <button className="border-b border-[#daa520] text-white uppercase tracking-widest text-xs pb-2 group-hover:text-[#daa520] transition-colors">Add to Cart</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}