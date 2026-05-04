'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'BLANC',
    desc: 'Vanilla bean infused white chocolate with a delicate floral finish.',
    price: '$22',
  },
  {
    name: 'LAIT',
    desc: 'Silky 45% milk chocolate with notes of caramelized honey and malt.',
    price: '$24',
  },
  {
    name: 'NOIR SATIN',
    desc: 'Our signature 70% dark. Impossibly smooth with hints of red berry.',
    price: '$26',
  }
];

export default function SilkProducts() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <span className="block text-[#c8a97e] text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">
          The Silk Collection
        </span>
        <h2 className="text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Curated <span className="italic text-[#e8d5c4]">Elegance</span>
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
            className="group relative p-12 border border-[#c8a97e]/20 bg-[#1a110a]/40 backdrop-blur-sm hover:bg-[#1a110a]/80 transition-all duration-500 rounded-lg flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-normal text-white tracking-widest mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
            <p className="text-sm font-light leading-relaxed text-[#a89584] mb-8 flex-grow">{p.desc}</p>
            
            <div className="flex flex-col items-center gap-4 mt-auto">
              <span className="text-lg font-light text-[#e8d5c4]">{p.price}</span>
              <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c8a97e] border-b border-[#c8a97e]/30 pb-1 group-hover:border-[#c8a97e] transition-colors">
                Discover
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
