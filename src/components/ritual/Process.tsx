'use client';
import { motion } from 'framer-motion';

export default function RitualProcess() {
  return (
    <section id="craft" className="py-48 relative z-20 ">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-2xl mx-auto"
        >
          <span className="block text-[#e8c490] text-[10px] tracking-[0.3em] mb-6 uppercase font-light" style={{ fontFamily: "'Lora', serif" }}>
            The Awakening
          </span>
          <h2 className="text-4xl md:text-6xl text-[#fdfbf7] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Honor the <br/>
            <span className="text-[#e8c490] italic">Morning.</span>
          </h2>
          <p className="text-[#fdfbf7]/70 text-base font-light tracking-wide leading-relaxed mb-12" style={{ fontFamily: "'Lora', serif" }}>
            Watch the steam rise. Feel the warmth of the ceramic cup in your hands. This is more than a beverage; it's a meditation in a mug, preparing you for whatever the day holds.
          </p>

          <button className="px-10 py-4 border border-[#e8c490]/50 text-[#e8c490] text-[10px] tracking-[0.2em] uppercase hover:bg-[#e8c490] hover:text-[#2b221a] transition-all duration-500 rounded-full" style={{ fontFamily: "'Lora', serif" }}>
            Explore Our Ethos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
