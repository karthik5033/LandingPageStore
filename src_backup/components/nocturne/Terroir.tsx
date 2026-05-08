'use client';
import { motion } from 'framer-motion';

export default function NocturneTerroir() {
  return (
    <section id="terroir" className="py-32 px-8 relative z-10 bg-gradient-to-b from-transparent to-[#050505]/80">
      <div className="max-w-[1400px] mx-auto border-t border-[#cfbba0]/20 pt-32">
        <div className="text-center mb-24">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase block mb-6">Geography & Soil</span>
          <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Cinzel', serif" }}>
            The Architecture of <span className="italic text-[#cfbba0]">Terroir.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { metric: 'Soil', val: 'Volcanic Ash', desc: 'Sourced from the slopes of active calderas, imparting an undeniable minerality.' },
            { metric: 'Altitude', val: '1,400 meters', desc: 'Cold nights slow the maturation, concentrating the sugars and organic acids.' },
            { metric: 'Canopy', val: '100% Shade', desc: 'No direct sunlight reaches our pods, forcing the tree to rely on deep root nutrition.' }
          ].map((t, i) => (
            <motion.div
              key={t.metric}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="p-10 border border-white/5 bg-[#050505]/40 backdrop-blur-sm hover:border-[#cfbba0]/40 transition-all duration-700 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#cfbba0]/40 group-hover:bg-[#cfbba0] transition-colors" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">{t.metric}</span>
              </div>
              <h3 className="text-3xl text-white font-light mb-6" style={{ fontFamily: "'Cinzel', serif" }}>{t.val}</h3>
              <p className="text-white/50 text-sm font-light leading-[1.8]">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
