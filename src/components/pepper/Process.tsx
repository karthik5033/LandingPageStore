'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <span className="text-[#424242] text-xs font-bold tracking-[0.6em] uppercase mb-6 block border-b border-[#424242]/30 pb-4">The King's Harvest</span>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-8">
              Black <br /><span className="text-[#424242] italic">Gold.</span>
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-lg mb-8">
              Black pepper was once the currency of empires. Today, most commercial pepper is a hollow shadow of its former glory—dusty, mild, and stale. We return to the ancient methods, harvesting the peppercorns only when they turn crimson on the vine, ensuring maximum piperine content and a sharp, biting heat that lingers elegantly on the palate.
            </p>
          </motion.div>
          <div className="flex-1 space-y-4">
            {[
              { t: 'The Crimson Pluck', d: 'Harvested entirely by hand when the berries reach peak maturity.' },
              { t: 'Solar Curing', d: 'The berries are blanched in boiling water, then spread under the equatorial sun until the skin oxidizes into a wrinkled, pitch-black armor.' },
              { t: 'Gravity Sorting', d: 'Only the heaviest, most dense peppercorns pass our density test. Lighter, hollow corns are discarded.' }
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-black/40 backdrop-blur-md p-8 border-l-4 border-[#424242] hover:bg-white/5 transition-colors">
                <h3 className="text-2xl text-white font-bold uppercase tracking-widest mb-2">{s.t}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}