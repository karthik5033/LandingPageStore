'use client';
import { motion } from 'framer-motion';

const collection = [
  { name: 'Unit 01 — Chuao', origin: 'Venezuela · Criollo', notes: 'Violet, dried cherry, roasted almond folding into a long tannic finish like aged Barolo.', weight: '100g', price: '$48', badge: 'Flagship' },
  { name: 'Unit 02 — Soconusco', origin: 'Mexico · Criollo Antiguo', notes: 'Cinnamon bark, mild chilli warmth, a deep smoky sweetness recalling the original xocolatl.', weight: '100g', price: '$52', badge: 'Limited' },
  { name: 'Unit 03 — Sambirano', origin: 'Madagascar · Trinitario', notes: 'Sharp citrus acidity, yuzu zest, crystallised ginger and a brittle, architectural snap.', weight: '100g', price: '$44', badge: 'New' },
];

export default function ObeliskProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-white/40" /><span className="text-xs font-medium tracking-[0.5em] text-white/60 uppercase">The archive</span></div>
            <h2 className="text-5xl md:text-7xl font-normal text-white premium-text-shadow leading-[1.1]" style={{ fontFamily: "'Syncopate', sans-serif" }}>Three units. <span className="italic text-white/30">One standard.</span></h2>
          </div>
          <p className="text-white/40 text-[15px] font-light leading-[1.9] max-w-md">Each unit is a structural monolith — a single origin, processed through our invariant fabrication pipeline. No correction. No compromise.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }}
              className="group relative border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-12 flex flex-col transition-all duration-700">
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-white/40 border border-white/10 px-3 py-1">{p.badge}</span>
              <h3 className="text-3xl md:text-4xl font-normal text-white premium-text-shadow mb-2 tracking-wide" style={{ fontFamily: "'Syncopate', sans-serif" }}>{p.name}</h3>
              <span className="text-xs tracking-[0.3em] text-white/20 uppercase mb-8 block">{p.origin}</span>
              <div className="w-full h-[1px] bg-white/[0.04] mb-8 group-hover:bg-white/10 transition-colors duration-700" />
              <div className="mb-8 flex-1"><span className="text-[11px] tracking-[0.3em] text-white/30 uppercase block mb-3">Tasting notes</span><p className="text-white/40 text-base font-light leading-relaxed italic">&ldquo;{p.notes}&rdquo;</p></div>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.04]">
                <div><span className="text-2xl font-normal text-white premium-text-shadow">{p.price}</span><span className="text-xs text-white/20 ml-2 tracking-wider">{p.weight}</span></div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-white premium-text-shadow border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500">Add to cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
