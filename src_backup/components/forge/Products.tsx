'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "COLD STEEL",
    price: "$38.99 / 12-PACK",
    desc: "Arctic mint and raw electrolytes. Forged for endurance athletes who push past the wall.",
  },
  {
    name: "MOLTEN CORE",
    price: "$38.99 / 12-PACK",
    desc: "Blood orange and cayenne thermogenic blend. Internal combustion in a can.",
  },
  {
    name: "DARK ALLOY",
    price: "$39.99 / 12-PACK",
    desc: "Black cherry, activated charcoal, and maximum-dose nootropics. The midnight formula.",
  }
];

export default function Products() {
  return (
    <section id="alloys" className="py-40 relative z-20 border-y border-[#4a90d9]/20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-sm font-bold tracking-[0.4em] text-[#4a90d9] uppercase mb-4 block">
              // The Alloys
            </span>
            <h2 className="text-7xl md:text-9xl font-bold text-white tracking-tight uppercase leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Select Your <br />
              <span className="text-[#4a90d9]">Grade.</span>
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
              className="group relative p-10 bg-black/40 backdrop-blur-md border-2 border-white/10 hover:border-[#4a90d9] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-sm font-bold text-white/40 group-hover:text-[#4a90d9] transition-colors uppercase">
                  Mk.{idx + 1}
                </span>
                <span className="text-sm font-bold text-[#4a90d9]">{product.price}</span>
              </div>
              
              <h3 className="text-5xl font-bold tracking-wide text-white mb-2 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {product.name}
              </h3>
              <p className="text-sm text-white/50 mb-12 font-medium leading-relaxed">
                {product.desc}
              </p>
              
              <button className="w-full py-4 bg-[#4a90d9] text-sm font-bold tracking-[0.2em] text-white hover:bg-white hover:text-[#4a90d9] transition-colors duration-300 uppercase">
                Add to Rack
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
