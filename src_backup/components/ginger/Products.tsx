'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-light text-white mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>The Root Collection</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {['Finely Milled Powder', 'Crystallized Chunks'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="w-full md:w-80 bg-black/50 backdrop-blur-md border border-[#ffcc80]/20 p-12 hover:bg-[#ffcc80]/10 transition-colors rounded-3xl">
              <h3 className="text-2xl text-white font-serif mb-6">{p}</h3>
              <span className="text-[#ffcc80] font-serif italic text-xl block mb-8">$18.00</span>
              <button className="w-full border border-[#ffcc80] text-[#ffcc80] uppercase tracking-widest text-xs py-3 rounded-full hover:bg-[#ffcc80] hover:text-black transition-colors">Select</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}