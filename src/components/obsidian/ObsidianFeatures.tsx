'use client';
import { motion } from 'framer-motion';

const features = [
  {
    number: '85%',
    label: 'Cacao Intensity',
    desc: 'Unyielding depth from rare Criollo beans, grown in the shadows of dormant volcanos.',
    tag: 'STRENGTH'
  },
  {
    number: '72h',
    label: 'Stone Grinding',
    desc: 'Milled using traditional volcanic stone to achieve a texture that melts instantly on contact.',
    tag: 'REFINEMENT'
  },
  {
    number: '18°C',
    label: 'Aging Process',
    desc: 'Cellar-aged for six months to allow tannins to soften and complex aromatics to bloom.',
    tag: 'PATIENCE'
  },
  {
    number: '0.0',
    label: 'Compromise',
    desc: 'No soy lecithin. No artificial vanilla. Just cacao, organic cane sugar, and pure cocoa butter.',
    tag: 'PURITY'
  }
];

export default function ObsidianFeatures() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-32">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-15%' }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center"
      >
        <span className="block text-[#a67c52] text-xs font-bold tracking-[0.5em] mb-6 uppercase">
          The Obsidian Standard
        </span>
        <h2 className="text-4xl md:text-6xl font-normal leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Uncompromising <span className="italic text-[#a67c52]">Excellence.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {features.map((f, i) => (
          <motion.div
            key={f.tag}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-10%' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-[#a67c52]/10 hover:border-[#a67c52]/40 transition-colors"
          >
            <div className="w-32 flex-shrink-0">
              <span className="block text-[10px] font-bold tracking-[0.3em] text-[#706055] mb-2 uppercase">{f.tag}</span>
              <div className="text-5xl md:text-6xl font-light text-white group-hover:text-[#a67c52] transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                {f.number}
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#e6dbd1] uppercase tracking-widest mb-3">{f.label}</div>
              <p className="text-[#8c7f75] text-base leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
