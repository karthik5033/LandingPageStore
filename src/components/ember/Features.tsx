'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#dc143c]/10 backdrop-blur-lg border-y border-[#dc143c] py-20 px-8 text-center relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#dc143c] to-transparent" />
          <h2 className="text-7xl font-black text-white tracking-tighter uppercase mb-8">Scoville <span className="text-[#dc143c]">Overload</span></h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2">350K+</span>
              <span className="text-[10px] text-[#dc143c] tracking-[0.3em] uppercase">Scoville Units</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2">Zero</span>
              <span className="text-[10px] text-[#dc143c] tracking-[0.3em] uppercase">Extracts Used</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2">100%</span>
              <span className="text-[10px] text-[#dc143c] tracking-[0.3em] uppercase">Pure Mash</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}