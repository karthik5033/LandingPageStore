'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "CYBER PUNCH",
    price: "$29.99 / CASE",
    desc: "Yuzu, Dragonfruit & Taurine Protocol.",
    accent: "bg-[#ccff00]"
  },
  {
    name: "NEON CITRUS",
    price: "$29.99 / CASE",
    desc: "Grapefruit, Lime & L-Theanine Core.",
    accent: "bg-cyan-400"
  },
  {
    name: "VOID BERRY",
    price: "$32.99 / CASE",
    desc: "Blackberry, Açaí & Guarana Matrix.",
    accent: "bg-fuchsia-500"
  }
];

export default function Products() {
  return (
    <section id="loadout" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#ccff00] uppercase mb-4 block">
              [REQ.LOADOUT]
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Select Your <span className="text-white/40">Payload.</span>
            </h2>
          </div>
          <button className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#ccff00] border border-[#ccff00]/30 px-8 py-3 hover:bg-[#ccff00] hover:text-black transition-all duration-300 uppercase">
            Initialize Store
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="group relative p-8 bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#ccff00] transition-colors duration-300 font-mono"
            >
              <div className="flex justify-between items-start mb-16">
                <div className={`w-2 h-2 rounded-none ${product.accent} shadow-[0_0_10px_currentColor]`} />
                <span className="text-xs text-[#ccff00] font-bold">{product.price}</span>
              </div>
              
              <h3 className="text-2xl font-black tracking-tight text-white mb-2 uppercase">
                {product.name}
              </h3>
              <p className="text-sm font-sans font-light text-white/50 mb-10">
                {product.desc}
              </p>
              
              <button className="w-full py-4 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-white group-hover:bg-[#ccff00] group-hover:text-black transition-all duration-300 uppercase">
                Acquire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
