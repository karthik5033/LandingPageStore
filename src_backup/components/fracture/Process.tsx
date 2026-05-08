'use client';
import { motion } from 'framer-motion';

export default function FractureProcess() {
  return (
    <section id="shatter" className="py-48 relative z-20 ">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-3xl mx-auto"
        >
          <span className="block text-[#c98a53] text-[10px] tracking-[0.5em] mb-8 uppercase font-light">
            The Event
          </span>
          <h2 className="text-4xl md:text-6xl text-[#ffffff] font-light mb-10 leading-tight tracking-tight">
            Embrace the <br/>
            <span className="font-semibold text-[#c98a53]">Fracture.</span>
          </h2>
          <p className="text-[#ffffff]/60 text-xs font-light tracking-widest leading-relaxed mb-16 uppercase">
            To unlock true flavor, the bean must be broken. Not ground, not crushed, but shattered with absolute, devastating precision. This is coffee deconstructed.
          </p>

          <button className="px-12 py-4 border border-[#c98a53]/50 text-[#ffffff] text-[9px] font-semibold tracking-[0.4em] uppercase hover:bg-[#c98a53] hover:text-[#080402] hover:border-[#c98a53] transition-all duration-500">
            Analyze the Break
          </button>
        </motion.div>
      </div>
    </section>
  );
}
