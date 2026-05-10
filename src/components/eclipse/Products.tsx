'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Midnight Reserve',
    origin: 'Piura, Peru',
    percentage: '90%',
    notes: 'Blackberry, Smoke, Leather',
    price: '$24',
    bg: 'bg-gradient-to-b from-[#1a0a0b] to-[#030303]',
  },
  {
    name: 'Crimson Canopy',
    origin: 'Tumaco, Colombia',
    percentage: '82%',
    notes: 'Wild Cherry, Cinnamon, Oak',
    price: '$22',
    bg: 'bg-gradient-to-b from-[#240d0f] to-[#030303]',
  },
  {
    name: 'Obsidian Raw',
    origin: 'Alto Beni, Bolivia',
    percentage: '100%',
    notes: 'Espresso, Earth, Tannin',
    price: '$28',
    bg: 'bg-gradient-to-b from-[#111111] to-[#030303]',
  }
];

export default function EclipseProducts() {
  return (
    <section id="collection" className="py-40 px-8 relative z-10 bg-[#030303]/30 backdrop-blur-sm border-t border-[#8f1722]/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
        >
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#8f1722] uppercase block mb-6">The Boutique</span>
            <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Current <span className="italic text-[#8f1722]">Allocations.</span>
            </h2>
          </div>
          <button className="text-xs font-semibold tracking-[0.3em] uppercase text-white hover:text-[#8f1722] transition-colors border-b border-[#8f1722] pb-1 inline-block self-start md:self-auto">
            View Archives
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/5] w-full mb-8 relative overflow-hidden ${p.bg} border border-[#8f1722]/10 group-hover:border-[#8f1722]/50 transition-colors duration-700 flex items-center justify-center`}>
                <div className="w-1/2 h-1/2 border border-[#8f1722]/20 relative flex items-center justify-center bg-[#030303]/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
                  <div className="text-[#8f1722]/40 font-serif text-5xl">
                    {p.percentage}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-normal text-white group-hover:text-[#8f1722] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {p.name}
                </h3>
                <span className="text-sm font-light text-white/50">{p.price}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/40 tracking-[0.2em] uppercase font-bold">{p.origin}</span>
              </div>
              <p className="mt-4 text-white/30 text-sm font-light italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {p.notes}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
