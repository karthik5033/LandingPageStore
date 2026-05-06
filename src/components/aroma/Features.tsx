'use client';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Sun, Eye } from 'lucide-react';

export default function Features() {
  const metrics = [
    { icon: Star, value: 'Grade I', label: 'Coupe Saffron', col: 'col-span-1', delay: 0.1 },
    { icon: Eye, value: '250+', label: 'Color Strength', col: 'col-span-1', delay: 0.2 },
    { icon: Sun, value: '100%', label: 'Sun Dried', col: 'col-span-1', delay: 0.3 },
    { icon: ShieldCheck, value: 'ISO', label: '3632 Certified', col: 'col-span-1 md:col-span-3', delay: 0.4 }
  ];

  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#f4a460] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">The Anatomy</span>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Measurable <br /><span className="italic text-[#f4a460]">Excellence.</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-md">
              True saffron is defined by three chemical compounds: Crocin for colour, Picrocrocin for flavour, and Safranal for aroma. Our harvests consistently test in the top 1% globally for all three markers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: m.delay }}
                className={`p-8 bg-black/20 backdrop-blur-md border border-white/5 hover:border-[#f4a460]/40 transition-colors duration-500 rounded-2xl flex flex-col items-center text-center ${m.col}`}
              >
                <m.icon className="text-[#f4a460] mb-4" strokeWidth={1} size={24} />
                <span className="text-2xl text-white font-light mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{m.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}