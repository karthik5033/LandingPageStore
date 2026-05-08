'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-[#ffcc80] text-xs font-bold tracking-[0.4em] uppercase mb-6 block">The Rhizome</span>
          <h2 className="text-6xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Zesty <span className="italic text-[#ffcc80]">Vitality.</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative border-l-2 border-[#ffcc80]/20 pl-8 ml-4 md:ml-auto">
          {[
            { t: 'Subterranean Growth', d: 'Grown deep in nutrient-dense tropical soils for 10 months to develop peak gingerol content.' },
            { t: 'The Dig', d: 'Carefully uprooted by hand to prevent bruising the fibrous, aromatic rhizomes.' },
            { t: 'Cold Milling', d: 'Sun-dried and slowly cold-milled to preserve the sharp, spicy, and citrusy essential oils that heat would destroy.' }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="mb-16 relative">
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#ffcc80] shadow-[0_0_15px_rgba(255,204,128,0.8)]" />
              <div className="bg-black/60 backdrop-blur-md border border-[#ffcc80]/10 p-8 rounded-xl hover:border-[#ffcc80]/50 transition-colors">
                <h3 className="text-2xl text-white font-serif mb-4">{s.t}</h3>
                <p className="text-white/60 font-light leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}