'use client';
import { motion } from 'framer-motion';

export default function Process() {
  const processes = [
    { id: 'I', title: 'The Plucking', desc: 'Saffron crocus flowers are hand-picked strictly at dawn before the sun opens the petals.' },
    { id: 'II', title: 'Separation', desc: 'The delicate stigmas are separated from the petals entirely by hand to prevent bruising.' },
    { id: 'III', title: 'Toasting', desc: 'Gently toasted over silk screens to lock in the intense golden hue and deep aroma.' }
  ];

  return (
    <section id="craft" className="py-32 relative z-20 bg-black/20 backdrop-blur-sm border-t border-[#f4a460]/10">
      <div className="container mx-auto px-6 md:px-16">
        
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <span className="text-[#f4a460] text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">The Ritual</span>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Patience is <br />
              <span className="italic text-[#f4a460]">Golden.</span>
            </h2>
            <p className="text-white/60 text-base font-light leading-relaxed">
              150,000 flowers. 400 hours of labor. 1 kilogram of saffron. The creation of AROMA is not a manufacturing process; it is an act of devotion.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {processes.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="p-10 border-l border-[#f4a460]/20 hover:border-[#f4a460] transition-colors duration-500 bg-black/40 backdrop-blur-md rounded-r-3xl"
            >
              <div className="text-[#f4a460] text-3xl font-light mb-6 font-serif">{p.id}.</div>
              <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}