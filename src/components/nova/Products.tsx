'use client';
import { motion } from 'framer-motion';

const collection = [
  { name: 'Zenith 90', origin: 'Colombia · Criollo', notes: 'Violet, volcanic stone, dried cherry folding into a long, mineral finish like sunlit basalt.', weight: '75g', price: '$44', badge: 'Flagship' },
  { name: 'Apex 82', origin: 'Peru · Chuncho Nativo', notes: 'Raw cocoa, damp earth, tobacco leaf and a persistent warmth like an ember in the chest.', weight: '75g', price: '$42', badge: 'Limited' },
  { name: 'Orbit 72', origin: 'Bolivia · Wild Hybrid', notes: 'Bergamot, star anise, raw honey dissolving into a finish like watching a sunset from altitude.', weight: '75g', price: '$38', badge: 'New' },
];

export default function NovaProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#e0e7ff]" /><span className="text-xs font-medium tracking-[0.5em] text-[#e0e7ff] uppercase">The constellation</span></div>
            <h2 className="text-5xl md:text-7xl font-light text-white premium-text-shadow leading-[1.1]" style={{ fontFamily: "'Fraunces', serif" }}>Three altitudes. <br /><span className="italic text-[#e0e7ff]">One sky.</span></h2>
          </div>
          <p className="text-[#8a8fa8] text-[15px] font-light leading-[1.9] max-w-md">Each bar captures a specific elevation — the UV intensity, the mineral profile, the unique stress compounds that only high-altitude cacao produces.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }}
              className="group relative border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-12 flex flex-col transition-all duration-700">
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-[#e0e7ff]/70 border border-[#e0e7ff]/20 px-3 py-1">{p.badge}</span>
              <h3 className="text-3xl md:text-4xl font-light text-white premium-text-shadow mb-2 tracking-wide" style={{ fontFamily: "'Fraunces', serif" }}>{p.name}</h3>
              <span className="text-xs tracking-[0.3em] text-white/25 uppercase mb-8 block">{p.origin}</span>
              <div className="w-full h-[1px] bg-white/[0.06] mb-8 group-hover:bg-[#e0e7ff]/20 transition-colors duration-700" />
              <div className="mb-8 flex-1"><span className="text-[11px] tracking-[0.3em] text-[#e0e7ff]/50 uppercase block mb-3">Tasting notes</span><p className="text-white/50 text-base font-light leading-relaxed italic" style={{ fontFamily: "'Fraunces', serif" }}>&ldquo;{p.notes}&rdquo;</p></div>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.06]"><div><span className="text-2xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Fraunces', serif" }}>{p.price}</span><span className="text-xs text-white/30 ml-2 tracking-wider">{p.weight}</span></div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-[#e0e7ff] border border-[#e0e7ff]/30 px-6 py-3 hover:bg-[#e0e7ff] hover:text-[#0b0b1a] transition-all duration-500">Add to cart</button></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
