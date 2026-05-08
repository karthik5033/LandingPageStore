'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "MAGMA PUNCH",
    price: "$34.99 / 12-PACK",
    desc: "Blood orange, habanero extract, and raw caffeine. A fiery kickstart.",
  },
  {
    name: "PLASMA CITRUS",
    price: "$34.99 / 12-PACK",
    desc: "Electric lime and grapefruit with a heavy nootropic payload.",
  },
  {
    name: "ABYSS BERRY",
    price: "$36.99 / 12-PACK",
    desc: "Dark blackberry and taurine. Engineered for the night shift.",
  }
];

export default function Products() {
  return (
    <section id="arsenal" className="py-40 relative z-20 border-y border-[#ff3300]/20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-sm font-bold tracking-[0.4em] text-[#ff3300] uppercase mb-4 block">
              // The Arsenal
            </span>
            <h2 className="text-7xl md:text-9xl font-bold text-white tracking-tight uppercase leading-none" style={{ fontFamily: "'Teko', sans-serif" }}>
              Choose <br /> Your <span className="text-[#ff3300]">Weapon.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="group relative p-10 bg-black/40 backdrop-blur-md border-2 border-white/10 hover:border-[#ff3300] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-sm font-bold text-white/40 group-hover:text-[#ff3300] transition-colors uppercase">
                  Vol. {idx + 1}
                </span>
                <span className="text-sm font-bold text-[#ff3300]">{product.price}</span>
              </div>
              
              <h3 className="text-5xl font-bold tracking-wide text-white mb-2 uppercase" style={{ fontFamily: "'Teko', sans-serif" }}>
                {product.name}
              </h3>
              <p className="text-sm text-white/50 mb-12 font-medium leading-relaxed">
                {product.desc}
              </p>
              
              <button className="w-full py-4 bg-[#ff3300] text-sm font-bold tracking-[0.2em] text-white hover:bg-white hover:text-[#ff3300] transition-colors duration-300 uppercase">
                Lock & Load
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
