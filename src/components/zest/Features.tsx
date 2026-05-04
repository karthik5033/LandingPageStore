'use client';
import { motion } from 'framer-motion';
import { Droplet, Leaf, Sun } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: "COLD-PRESSED",
    description: "Extracted without heat to preserve maximum nutrient density and living enzymes."
  },
  {
    icon: Leaf,
    title: "100% ORGANIC",
    description: "Sourced directly from regenerative farms working in harmony with nature."
  },
  {
    icon: Sun,
    title: "VIBRANT ENERGY",
    description: "Pure, unadulterated fruit vitality that fuels your body from within."
  }
];

export default function Features() {
  return (
    <section className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] text-rose-500 uppercase mb-4 block">
            02. / The Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Nature's <span className="italic text-rose-400">perfection,</span> bottled.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="border-l border-rose-500/20 pl-8 group hover:border-rose-500 transition-colors duration-500"
            >
              <feature.icon className="text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-500" size={24} />
              <h3 className="text-sm font-bold tracking-[0.2em] text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
