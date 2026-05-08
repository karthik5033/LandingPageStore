'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: "Midnight 85%",
    desc: "Intense, robust, with undertones of dark cherry and smoked cedar.",
    price: "$24"
  },
  {
    name: "Eclipse 70%",
    desc: "Perfectly balanced. Notes of toasted hazelnut and wild honey.",
    price: "$22"
  },
  {
    name: "Abyss 99%",
    desc: "Pure, uncompromising cacao. Earthy, profound, and profoundly dark.",
    price: "$28"
  }
];

export default function NoirProducts() {
  return (
    <section id="products" className="py-32 pl-6 pr-6 md:pl-40 md:pr-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase block mb-4" style={{ color: '#c8922a' }}>The Collection</span>
                <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Curated Intensity.</h2>
            </div>
            <button className="text-[10px] uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity" style={{ color: '#8a7060', borderColor: '#8a7060' }}>
                View Complete Range
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative border border-[#3a2010] p-8 flex flex-col justify-between min-h-[400px] overflow-hidden bg-[#0a0300]/80 backdrop-blur-sm hover:border-[#c8922a]/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#c8922a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                 <div className="text-[10px] font-mono mb-4" style={{ color: '#c8922a' }}>NOIR / 00{i+1}</div>
                 <h3 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.name}</h3>
                 <p className="text-sm leading-relaxed font-light" style={{ color: '#8a7060' }}>{p.desc}</p>
              </div>

              <div className="relative z-10 flex justify-between items-center mt-12 pt-6 border-t border-[#3a2010] group-hover:border-[#c8922a]/30 transition-colors">
                 <span className="font-serif text-xl text-white">{p.price}</span>
                 <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase" style={{ color: '#c8922a' }}>
                    <span>Acquire</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
