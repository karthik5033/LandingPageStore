'use client';
import { motion } from 'framer-motion';

export default function GravityProcess() {
  return (
    <section id="impact" className="py-48 relative z-20 ">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="w-8 h-1 bg-[#b87333] mb-8 transform -skew-x-12" />
          <span className="block text-[#b87333] text-[10px] tracking-widest mb-8 uppercase font-bold">
            The Collision
          </span>
          <h2 className="text-5xl md:text-7xl text-[#fdfbf7] mb-10 leading-none font-bold uppercase tracking-tighter" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Unleash <br/>
            <span className="text-[#b87333]">The Core.</span>
          </h2>
          <p className="text-[#fdfbf7]/60 text-[11px] font-medium tracking-widest leading-relaxed mb-16 uppercase">
            We don't gently brew; we shatter the bean's structure to extract the raw, unfiltered essence of the coffee. It's a violent, beautiful process that results in an uncompromising cup.
          </p>

          <button className="px-12 py-4 bg-[#b87333] text-[#0d0704] text-[10px] font-bold tracking-widest uppercase hover:bg-[#fdfbf7] transition-all duration-300 transform -skew-x-12">
            <span className="block transform skew-x-12">Witness the Process</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
