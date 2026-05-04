'use client';
import { motion } from 'framer-motion';

export default function OasisProcess() {
  return (
    <section id="mirage" className="relative z-10 py-48 px-6 bg-gradient-to-b from-black/0 via-black/60 to-black/90">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-orange-400 text-[11px] font-black tracking-[0.5em] mb-8 uppercase">
            A Desert Mirage
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight uppercase tracking-tighter">
            Liquid Gold.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">Bottled Sunshine.</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-widest leading-relaxed max-w-2xl mx-auto mb-16 uppercase">
            Sourced from the most vibrant tropical groves. We cold-press our fruits precisely at the golden hour to capture maximum sweetness and unparalleled nutritional density.
          </p>

          <button className="px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-400 text-black text-[11px] font-black tracking-[0.3em] uppercase hover:scale-105 transition-transform duration-500 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)]">
            Discover the Grove
          </button>
        </motion.div>
      </div>
    </section>
  );
}
