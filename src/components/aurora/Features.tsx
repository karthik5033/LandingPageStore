'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'First Light Extraction',
    desc: 'Cold-pressed within minutes of being plucked, preserving the delicate high-frequency energy of the fruit.',
  },
  {
    title: 'Sun-Drenched Roots',
    desc: 'Sourced strictly from the highest-elevation groves, closer to the sun for an intensely concentrated flavor.',
  },
  {
    title: 'Luminous Clarity',
    desc: 'A proprietary centrifugal filtration process that removes heavy sediments while retaining pure, glowing nectar.',
  }
];

export default function AuroraFeatures() {
  return (
    <section id="citrus" className="relative z-10 py-40 px-6 md:px-20 border-t border-yellow-500/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
        <div className="md:w-5/12">
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
          >
            <div className="absolute -inset-10 bg-yellow-500/10 blur-[100px] rounded-full z-0"></div>
            <div className="relative z-10">
              <span className="block text-yellow-400 text-[10px] font-bold tracking-[0.4em] mb-6 uppercase">
                The Citrus
              </span>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pure <br/><span className="italic text-yellow-200">Radiance.</span>
              </h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wider">
                We believe that juice should taste like light. Our methods are fanatically dedicated to preserving the crisp, sharp, and elevating nature of pure citrus.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="md:w-7/12 grid grid-cols-1 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="flex gap-8 group"
            >
              <div className="w-12 h-12 rounded-full border border-yellow-500/20 flex items-center justify-center flex-shrink-0 text-yellow-400 text-xs font-light group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-500">
                0{i + 1}
              </div>
              <div>
                  <h3 className="text-lg font-light tracking-widest text-white mb-3 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-xs font-light tracking-wide">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
