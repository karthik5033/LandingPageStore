'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', heading: 'Harvest', text: 'Only sun-drenched, fully-ripe cacao pods are hand-selected by our partner farmers in peak season. Less than 5% of the harvest qualifies.' },
  { num: '02', heading: 'Ferment', text: 'The pulp and beans rest in banana-leaf-lined wooden boxes for exactly 6 days. Fermentation is the birth of flavor—unrushed and unrepeatable.' },
  { num: '03', heading: 'Roast', text: 'Each origin is roasted on separate curves, coaxed to its peak—never burned. The Maillard reaction is our art.' },
  { num: '04', heading: 'Conche', text: 'Our longitudinal conches run for 48 hours. Every pass refines the texture, drives off harsh volatiles, and layers in complexity.' },
  { num: '05', heading: 'Temper', text: 'Using controlled marble-slab tempering, we stabilize Beta V cocoa butter crystals. The result: a snap you can hear across the room.' },
  { num: '06', heading: 'Unveil', text: 'Each bar is hand-wrapped in embossed foil and a matte outer shell, sealed with a wax stamp. Perfection, contained.' }
];

export default function ChocolateProcess() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-40 overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.015] uppercase tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          CRAFT
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-15%' }}
        transition={{ duration: 0.8 }}
        className="mb-24 relative"
      >
        <span className="block text-[#c8922a] text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">
          The Method
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Bean to<br /><span className="text-[#8a7060]">Revelation.</span>
        </h2>
      </motion.div>

      <div className="relative pl-8 border-l border-[#3a2010]">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-10%' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative mb-16 last:mb-0 group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full border-2 border-[#3a2010] group-hover:border-[#c8922a] bg-[#0f0500] transition-colors duration-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8922a] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>

            <div className="flex items-start gap-8">
              <span className="text-[11px] font-mono text-[#4a3020] shrink-0 mt-1">{step.num}</span>
              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-[#c8922a] transition-colors duration-300 mb-3 tracking-wider uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {step.heading}
                </h3>
                <p className="text-[#8a7060] text-sm leading-relaxed max-w-xl">{step.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
