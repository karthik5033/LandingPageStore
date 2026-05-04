'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "Daybreak Blend",
    notes: "Milk Chocolate / Toasted Almond / Red Apple",
    desc: "A comforting, approachable cup designed to ease you into the morning. Sweet, balanced, and perfectly soft.",
    price: "$22"
  },
  {
    name: "Golden Hour",
    notes: "Honey / Jasmine / White Peach",
    desc: "A delicate, aromatic single origin that shines when brewed slowly as a pour-over. Light and ethereal.",
    price: "$26"
  },
  {
    name: "Hearth Roast",
    notes: "Dark Cocoa / Walnut / Molasses",
    desc: "For those cold mornings. A deeper, richer profile that pairs beautifully with a splash of warm milk.",
    price: "$24"
  }
];

export default function RitualProducts() {
  return (
    <section id="offerings" className="py-40 relative z-20 border-none ">
      <div className="container mx-auto px-8 md:px-16">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-[#e8c490] uppercase mb-4 block font-light" style={{ fontFamily: "'Lora', serif" }}>
              Our Offerings
            </span>
            <h2 className="text-4xl md:text-5xl text-[#fdfbf7]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Beans for the <span className="text-[#e8c490] italic">Soul.</span>
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
              className="group relative p-12 bg-[#fdfbf7]/[0.02] border border-[#fdfbf7]/10 hover:border-[#e8c490]/50 transition-all duration-700 rounded-2xl flex flex-col items-center text-center"
            >
              <h3 className="text-2xl text-[#fdfbf7] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {product.name}
              </h3>
              <p className="text-[#e8c490] text-[10px] tracking-[0.1em] uppercase mb-8 font-light" style={{ fontFamily: "'Lora', serif" }}>
                {product.notes}
              </p>
              
              <p className="text-[#fdfbf7]/70 text-sm font-light leading-relaxed mb-12 flex-grow" style={{ fontFamily: "'Lora', serif" }}>
                {product.desc}
              </p>
              
              <div className="w-full flex justify-between items-center pt-8 border-t border-[#fdfbf7]/10">
                <span className="text-[#fdfbf7] text-lg font-light" style={{ fontFamily: "'Lora', serif" }}>{product.price}</span>
                <button className="text-[10px] font-medium tracking-[0.2em] text-[#2b221a] bg-[#e8c490] px-6 py-2 uppercase hover:bg-[#fdfbf7] transition-colors duration-300 rounded-full" style={{ fontFamily: "'Lora', serif" }}>
                  Bring Home
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
