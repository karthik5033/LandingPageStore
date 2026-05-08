'use client';
import { motion } from 'framer-motion';

export default function ExtractProcess() {
  return (
    <section id="yield" className="py-48 relative z-20 ">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-3xl mx-auto bg-[#0c0a08]/60 p-12 backdrop-blur-md border border-[#cfa052]/20 rounded-3xl"
        >
          <span className="block text-[#cfa052] text-[10px] tracking-[0.5em] mb-6 uppercase font-bold">
            The Flow
          </span>
          <h2 className="text-4xl md:text-6xl text-[#ffffff] font-bold mb-8 leading-tight tracking-tight">
            Liquid <span className="text-[#cfa052] italic font-light">Gold.</span>
          </h2>
          <p className="text-[#ffffff]/70 text-sm font-medium tracking-wide leading-relaxed mb-12 uppercase">
            Watch the bottomless portafilter. The slow, viscous drip that coalesces into a beautiful, mouse-tail stream. This is the visual proof of a perfect extraction.
          </p>

          <button className="px-10 py-4 bg-transparent border-2 border-[#cfa052] text-[#cfa052] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#cfa052] hover:text-[#0c0a08] transition-all duration-300 rounded-lg">
            Master Your Machine
          </button>
        </motion.div>
      </div>
    </section>
  );
}
