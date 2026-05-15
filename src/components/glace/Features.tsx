'use client';
import { motion } from 'framer-motion';
import { Snowflake, Droplets, Heart, Sparkles, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: Snowflake,
    title: "Artisanal Churning",
    desc: "A meticulous low-overrun process that eliminates excess air for a dense, silk-like consistency.",
    accent: "text-blue-200"
  },
  {
    icon: Award,
    title: "A2 Heritage Dairy",
    desc: "Exclusively sourced from single-pasture farms, providing a richer butterfat profile.",
    accent: "text-amber-200"
  },
  {
    icon: Sparkles,
    title: "Cryo-Tempering",
    desc: "Rapid cooling technology that ensures zero ice crystal formation for total smoothness.",
    accent: "text-pink-200"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 md:pl-40 md:pr-12 relative z-10 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
            <span className="text-[#fbcfe8] text-xs font-bold tracking-[0.4em] uppercase block mb-6">The Glacé Way</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Pure <span className="text-gray-400 italic">Essence.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative p-10 bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-colors duration-500 rounded-lg"
            >
              <div className="mb-8 inline-block p-4 bg-white/10 rounded-2xl group-hover:bg-[#fbcfe8] group-hover:text-black transition-all duration-500">
                <f.icon className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-[#fbcfe8] transition-colors duration-500">{f.title}</h3>
              <p className="text-gray-300 text-lg font-light leading-relaxed group-hover:text-white transition-colors duration-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

