'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'NOCTURNE',
    type: '85% Cacao',
    desc: 'Our signature dark. Notes of black cherry, espresso, and aged oak.',
    price: '$24',
    bg: 'from-[#1a100c] to-[#0a0503]'
  },
  {
    name: 'ECLIPSE',
    type: '92% Cacao',
    desc: 'Pure intensity. Savory undertones with a hint of smoked sea salt.',
    price: '$28',
    bg: 'from-[#0f0a08] to-[#050302]'
  },
  {
    name: 'MIDNIGHT',
    type: '100% Cacao',
    desc: 'For the purist. Unsweetened, raw power. Notes of earth and leather.',
    price: '$32',
    bg: 'from-[#000000] to-[#000000]'
  }
];

export default function ObsidianProducts() {
  return (
    <section id="obsidianproducts" className="relative z-10 py-32 px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-center mb-24"
      >
        <span className="block text-[#a67c52] text-xs font-bold tracking-[0.4em] mb-4 uppercase">
          The Collection
        </span>
        <h2 className="text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Curated <span className="italic">Darkness</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-10%' }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className={`group relative p-12 overflow-hidden border border-[#a67c52]/10 hover:border-[#a67c52]/50 transition-all duration-700 bg-gradient-to-br ${p.bg}`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#a67c52]/10 to-transparent transition-opacity duration-700" />
            
            <span className="block text-[10px] tracking-[0.3em] text-[#8c7f75] mb-2 uppercase">{p.type}</span>
            <h3 className="text-3xl font-bold text-white tracking-widest mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
            <p className="text-sm leading-relaxed text-[#a09085] mb-12 min-h-[60px]">{p.desc}</p>
            
            <div className="flex justify-between items-center mt-auto border-t border-[#a67c52]/20 pt-6">
              <span className="text-lg font-light text-[#e6dbd1]">{p.price}</span>
              <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a67c52] group-hover:text-white transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
