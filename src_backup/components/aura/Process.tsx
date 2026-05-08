'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: "20+", label: "Years of Heritage" },
  { value: "85+", label: "Cupping Score" },
  // { value: "3", label: "Continents Sourced" }, // Removed for cleaner 3 col layout or just 2
  { value: "100%", label: "Fair Trade Certified" }
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="process" ref={ref} className="py-32 pl-6 pr-6 md:pl-40 md:pr-12 relative z-10 border-t border-white/5 bg-neutral-900/30 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
         
         <motion.div style={{ y }} className="relative z-10">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase block mb-6">Mastery</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
               Science meets <br/> <i className="font-serif text-gray-500">Soul.</i>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-md">
               Our roasting profiles are developed by Q-Graders with decades of experience. 
               We measure every variable—from moisture content to drum speed—to ensure consistency 
               that borders on obsession.
            </p>
            
            <button className="mt-12 px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-all text-xs uppercase tracking-[0.2em]">
               Our Methodology
            </button>
         </motion.div>

         <div className="grid grid-cols-1 gap-12 border-l border-white/10 pl-12">
            {stats.map((s, i) => (
               <div key={i} className="group">
                  <h3 className="text-6xl md:text-8xl font-serif text-white/20 group-hover:text-amber-500 transition-colors duration-700">{s.value}</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">{s.label}</p>
               </div>
            ))}
         </div>
         
      </div>
      
      {/* Decorative localized blur */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
