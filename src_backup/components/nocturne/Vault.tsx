'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Chapter I: The Soil',
    origin: 'Piura Blanco',
    notes: 'Green Apple, Almond, Moss',
    price: '$28',
  },
  {
    name: 'Chapter II: The Fire',
    origin: 'Chuno Nicaragua',
    notes: 'Black Cherry, Tobacco, Leather',
    price: '$32',
  },
  {
    name: 'Chapter III: The Night',
    origin: 'Madagascar Sambirano',
    notes: 'Raspberry, Hibiscus, Smoke',
    price: '$35',
  }
];

export default function NocturneVault() {
  return (
    <section id="vault" className="py-40 px-8 relative z-10 bg-[#050505]/60 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto border-t border-[#cfbba0]/20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
        >
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase block mb-6">The Vault</span>
            <h2 className="text-5xl md:text-7xl font-light text-white" style={{ fontFamily: "'Cinzel', serif" }}>
              Current <span className="italic text-[#cfbba0]">Allocations.</span>
            </h2>
          </div>
          <button className="text-[10px] font-bold tracking-[0.4em] uppercase text-white hover:text-[#cfbba0] transition-colors border-b border-[#cfbba0]/50 pb-1 self-start md:self-auto">
            View Archives
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] w-full mb-8 relative border border-[#cfbba0]/10 bg-[#050505]/40 group-hover:border-[#cfbba0]/40 transition-colors duration-700 flex flex-col justify-between p-8">
                <div className="text-right text-[#cfbba0] font-serif text-2xl italic">0{i + 1}</div>
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="inline-block border border-[#cfbba0] text-[#cfbba0] text-[10px] uppercase tracking-[0.3em] px-6 py-2">Acquire</span>
                </div>
                <div className="text-left text-[#cfbba0]/30 font-serif text-5xl">75%</div>
              </div>
              <div className="border-l border-[#cfbba0]/30 pl-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-2xl font-light text-white group-hover:text-[#cfbba0] transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
                    {p.name}
                  </h3>
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-3">{p.origin}</div>
                <p className="text-white/30 text-sm font-light italic mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                  {p.notes}
                </p>
                <div className="text-sm text-white/80">{p.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
