'use client';
import { motion } from 'framer-motion';

export default function NocturneBotanicals() {
  return (
    <section id="botanicals" className="py-40 px-8 relative z-10">
      <div className="max-w-[1400px] mx-auto border-t border-b border-[#cfbba0]/10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-10"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase">The Ingredients</span>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
              Nothing <br /> but <span className="italic text-[#cfbba0]">nature.</span>
            </h2>
            <div className="space-y-8">
              {[
                { name: 'Criollo Cacao', desc: 'The rarest genetic varietal on earth. Less than 1% of global production. Pale, delicate, and intensely aromatic.' },
                { name: 'Unrefined Panela', desc: 'Evaporated sugarcane juice from the high Andes. Adds notes of molasses and dried figs without overpowering the cacao.' },
                { name: 'Cocoa Butter', desc: 'Extracted directly from the same harvest of beans to ensure the fat profile perfectly matches the solids. No deodorization.' }
              ].map((item, i) => (
                <div key={item.name} className="border-l border-[#cfbba0]/30 pl-8">
                  <h3 className="text-xl font-normal text-white mb-2" style={{ fontFamily: "'Cinzel', serif" }}>{item.name}</h3>
                  <p className="text-white/50 text-sm font-light leading-[1.8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[600px] border border-[#cfbba0]/20 flex items-center justify-center p-8 bg-[#050505]/40 backdrop-blur-md"
          >
            <div className="text-center">
              <span className="text-[12rem] font-serif text-[#cfbba0]/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">3</span>
              <p className="relative z-10 text-white/70 text-lg font-light tracking-[0.2em] uppercase">Three Ingredients.</p>
              <p className="relative z-10 text-white/40 text-sm font-light tracking-[0.2em] uppercase mt-4">Infinite Complexity.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
