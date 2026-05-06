'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-16">The Reserve Vault</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {['Imperial Black Corns', 'Smoked White Pepper'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/60 backdrop-blur-md border border-[#424242] p-16 hover:border-white transition-colors group">
              <h3 className="text-3xl text-white font-black uppercase tracking-tighter mb-4">{p}</h3>
              <p className="text-white/40 text-sm mb-8">Vacuum-sealed in dark glass to prevent UV degradation.</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-8 mt-8">
                <span className="text-[#424242] text-2xl font-bold">$35.00</span>
                <button className="bg-white text-black font-bold uppercase tracking-widest text-xs px-8 py-3 group-hover:bg-[#424242] group-hover:text-white transition-colors">Acquire</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}