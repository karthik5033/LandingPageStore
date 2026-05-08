'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "SOURCING",
    desc: "We scan the globe for extreme-climate super-fruits."
  },
  {
    num: "02",
    title: "EXTRACTION",
    desc: "Cold-press technology locks in the living cell structure."
  },
  {
    num: "03",
    title: "AMPLIFICATION",
    desc: "Botanical nootropics are blended for sustained focus."
  }
];

export default function Process() {
  return (
    <section id="blend" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] text-fuchsia-500 uppercase mb-4 block">
            04. / Our Protocol
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Precision in <span className="italic text-fuchsia-400">motion.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="text-5xl font-light text-fuchsia-500/20 mb-6 font-mono">
                {step.num}
              </div>
              <h3 className="text-sm font-bold tracking-[0.2em] text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {step.desc}
              </p>
              
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-fuchsia-500/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
