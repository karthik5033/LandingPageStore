'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/3">
            <span className="text-[#f3e5ab] text-xs font-bold tracking-[0.4em] uppercase mb-8 block font-serif">The Orchid's Gift</span>
            <h2 className="text-5xl font-light text-white leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pollinated by <span className="italic text-[#f3e5ab]">Hand.</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              Vanilla is the fruit of an orchid that blooms for only 24 hours. Because the Melipona bee native to Mexico is absent in Madagascar, every single vanilla flower must be meticulously pollinated by hand using a wooden needle—a technique unchanged since 1841.
            </p>
          </motion.div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: 'Hand Pollination', d: 'A delicate maneuver performed at dawn, marrying the male and female parts of the flower.' },
              { t: 'Nine Month Maturation', d: 'The green pods remain on the vine for nearly a year, developing their core vanillin compounds.' },
              { t: 'The Bourbon Blanch', d: 'Plunged into hot water to stop fermentation and begin the enzymatic curing process.' },
              { t: 'Sweating & Drying', d: 'Wrapped in wool blankets by night to sweat, and baked in the sun by day for months until they form tiny, glittering vanillin crystals.' }
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white/5 backdrop-blur-md p-8 border border-white/10 hover:border-[#f3e5ab]/50 transition-colors">
                <span className="text-[#f3e5ab] font-serif italic text-xl mb-4 block">0{i+1}</span>
                <h3 className="text-xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{s.t}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}