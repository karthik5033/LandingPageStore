'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl text-white font-light text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>Pantry Staples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {['Toasted Garlic Granules', 'Fine Garlic Powder'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-black/40 backdrop-blur-sm border border-white/10 p-10 flex flex-col md:flex-row justify-between items-center hover:border-[#f5f5dc] transition-colors">
              <h3 className="text-2xl text-white font-serif mb-4 md:mb-0">{p}</h3>
              <div className="flex items-center gap-6">
                <span className="text-[#f5f5dc] italic font-serif">$14.00</span>
                <button className="border-b border-[#f5f5dc] text-[#f5f5dc] uppercase tracking-widest text-xs pb-1">Select</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}