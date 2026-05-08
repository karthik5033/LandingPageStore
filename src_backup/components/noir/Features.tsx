'use client';
import { motion } from 'framer-motion';
import { Droplets, Leaf, Flame } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Rare Cacao",
    desc: "Sourced from ancient criollo trees hidden deep within untamed rainforests."
  },
  {
    icon: Flame,
    title: "Master Roasted",
    desc: "Roasted in small batches over open flame to coax out deep, resonant notes."
  },
  {
    icon: Droplets,
    title: "Silken Melt",
    desc: "Conched for 72 hours until it achieves a liquid silk texture on the palate."
  }
];

export default function NoirFeatures() {
  return (
    <section id="features" className="py-32 pl-6 pr-6 md:pl-40 md:pr-12 relative z-10 border-y border-[#3a2010]/30" style={{ background: 'linear-gradient(to bottom, rgba(10,3,0,0.8), rgba(10,3,0,0.4))', backdropFilter: 'blur(8px)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase block mb-4" style={{ color: '#c8922a' }}>The Elements</span>
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Beyond Perfection.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="border-l-2 pl-8 group transition-colors duration-500 py-4 hover:bg-white/[0.02]"
              style={{ borderColor: '#3a2010' }}
            >
              <f.icon className="w-8 h-8 mb-6 transition-transform duration-500 group-hover:scale-110" style={{ color: '#c8922a' }} />
              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed max-w-xs font-light" style={{ color: '#8a7060' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
