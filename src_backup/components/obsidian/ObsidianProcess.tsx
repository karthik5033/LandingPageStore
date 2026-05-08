'use client';
import { motion } from 'framer-motion';

export default function ObsidianProcess() {
  return (
    <section id="obsidianprocess" className="relative z-10 py-32 px-6 border-t border-[#1a120f]/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-gradient-to-tr from-[#1a100c] to-[#0a0503] border border-[#a67c52]/20 relative overflow-hidden flex items-center justify-center p-12"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
            <div className="text-center relative z-10">
               <div className="w-16 h-16 mx-auto border border-[#a67c52] rounded-full flex items-center justify-center mb-8">
                  <span className="text-2xl text-[#a67c52] font-serif">O</span>
               </div>
               <h3 className="text-3xl font-light text-white leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A process dictated by nature, perfected by obsession.
               </h3>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2">
          <motion.div
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
             transition={{ duration: 0.8 }}
          >
            <span className="block text-[#a67c52] text-xs font-bold tracking-[0.4em] mb-6 uppercase">
              The Alchemy
            </span>
            <h2 className="text-5xl font-light text-white mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              Beyond <br/><span className="italic text-[#a67c52]">Chocolate.</span>
            </h2>
            <p className="text-[#8c7f75] text-lg leading-relaxed mb-8">
              True dark chocolate is not manufactured; it is coaxed into existence. We treat cacao as a winemaker treats grapes—respecting the vintage, the terroir, and the unique weather patterns of each harvest.
            </p>
            <p className="text-[#8c7f75] text-lg leading-relaxed mb-12">
              Our 30-day process ensures that every bar of Obsidian contains multitudes. It is bold yet nuanced, intense yet surprisingly smooth.
            </p>

            <button className="px-8 py-4 border border-[#a67c52] text-[#a67c52] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#a67c52] hover:text-black transition-all duration-300">
              Read Our Manifesto
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
