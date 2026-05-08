'use client';
import { motion } from 'framer-motion';

export default function AmbroseIngredients() {
  return (
    <section id="ingredients" className="py-32 px-8 relative z-10 bg-[#140a05]/60 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase block mb-6">Chapter IV</span>
          <h2 className="text-5xl md:text-6xl font-normal text-[#f4eee1]" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            The <span className="italic text-[#e6cda3]">Absolutes.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            { num: 'I', title: 'The Mass', desc: '100% single-estate cacao. No blending across origins. If a harvest is too acidic or too bitter, we do not mask it. We simply do not release it.' },
            { num: 'II', title: 'The Sweet', desc: 'Raw, unrefined Muscovado sugar. It brings its own profile of molasses and dark rum, complementing rather than simply sweetening the cacao.' },
            { num: 'III', title: 'The Fat', desc: 'We press our own cocoa butter from the exact same batch of beans. This ensures perfect molecular compatibility and a flawless melt.' },
            { num: 'IV', title: 'The Void', desc: 'No lecithin. No vanilla. No emulsifiers. The texture you feel is solely the result of prolonged friction in the stone melangeur.' }
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="flex gap-8 group"
            >
              <div className="text-[#e6cda3] text-3xl font-light mt-1" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                {item.num}
              </div>
              <div className="border-t border-[#e6cda3]/20 pt-4 flex-1 group-hover:border-[#e6cda3] transition-colors">
                <h3 className="text-2xl font-normal text-[#f4eee1] mb-4 group-hover:text-[#e6cda3] transition-colors duration-500" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  {item.title}
                </h3>
                <p className="text-[#f4eee1]/60 text-base font-light leading-[1.9]">
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
