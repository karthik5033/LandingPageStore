'use client';
import { motion } from 'framer-motion';

export default function AureliaProcess() {
  return (
    <section id="process" className="py-40 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <span className="text-xs font-semibold tracking-[0.5em] text-[#c79a52] uppercase block mb-6">Chapter III: The Craft</span>
          <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Architecture of <span className="italic text-[#c79a52]">Taste.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Selection', desc: 'Hand-sorting raw beans to remove any defective or under-fermented seeds.' },
            { step: '02', title: 'Roast', desc: 'Slow roasting in antique drums to coax out the volatile aromatics.' },
            { step: '03', title: 'Refine', desc: 'Stone grinding for up to 96 hours to achieve perfect microscopic particle size.' },
            { step: '04', title: 'Temper', desc: 'Precise thermal manipulation to crystallize the cocoa butter into a brilliant snap.' }
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="relative p-10 border border-white/5 hover:border-[#c79a52]/30 transition-all duration-700 group bg-[#0a0a0a]/30 backdrop-blur-md"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#c79a52] uppercase block mb-8">
                Phase {s.step}
              </span>
              <h3 className="text-2xl font-normal text-white mb-6 group-hover:text-[#c79a52] transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                {s.title}
              </h3>
              <div className="w-12 h-[1px] bg-white/10 mb-6 group-hover:bg-[#c79a52]/50 transition-colors" />
              <p className="text-white/60 text-sm leading-[2] font-light">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
