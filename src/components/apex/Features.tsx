'use client';
import { motion } from 'framer-motion';
import { Zap, Crosshair, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Instant Ignition",
    description: "Rapid-absorption liquid matrix hits your bloodstream in under 4 minutes. Zero wait time."
  },
  {
    icon: Crosshair,
    title: "Tunnel Vision",
    description: "Laser-focused cognitive enhancement via our proprietary L-Theanine and Tyrosine stack."
  },
  {
    icon: TrendingUp,
    title: "Sustained Burn",
    description: "No crash. Smooth taper down through engineered complex carb chains and B-vitamin complexes."
  }
];

export default function Features() {
  return (
    <section id="ignition" className="py-40 relative z-20 border-t border-[#ff3300]/20 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <span className="text-sm font-bold tracking-[0.4em] text-[#ff3300] uppercase mb-4 block">
            // Core Mechanics
          </span>
          <h2 className="text-7xl md:text-9xl font-bold text-white uppercase leading-none tracking-tight" style={{ fontFamily: "'Teko', sans-serif" }}>
            Unleash <br />
            <span className="text-[#ff3300]">Hell.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="p-10 border border-white/10 hover:border-[#ff3300] transition-colors duration-300 group bg-black/40 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3300]/10 rounded-full blur-3xl group-hover:bg-[#ff3300]/30 transition-all duration-500" />
              
              <feature.icon className="text-[#ff3300] mb-8 relative z-10" size={48} strokeWidth={1.5} />
              <h3 className="text-4xl font-bold tracking-wide text-white mb-4 uppercase relative z-10" style={{ fontFamily: "'Teko', sans-serif" }}>
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed relative z-10 font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
