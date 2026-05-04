'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Aerospace Grade',
    desc: 'Forged from singular blocks of titanium, offering unparalleled strength-to-weight ratios.',
  },
  {
    title: 'Kinetic Movement',
    desc: 'Self-winding automatic caliber with a 72-hour power reserve and magnetic resistance.',
  },
  {
    title: 'Sapphire Crystal',
    desc: 'Domed anti-reflective sapphire, virtually impossible to scratch under normal conditions.',
  }
];

export default function AetherFeatures() {
  return (
    <section id="engineering" className="relative z-10 py-32 px-6 md:px-32 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-gray-500 text-[9px] font-bold tracking-[0.4em] mb-6 uppercase"
          >
            Engineering Perfection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Form follows <br/><span className="italic text-gray-400">Function.</span>
          </motion.h2>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="border-l border-white/10 pl-6"
            >
              <h3 className="text-lg font-light text-white mb-4 tracking-[0.2em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-xs font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
