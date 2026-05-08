'use client';
import { motion } from 'framer-motion';
import { Zap, Wind, Gauge, Activity, Waves, Flame } from 'lucide-react';

const pillars = [
  { icon: Gauge, label: '01', title: 'High-speed conche', subtitle: '4800 RPM Refinement', body: 'Our conche runs at four thousand eight hundred revolutions per minute — ten times the speed of a traditional longitudinal conche. This is not brute force. The impeller geometry is precision-engineered to create a specific shear pattern that fractures cacao particles along their crystallographic planes, producing a smoother finish with less energy waste.' },
  { icon: Wind, label: '02', title: 'Nitrogen aeration', subtitle: 'Volatile Acid Extraction', body: 'We inject filtered nitrogen at twelve litres per minute directly into the conching mass. The inert gas creates millions of micro-bubbles that dramatically increase the surface area available for volatile acid evaporation. Acetic acid — the primary off-flavour in under-processed chocolate — is stripped from the mass in hours rather than days.' },
  { icon: Zap, label: '03', title: 'Pulse roasting', subtitle: 'Staccato Heat Application', body: 'Instead of a continuous temperature curve, we apply heat in precisely timed pulses — three seconds on, seven seconds off, repeated over sixty minutes. This technique allows the bean surface to cool between pulses, preventing the charring that destroys delicate aroma compounds. The internal temperature rises in a smooth staircase rather than a ramp.' },
  { icon: Activity, label: '04', title: 'Frequency tempering', subtitle: 'Vibrational Crystal Seeding', body: 'We apply low-frequency vibration to the tempered mass at sixty hertz — the resonant frequency of Type V cocoa butter crystals. This vibration encourages crystal nucleation along the desired polymorph, achieving seed distribution that is ten times more uniform than manual seeding. The result is a bar with perfect snap from edge to centre.' },
  { icon: Waves, label: '05', title: 'Ultrasonic refinement', subtitle: 'Sub-Micron Particle Control', body: 'After initial high-speed grinding, we pass the chocolate mass through an ultrasonic horn operating at forty kilohertz. The cavitation pressure waves shatter the remaining particle clusters without adding heat. This achieves a twelve-micron finish in a single pass — a result that conventional equipment requires twelve hours of continuous grinding to match.' },
  { icon: Flame, label: '06', title: 'Flash release', subtitle: 'Rapid Demoulding', body: 'We demould our bars at exactly eighteen degrees — four degrees below standard — using a burst of compressed air rather than mechanical ejection. The rapid release prevents the micro-fractures that slow demoulding can introduce, and the lower temperature preserves the crystal structure established during tempering. Every bar leaves the mould structurally intact.' },
];

export default function VortexFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#ccff00]" /><span className="text-xs font-medium tracking-[0.5em] text-[#ccff00] uppercase">The six frequencies</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Krona One', sans-serif" }}>Energy is <span className="italic text-[#ccff00]">our ingredient.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group">
              <div className="flex items-start gap-6"><div className="flex flex-col items-center gap-3 pt-1"><span className="text-xs tracking-[0.3em] text-[#ccff00]/60 font-mono">{p.label}</span><div className="w-[1px] h-8 bg-[#ccff00]/20 group-hover:h-14 group-hover:bg-[#ccff00]/50 transition-all duration-700" /><Icon className="w-4 h-4 text-[#ccff00]/40 group-hover:text-[#ccff00] transition-colors duration-500" /></div>
                <div className="flex-1"><h3 className="text-2xl font-normal text-white premium-text-shadow mb-1 tracking-wide group-hover:text-[#ccff00] transition-colors duration-500" style={{ fontFamily: "'Krona One', sans-serif" }}>{p.title}</h3><span className="text-xs tracking-[0.3em] text-white/30 uppercase block mb-5">{p.subtitle}</span><p className="text-white/50 text-lg font-light leading-[1.9]">{p.body}</p></div></div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
