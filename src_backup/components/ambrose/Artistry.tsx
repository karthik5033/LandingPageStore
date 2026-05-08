'use client';
import { motion } from 'framer-motion';

export default function AmbroseArtistry() {
  return (
    <section id="artistry" className="py-40 px-8 relative z-10">
      <div className="max-w-[1200px] mx-auto border-t border-[#e6cda3]/20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase block mb-6">Chapter V</span>
          <h2 className="text-5xl md:text-6xl font-normal text-[#f4eee1]" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            The Final <span className="italic text-[#e6cda3]">Forge.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'The Crack', desc: 'Beans are gently cracked, freeing the nib from the bitter outer husk.' },
            { step: '02', title: 'The Grind', desc: 'Granite wheels crush the nibs into a thick, coarse paste over 24 hours.' },
            { step: '03', title: 'The Conche', desc: 'An agonizing 120-hour aeration process to evaporate sharp volatile acids.' },
            { step: '04', title: 'The Temper', desc: 'Thermal manipulation aligning the fat crystals for a mirror finish.' }
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-[#140a05]/80 backdrop-blur-md border border-[#e6cda3]/10 p-10 hover:bg-[#140a05] hover:border-[#e6cda3]/50 transition-all duration-700 group flex flex-col items-center text-center"
            >
              <div className="text-sm font-bold tracking-[0.3em] text-[#e6cda3] mb-6">
                PHASE {s.step}
              </div>
              <h3 className="text-2xl font-normal text-[#f4eee1] mb-6" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                {s.title}
              </h3>
              <div className="w-8 h-[1px] bg-[#e6cda3]/30 mb-6 group-hover:w-16 transition-all duration-500" />
              <p className="text-[#f4eee1]/50 text-sm font-light leading-[1.8]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
