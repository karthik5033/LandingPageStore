'use client';
import { motion } from 'framer-motion';

const products = [
  { name: "PULSE // AMBER", flavor: "Spiced Citrus & Honey", price: "$65.00", img: "bg-amber-900/20" },
  { name: "PULSE // NOIR", flavor: "Dark Cacao & Maca", price: "$65.00", img: "bg-[#2a1b12]/60" },
  { name: "PULSE // BLANC", flavor: "White Tea & Yuzu", price: "$65.00", img: "bg-[#e8e4db]/10" }
];

export default function PulseProducts() {
  return (
    <section id="products" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="text-xs font-medium tracking-[0.4em] text-[#c8922a] uppercase mb-6 block">04. / The Collection</span>
          <h2 className="text-4xl md:text-6xl font-normal text-white tracking-wide leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Curated <span className="italic text-[#c8922a]">Reserves.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative border border-white/5 bg-[#0a0604]/60 backdrop-blur-md overflow-hidden"
            >
              <div className={`h-80 ${p.img} flex items-center justify-center transition-transform duration-1000 group-hover:scale-105`}>
                <span className="text-3xl font-normal text-white/20 uppercase tracking-widest italic" style={{ fontFamily: "'Playfair Display', serif" }}>{p.flavor.split('&')[0]}</span>
              </div>
              <div className="p-10 text-center border-t border-[#c8922a]/10">
                <h3 className="text-lg font-normal text-white tracking-widest uppercase mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                <p className="text-white/50 text-[10px] font-light tracking-[0.2em] uppercase mb-8">{p.flavor}</p>
                <div className="flex flex-col items-center gap-6">
                  <span className="text-[#c8922a] font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>{p.price}</span>
                  <button className="text-[9px] font-medium tracking-[0.3em] uppercase text-white border border-white/20 hover:border-[#c8922a] hover:bg-[#c8922a] hover:text-black transition-all duration-500 px-8 py-3">
                    Reserve
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
