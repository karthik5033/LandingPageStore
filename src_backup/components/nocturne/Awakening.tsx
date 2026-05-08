'use client';
import { motion } from 'framer-motion';

export default function NocturneAwakening() {
  return (
    <section id="awakening" className="min-h-[80vh] relative z-20 flex items-center py-32 px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-normal text-white mb-8 leading-[1.1]" style={{ fontFamily: "'Cinzel', serif" }}>
              The Awakening of <br /> <span className="text-[#cfbba0] italic font-light">Raw Cacao.</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#cfbba0]/50 mb-8" />
            <p className="text-white/60 text-lg font-light leading-[2.2] mb-6">
              True chocolate is not made; it is revealed. We treat the cacao bean not as an ingredient to be processed, but as a botanical specimen to be understood. 
            </p>
            <p className="text-white/60 text-lg font-light leading-[2.2]">
              Before it ever sees the roaster, every pod is subjected to a rigorous 14-day fermentation process, effectively awakening the dormant aromatic compounds locked within its cellular walls. This is where industrial chocolate dies, and Nocturne begins.
            </p>
          </div>
          <div className="relative aspect-square border border-[#cfbba0]/20 p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-[#cfbba0]/5 to-transparent" />
            <div className="w-full h-full border border-[#cfbba0]/10 flex items-center justify-center relative overflow-hidden bg-[#050505]/40 backdrop-blur-sm">
              <span className="text-[10rem] text-[#cfbba0]/10 font-serif absolute -right-12 -bottom-12">01</span>
              <div className="text-center">
                <span className="text-sm tracking-[0.4em] uppercase text-[#cfbba0]">Phase I</span>
                <h3 className="text-3xl text-white mt-4 font-light" style={{ fontFamily: "'Cinzel', serif" }}>Revelation</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
