'use client';
import { motion } from 'framer-motion';

const timeline = [
  { phase: 'Harvest', duration: 'Nov — Feb', detail: 'Hand-picked ripe pods from Piura, Peru. Only fully fermented, sun-dried Criollo beans pass our selection.' },
  { phase: 'Roast', duration: 'Day 1', detail: 'Dual-phase pyrolysis: 280°C flash char, then 140°C slow cure for three hours. Unlocks 400+ flavour compounds.' },
  { phase: 'Crack & Winnow', duration: 'Day 2', detail: 'Beans cracked to nibs, shells removed by air separation. Every nib inspected; any mould or flat-tasting nibs discarded.' },
  { phase: 'Stone Grind', duration: 'Day 2 — 7', detail: 'Granite melangers run 120 hours. Particle size drops from 200μm to 15μm. Texture becomes indistinguishable from liquid.' },
  { phase: 'Temper', duration: 'Day 8', detail: 'Hand-tabled on Carrara marble. Seeding Type V crystals at 31.5°C for perfect snap and gloss.' },
  { phase: 'Mould & Age', duration: 'Day 8 — 21', detail: 'Poured into hand-polished moulds. Aged two weeks at 16°C and 55% humidity. Flavour rounds and deepens.' },
];

export default function CrestProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-[#d4a054]" />
            <span className="text-xs font-medium tracking-[0.5em] text-[#d4a054] uppercase">
              Bean to Bar Timeline
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Twenty-one days. <br />
            <span className="italic text-[#d4a054]">Zero shortcuts.</span>
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[22px] md:left-[28px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#d4a054]/50 via-[#d4a054]/20 to-transparent" />

          <div className="flex flex-col gap-16">
            {timeline.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-8 md:gap-12 group"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-[#d4a054]/30 flex items-center justify-center bg-[#0c0604]/80 backdrop-blur-sm group-hover:border-[#d4a054] transition-all duration-500">
                    <span className="text-xs md:text-xs font-mono text-[#d4a054]/60 group-hover:text-[#d4a054] transition-colors">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                    <h3
                      className="text-2xl md:text-3xl font-normal text-white tracking-wide group-hover:text-[#d4a054] transition-colors duration-500"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {step.phase}
                    </h3>
                    <span className="text-xs tracking-[0.3em] text-[#d4a054]/50 uppercase font-mono">{step.duration}</span>
                  </div>
                  <p className="text-[#a89080] text-lg font-light leading-[1.9] max-w-2xl">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-28 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { val: '21', unit: 'Days', label: 'Total Process' },
            { val: '120', unit: 'Hours', label: 'Conching Time' },
            { val: '15', unit: 'μm', label: 'Particle Fineness' },
            { val: '200', unit: 'Bars', label: 'Per Batch' },
          ].map(s => (
            <div key={s.label} className="text-center md:text-left">
              <div className="flex items-baseline gap-1 justify-center md:justify-start">
                <span className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "'EB Garamond', serif" }}>{s.val}</span>
                <span className="text-sm text-[#d4a054] font-light">{s.unit}</span>
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-white/30 mt-2 block">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
