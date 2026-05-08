'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-16">The Harvest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Pure Ground Sumac', 'Za\'atar Blend', 'Sumac Berries'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/50 backdrop-blur-md border border-white/5 p-10 hover:border-[#800000] transition-colors group">
              <h3 className="text-2xl text-white font-bold uppercase mb-4 group-hover:text-[#800000]">{p}</h3>
              <p className="text-white/50 mb-8">$16.00</p>
              <button className="w-full py-3 bg-[#800000] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#800000] transition-colors">Select</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}