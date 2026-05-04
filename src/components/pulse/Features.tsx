'use client';
import { motion } from 'framer-motion';
import { Activity, Zap, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: "Cognitive Clarity",
    desc: "Elevated mental acuity through organically sourced, refined nootropics."
  },
  {
    icon: Zap,
    title: "Pure Kinetin",
    desc: "A sophisticated energy matrix designed for sustained, elegant performance."
  },
  {
    icon: ShieldAlert,
    title: "Sustained Vitality",
    desc: "Masterfully balanced half-life guarantees a graceful taper, never a crash."
  }
];

export default function PulseFeatures() {
  return (
    <section id="features" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center md:text-left border-l border-[#c8922a] pl-8">
          <span className="text-xs font-medium tracking-[0.4em] text-[#c8922a] uppercase mb-6 block">02. / The Architecture</span>
          <h2 className="text-4xl md:text-6xl font-normal text-white tracking-wide leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Refined <span className="italic text-[#c8922a]">Energy.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group"
            >
              <div className="mb-8 relative inline-block">
                <f.icon size={28} className="text-[#c8922a] relative z-10" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-[#c8922a]/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-lg font-normal text-white tracking-widest uppercase mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
