'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Cuvée Noir',
    origin: 'Piura Valley, Peru',
    percentage: '85%',
    notes: 'Wild Strawberry, Almond, Vanilla Orchid',
    price: '$26',
  },
  {
    name: 'Cuvée Rouge',
    origin: 'Tumaco, Colombia',
    percentage: '72%',
    notes: 'Dark Cherry, Black Pepper, Oak',
    price: '$24',
  },
  {
    name: 'Cuvée Absolue',
    origin: 'Alto Beni, Bolivia',
    percentage: '100%',
    notes: 'Espresso, Leather, Forest Floor',
    price: '$30',
  }
];

export default function AmbroseCollection() {
  return (
    <section id="collection" className="py-40 px-8 relative z-10 bg-[#140a05]/60 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto border-t border-[#e6cda3]/20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
        >
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase block mb-6">Chapter VIII</span>
            <h2 className="text-5xl md:text-7xl font-normal text-[#f4eee1]" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              The <span className="italic text-[#e6cda3]">Collection.</span>
            </h2>
          </div>
          <button className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#f4eee1] hover:text-[#e6cda3] transition-colors border-b border-[#e6cda3]/50 pb-1 self-start md:self-auto">
            Explore All Vintages
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
              <div className="aspect-[3/4] w-full mb-8 relative border border-[#e6cda3]/10 bg-[#140a05]/40 group-hover:border-[#e6cda3]/40 transition-colors duration-700 flex flex-col items-center justify-center p-8">
                <div className="absolute top-6 left-6 text-[#e6cda3] font-serif text-lg italic">0{i + 1}</div>
                <div className="w-16 h-16 border border-[#e6cda3]/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[#140a05]/80 backdrop-blur-sm absolute z-10">
                  <span className="text-[#e6cda3] text-[10px] uppercase tracking-[0.2em] font-bold">View</span>
                </div>
                <div className="text-center text-[#e6cda3]/20 font-serif text-7xl transition-all duration-700 group-hover:scale-110 group-hover:text-[#e6cda3]/30">{p.percentage}</div>
              </div>
              <div className="border-t border-[#e6cda3]/20 pt-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-2xl font-normal text-[#f4eee1] group-hover:text-[#e6cda3] transition-colors" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                    {p.name}
                  </h3>
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#f4eee1]/50 mb-3">{p.origin}</div>
                <p className="text-[#f4eee1]/40 text-sm font-light italic mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  {p.notes}
                </p>
                <div className="text-sm font-bold text-[#e6cda3]">{p.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
