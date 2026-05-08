'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Madagascar 72%',
    notes: 'Raspberry, Red Currant, Toasted Almond',
    price: '$18',
    image: 'bg-gradient-to-br from-[#2a1314] to-[#0a0a0a]',
  },
  {
    name: 'Venezuela 85%',
    notes: 'Dark Cherry, Leather, Black Pepper',
    price: '$22',
    image: 'bg-gradient-to-br from-[#1a1c23] to-[#0a0a0a]',
  },
  {
    name: 'Peru 68%',
    notes: 'Jasmine, Passionfruit, Wild Honey',
    price: '$20',
    image: 'bg-gradient-to-br from-[#2c2214] to-[#0a0a0a]',
  }
];

export default function AureliaProducts() {
  return (
    <section id="collection" className="py-40 px-8 relative z-10 bg-[#0a0a0a]/50 backdrop-blur-md border-t border-[#c79a52]/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
        >
          <div>
            <span className="text-xs font-semibold tracking-[0.5em] text-[#c79a52] uppercase block mb-6">Chapter IV: The Collection</span>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Core <span className="italic text-[#c79a52]">Library.</span>
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-4 text-xs font-semibold tracking-[0.3em] text-[#c79a52] uppercase hover:text-white transition-colors group">
            <span>View All Vintages</span>
            <div className="w-8 h-[1px] bg-[#c79a52] group-hover:w-12 transition-all duration-500" />
          </a>
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
              <div className={`aspect-[3/4] w-full mb-8 relative overflow-hidden ${p.image} border border-white/5 group-hover:border-[#c79a52]/40 transition-colors duration-700 flex items-center justify-center`}>
                <div className="w-1/2 h-2/3 border border-[#c79a52]/20 relative">
                  <div className="absolute inset-4 border border-[#c79a52]/10 flex items-center justify-center text-[#c79a52]/20 font-serif text-6xl">
                    A
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-normal text-white group-hover:text-[#c79a52] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {p.name}
                </h3>
                <span className="text-sm font-light text-white/50">{p.price}</span>
              </div>
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-semibold">
                {p.notes}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
