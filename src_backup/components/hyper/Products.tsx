'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "CYBER PUNCH",
    price: "$34.99 / 12-PACK",
    desc: "A digitized blend of tropical fruits and raw voltage. The classic hyper-speed formula.",
  },
  {
    name: "SYNTH BERRY",
    price: "$34.99 / 12-PACK",
    desc: "Neon blueberry and blackberry. Designed for late-night coding and deep-dive sessions.",
  },
  {
    name: "PLASMA LIME",
    price: "$36.99 / 12-PACK",
    desc: "Electric citrus with an upgraded nootropic payload. For when you need absolute clarity.",
  }
];

export default function Products() {
  return (
    <section id="payloads" className="py-40 relative z-20 border-y border-[#ff00cc]/20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-sm font-bold tracking-[0.4em] text-[#ff00cc] uppercase mb-4 block">
              // Payloads
            </span>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight uppercase leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Select Your <br />
              <span className="text-[#ff00cc] drop-shadow-[0_0_15px_rgba(255,0,204,0.5)]">Fuel.</span>
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
              className="group relative p-10 bg-black/40 backdrop-blur-md border-2 border-[#ff00cc]/10 hover:border-[#ff00cc] transition-all duration-300 transform hover:-translate-y-2 shadow-[0_0_0_rgba(255,0,204,0)] hover:shadow-[0_0_30px_rgba(255,0,204,0.2)]"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-sm font-bold text-white/40 group-hover:text-[#ff00cc] transition-colors uppercase">
                  v.{idx + 1}.0
                </span>
                <span className="text-sm font-bold text-[#ff00cc]">{product.price}</span>
              </div>
              
              <h3 className="text-4xl font-bold tracking-wide text-white mb-2 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {product.name}
              </h3>
              <p className="text-sm text-white/50 mb-12 font-medium leading-relaxed">
                {product.desc}
              </p>
              
              <button className="w-full py-4 bg-[#ff00cc] text-sm font-bold tracking-[0.2em] text-white hover:bg-white hover:text-[#ff00cc] transition-colors duration-300 uppercase">
                Initialize Order
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
