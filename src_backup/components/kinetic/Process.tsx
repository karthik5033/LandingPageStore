'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Extraction",
    desc: "Raw kinetic compounds isolated in vacuum environments."
  },
  {
    num: "02",
    title: "Synthesis",
    desc: "Molecular binding of nootropics and natural fruit sugars."
  },
  {
    num: "03",
    title: "Deployment",
    desc: "Pressurized sealing for maximum shelf stability and instant release."
  }
];

export default function Process() {
  return (
    <section id="system" className="py-40 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#00f0ff] uppercase mb-6 block">
            [DATA_STREAM: SYSTEM_ARCH]
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-600">Architecture.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="p-8 border border-[#00f0ff]/10 bg-[#02040a]/60 backdrop-blur-sm hover:border-[#00f0ff]/40 transition-colors duration-300 relative group"
            >
              <div className="text-6xl font-bold text-[#00f0ff]/10 mb-8 font-mono group-hover:text-[#00f0ff]/20 transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-lg font-bold tracking-[0.2em] text-white mb-4 uppercase font-mono">
                {step.title}
              </h3>
              <p className="text-[#00f0ff]/60 text-sm font-mono leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
          
          <div className="hidden md:block absolute top-[4rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent z-[-1]" />
        </div>
      </div>
    </section>
  );
}
