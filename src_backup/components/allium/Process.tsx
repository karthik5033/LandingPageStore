'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full max-w-5xl bg-black/40 backdrop-blur-xl border border-[#f5f5dc]/20 p-12 md:p-24 rounded-tl-[4rem] rounded-br-[4rem] text-center">
          <span className="text-[#f5f5dc] text-xs font-bold tracking-[0.4em] uppercase mb-8 block">The Foundational Bulb</span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Essence of <span className="italic text-[#f5f5dc]">Savory.</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed text-lg max-w-2xl mx-auto mb-16">
            Pungent. Sweet. Umami. Our heritage garlic bulbs are grown in cold climates to force the bulb to develop deep, concentrated sugars and fiery allicin compounds. We don't bleach our garlic. We don't irradiate it. It is simply harvested, naturally cured, and gently dehydrated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#f5f5dc]/10 pt-12 text-left">
            {[
              { t: 'Cold Winter Sowing', d: 'Planted before the hard freeze to ensure massive, potent bulb development.' },
              { t: 'Field Curing', d: 'Left to hang in shaded barns for 4 weeks to draw moisture from the stalk into the cloves.' },
              { t: 'Low-Temp Dehydration', d: 'Toasted at extremely low heat to prevent bitterness, locking in the sweet, savory depth.' }
            ].map((s, i) => (
              <div key={i}>
                <h3 className="text-[#f5f5dc] font-serif text-xl mb-3">{s.t}</h3>
                <p className="text-white/50 text-sm font-light">{s.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}