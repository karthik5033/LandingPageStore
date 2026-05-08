'use client';
import { motion } from 'framer-motion';

export default function NocturneCraft() {
  return (
    <section id="craft" className="py-40 px-8 relative z-10 bg-gradient-to-t from-transparent to-[#050505]/90">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase block mb-6">The Process</span>
          <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Cinzel', serif" }}>
            Forged in <span className="italic text-[#cfbba0]">time.</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {[
            { phase: 'I', title: 'The Roast', time: '45 Minutes', desc: 'At exactly 112 degrees Celsius. We listen for the first crack of the bean, then immediately drop the temperature to preserve the floral top notes.' },
            { phase: 'II', title: 'The Winnowing', time: '12 Hours', desc: 'The roasted beans are cracked and subjected to high-velocity air currents, separating the dense nib from the bitter husk.' },
            { phase: 'III', title: 'The Melangeur', time: '120 Hours', desc: 'Five continuous days of stone grinding. The sheer friction slowly liquefies the cocoa butter, reducing the particle size to an imperceptible 14 microns.' },
            { phase: 'IV', title: 'The Aging', time: '90 Days', desc: 'The finished chocolate is poured into blocks and aged in climate-controlled cellars to allow the acidity to mellow and the flavors to integrate.' }
          ].map((s, i) => (
            <motion.div
              key={s.phase}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-center p-10 border border-[#cfbba0]/10 bg-[#050505]/60 backdrop-blur-md hover:border-[#cfbba0]/30 transition-all duration-700"
            >
              <div className="text-5xl md:text-7xl font-light text-[#cfbba0]/20" style={{ fontFamily: "'Cinzel', serif" }}>
                {s.phase}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl text-white font-light mb-4" style={{ fontFamily: "'Cinzel', serif" }}>{s.title}</h3>
                <span className="inline-block px-4 py-1 border border-[#cfbba0]/30 text-[#cfbba0] text-[10px] tracking-[0.3em] uppercase mb-6">{s.time}</span>
                <p className="text-white/60 text-sm font-light leading-[1.9] max-w-xl mx-auto md:mx-0">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
