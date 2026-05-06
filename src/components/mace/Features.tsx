'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 flex justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-black/50 backdrop-blur-lg border border-[#daa520]/40 p-12 md:p-20 max-w-4xl w-full text-center relative">
          <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#daa520]/10 m-2 pointer-events-none" />
          <h2 className="text-4xl text-white font-light mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Lacy & <span className="text-[#daa520] italic">Refined</span></h2>
          <p className="text-white/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Mace is the elegant sibling of nutmeg. Where nutmeg is heavy and sweet, mace is light, citrusy, and deeply aromatic. Used by royal courts for centuries, it imparts a golden hue and a complex, highly sought-after flavor profile.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[#daa520] text-sm tracking-widest uppercase">
            <span>Whole Blades</span>
            <span>•</span>
            <span>Hand Peeled</span>
            <span>•</span>
            <span>Sun Cured</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}