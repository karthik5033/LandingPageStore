'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Crosshair } from 'lucide-react';

const products = [
  {
    name: "CYBER PUNCH",
    price: "0.89 ETH / CS",
    desc: "Yuzu, Dragonfruit, and 300mg Caffeine. The ultimate daytime compile.",
    code: "V.1.0"
  },
  {
    name: "NEON CITRUS",
    price: "0.89 ETH / CS",
    desc: "Grapefruit, Lime, and L-Theanine. Smooth processing power.",
    code: "V.1.2"
  },
  {
    name: "VOID BERRY",
    price: "0.95 ETH / CS",
    desc: "Blackberry, Açaí, and Guarana Matrix. Deep focus protocol.",
    code: "V.2.0"
  }
];

export default function Products() {
  return (
    <section id="modules" className="py-40 relative z-20 bg-[#02040a]/80 backdrop-blur-3xl border-y border-[#00f0ff]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#00f0ff] uppercase mb-6 block flex items-center gap-4">
              <Crosshair size={14} /> [DATA_STREAM: MODULES]
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter" style={{ fontFamily: "'Syncopate', sans-serif" }}>
              Select <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-600">Payload.</span>
            </h2>
          </div>
          <button className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#00f0ff] hover:text-white border-b border-[#00f0ff]/30 hover:border-[#00f0ff] pb-2 transition-all duration-300 uppercase flex items-center gap-4 group">
            Open Marketplace <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-10 bg-[#02040a]/40 backdrop-blur-md border border-[#00f0ff]/20 hover:bg-[#00f0ff]/5 transition-colors duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f0ff]/10 blur-xl group-hover:bg-[#00f0ff]/30 transition-colors duration-500" />
              
              <div className="flex justify-between items-start mb-24 relative z-10">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#00f0ff] uppercase border border-[#00f0ff]/30 px-3 py-1 bg-[#00f0ff]/5">
                  {product.code}
                </span>
                <span className="text-xs font-mono font-bold text-[#00f0ff]">{product.price}</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold tracking-tighter text-white mb-4 uppercase" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                  {product.name}
                </h3>
                <p className="text-sm font-mono text-[#00f0ff]/60 leading-relaxed mb-12">
                  {product.desc}
                </p>
                
                <button className="w-full py-4 border border-[#00f0ff] text-[10px] font-mono font-bold tracking-[0.4em] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all duration-300 uppercase relative overflow-hidden group/btn">
                  <span className="relative z-10">Execute Order</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
