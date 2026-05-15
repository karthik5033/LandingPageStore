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
    <section id="features" className="py-40 px-6 md:pl-40 md:pr-24 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <span className="text-[#d8b4e2] text-xs font-bold tracking-[0.5em] uppercase block mb-6">The Velour Way</span>
                <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-[0.8]">Defined by <br/><span className="text-gray-700 italic text-5xl md:text-7xl">Softness.</span></h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-xs text-sm text-gray-500 font-light leading-relaxed uppercase tracking-widest"
            >
              Pioneering the future of soft-serve gastronomy with mathematical precision.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/5">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative p-12 border-b md:border-b-0 md:border-r border-white/5 last:border-r-0 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#d8b4e2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="mb-10 inline-block p-4 bg-white/5 rounded-2xl group-hover:bg-[#d8b4e2] group-hover:text-black transition-all duration-500">
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-[#d8b4e2] transition-colors duration-500">{f.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{f.desc}</p>
              </div>

              {/* Decorative Number */}
              <span className="absolute -bottom-8 -right-4 text-[10rem] font-serif font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-all duration-1000 select-none">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

