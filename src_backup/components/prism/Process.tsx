'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "I",
    title: "Fracture",
    desc: "We shatter whole-spectrum organic fruits into their purest molecular components at sub-zero temperatures."
  },
  {
    num: "II",
    title: "Refract",
    desc: "Each flavor wavelength is isolated and amplified through our proprietary chromatographic stacking process."
  },
  {
    num: "III",
    title: "Detonate",
    desc: "Carbonated at 45 PSI and sealed in light-reactive cans for an explosive, prismatic sensory event."
  }
];

export default function Process() {
  return (
    <section id="formula" className="py-40 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <span className="text-sm font-bold tracking-[0.4em] text-[#ff0066] uppercase mb-4 block">
            // The Method
          </span>
          <h2 className="text-7xl md:text-9xl font-bold text-white uppercase tracking-tight leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Controlled <span className="text-[#ff0066]">Chaos.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="text-center group"
            >
              <div className="text-[12rem] leading-none font-bold text-white/5 mb-4 group-hover:text-[#ff0066]/20 transition-colors duration-500" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {step.num}
              </div>
              <h3 className="text-4xl font-bold tracking-wide text-white mb-4 uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
