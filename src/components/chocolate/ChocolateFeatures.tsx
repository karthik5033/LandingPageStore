'use client';
import { motion } from 'framer-motion';

const features = [
  {
    number: '72%',
    label: 'Cacao Origin',
    desc: 'Single-origin Grand Cru cacao sourced exclusively from the fertile river basins of Ecuador and Madagascar.',
    tag: 'PURITY'
  },
  {
    number: '48h',
    label: 'Conching Time',
    desc: 'Each batch is slow-conched for up to 48 hours to develop complexity and eliminate astringency.',
    tag: 'TECHNIQUE'
  },
  {
    number: '4°C',
    label: 'Temper Precision',
    desc: 'Crystallization is controlled to within ±0.5°C, ensuring that perfect audible snap and mirror-like gloss.',
    tag: 'PRECISION'
  },
  {
    number: '∞',
    label: 'Finish',
    desc: 'A lingering, layered finish—notes of dark cherry, aged tobacco, and warm spice that evolve with every bite.',
    tag: 'SENSATION'
  }
];

export default function ChocolateFeatures() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-40">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-15%' }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="block text-[#c8922a] text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">
          What Sets Us Apart
        </span>
        <h2 className="text-4xl md:text-5xl font-black leading-tight text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          The Four <span className="text-[#c8922a]">Pillars</span>
          <br />of Velvet Excellence
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
        {features.map((f, i) => (
          <motion.div
            key={f.tag}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-10%' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative bg-[#0f0500]/80 backdrop-blur-sm p-10 border border-white/5 hover:border-[#c8922a]/40 transition-all duration-500 hover:bg-[#1a0a00]/90"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-[#c8922a]/5 to-transparent pointer-events-none" />

            <span className="block text-[9px] font-bold tracking-[0.4em] text-[#7a5535] mb-6 uppercase">{f.tag}</span>
            <div className="text-5xl md:text-6xl font-black text-white mb-4 group-hover:text-[#c8922a] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {f.number}
            </div>
            <div className="text-sm font-bold text-[#d4b896] uppercase tracking-widest mb-4">{f.label}</div>
            <p className="text-[#8a7060] text-sm leading-relaxed">{f.desc}</p>

            {/* Bottom accent line */}
            <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-[#c8922a]/50 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
