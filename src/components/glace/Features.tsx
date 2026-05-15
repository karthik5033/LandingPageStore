'use client';
import { motion } from 'framer-motion';
import { Snowflake, Droplets, Heart } from 'lucide-react';

const features = [
  {
    icon: Snowflake,
    title: "Slow Churned",
    desc: "Incorporating less air for a denser, more intensely flavored experience."
  },
  {
    icon: Heart,
    title: "Pure Dairy",
    desc: "Sourced daily from local organic farms for unmatched freshness."
  },
  {
    icon: Droplets,
    title: "Silky Texture",
    desc: "Perfectly balanced to melt on your palate with zero ice crystals."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 pl-6 pr-6 md:pl-40 md:pr-12 relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
            <span className="text-[#fbcfe8] text-xs font-bold tracking-[0.3em] uppercase block mb-4">Why Glacé?</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Uncompromising Quality.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="border-l border-white/20 pl-8 group hover:bg-white/5 transition-colors duration-500 py-4"
            >
              <f.icon className="w-8 h-8 text-[#fbcfe8] mb-6" />
              <h3 className="text-xl font-serif text-white mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
