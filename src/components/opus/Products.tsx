'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "The Monolith",
    notes: "Dark Chocolate / Hazelnut",
    desc: "A profound, heavy-bodied espresso designed to punch through milk with absolute clarity.",
    price: "$24"
  },
  {
    name: "The Silk Blend",
    notes: "Vanilla Bean / Macadamia",
    desc: "A lighter, sweeter profile that creates a seamless, dessert-like harmony when paired with cream.",
    price: "$26"
  },
  {
    name: "Pure Canvas",
    notes: "Toffee / White Cherry",
    desc: "Our most balanced offering. The quintessential base for latte art and delicate milk drinks.",
    price: "$22"
  }
];

export default function OpusProducts() {
  return (
    <section id="gallery" className="py-40 relative z-20 border-none ">
      <div className="container mx-auto px-8 md:px-16">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[9px] tracking-[0.5em] text-[#a3a3a3] uppercase mb-4 block font-light">
              The Gallery
            </span>
            <h2 className="text-4xl md:text-5xl text-[#f5f5f0]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our <span className="italic text-[#a3a3a3]">Masterpieces</span>
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
              className="group relative p-12 bg-transparent border border-[#f5f5f0]/10 hover:border-[#f5f5f0]/30 transition-all duration-700 flex flex-col items-center text-center rounded-none"
            >
              <h3 className="text-xl text-[#f5f5f0] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {product.name}
              </h3>
              <p className="text-[#a3a3a3] text-[9px] tracking-[0.3em] uppercase mb-8 font-light">
                {product.notes}
              </p>
              
              <p className="text-[#a3a3a3]/80 text-[11px] font-light leading-relaxed mb-12 flex-grow tracking-wide">
                {product.desc}
              </p>
              
              <div className="w-full flex justify-between items-center pt-8 border-t border-[#f5f5f0]/10">
                <span className="text-[#f5f5f0] text-sm font-light tracking-widest">{product.price}</span>
                <button className="text-[9px] font-light tracking-[0.3em] text-[#f5f5f0] uppercase hover:text-[#a3a3a3] transition-colors duration-300">
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
