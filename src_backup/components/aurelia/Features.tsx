'use client';
import { motion } from 'framer-motion';

const philosophy = [
  {
    num: 'I',
    title: 'The Terroir',
    desc: 'We source exclusively from three single-estate plantations. No blending. No masking. We let the soil, the climate, and the vintage speak clearly through every harvest.',
  },
  {
    num: 'II',
    title: 'The Roast',
    desc: 'Industrial roasters blast beans at 140°C for twenty minutes. We use antique ball roasters at 105°C for sixty minutes. The difference is the preservation of fragile floral esters.',
  },
  {
    num: 'III',
    title: 'The Grind',
    desc: 'Granite melangeurs crush our nibs over four days. This slow, cool friction reduces the particle size to precisely 16 microns — the threshold where texture vanishes into pure sensation.',
  },
  {
    num: 'IV',
    title: 'The Ingredients',
    desc: 'Cacao. Organic cane sugar. Occasionally, a single Bourbon vanilla bean. We reject soy lecithin, emulsifiers, and added cocoa butter. Perfection requires no crutches.',
  }
];

export default function AureliaFeatures() {
  return (
    <section id="philosophy" className="py-40 px-8 relative z-10 bg-[#0a0a0a]/40 backdrop-blur-sm border-y border-[#c79a52]/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-xs font-semibold tracking-[0.5em] text-[#c79a52] uppercase block mb-6">Chapter II: Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Four Pillars of <span className="italic text-[#c79a52]">Aurelia.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {philosophy.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="flex gap-8 group"
            >
              <div className="text-[#c79a52] text-2xl font-light mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.num}
              </div>
              <div>
                <h3 className="text-xl font-normal text-white mb-4 group-hover:text-[#c79a52] transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-white/60 text-base font-light leading-[1.9]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
