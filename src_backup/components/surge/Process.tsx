'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "EXTRACTION",
    desc: "Raw kinetic compounds isolated in vacuum environments."
  },
  {
    num: "02",
    title: "SYNTHESIS",
    desc: "Molecular binding of nootropics and natural sugars."
  },
  {
    num: "03",
    title: "DEPLOYMENT",
    desc: "Pressurized sealing for maximum shelf stability."
  }
];

export default function Process() {
  return (
    <section id="core" className="py-40 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ccff00] uppercase mb-4 block">
            [SYS.PROTOCOL] // INIT
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            The <span className="text-white/40">Architecture.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="text-6xl font-black text-white/5 mb-6 font-mono tracking-tighter">
                {step.num}
              </div>
              <h3 className="text-sm font-mono font-bold tracking-[0.2em] text-[#ccff00] mb-4 uppercase">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm font-sans font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
