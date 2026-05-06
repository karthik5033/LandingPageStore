'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-light text-white text-center mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>The Floral Reserve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {['Alleppey Extra Bold Pods', 'Pure Cardamom Seeds'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/40 backdrop-blur-md border border-[#81c784]/20 p-12 rounded-2xl hover:border-[#81c784] transition-all group text-center">
              <h3 className="text-3xl text-white font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{p}</h3>
              <p className="text-[#81c784] font-serif italic mb-8">$55.00 / 50g</p>
              <button className="border border-[#81c784] text-[#81c784] px-10 py-3 rounded-full text-xs uppercase tracking-widest group-hover:bg-[#81c784] group-hover:text-black transition-colors">Reserve Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}