'use client';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun, Wind } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Leaf, title: 'Raw Purity', desc: 'Sourced directly from the soil, unaltered and unrefined.', colSpan: 'col-span-1 md:col-span-2', bg: 'bg-[#8b4513]/10' },
    { icon: Sun, title: 'Sun-Dried', desc: 'Slowly cured under natural sunlight.', colSpan: 'col-span-1 md:col-span-1', bg: 'bg-white/5' },
    { icon: Droplets, title: 'Essential Oils', desc: 'Harvested at peak aromatic concentration.', colSpan: 'col-span-1 md:col-span-1', bg: 'bg-white/5' },
    { icon: Wind, title: 'Micro-Milled', desc: 'Ground precisely to preserve delicate compounds.', colSpan: 'col-span-1 md:col-span-2', bg: 'bg-[#8b4513]/10' }
  ];

  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-[#8b4513] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">The Anatomy</span>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Uncompromising <span className="italic text-[#8b4513]">Standards.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 max-w-sm text-sm font-light leading-relaxed"
          >
            Every jar of KIN contains only what nature provided. No fillers, no anti-caking agents, no artificial colours. Just the raw essence of the earth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`p-10 rounded-2xl border border-white/10 hover:border-[#8b4513]/50 transition-colors duration-500 flex flex-col justify-between min-h-[280px] ${feature.colSpan} ${feature.bg}`}
            >
              <div className="w-12 h-12 rounded-full bg-black/50 border border-[#8b4513]/30 flex items-center justify-center text-[#8b4513] mb-12">
                <feature.icon strokeWidth={1} size={20} />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                <p className="text-white/50 font-light text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}