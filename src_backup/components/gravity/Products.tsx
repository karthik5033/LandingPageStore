'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: "Terminal Velocity",
    notes: "Dark Chocolate / Black Cherry / Smoke",
    desc: "Our darkest, heaviest roast. Built to punch through anything and deliver an immediate shock to the system.",
    price: "$28"
  },
  {
    name: "Kinetic Blend",
    notes: "Toasted Pecan / Molasses / Bourbon",
    desc: "High energy, high impact. A medium-dark profile that balances aggressive strength with deep sweetness.",
    price: "$25"
  },
  {
    name: "G-Force Espresso",
    notes: "Cacao Nibs / Brown Sugar / Earth",
    desc: "Engineered specifically for extreme extraction pressure. Yields a syrupy, indestructible crema.",
    price: "$26"
  }
];

export default function GravityProducts() {
  return (
    <section id="fuel" className="py-40 relative z-20 border-none ">
      <div className="container mx-auto px-8 md:px-16">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-8 h-1 bg-[#b87333] mb-8 transform -skew-x-12" />
            <h2 className="text-6xl md:text-8xl text-[#fdfbf7] uppercase font-bold tracking-tighter" style={{ fontFamily: "'Oswald', sans-serif" }}>
              The <span className="text-[#b87333]">Fuel</span>
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
              className="group relative p-10 bg-[#b87333]/5 border-2 border-[#b87333]/20 hover:border-[#b87333] transition-all duration-500 flex flex-col items-start transform hover:-translate-y-2"
            >
              <h3 className="text-3xl text-[#fdfbf7] mb-2 uppercase font-bold tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {product.name}
              </h3>
              <p className="text-[#b87333] text-[10px] tracking-widest uppercase mb-8 font-bold">
                {product.notes}
              </p>
              
              <p className="text-[#fdfbf7]/70 text-xs font-medium leading-relaxed mb-12 flex-grow">
                {product.desc}
              </p>
              
              <div className="w-full flex justify-between items-center pt-8 border-t border-[#b87333]/20">
                <span className="text-[#fdfbf7] text-xl font-bold tracking-tight">{product.price}</span>
                <button className="text-[11px] font-bold tracking-widest text-[#0d0704] bg-[#b87333] px-6 py-2 uppercase hover:bg-[#fdfbf7] transition-colors duration-300 transform -skew-x-12">
                  <span className="block transform skew-x-12">Extract</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
