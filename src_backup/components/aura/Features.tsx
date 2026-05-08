'use client';
import { motion } from 'framer-motion';
import { Mountain, Droplets, Clock, Leaf, Sprout, Award } from 'lucide-react';

const features = [
  {
    icon: Mountain,
    title: "High Altitude",
    desc: "Grown at 2,000+ meters above sea level for denser, more flavorful beans."
  },
  {
    icon: Sprout,
    title: "Single Origin",
    desc: "Sourced from exclusive micro-lots in the Yirgacheffe region of Ethiopia."
  },
  {
    icon: Droplets,
    title: "Washed Process",
    desc: "Meticulously washed and sun-dried to preserve bright, floral notes."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 pl-6 pr-6 md:pl-40 md:pr-12 relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">Why Aura?</span>
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
              <f.icon className="w-8 h-8 text-amber-500 mb-6" />
              <h3 className="text-xl font-serif text-white mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
