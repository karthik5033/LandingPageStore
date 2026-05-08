'use client';
import { motion } from 'framer-motion';
import { Sparkles, Zap, TestTube } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "MACRO-EXTRACTED",
    description: "Every cellular drop of flavor is preserved through our proprietary high-pressure fusion process."
  },
  {
    icon: Zap,
    title: "KINETIC ENERGY",
    description: "Raw fruit sugars naturally combined with botanical adaptogens for sustained vitality."
  },
  {
    icon: TestTube,
    title: "LAB-VERIFIED",
    description: "Tested for optimal pH and antioxidant density before ever reaching the bottle."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] text-fuchsia-500 uppercase mb-4 block">
            02. / The Formula
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Engineered <span className="italic text-fuchsia-400">Vitality.</span>
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
              className="border-l-2 border-fuchsia-500/20 pl-8 group hover:border-fuchsia-500 transition-colors duration-500"
            >
              <feature.icon className="text-fuchsia-500 mb-6 group-hover:scale-110 transition-transform duration-500" size={28} strokeWidth={1.5} />
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
