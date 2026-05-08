'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { t: '90K', d: 'Scoville Heat Units' },
            { t: '12HR', d: 'Field to Mill Time' },
            { t: '100%', d: 'Capsaicin Retention' },
            { t: 'ZERO', d: 'Artificial Colorants' }
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/60 backdrop-blur-md border border-white/5 p-12 hover:bg-[#ff4500]/10 hover:border-[#ff4500]/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-6xl font-black italic text-white tracking-tighter mb-2">{f.t}</h3>
              <p className="text-[#ff4500] font-bold tracking-widest uppercase text-sm">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}