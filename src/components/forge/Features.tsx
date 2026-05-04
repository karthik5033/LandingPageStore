'use client';
import { motion } from 'framer-motion';
import { Shield, Gauge, Swords } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Iron Guard",
    description: "Fortified with 200mg natural caffeine, electrolyte armor, and BCAA reinforcement — built to withstand the longest sessions."
  },
  {
    icon: Gauge,
    title: "Redline Ready",
    description: "Beta-Alanine and L-Citrulline pre-loaded for explosive output. Hits peak performance in under 5 minutes flat."
  },
  {
    icon: Swords,
    title: "Clean Burn",
    description: "Zero sugar, zero crash. Sustained thermogenic release through green tea extract and adaptogenic ashwagandha."
  }
];

export default function Features() {
  return (
    <section id="foundry" className="py-40 relative z-20 border-t border-[#4a90d9]/20 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <span className="text-sm font-bold tracking-[0.4em] text-[#4a90d9] uppercase mb-4 block">
            // Core Engineering
          </span>
          <h2 className="text-7xl md:text-9xl font-bold text-white uppercase leading-none tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Built to <br />
            <span className="text-[#4a90d9]">Break Limits.</span>
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
              className="p-10 border border-white/10 hover:border-[#4a90d9] transition-colors duration-300 group bg-black/40 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4a90d9]/10 rounded-full blur-3xl group-hover:bg-[#4a90d9]/30 transition-all duration-500" />
              
              <feature.icon className="text-[#4a90d9] mb-8 relative z-10" size={48} strokeWidth={1.5} />
              <h3 className="text-4xl font-bold tracking-wide text-white mb-4 uppercase relative z-10" style={{ fontFamily: "'Oswald', sans-serif" }}>
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
