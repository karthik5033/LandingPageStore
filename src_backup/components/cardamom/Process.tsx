'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-24">
          <span className="text-[#81c784] text-xs font-bold tracking-[0.5em] uppercase mb-8 block font-serif">The Green Queen</span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Symphony of <span className="italic text-[#81c784]">Eucalyptus.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            True green cardamom is the third most expensive spice in the world, requiring an astonishing amount of manual labor. Our pods grow in the shade of the forest canopy, slowly developing the complex camphor, citrus, and mint notes that define the highest grade 'Alleppey Green Extra Bold'.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#81c784]/30 to-transparent hidden md:block" />
          {[
            { step: 'I', t: 'Canopy Growth', d: 'Cultivated under native shade trees, protecting the delicate flowers from harsh direct sunlight.' },
            { step: 'II', t: 'Selective Pluck', d: 'Harvesters traverse the steep hillsides, picking only the mature pods every 30 days.' },
            { step: 'III', t: 'Cold Curing', d: 'Dried slowly without artificial heat to preserve the vibrant green hue and volatile oils.' }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-black/50 backdrop-blur-lg border border-[#81c784]/20 p-10 rounded-full aspect-square w-72 flex flex-col items-center justify-center relative z-10 hover:border-[#81c784] transition-all">
              <span className="text-3xl text-[#81c784] font-serif italic mb-4">{s.step}</span>
              <h3 className="text-xl text-white font-serif mb-2">{s.t}</h3>
              <p className="text-white/50 text-xs font-light text-center px-4 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}