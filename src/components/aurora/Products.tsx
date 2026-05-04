'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'DAYBREAK',
    desc: 'Valencia orange, ginger, and Meyer lemon. A sharp, luminous kickstart.',
    price: '$12',
  },
  {
    name: 'GOLDEN HOUR',
    desc: 'Pineapple, turmeric, and sea buckthorn. Deep, sweet, and incredibly anti-inflammatory.',
    price: '$14',
  },
  {
    name: 'TWILIGHT YUZU',
    desc: 'Japanese yuzu, white grapefruit, and mint. An ethereal, sophisticated finish.',
    price: '$15',
  }
];

export default function AuroraProducts() {
  return (
    <section id="nectar" className="relative z-10 py-40 px-6 md:px-20 border-t border-yellow-500/10 bg-gradient-to-t from-black/60 to-black/30 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-32"
      >
        <span className="block text-yellow-400 text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">
          The Collection
        </span>
        <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Bottled <span className="italic text-yellow-200">Light</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="group relative p-12 bg-black/20 backdrop-blur-lg border border-white/5 rounded-2xl hover:border-yellow-500/40 hover:bg-yellow-500/[0.02] transition-all duration-700 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-light text-white tracking-[0.2em] mb-4 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
            <p className="text-xs font-light leading-relaxed text-gray-400 mb-12 flex-grow tracking-wide">{p.desc}</p>
            
            <div className="flex flex-col items-center gap-6 mt-auto">
              <span className="text-sm font-light text-yellow-400 tracking-widest">{p.price}</span>
              <button className="text-[10px] font-bold tracking-[0.3em] uppercase text-white border-b border-white/20 pb-2 group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors">
                Add to Box
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
