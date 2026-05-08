'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Cold Pressed',
    desc: 'Never heated. Our hydraulic press extracts every drop of living enzyme and nutrient.',
  },
  {
    title: 'Wild Harvested',
    desc: 'Foraged from untouched botanical sanctuaries, ensuring the purest phytonutrient profile.',
  },
  {
    title: 'Micro-Filtered',
    desc: 'A proprietary zero-oxidation process that captures the crisp, unadulterated essence of nature.',
  }
];

export default function BotanicaFeatures() {
  return (
    <section id="essence" className="relative z-10 py-40 px-6 md:px-32 border-t border-white/10 bg-gradient-to-b from-black/0 to-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
        <div className="md:w-5/12">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
            <span className="block text-green-400 text-[10px] font-bold tracking-[0.4em] mb-6 uppercase">
              The Essence
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Untouched <br/><span className="italic text-gray-400">Purity.</span>
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wide">
              We do not create nature; we simply bottle it. Our extraction methods are designed to preserve the delicate cellular structure of every leaf, root, and fruit.
            </p>
          </motion.div>
        </div>

        <div className="md:w-7/12 flex flex-col justify-center gap-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-8"
            >
              <div className="w-12 h-12 rounded-full border border-green-400/30 flex items-center justify-center flex-shrink-0 text-green-400 text-sm font-light">
                0{i + 1}
              </div>
              <div>
                  <h3 className="text-xl font-light tracking-widest text-white mb-3 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm font-light tracking-wide">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
