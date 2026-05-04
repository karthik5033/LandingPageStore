'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "I",
    title: "Synthesize",
    desc: "We extract raw kinetic potential from high-grade natural botanicals."
  },
  {
    num: "II",
    title: "Amplify",
    desc: "The payload is supercharged with our proprietary cognitive matrix."
  },
  {
    num: "III",
    title: "Execute",
    desc: "Canned at 40 PSI for an explosive, carbonated strike."
  }
];

export default function Process() {
  return (
    <section id="payload" className="py-40 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <span className="text-sm font-bold tracking-[0.4em] text-[#ff3300] uppercase mb-4 block">
            // The Protocol
          </span>
          <h2 className="text-7xl md:text-9xl font-bold text-white uppercase tracking-tight leading-none" style={{ fontFamily: "'Teko', sans-serif" }}>
            Maximum <span className="text-[#ff3300]">Output.</span>
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
              <div className="text-[12rem] leading-none font-bold text-white/5 mb-4 group-hover:text-[#ff3300]/20 transition-colors duration-500" style={{ fontFamily: "'Teko', sans-serif" }}>
                {step.num}
              </div>
              <h3 className="text-4xl font-bold tracking-wide text-white mb-4 uppercase" style={{ fontFamily: "'Teko', sans-serif" }}>
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
