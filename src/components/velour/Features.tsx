'use client';
import { motion } from 'framer-motion';
import { Snowflake, Droplets, Heart, Sparkles, Wind, Milk } from 'lucide-react';

const features = [
  {
    icon: Wind,
    title: "The Perfect Overrun",
    desc: "Precisely calibrated aeration that creates a weightless, cloud-like mouthfeel unlike any other.",
    accent: "text-purple-200"
  },
  {
    icon: Milk,
    title: "A2 Jersey Milk",
    desc: "Using milk only from grass-fed Jersey cows for a naturally sweeter, silkier base profile.",
    accent: "text-pink-200"
  },
  {
    icon: Sparkles,
    title: "Silken Extrusion",
    desc: "Our proprietary high-speed extrusion method ensures a micro-crystal structure for total velvet.",
    accent: "text-indigo-200"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 md:pl-40 md:pr-12 relative z-10 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
            <span className="text-[#d8b4e2] text-xs font-bold tracking-[0.4em] uppercase block mb-6">The Velour Way</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Defined by <span className="text-gray-400 italic">Softness.</span></h2>
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
              <div className="mb-8 inline-block p-4 bg-white/10 rounded-2xl group-hover:bg-[#d8b4e2] group-hover:text-black transition-all duration-500">
                <f.icon className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-[#d8b4e2] transition-colors duration-500">{f.title}</h3>
              <p className="text-gray-300 text-lg font-light leading-relaxed group-hover:text-white transition-colors duration-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

