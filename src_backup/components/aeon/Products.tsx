'use client';
import { motion } from 'framer-motion';

const collection = [
  { name: 'Epoch 100', origin: 'Venezuela · Heirloom Criollo', notes: 'Aged rum, tanned leather, dried fig folding into a persistent warmth like embers.', weight: '75g', price: '$58', badge: 'Flagship' },
  { name: 'Relic 85', origin: 'Peru · Wild Nacional', notes: 'Forest floor, wild mushroom, raw honeycomb and the tannic depth of old Burgundy.', weight: '75g', price: '$52', badge: 'Limited' },
  { name: 'Vestige 72', origin: 'Mexico · Ancient Criollo', notes: 'Bitter earth, chilli warmth, copal incense recalling the original ceremonial xocolatl.', weight: '75g', price: '$48', badge: 'Heritage' },
];

export default function AeonProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#c5a059]" /><span className="text-xs font-medium tracking-[0.5em] text-[#c5a059] uppercase">The vault</span></div>
            <h2 className="text-5xl md:text-7xl font-normal text-[#f4f1ea] leading-[1.1]" style={{ fontFamily: "'Cinzel', serif" }}>Three relics. <br /><span className="italic text-[#c5a059]">One lineage.</span></h2>
          </div>
          <p className="text-[#a89080] text-[15px] font-light leading-[1.9] max-w-md">Each bar is a time capsule — aged for six months, sourced from century-old trees, and presented with a provenance certificate tracing its genetic lineage.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }}
              className="group relative border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-12 flex flex-col hover:border-white/20 transition-all duration-700 rounded-xl">
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-[#c5a059]/70 border border-[#c5a059]/20 px-3 py-1">{p.badge}</span>
              <h3 className="text-3xl md:text-4xl font-normal text-[#f4f1ea] mb-2 tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>{p.name}</h3>
              <span className="text-xs tracking-[0.3em] text-[#f4f1ea]/25 uppercase mb-8 block">{p.origin}</span>
              <div className="w-full h-[1px] bg-white/[0.06] mb-8 group-hover:bg-[#c5a059]/20 transition-colors duration-700" />
              <div className="mb-8 flex-1"><span className="text-[11px] tracking-[0.3em] text-[#c5a059]/50 uppercase block mb-3">Tasting notes</span><p className="text-[#f4f1ea]/50 text-base font-light leading-relaxed italic" style={{ fontFamily: "'Cinzel', serif" }}>&ldquo;{p.notes}&rdquo;</p></div>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.06]"><div><span className="text-2xl font-normal text-[#f4f1ea]" style={{ fontFamily: "'Cinzel', serif" }}>{p.price}</span><span className="text-xs text-[#f4f1ea]/30 ml-2 tracking-wider">{p.weight}</span></div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-[#c5a059] border border-[#c5a059]/30 px-6 py-3 hover:bg-[#c5a059] hover:text-[#1c1c1c] transition-all duration-500">Add to cart</button></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
