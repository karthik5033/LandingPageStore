'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "Sunlight Blend",
    notes: "Orange Blossom / Honey / Vanilla",
    desc: "A luminous, light-roasted blend that awakens the palate with bright, sweet floral notes.",
    price: "$22"
  },
  {
    name: "Amber Roast",
    notes: "Caramel / Milk Chocolate / Almond",
    desc: "Our signature medium roast. Smooth, rich, and glowing with comforting, familiar flavors.",
    price: "$24"
  },
  {
    name: "Midnight Flare",
    notes: "Dark Cocoa / Molasses / Smoke",
    desc: "A deep, intense dark roast that maintains a brilliant, complex character without bitterness.",
    price: "$26"
  }
];

export default function LumenProducts() {
  return (
    <section id="beans" className="py-40 relative z-20 border-none ">
      <div className="container mx-auto px-8 md:px-16">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.4em] text-[#d97706] uppercase mb-4 block font-semibold">
              The Collection
            </span>
            <h2 className="text-5xl md:text-6xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bottled <span className="italic text-[#d97706]">Light</span>
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
              className="group relative p-12 bg-white/5 border border-white/10 hover:border-[#d97706]/40 transition-all duration-700 flex flex-col items-center text-center rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d97706]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 w-full flex flex-col h-full items-center">
                  <h3 className="text-2xl text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-[#d97706] text-[10px] tracking-[0.2em] uppercase mb-8 font-semibold">
                    {product.notes}
                  </p>
                  
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-12 flex-grow">
                    {product.desc}
                  </p>
                  
                  <div className="w-full flex justify-between items-center pt-8 border-t border-white/10">
                    <span className="text-white text-lg font-light">{product.price}</span>
                    <button className="text-[10px] font-bold tracking-[0.2em] text-[#d97706] uppercase hover:text-white transition-colors duration-300">
                      Add to Box
                    </button>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
