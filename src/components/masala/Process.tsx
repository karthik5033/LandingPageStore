'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20 bg-black/40 backdrop-blur-sm inline-block p-8 rounded-xl">
          <span className="text-[#e2725b] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">The Symphony</span>
          <h2 className="text-5xl md:text-7xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Complex <span className="italic text-[#e2725b]">Harmony.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { n: '01', t: 'Roasting', c: 'col-span-1 md:col-span-2' },
            { n: '02', t: 'Grinding', c: 'col-span-1 md:col-span-2' },
            { n: '03', t: 'Blending', c: 'col-span-1 md:col-span-4' }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`bg-black/50 backdrop-blur-md border border-[#e2725b]/30 p-12 rounded-3xl ${s.c}`}>
              <span className="text-[#e2725b] text-4xl font-light mb-4 block font-serif">{s.n}</span>
              <h3 className="text-2xl text-white font-serif mb-2">{s.t}</h3>
              <p className="text-white/60 font-light text-sm">Individual spices are toasted separately at precise temperatures before blending to ensure each note is perfectly expressed.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}