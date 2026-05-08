'use client';
import { motion } from 'framer-motion';
import { Cpu, Zap, Binary } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Overclocked Voltage",
    description: "300mg of raw bio-available caffeine isolated for immediate neural transmission. Zero latency."
  },
  {
    icon: Cpu,
    title: "Cognitive Matrix",
    description: "Alpha-GPC and L-Tyrosine stacked to expand working memory and processing bandwidth."
  },
  {
    icon: Binary,
    title: "Clean Source",
    description: "Zero sugar. Zero artificial dyes. Just pure executable energy compiled perfectly for the human runtime."
  }
];

export default function Features() {
  return (
    <section id="specs" className="py-40 relative z-20 overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-32 relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#00f0ff] mb-8"
          />
          <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#00f0ff] uppercase mb-6 block">
            [DATA_STREAM: SPECS]
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            Hardware <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-600">Upgraded.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#00f0ff]/20 pt-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative group p-8 bg-[#02040a]/40 backdrop-blur-xl border border-[#00f0ff]/10 hover:border-[#00f0ff]/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f0ff]" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00f0ff]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00f0ff]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f0ff]" />

              <div className="mb-10 text-[#00f0ff] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                <feature.icon size={48} strokeWidth={1} />
              </div>
              <h3 className="text-lg font-bold tracking-[0.2em] text-white mb-6 uppercase font-mono">
                {feature.title}
              </h3>
              <p className="text-[#00f0ff]/60 text-sm leading-loose font-mono">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
