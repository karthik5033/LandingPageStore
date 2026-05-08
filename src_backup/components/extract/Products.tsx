'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "Tiger Stripe",
    notes: "Hazelnut / Molasses / Dark Cocoa",
    desc: "A rich, viscous blend formulated specifically to produce thick, mottled crema and a syrupy mouthfeel.",
    price: "$25"
  },
  {
    name: "Naked Yield",
    notes: "Blood Orange / Honey / Jasmine",
    desc: "A light-roast single origin that challenges your extraction skills, rewarding you with brilliant acidity.",
    price: "$28"
  },
  {
    name: "Pressure Drop",
    notes: "Vanilla Bean / Caramel / Smoke",
    desc: "Our most forgiving espresso roast. Smooth, consistent, and deeply satisfying shot after shot.",
    price: "$24"
  }
];

export default function ExtractProducts() {
  return (
    <section id="equipment" className="py-40 relative z-20 border-none bg-[#0c0a08]">
      <div className="container mx-auto px-8 md:px-16">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.4em] text-[#cfa052] uppercase mb-4 block font-bold">
              The Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl text-[#ffffff] font-bold">
              Dialed <span className="text-[#cfa052] italic font-light">In.</span>
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
              className="group relative p-12 bg-[#ffffff]/[0.02] border border-[#ffffff]/10 hover:border-[#cfa052] transition-all duration-500 rounded-xl flex flex-col items-start"
            >
              <h3 className="text-2xl text-[#ffffff] font-bold mb-2 tracking-wide">
                {product.name}
              </h3>
              <p className="text-[#cfa052] text-[10px] tracking-[0.2em] uppercase mb-8 font-semibold">
                {product.notes}
              </p>
              
              <p className="text-[#ffffff]/60 text-sm font-medium leading-relaxed mb-12 flex-grow">
                {product.desc}
              </p>
              
              <div className="w-full flex justify-between items-center pt-8 border-t border-[#ffffff]/10">
                <span className="text-[#ffffff] text-lg font-bold">{product.price}</span>
                <button className="text-[10px] font-bold tracking-[0.2em] text-[#0c0a08] bg-[#cfa052] px-6 py-3 uppercase hover:bg-[#ffffff] transition-colors duration-300 rounded-md">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
