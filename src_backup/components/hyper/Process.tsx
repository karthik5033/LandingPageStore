'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "I",
    title: "Compile",
    desc: "We source the highest-grade raw ingredients, compiling them into a dense energy matrix."
  },
  {
    num: "II",
    title: "Overclock",
    desc: "The payload is supercharged with our proprietary cognitive and metabolic enhancers."
  },
  {
    num: "III",
    title: "Deploy",
    desc: "Canned under high pressure. Ready to execute on your command for instant velocity."
  }
];

export default function Process() {
  return (
    <section id="core" className="py-40 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <span className="text-sm font-bold tracking-[0.4em] text-[#ff00cc] uppercase mb-4 block">
            // System Architecture
          </span>
          <h2 className="text-6xl md:text-8xl font-bold text-white uppercase tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The <span className="text-[#ff00cc] drop-shadow-[0_0_15px_rgba(255,0,204,0.5)]">Algorithm.</span>
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
              <div className="text-[10rem] leading-none font-bold text-white/5 mb-4 group-hover:text-[#ff00cc]/20 transition-colors duration-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {step.num}
              </div>
              <h3 className="text-3xl font-bold tracking-wide text-white mb-4 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
