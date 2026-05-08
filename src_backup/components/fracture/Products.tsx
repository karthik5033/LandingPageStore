'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "Dark Matter",
    notes: "Black Truffle / Dark Cocoa / Smoke",
    desc: "A heavy, dense profile created from our most intense shattering process. Not for the faint of heart.",
    price: "$28"
  },
  {
    name: "Sub-Zero Splinter",
    notes: "Frozen Berry / Mint / Dark Chocolate",
    desc: "Cryo-shattered beans lock in a shockingly bright acidity that pierces through a heavy chocolate base.",
    price: "$32"
  },
  {
    name: "The Core",
    notes: "Molten Caramel / Earth / Spice",
    desc: "Extracted from the absolute center of the bean. Rich, earthy, and devastatingly smooth.",
    price: "$26"
  }
];

export default function FractureProducts() {
  return (
    <section id="matter" className="py-40 relative z-20 border-none ">
      <div className="container mx-auto px-8 md:px-16">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.4em] text-[#c98a53] uppercase mb-4 block font-light">
              The Collection
            </span>
            <h2 className="text-4xl md:text-5xl text-[#ffffff] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Harvesting <span className="font-semibold text-[#c98a53]">Fragments.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-12 bg-[#ffffff]/[0.01] border border-[#ffffff]/10 hover:border-[#c98a53] transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Shatter hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c98a53]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-full flex flex-col h-full items-center">
                  <h3 className="text-xl text-[#ffffff] font-semibold mb-2 tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-[#c98a53] text-[9px] tracking-[0.3em] uppercase mb-8 font-light">
                    {product.notes}
                  </p>
                  
                  <p className="text-[#ffffff]/60 text-xs font-light leading-relaxed mb-12 flex-grow tracking-wide">
                    {product.desc}
                  </p>
                  
                  <div className="w-full flex justify-between items-center pt-8 border-t border-[#ffffff]/10">
                    <span className="text-[#ffffff] text-lg font-light">{product.price}</span>
                    <button className="text-[9px] font-semibold tracking-[0.3em] text-[#ffffff] uppercase hover:text-[#c98a53] transition-colors duration-300">
                      Extract
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
