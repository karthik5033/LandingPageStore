'use client';
import { motion } from 'framer-motion';

const collection = [
  { name: 'Piura Translation', origin: 'Peru · Nacional', notes: 'Tropical fruit, passion flower, and a finish like sun-warmed terracotta.', weight: '75g', price: '$36', badge: 'Flagship' },
  { name: 'Maya Letter', origin: 'Belize · Heirloom Criollo', notes: 'Dried apricot, raw almond, warm Mesoamerican spice and golden honey.', weight: '75g', price: '$40', badge: 'Limited' },
  { name: 'Tanga Dispatch', origin: 'Tanzania · Amelonado', notes: 'Tangerine, passionfruit, and a clean mineral finish like wet limestone.', weight: '75g', price: '$34', badge: 'New' },
];

export default function SomaProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#d2691e]" /><span className="text-xs font-medium tracking-[0.5em] text-[#d2691e] uppercase">The library</span></div>
            <h2 className="text-5xl md:text-7xl font-normal text-[#f5e6d3] leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>Three letters. <br /><span className="italic text-[#d2691e]">One voice.</span></h2>
          </div>
          <p className="text-[#c4956a] text-[15px] font-light leading-[1.9] max-w-md">Each bar is a translation of a specific place and season — unblended, unmodified, faithful to the voice of the bean.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }}
              className="group relative border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-12 flex flex-col transition-all duration-700">
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-[#d2691e]/70 border border-[#d2691e]/20 px-3 py-1">{p.badge}</span>
              <h3 className="text-3xl md:text-4xl font-normal text-[#f5e6d3] mb-2 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
              <span className="text-xs tracking-[0.3em] text-[#f5e6d3]/25 uppercase mb-8 block">{p.origin}</span>
              <div className="w-full h-[1px] bg-white/[0.06] mb-8 group-hover:bg-[#d2691e]/20 transition-colors duration-700" />
              <div className="mb-8 flex-1"><span className="text-[11px] tracking-[0.3em] text-[#d2691e]/50 uppercase block mb-3">Tasting notes</span><p className="text-[#f5e6d3]/50 text-base font-light leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>&ldquo;{p.notes}&rdquo;</p></div>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.06]"><div><span className="text-2xl font-normal text-[#f5e6d3]" style={{ fontFamily: "'Playfair Display', serif" }}>{p.price}</span><span className="text-xs text-[#f5e6d3]/30 ml-2 tracking-wider">{p.weight}</span></div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-[#d2691e] border border-[#d2691e]/30 px-6 py-3 hover:bg-[#d2691e] hover:text-[#f5e6d3] transition-all duration-500">Add to cart</button></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
