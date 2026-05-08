'use client';
import { motion } from 'framer-motion';

const collection = [
  { name: 'Pulse 88', origin: 'Ecuador · Nacional Arriba', notes: 'Mango, passionfruit, bright Sauvignon Blanc acidity and a clean citrus finish.', weight: '75g', price: '$36', badge: 'Flagship' },
  { name: 'Surge 78', origin: 'Venezuela · Criollo', notes: 'Toasted hazelnut, dark honey, a long butterscotch warmth with zero bitterness.', weight: '75g', price: '$40', badge: 'Limited' },
  { name: 'Volt 70', origin: 'Madagascar · Trinitario', notes: 'Yuzu zest, pink pepper, crystallised ginger over a sharp, electric dark body.', weight: '75g', price: '$34', badge: 'New' },
];

export default function VortexProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#ccff00]" /><span className="text-xs font-medium tracking-[0.5em] text-[#ccff00] uppercase">The frequency range</span></div>
            <h2 className="text-5xl md:text-7xl font-normal text-white leading-[1.1]" style={{ fontFamily: "'Krona One', sans-serif" }}>Three origins. <span className="italic text-[#ccff00]">One velocity.</span></h2>
          </div>
          <p className="text-white/50 text-[15px] font-light leading-[1.9] max-w-md">Each bar captures the kinetic fingerprint of a specific origin — extracted at full speed, delivered without friction.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }}
              className="group relative border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-12 flex flex-col hover:border-white/20 transition-all duration-700 rounded-xl">
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-[#ccff00]/70 border border-[#ccff00]/20 px-3 py-1">{p.badge}</span>
              <h3 className="text-3xl md:text-4xl font-normal text-white mb-2 tracking-wide" style={{ fontFamily: "'Krona One', sans-serif" }}>{p.name}</h3>
              <span className="text-xs tracking-[0.3em] text-white/25 uppercase mb-8 block">{p.origin}</span>
              <div className="w-full h-[1px] bg-white/[0.06] mb-8 group-hover:bg-[#ccff00]/20 transition-colors duration-700" />
              <div className="mb-8 flex-1"><span className="text-[11px] tracking-[0.3em] text-[#ccff00]/50 uppercase block mb-3">Tasting notes</span><p className="text-white/50 text-base font-light leading-relaxed italic">&ldquo;{p.notes}&rdquo;</p></div>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.06]"><div><span className="text-2xl font-light text-white">{p.price}</span><span className="text-xs text-white/30 ml-2 tracking-wider">{p.weight}</span></div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-[#ccff00] border border-[#ccff00]/30 px-6 py-3 hover:bg-[#ccff00] hover:text-[#0d0d0d] transition-all duration-500">Add to cart</button></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
