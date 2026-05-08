'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <span className="text-[#dcb83c] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Apothecary</span>
        <h2 className="text-4xl md:text-6xl font-light text-white mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>Healing Blends</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Golden Milk Elixir', 'Pure Root Powder', 'Immunity Extract', 'Activated Capsules'].map((name, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border border-white/10 rounded-2xl bg-gradient-to-t from-black/80 to-transparent hover:border-[#dcb83c]/50 transition-colors group">
              <div className="w-full aspect-square rounded-full border border-white/5 bg-black/50 mb-8 flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(220,184,60,0.15)] transition-shadow">
                <span className="text-[#dcb83c]/20 font-serif text-xs">OCHRE</span>
              </div>
              <h3 className="text-xl text-white font-serif mb-2">{name}</h3>
              <p className="text-[#dcb83c] text-sm font-light mb-6">From $38</p>
              <button className="w-full py-3 text-[10px] tracking-widest uppercase text-white/60 border border-white/10 rounded-full group-hover:text-black group-hover:bg-[#dcb83c] group-hover:border-[#dcb83c] transition-all">Select</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}