'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-light text-white text-center mb-16 bg-black/30 backdrop-blur-sm inline-block px-12 py-4 rounded-full" style={{ fontFamily: "'Playfair Display', serif" }}>The Blends</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {['Garam Masala', 'Chaat Masala', 'Tandoori Blend'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-black/60 backdrop-blur-md border border-white/10 p-10 hover:border-[#e2725b] transition-colors rounded-xl w-full md:w-80 text-center">
              <h3 className="text-2xl text-white font-serif mb-4">{p}</h3>
              <p className="text-[#e2725b] mb-8 font-serif italic">$20.00</p>
              <button className="text-[10px] uppercase tracking-widest text-white/50 hover:text-[#e2725b] transition-colors">Add to Bag</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}