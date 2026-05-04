'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'MANGO AURA',
    desc: 'Alphonso mango, turmeric, and wild orange. A radiant immunity shield.',
    price: '$15',
  },
  {
    name: 'GUAVA HEAT',
    desc: 'Pink guava, passionfruit, and a hint of cayenne. The ultimate tropical rush.',
    price: '$16',
  },
  {
    name: 'SOLAR CITRUS',
    desc: 'Blood orange, yuzu, and grapefruit. Sharp, bright, and intensely refreshing.',
    price: '$14',
  }
];

export default function OasisProducts() {
  return (
    <section id="eden" className="relative z-10 py-40 px-6 md:px-20 border-t border-orange-500/10 bg-gradient-to-t from-black/60 to-black/30 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <span className="block text-orange-400 text-[10px] font-black tracking-[0.4em] mb-4 uppercase">
          Welcome To Eden
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          The <span className="text-orange-500">Nectars</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
            className="group relative p-12 bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-[2rem] hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-400/30 transition-colors"></div>
            
            <h3 className="text-lg font-black text-white tracking-[0.2em] mb-4 uppercase relative z-10">{p.name}</h3>
            <p className="text-xs font-medium leading-relaxed text-gray-400 mb-10 flex-grow tracking-widest uppercase relative z-10">{p.desc}</p>
            
            <div className="flex w-full justify-between items-center relative z-10 border-t border-white/10 pt-6">
              <span className="text-sm font-black text-white tracking-widest">{p.price}</span>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors text-white">
                +
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
