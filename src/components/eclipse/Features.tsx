'use client';
import { motion } from 'framer-motion';

const philosophy = [
  {
    title: 'Zero Emulsifiers',
    desc: 'Most chocolate uses soy lecithin to artificially bind cocoa mass and sugar. We refuse. Our chocolate achieves its smooth texture through 90 hours of uninterrupted stone grinding.',
  },
  {
    title: 'Deep Canopy Cacao',
    desc: 'Sun-grown cacao yields high volumes but flat flavor profiles. Our beans are grown in the deep shade of the Amazonian understory, resulting in dense, nutrient-rich pods.',
  },
  {
    title: 'Vintage Roasting',
    desc: 'We roast using a restored 1940s spherical roaster. The thick cast iron distributes heat unevenly, allowing some beans to caramelize while others retain their raw acidity.',
  }
];

export default function EclipseFeatures() {
  return (
    <section id="philosophy" className="py-40 px-8 relative z-10 bg-[#030303]/20 backdrop-blur-sm border-t border-[#8f1722]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#8f1722] uppercase block mb-6">The Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Perfection <br /> through <span className="italic text-[#8f1722]">friction.</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-[1.9]">
              Creating chocolate of this caliber is inherently inefficient. It requires immense pressure, dangerous temperatures, and an irrational amount of time.
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-12 pt-10">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1 }}
                className="group border-l border-[#8f1722]/30 pl-8 hover:border-[#8f1722] transition-colors"
              >
                <h3 className="text-2xl font-normal text-white mb-4 group-hover:text-[#8f1722] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {item.title}
                </h3>
                <p className="text-white/50 text-base font-light leading-[1.8]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
