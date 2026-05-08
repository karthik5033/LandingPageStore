'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "Classic Noir",
    price: "$28.00",
    desc: "Our signature cold brew. Bold, smooth, with notes of dark cocoa and black cherry.",
    tag: "Signature"
  },
  {
    name: "Vanilla Oak",
    price: "$32.00",
    desc: "Aged in bourbon barrels and infused with real Madagascar vanilla bean.",
    tag: "Reserve"
  },
  {
    name: "Toasted Oat",
    price: "$30.00",
    desc: "Perfectly blended with house-made oat milk for a rich, dairy-free creaminess.",
    tag: "Smooth"
  }
];

export default function Products() {
  return (
    <section id="collection" className="py-40 relative z-20 border-y border-[#d4a373]/10 bg-[#0a0807]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#d4a373] uppercase mb-6 block">
              03. / The Collection
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Curated <br />
              <span className="italic text-[#d4a373]">expressions.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group relative p-12 bg-black/40 border border-white/5 hover:border-[#d4a373]/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-[9px] font-bold tracking-[0.3em] text-[#d4a373] uppercase border border-[#d4a373]/30 px-3 py-1 rounded-full">
                  {product.tag}
                </span>
                <span className="text-sm font-light text-white/70">{product.price}</span>
              </div>
              
              <h3 className="text-3xl font-light text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {product.name}
              </h3>
              <p className="text-sm text-white/50 mb-12 font-light leading-relaxed">
                {product.desc}
              </p>
              
              <button className="w-full py-4 border border-[#d4a373]/30 text-[10px] font-bold tracking-[0.2em] text-white hover:bg-[#d4a373] hover:text-black hover:border-[#d4a373] transition-all duration-500 uppercase">
                Add to Order
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
