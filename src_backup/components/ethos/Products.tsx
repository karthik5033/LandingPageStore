'use client';
import { motion } from 'framer-motion';

const collection = [
  { name: 'Tumaco 72', origin: 'Colombia · Fino de Aroma', notes: 'Passion fruit, jasmine, a silky caramel body with lingering warmth.', weight: '75g', price: '$14', badge: 'Core', cost: 'Farmer $4.20/kg · Ship $0.80 · Process $6.40 · Pack $0.60 · Margin $2.00' },
  { name: 'Kilombero 68', origin: 'Tanzania · Amelonado', notes: 'Black tea, dried plum, a clean finish with gentle spice.', weight: '75g', price: '$14', badge: 'Core', cost: 'Farmer $3.90/kg · Ship $1.10 · Process $6.40 · Pack $0.60 · Margin $2.00' },
  { name: 'Davao 75', origin: 'Philippines · Trinitario', notes: 'Tropical fruit, coconut cream, galangal and a bright citrus acidity.', weight: '75g', price: '$14', badge: 'New', cost: 'Farmer $4.50/kg · Ship $0.90 · Process $6.40 · Pack $0.60 · Margin $1.60' },
];

export default function EthosProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#1a1a1a]" /><span className="text-xs font-medium tracking-[0.5em] text-[#1a1a1a]/60 uppercase">The open ledger</span></div>
            <h2 className="text-5xl md:text-7xl font-light text-[#1a1a1a] leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Three origins. <span className="italic text-[#1a1a1a]/40">Full disclosure.</span></h2>
          </div>
          <p className="text-[#1a1a1a]/50 text-[15px] font-light leading-[1.9] max-w-md">Every bar is priced identically. Every cost is published. The only variable is the farmer payment — which we adjust upward to reflect local living costs.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }}
              className="group relative border border-black/10 bg-white/60 backdrop-blur-md p-10 md:p-12 flex flex-col hover:border-black/20 transition-all duration-700 rounded-xl">
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/40 border border-[#1a1a1a]/10 px-3 py-1">{p.badge}</span>
              <h3 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-2 tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
              <span className="text-xs tracking-[0.3em] text-[#1a1a1a]/25 uppercase mb-6 block">{p.origin}</span>
              <div className="w-full h-[1px] bg-[#1a1a1a]/[0.06] mb-6 group-hover:bg-[#1a1a1a]/10 transition-colors duration-700" />
              <div className="mb-4"><span className="text-[11px] tracking-[0.3em] text-[#1a1a1a]/30 uppercase block mb-3">Tasting notes</span><p className="text-[#1a1a1a]/50 text-base font-light leading-relaxed italic">&ldquo;{p.notes}&rdquo;</p></div>
              <div className="mb-8 flex-1"><span className="text-[11px] tracking-[0.3em] text-[#1a1a1a]/30 uppercase block mb-3">Cost breakdown</span><p className="text-[#1a1a1a]/40 text-xs font-light leading-relaxed font-mono">{p.cost}</p></div>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-[#1a1a1a]/[0.06]"><div><span className="text-2xl font-light text-[#1a1a1a]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.price}</span><span className="text-xs text-[#1a1a1a]/30 ml-2 tracking-wider">{p.weight}</span></div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-[#fafaf8] bg-[#1a1a1a] px-6 py-3 hover:bg-[#1a1a1a]/80 transition-all duration-500">Add to cart</button></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
