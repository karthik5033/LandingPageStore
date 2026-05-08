'use client';
import { motion } from 'framer-motion';

const collection = [
  { name: 'Sentinel 85', origin: 'Trinidad · Trinitario', notes: 'Clove, cinnamon, toasted breadcrumbs folding into a warm, nutty finish.', weight: '75g', price: '$38', badge: 'Flagship' },
  { name: 'Bastion 78', origin: 'Bolivia · Beniano', notes: 'Dried meat, leather, roasted barley and a persistent savoury warmth.', weight: '75g', price: '$42', badge: 'Limited' },
  { name: 'Aegis 72', origin: 'Indonesia · Forestero', notes: 'Burnt sugar, black sesame, a long finish of charred hardwood.', weight: '75g', price: '$36', badge: 'New' },
];

export default function ValorProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#94a3b8]" /><span className="text-xs font-medium tracking-[0.5em] text-[#94a3b8] uppercase">The armoury</span></div>
            <h2 className="text-5xl md:text-7xl font-normal text-white premium-text-shadow leading-[1.1]" style={{ fontFamily: "'Cinzel', serif" }}>Three shields. <br /><span className="italic text-[#94a3b8]">One standard.</span></h2>
          </div>
          <p className="text-[#94a3b8] text-[15px] font-light leading-[1.9] max-w-md">Each bar is forged from a single origin, processed through our invariant protocol. No blending. No correction. The bean stands or falls on its own merit.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }}
              className="group relative border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-12 flex flex-col transition-all duration-700">
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-[#94a3b8]/70 border border-[#94a3b8]/20 px-3 py-1">{p.badge}</span>
              <h3 className="text-3xl md:text-4xl font-normal text-white premium-text-shadow mb-2 tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>{p.name}</h3>
              <span className="text-xs tracking-[0.3em] text-white/25 uppercase mb-8 block">{p.origin}</span>
              <div className="w-full h-[1px] bg-white/[0.06] mb-8 group-hover:bg-[#94a3b8]/20 transition-colors duration-700" />
              <div className="mb-8 flex-1"><span className="text-[11px] tracking-[0.3em] text-[#94a3b8]/50 uppercase block mb-3">Tasting notes</span><p className="text-white/50 text-base font-light leading-relaxed italic" style={{ fontFamily: "'Cinzel', serif" }}>&ldquo;{p.notes}&rdquo;</p></div>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.06]"><div><span className="text-2xl font-normal text-white premium-text-shadow" style={{ fontFamily: "'Cinzel', serif" }}>{p.price}</span><span className="text-xs text-white/30 ml-2 tracking-wider">{p.weight}</span></div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-[#94a3b8] border border-[#94a3b8]/30 px-6 py-3 hover:bg-[#94a3b8] hover:text-[#020617] transition-all duration-500">Add to cart</button></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
