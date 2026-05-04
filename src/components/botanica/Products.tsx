'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'CITRUS AWAKENING',
    desc: 'Sicilian lemon, wild ginger, and echinacea. A potent morning elixir.',
    price: '$12',
  },
  {
    name: 'EMERALD CANOPY',
    desc: 'Kale, spirulina, cucumber, and green apple. Deep cellular hydration.',
    price: '$14',
  },
  {
    name: 'CRIMSON ROOT',
    desc: 'Beetroot, pomegranate, and burdock. Rich in cardiovascular antioxidants.',
    price: '$14',
  }
];

export default function BotanicaProducts() {
  return (
    <section id="apothecary" className="relative z-10 py-40 px-6 md:px-24 border-t border-white/10 bg-gradient-to-t from-black/80 to-black/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-32"
      >
        <span className="block text-green-400 text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">
          The Apothecary
        </span>
        <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Liquid <span className="italic text-gray-400">Vitality</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="group relative p-16 border border-white/10 bg-black/40 backdrop-blur-md hover:border-green-400/50 transition-all duration-700 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-light text-white tracking-[0.2em] mb-6 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
            <p className="text-sm font-light leading-relaxed text-gray-400 mb-12 flex-grow">{p.desc}</p>
            
            <div className="flex flex-col items-center gap-8 mt-auto">
              <span className="text-sm font-light text-green-400 tracking-widest">{p.price}</span>
              <button className="text-[10px] font-bold tracking-[0.3em] uppercase text-white border-b border-white/30 pb-2 group-hover:border-green-400 group-hover:text-green-400 transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
