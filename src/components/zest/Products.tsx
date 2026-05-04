'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "TROPIC FLUX",
    price: "$12.00",
    desc: "Mango, Passionfruit, Turmeric & Lime",
    accent: "bg-orange-500"
  },
  {
    name: "BERRY NEON",
    price: "$14.00",
    desc: "Açaí, Blueberry, Dragonfruit & Mint",
    accent: "bg-fuchsia-500"
  },
  {
    name: "GREEN GLOW",
    price: "$11.00",
    desc: "Kale, Green Apple, Celery & Ginger",
    accent: "bg-lime-500"
  }
];

export default function Products() {
  return (
    <section id="nectar" className="py-32 relative z-20 bg-black/40 backdrop-blur-sm border-y border-rose-500/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-rose-500 uppercase mb-4 block">
              03. / The Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Savor the <span className="italic text-rose-400">spectrum.</span>
            </h2>
          </div>
          <button className="text-[10px] font-bold tracking-[0.2em] text-white border border-rose-500/30 px-8 py-3 hover:bg-rose-500 hover:border-rose-500 transition-all duration-300">
            SHOP ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group relative p-8 border border-white/10 hover:border-rose-500/50 transition-colors duration-500 bg-black/20"
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`w-3 h-3 rounded-full ${product.accent}`} />
                <span className="text-xs font-mono text-white/50">{product.price}</span>
              </div>
              
              <h3 className="text-xl font-bold tracking-widest text-white mb-2">
                {product.name}
              </h3>
              <p className="text-sm font-light text-white/60 mb-8">
                {product.desc}
              </p>
              
              <button className="w-full py-3 border border-white/20 text-[10px] font-bold tracking-[0.2em] text-white group-hover:bg-rose-500 group-hover:border-rose-500 group-hover:text-white transition-all duration-300">
                ADD TO CRATE
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
