'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-light text-white text-center mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>The Orchid Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: 'Grade A Beans', p: '$45.00', d: 'Two impossibly plump, moist Madagascar Bourbon beans.' },
            { n: 'Pure Paste', p: '$65.00', d: 'Thick, caviar-rich paste for baking perfection.' },
            { n: 'Double Fold Extract', p: '$80.00', d: 'Aged in oak barrels for 12 months. Double strength.' }
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-black/50 backdrop-blur-md border-t border-[#f3e5ab]/40 p-12 hover:bg-black/80 transition-colors text-center">
              <h3 className="text-2xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{p.n}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed mb-8">{p.d}</p>
              <span className="text-[#f3e5ab] font-serif italic text-lg block mb-8">{p.p}</span>
              <button className="border-b border-white/30 pb-2 text-white/70 uppercase tracking-widest text-xs hover:text-[#f3e5ab] hover:border-[#f3e5ab] transition-colors">Select</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}