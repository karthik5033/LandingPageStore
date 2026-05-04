'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Radiant Energy',
    desc: 'High-voltage natural sugars and complex vitamins to ignite your metabolic fire.',
  },
  {
    title: 'Golden Hour Harvest',
    desc: 'Plucked exclusively at sunset when the fruit\'s nectar reaches peak aromatic intensity.',
  },
  {
    title: 'Cloud Filtration',
    desc: 'A gentle, gravity-fed filtration system that retains pulp integrity and mouthfeel.',
  }
];

export default function OasisFeatures() {
  return (
    <section id="sun-kissed" className="relative z-10 py-40 px-6 md:px-20 border-t border-orange-500/10 bg-black/90">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
          >
            <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full z-0"></div>
            <div className="relative z-10">
              <span className="block text-orange-400 text-[10px] font-black tracking-[0.4em] mb-6 uppercase">
                Sun-Kissed
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 uppercase tracking-tighter">
                Taste The <br/><span className="text-orange-500">Equator.</span>
              </h2>
              <p className="text-gray-400 text-sm font-medium leading-relaxed tracking-widest uppercase">
                Our distinct equatorial climate forces the fruit to develop unparalleled resistance and flavor. Every drop contains the concentrated essence of a thousand hours of tropical sun.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-white/5 border border-orange-500/10 p-8 rounded-3xl hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-500"
            >
              <h3 className="text-sm font-black tracking-widest text-white mb-4 uppercase">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed text-xs font-medium tracking-wider uppercase">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
