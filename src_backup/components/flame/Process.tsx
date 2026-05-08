'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4500] to-transparent opacity-50" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter mb-6 uppercase leading-none">
              Raw <br /><span className="text-[#ff4500]">Velocity.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md border-l-4 border-[#ff4500] pl-6">
              Harvested at the exact moment of crimson maturation. Flash-dried instantly to capture the volatile heat compounds before they degrade.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 w-full relative">
            <div className="w-full aspect-video bg-black/80 border border-[#ff4500]/30 transform -skew-x-12 overflow-hidden flex items-center justify-center group hover:border-[#ff4500] transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-4xl font-black text-[#ff4500] italic tracking-tighter transform skew-x-12">FLASH DRYING</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}