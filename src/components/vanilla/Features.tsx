'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block bg-black/60 backdrop-blur-xl border border-[#f3e5ab]/30 p-16 md:p-24 rounded-full max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>The True <span className="italic text-[#f3e5ab]">Caviar.</span></h2>
          <p className="text-white/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Synthetic artificial vanilla extract accounts for 99% of global consumption. It is made from petrochemicals or wood pulp. True Madagascar Bourbon vanilla beans contain over 250 distinct flavor compounds—floral, woody, sweet, and incredibly complex—that simply cannot be synthesized in a lab.
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-[#f3e5ab] text-sm tracking-widest uppercase">
            <span>Grade A Plump</span>
            <span>✦</span>
            <span>Over 25% Moisture</span>
            <span>✦</span>
            <span>Caviar Dense</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}