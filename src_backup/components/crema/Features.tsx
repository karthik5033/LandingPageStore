'use client';
import { motion } from 'framer-motion';
import { Droplet, Wind, Clock } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: "Cold Extracted",
    description: "Steeped in purified alkaline water for 24 hours to draw out the sweetest, most delicate flavor notes without any bitterness."
  },
  {
    icon: Wind,
    title: "Nitro Infused",
    description: "Cascading micro-bubbles create a luxuriously thick, velvety texture that mimics heavy cream without the dairy."
  },
  {
    icon: Clock,
    title: "Aged to Perfection",
    description: "Rested in oak barrels for 30 days, imparting subtle hints of vanilla, toasted wood, and dark chocolate."
  }
];

export default function Features() {
  return (
    <section id="craft" className="py-40 relative z-20 border-t border-[#d4a373]/10 bg-[#0a0807]/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#d4a373] uppercase mb-6 block">
            01. / The Craft
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Patience is our <br />
            <span className="italic text-[#d4a373]">primary ingredient.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              className="p-10 border-l border-[#d4a373]/20 bg-black/20 backdrop-blur-sm relative group"
            >
              <feature.icon className="text-[#d4a373] mb-10 transition-transform duration-500 group-hover:-translate-y-2" size={32} strokeWidth={1} />
              <h3 className="text-2xl font-light text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-loose font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
