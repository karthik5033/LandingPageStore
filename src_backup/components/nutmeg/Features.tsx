'use client';
import { motion } from 'framer-motion';
export default function Features() {
  return (
    <section id="features" className="py-24 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex gap-12 bg-black/50 backdrop-blur-lg border border-[#a1887f]/30 rounded-full px-16 py-8">
          <div className="text-white font-serif text-xl">100% Organic</div>
          <div className="text-[#a1887f]">✦</div>
          <div className="text-white font-serif text-xl">Single Origin</div>
          <div className="text-[#a1887f]">✦</div>
          <div className="text-white font-serif text-xl">Non-Irradiated</div>
        </motion.div>
      </div>
    </section>
  );
}