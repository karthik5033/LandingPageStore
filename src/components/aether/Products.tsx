'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'TITANIUM CHRONO',
    desc: 'Matte black dial, super-luminova hands, and a grade 5 titanium bracelet.',
    price: '$4,200',
  },
  {
    name: 'STEALTH GMT',
    desc: 'Dual time-zone complication encased in forged carbon fiber.',
    price: '$5,800',
  },
  {
    name: 'LUNA PHASE',
    desc: 'Intricate moonphase complication against a midnight blue aventurine dial.',
    price: '$7,500',
  }
];

export default function AetherProducts() {
  return (
    <section id="collection" className="relative z-10 py-32 px-6 md:px-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-32"
      >
        <span className="block text-gray-500 text-[9px] font-bold tracking-[0.4em] mb-4 uppercase">
          The Genesis Collection
        </span>
        <h2 className="text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Precision <span className="italic text-gray-400">Timepieces</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="group relative p-12 border border-white/10 bg-black/40 backdrop-blur-md hover:bg-white/5 transition-all duration-700 rounded-sm flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-light text-white tracking-[0.2em] mb-6 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
            <p className="text-xs font-light leading-relaxed text-gray-500 mb-12 flex-grow">{p.desc}</p>
            
            <div className="flex flex-col items-center gap-6 mt-auto">
              <span className="text-sm font-light text-gray-300 tracking-widest">{p.price}</span>
              <button className="text-[9px] font-bold tracking-[0.3em] uppercase text-white border-b border-white/30 pb-2 group-hover:border-white transition-colors">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
