'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "The Pinnacle",
    notes: "Dark Cocoa / Roasted Walnut",
    desc: "A heavy, gravitational espresso roast designed to anchor milk drinks with deep, resonant chocolate notes.",
    price: "$25"
  },
  {
    name: "Lunar Blend",
    notes: "Vanilla Macaroon / Pear",
    desc: "A soft, radiant profile that merges seamlessly with steamed milk to create an ethereal sweetness.",
    price: "$27"
  },
  {
    name: "Eclipse Point",
    notes: "Black Cherry / Molasses",
    desc: "Intense, dark, and syrupy. A roast that demands respect and delivers a lasting, powerful finish.",
    price: "$24"
  }
];

export default function ZenithProducts() {
  return (
    <section id="collection" className="py-40 relative z-20 border-none ">
      <div className="container mx-auto px-8 md:px-16">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[9px] tracking-[0.5em] text-[#f2f0eb]/50 uppercase mb-4 block font-light">
              The Collection
            </span>
            <h2 className="text-5xl md:text-6xl text-[#f2f0eb]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our <span className="italic text-[#f2f0eb]/70">Roasts</span>
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
              className="group relative p-12 bg-[#f2f0eb]/[0.02] border border-[#f2f0eb]/10 hover:border-[#f2f0eb]/40 transition-all duration-700 flex flex-col items-center text-center rounded-none"
            >
              <h3 className="text-2xl text-[#f2f0eb] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {product.name}
              </h3>
              <p className="text-[#f2f0eb]/50 text-[9px] tracking-[0.3em] uppercase mb-8 font-light">
                {product.notes}
              </p>
              
              <p className="text-[#f2f0eb]/70 text-[11px] font-light leading-relaxed mb-12 flex-grow tracking-wide">
                {product.desc}
              </p>
              
              <div className="w-full flex justify-between items-center pt-8 border-t border-[#f2f0eb]/10">
                <span className="text-[#f2f0eb] text-sm font-light tracking-widest">{product.price}</span>
                <button className="text-[9px] font-light tracking-[0.3em] text-[#f2f0eb] uppercase hover:text-[#f2f0eb]/50 transition-colors duration-300">
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
