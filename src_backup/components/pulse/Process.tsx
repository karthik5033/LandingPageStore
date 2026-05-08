'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: "I", title: "Curation", desc: "Sourcing the rarest organic compounds and kinetic botanicals." },
  { num: "II", title: "Distillation", desc: "Cold-press extraction to preserve absolute molecular integrity." },
  { num: "III", title: "Maturation", desc: "Resting the elixir to achieve perfect metabolic harmony." }
];

export default function PulseProcess() {
  return (
    <section id="process" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-xs font-medium tracking-[0.4em] text-[#c8922a] uppercase mb-6 block">03. / The Methodology</span>
            <h2 className="text-4xl md:text-6xl font-normal text-white tracking-wide leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The <span className="italic text-[#c8922a]">Craft.</span>
            </h2>
          </div>

          <div className="space-y-20 relative">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-[#c8922a]/20 hidden md:block" />
            
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="flex flex-col md:flex-row items-start gap-8 md:gap-16 relative"
              >
                <div className="w-16 h-16 rounded-full border border-[#c8922a]/30 bg-[#0a0604] flex items-center justify-center relative z-10 shrink-0 text-[#c8922a] font-normal text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-normal text-white tracking-widest uppercase mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
