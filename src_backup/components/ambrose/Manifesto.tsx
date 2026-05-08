'use client';
import { motion } from 'framer-motion';

export default function AmbroseManifesto() {
  return (
    <section id="manifesto" className="min-h-screen relative z-20 flex items-center py-32 px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase block mb-6">Chapter I</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f4eee1] mb-8 leading-[1.2]" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              The Defiance of <br /> <span className="text-[#e6cda3] italic font-normal">Modernity.</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#e6cda3]/50 mb-8" />
            <p className="text-[#f4eee1]/70 text-lg font-light leading-[2.1] mb-6">
              Industrial chocolate was born of speed and efficiency. It relies on high-yield, flavorless hybrids, heavy alkalization to mask bitterness, and excessive emulsifiers to mimic texture. We reject all of it.
            </p>
            <p className="text-[#f4eee1]/70 text-lg font-light leading-[2.1]">
              Ambrose operates at the speed of nature. From the deliberate shading of the canopy to the agonizingly slow friction of the granite melangeur, our process is an homage to patience. The result is a profile of astonishing clarity and depth.
            </p>
          </div>
          <div className="relative aspect-[4/5] border border-[#e6cda3]/20 p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e6cda3]/5 to-transparent" />
            <div className="w-full h-full border border-[#e6cda3]/10 flex flex-col items-center justify-center relative overflow-hidden bg-[#140a05]/40 backdrop-blur-sm p-8 text-center">
              <span className="text-[12rem] text-[#e6cda3]/10 font-serif absolute -left-10 -top-10 leading-none select-none">M</span>
              <p className="relative z-10 text-xl text-[#e6cda3] italic" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                "We do not make chocolate for the masses. We make it for those who understand the difference."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
