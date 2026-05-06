'use client';
import { motion } from 'framer-motion';
export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-black/40 backdrop-blur-md border border-white/10 p-12 md:p-24 rounded-[3rem] text-center">
          <span className="text-[#8d6e63] text-xs font-bold tracking-[0.4em] uppercase mb-6 block">The Sourcing</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pure <span className="italic text-[#8d6e63]">CHAI.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16 border-t border-white/10 pt-16">
            {['Origin', 'Harvest', 'Milling'].map((s,i) => (
              <div key={i}>
                <h3 className="text-xl text-white font-serif mb-4 text-[#8d6e63]">{s}</h3>
                <p className="text-white/60 font-light text-sm">Executed with absolute precision to preserve the delicate volatile compounds unique to CHAI.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}