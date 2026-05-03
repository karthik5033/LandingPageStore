'use client';
import { motion } from 'framer-motion';

const products = [
  {
    id: '01',
    name: 'NOIR ABSOLU',
    note: '88% | Madagascar',
    profile: 'Blackcurrant — Smoky Oak — Mineral Earth',
    weight: '65g',
    tag: 'Intense'
  },
  {
    id: '02',
    name: 'VELOURS DOUX',
    note: '62% | Ecuador',
    profile: 'Sun-dried Cherry — Dark Honey — Spiced Vanilla',
    weight: '65g',
    tag: 'Balanced'
  },
  {
    id: '03',
    name: 'LAIT DORÉ',
    note: '45% | Ghana',
    profile: 'Toasted Hazelnut — Caramel — Brown Butter',
    weight: '65g',
    tag: 'Smooth'
  }
];

export default function ChocolateProducts() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-15%' }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="block text-[#c8922a] text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">
          The Collection
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Three Expressions
          <br /><span className="text-[#8a7060]">One Philosophy.</span>
        </h2>
      </motion.div>

      <div className="space-y-px">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-10%' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group flex flex-col md:flex-row md:items-center justify-between bg-[#0f0500]/70 border border-white/5 hover:border-[#c8922a]/30 p-8 md:p-10 gap-6 transition-all duration-500 cursor-pointer hover:bg-[#1a0c02]/90"
          >
            {/* Left: ID + Name */}
            <div className="flex items-start gap-8">
              <span className="text-[11px] font-mono text-[#5a4030] mt-1.5 shrink-0">{p.id}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#c8922a] transition-colors duration-400 tracking-wider uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {p.name}
                </h3>
                <p className="text-[#8a7060] text-sm mt-1 tracking-widest">{p.note}</p>
              </div>
            </div>

            {/* Center: Tasting Profile */}
            <div className="flex-1 md:text-center">
              <p className="text-[#a09080] text-sm italic">{p.profile}</p>
            </div>

            {/* Right: Weight + Tag + CTA */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-right hidden md:block">
                <div className="text-white font-bold text-lg">{p.weight}</div>
                <div className="text-[10px] uppercase tracking-widest text-[#5a4030]">{p.tag}</div>
              </div>
              <div className="w-10 h-10 border border-[#c8922a]/30 rounded-full flex items-center justify-center group-hover:bg-[#c8922a] group-hover:border-[#c8922a] transition-all duration-400">
                <span className="text-[#c8922a] group-hover:text-black text-sm font-bold transition-colors">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 flex justify-center"
      >
        <button className="group relative overflow-hidden border border-[#c8922a]/50 px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-[#c8922a] hover:text-black transition-colors duration-400">
          <span className="absolute inset-0 bg-[#c8922a] translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
          <span className="relative">View Full Collection</span>
        </button>
      </motion.div>
    </section>
  );
}
