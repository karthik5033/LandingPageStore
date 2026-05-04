'use client';
import { motion } from 'framer-motion';
import { Activity, Battery, Cpu } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: "RAPID ABSORPTION",
    description: "Nano-formulated electrolytes bypass standard digestion for instantaneous cellular hydration and kinetic response."
  },
  {
    icon: Battery,
    title: "SUSTAINED OUTPUT",
    description: "Zero crash. Time-released botanical nootropics maintain peak cognitive and physical performance."
  },
  {
    icon: Cpu,
    title: "NEURAL SYNC",
    description: "Calibrated amino acids enhance neural pathway transmission for unparalleled focus and reaction time."
  }
];

export default function Features() {
  return (
    <section id="specs" className="py-40 relative z-20 bg-black/40 backdrop-blur-md border-y border-[#ccff00]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-24">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ccff00] uppercase mb-4 block">
            [SYS.SPECS] // V.2.4
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Hardware <span className="text-[#ccff00]">Upgraded.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="border-t border-white/10 pt-8 group hover:border-[#ccff00]/50 transition-colors duration-300"
            >
              <feature.icon className="text-[#ccff00] mb-8" size={32} strokeWidth={1} />
              <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-white mb-4 uppercase">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm font-sans font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
