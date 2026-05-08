'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent border-t border-[#d2691e]/30">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-light text-white mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>The Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {['Alba Quills', 'Milled Powder', 'Bark Extract'].map((n, i) => (
            <motion.div key={n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-black border border-white/10 mb-8 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#d2691e]/5 group-hover:bg-[#d2691e]/20 transition-colors duration-700" />
                <div className="w-16 h-24 border border-[#d2691e]/40 rounded-sm absolute" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl text-white font-light mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{n}</h3>
                <span className="text-[#d2691e] font-serif italic">$28.00</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}