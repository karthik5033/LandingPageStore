'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent border-y border-[#d2691e]/20">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-[#d2691e] text-xs font-bold tracking-[0.5em] uppercase mb-8 block font-serif">The Art of Peeling</span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stripped to the <br /><span className="italic text-[#d2691e]">Sweet Core.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-20 max-w-2xl mx-auto">
            Our harvesters carefully peel the inner bark of mature Cinnamomum verum trees. The bark is then left to curl naturally in the sun, forming the delicate, fragile quills that distinguish true Ceylon cinnamon from the harsh, thick bark of commercial Cassia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Harvesting', 'Quill Rolling', 'Shade Drying'].map((step, i) => (
            <div key={i} className="border-t border-[#d2691e]/30 pt-8 text-left">
              <span className="text-[#d2691e] font-serif text-xl italic mb-4 block">Chapter {i+1}</span>
              <h3 className="text-2xl text-white font-light" style={{ fontFamily: "'Playfair Display', serif" }}>{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}