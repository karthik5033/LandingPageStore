'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent border-t border-[#dcb83c]/20 rounded-t-[4rem]">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <span className="text-[#dcb83c] text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">The Ancient Root</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Unearthed <span className="italic text-[#dcb83c]">Wisdom.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { step: 'Curing', desc: 'Boiled in spring water and dried in the shade for 15 days to lock in the essential curcurminoids.' },
            { step: 'Polishing', desc: 'Gently tumbled in traditional bamboo drums to remove the rough exterior and reveal the golden core.' },
            { step: 'Activation', desc: 'Blended with micro-doses of black pepper extract to increase bioavailability by 2000%.' }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="p-10 border border-white/5 rounded-full aspect-square flex flex-col items-center justify-center bg-gradient-to-b from-black/60 to-transparent hover:border-[#dcb83c]/40 transition-all duration-700">
              <div className="w-16 h-16 rounded-full bg-[#dcb83c]/10 flex items-center justify-center mb-6 text-[#dcb83c] font-serif text-xl border border-[#dcb83c]/30 shadow-[0_0_30px_rgba(220,184,60,0.2)]">
                {i + 1}
              </div>
              <h3 className="text-2xl text-white mb-4 font-serif">{item.step}</h3>
              <p className="text-white/50 text-sm font-light text-center px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}