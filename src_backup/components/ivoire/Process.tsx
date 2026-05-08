'use client';
import { motion } from 'framer-motion';

export default function IvoireProcess() {
  return (
    <section id="alchemy" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-28"
        >
          <span className="text-xs font-medium tracking-[0.5em] text-[#6b4a2e] uppercase block mb-6">
            The White Art
          </span>
          <h2
            className="text-5xl md:text-7xl font-normal text-[#2a1f1a] leading-[1.1] max-w-3xl mx-auto"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            An alchemy of <span className="italic text-[#6b4a2e]">restraint.</span>
          </h2>
        </motion.div>

        {/* Horizontal process with connecting lines */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          <div className="hidden md:block absolute top-[32px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#6b4a2e]/20 to-transparent" />

          {[
            { step: '01', title: 'Cold Press', time: '4 hrs', desc: 'Raw Arriba Nacional beans are hydraulically pressed at 28°C — never heated — to extract cocoa butter with all volatile aromatics intact.' },
            { step: '02', title: 'Clarify', time: '12 hrs', desc: 'The raw cocoa butter is gravity-filtered through linen cloth to remove sediment while preserving the delicate floral and nutty volatile compounds.' },
            { step: '03', title: 'Compound', time: '2 hrs', desc: 'Cocoa butter, alpine milk powder, Mauritius cane sugar, and one Bourbon vanilla pod are combined and fed into granite melangers.' },
            { step: '04', title: 'Refine', time: '48 hrs', desc: 'The melangers run for two full days, reducing particle size to below 18 microns. The chocolate transforms from gritty paste to liquid silk.' },
            { step: '05', title: 'Temper', time: '1 hr', desc: 'Hand-tabled on Carrara marble at 27°C, seeding Type V cocoa butter crystals. Poured into pre-warmed moulds and vibrated to remove air.' },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              className="relative flex flex-col items-center text-center px-4 py-8 group"
            >
              <div className="w-16 h-16 rounded-full border border-[#6b4a2e]/20 flex items-center justify-center mb-6 bg-[#f5efe6]/80 backdrop-blur-xl z-10 group-hover:border-[#6b4a2e]/50 transition-all duration-500 shadow-sm">
                <span className="text-xs font-mono text-[#6b4a2e]/60 group-hover:text-[#6b4a2e] transition-colors">{s.step}</span>
              </div>

              <h3
                className="text-lg font-normal text-[#2a1f1a] mb-1 group-hover:text-[#6b4a2e] transition-colors duration-500"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                {s.title}
              </h3>
              <span className="text-[11px] tracking-[0.3em] text-[#6b4a2e]/40 uppercase mb-4">{s.time}</span>
              <p className="text-[#5a4d40] text-base font-light leading-[1.8]">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-28 pt-10 border-t border-[#2a1f1a]/[0.08] flex flex-wrap justify-center gap-16 md:gap-24"
        >
          {[
            { val: '28°C', label: 'Cold Press Temp' },
            { val: '48h', label: 'Refining Time' },
            { val: '18μm', label: 'Particle Size' },
            { val: '4', label: 'Ingredients Only' },
          ].map(m => (
            <div key={m.label} className="text-center">
              <span className="text-3xl md:text-4xl font-light text-[#2a1f1a]" style={{ fontFamily: "'Libre Baskerville', serif" }}>{m.val}</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#6b4a2e]/40 block mt-2">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
