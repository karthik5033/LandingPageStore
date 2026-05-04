'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "I",
    title: "Extract",
    desc: "Raw botanical compounds sourced from high-altitude volcanic soil and cold-pressed at origin."
  },
  {
    num: "II",
    title: "Smelt",
    desc: "Ingredients are fused under pressure in our proprietary thermal extraction chamber for maximum bioavailability."
  },
  {
    num: "III",
    title: "Temper",
    desc: "Flash-carbonated at 50 PSI and sealed in reinforced aluminum. Hardened for the hardest training days."
  }
];

export default function Process() {
  return (
    <section id="temper" className="py-40 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <span className="text-sm font-bold tracking-[0.4em] text-[#4a90d9] uppercase mb-4 block">
            // The Process
          </span>
          <h2 className="text-7xl md:text-9xl font-bold text-white uppercase tracking-tight leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Forged Under <span className="text-[#4a90d9]">Pressure.</span>
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
              <div className="text-[12rem] leading-none font-bold text-white/5 mb-4 group-hover:text-[#4a90d9]/20 transition-colors duration-500" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {step.num}
              </div>
              <h3 className="text-4xl font-bold tracking-wide text-white mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
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
