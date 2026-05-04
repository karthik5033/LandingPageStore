'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "Ethiopia Yirgacheffe",
    notes: "Jasmine / Bergamot / Honey",
    desc: "A bright, tea-like body with intense floral aromatics. Light roast, washed process.",
    price: "$28"
  },
  {
    name: "Colombia Supremo",
    notes: "Dark Chocolate / Caramel / Plum",
    desc: "Rich, full-bodied, and deeply satisfying. A classic medium roast with a velvety finish.",
    price: "$26"
  },
  {
    name: "Sumatra Mandheling",
    notes: "Earthy / Cedar / Dark Cocoa",
    desc: "Heavy, syrupy body with minimal acidity. A robust dark roast for the purist.",
    price: "$32"
  }
];

export default function VelvetProducts() {
  return (
    <section id="reserve" className="py-40 relative z-20 border-t border-[#d4af37]/10 bg-gradient-to-t from-[#0a0806]/80 to-[#0a0806]/20 backdrop-blur-md">
      <div className="container mx-auto px-8 md:px-16">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase mb-4 block">
              Private Reserve
            </span>
            <h2 className="text-5xl md:text-6xl text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The <span className="italic text-[#d4af37]">Collection</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-12 bg-black/40 border border-white/5 hover:border-[#d4af37]/40 transition-all duration-700 flex flex-col items-center text-center rounded-sm"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-2xl text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {product.name}
              </h3>
              <p className="text-[#d4af37] text-[10px] tracking-[0.2em] uppercase mb-8">
                {product.notes}
              </p>
              
              <p className="text-white/50 text-sm font-light leading-relaxed mb-12 flex-grow">
                {product.desc}
              </p>
              
              <div className="w-full flex justify-between items-center pt-8 border-t border-white/5">
                <span className="text-white text-lg font-light">{product.price}</span>
                <button className="text-[10px] tracking-[0.2em] text-[#d4af37] uppercase hover:text-white transition-colors duration-300">
                  Select
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
