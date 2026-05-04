'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Velvet Texture',
    desc: 'Conched for 96 hours to achieve an impossibly smooth, melt-in-your-mouth experience.',
  },
  {
    title: 'Rare Origins',
    desc: 'Sourced directly from micro-lot farms in Madagascar and the Dominican Republic.',
  },
  {
    title: 'Artisan Crafted',
    desc: 'Hand-tempered by master chocolatiers in our Parisian atelier.',
  }
];

export default function SilkFeatures() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-32 border-t border-[#c8a97e]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-[#c8a97e] text-[10px] font-bold tracking-[0.4em] mb-4 uppercase"
          >
            The Silk Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Redefining <br/><span className="italic text-[#e8d5c4]">Decadence.</span>
          </motion.h2>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              <h3 className="text-xl font-normal text-[#c8a97e] mb-4 tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
              <p className="text-[#a89584] leading-relaxed text-sm font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
