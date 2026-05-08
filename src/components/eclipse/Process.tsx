'use client';
import { motion } from 'framer-motion';

export default function EclipseProcess() {
  return (
    <section id="process" className="py-40 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#8f1722] uppercase block mb-6">The Process</span>
          <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Born in <span className="italic text-[#8f1722]">fire.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Ferment', desc: 'Six days in mahogany boxes under banana leaves. Temperatures reach 50°C naturally.' },
            { step: '02', title: 'Roast', desc: 'Slow-roasted over open flames. The Maillard reaction unlocks deep caramel notes.' },
            { step: '03', title: 'Conche', desc: '90 hours of continuous grinding and aeration to evaporate volatile acids.' },
            { step: '04', title: 'Temper', desc: 'Rapid heating and cooling to align the cocoa butter crystals for a sharp snap.' }
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-[#030303]/60 backdrop-blur-md border border-[#8f1722]/10 p-10 hover:border-[#8f1722]/50 transition-colors duration-500 group"
            >
              <div className="text-4xl font-light text-white/20 mb-8 group-hover:text-[#8f1722] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {s.step}
              </div>
              <h3 className="text-2xl font-normal text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {s.title}
              </h3>
              <p className="text-white/50 text-sm font-light leading-[1.8]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
