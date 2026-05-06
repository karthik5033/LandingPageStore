'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent border-t-2 border-[#dc143c]/30">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-2xl mb-24">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="inline-block px-4 py-1 border border-[#dc143c] text-[#dc143c] text-[10px] tracking-widest uppercase font-bold mb-8 animate-pulse">Extreme Heat Warning</div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase font-sans mb-8">
              Forged in <span className="text-[#dc143c]">Fire.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#dc143c]/20 hidden md:block" />
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-black/60 backdrop-blur-lg border border-[#dc143c]/40 p-10 transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
            <h3 className="text-5xl font-black text-[#dc143c] mb-4 opacity-50">01</h3>
            <h4 className="text-2xl text-white font-bold uppercase mb-4 tracking-widest">High Altitude Isolation</h4>
            <p className="text-white/60 font-light leading-relaxed">Grown on volcanic slopes where extreme UV exposure forces the peppers to produce maximum capsaicin defense mechanisms.</p>
          </motion.div>
          
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-black/60 backdrop-blur-lg border border-[#dc143c]/40 p-10 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <h3 className="text-5xl font-black text-[#dc143c] mb-4 opacity-50">02</h3>
            <h4 className="text-2xl text-white font-bold uppercase mb-4 tracking-widest">Hearth Smoking</h4>
            <p className="text-white/60 font-light leading-relaxed">Slow-smoked for 72 hours over hickory, infusing the raw aggressive heat with a deep, savory umami profile.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}