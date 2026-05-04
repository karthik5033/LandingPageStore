'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Brutalist Core',
    desc: 'Unapologetic raw concrete and exposed steel structures that define the skyline.',
  },
  {
    title: 'Spatial Dynamics',
    desc: 'Fluid interior spaces designed to maximize natural light and environmental harmony.',
  },
  {
    title: 'Zero Emission',
    desc: 'Pioneering sustainable architecture with fully integrated passive cooling and solar arrays.',
  }
];

export default function MonolithFeatures() {
  return (
    <section id="ethos" className="relative z-10 py-40 px-6 md:px-32 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
        >
          <span className="block text-gray-600 text-[10px] font-bold tracking-[0.5em] mb-6 uppercase">
            Architectural Ethos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight uppercase">
            Form Dictates <br/><span className="text-gray-600">Existence.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border-t-2 border-white/10 pt-8"
            >
              <h3 className="text-xl font-bold tracking-[0.2em] text-white mb-6 uppercase">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium tracking-wide">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
