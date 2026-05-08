'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Solar drying', body: 'Freshly fermented beans are spread on raised bamboo beds under diffused sunlight, covered with translucent linen to prevent direct UV damage. The process takes fourteen days — far longer than mechanical drying — but the slow moisture reduction allows enzymatic reactions to continue developing flavour precursors that would otherwise be lost.' },
  { num: '02', title: 'Diffused roast', body: 'We roast with indirect radiant heat, using ceramic panels to deliver energy without convection currents. The beans never exceed one hundred and thirty degrees, preserving the fragile floral aldehydes and terpenes that define our signature brightness. Total roast time is ninety minutes — three times longer than conventional, but the slow curve produces zero charring.' },
  { num: '03', title: 'Marble grind', body: 'Our stone-milling process uses two tonnes of unpolished Carrara marble rotating at just fourteen revolutions per minute. The marble acts as a natural heat sink, keeping the chocolate mass below thirty-two degrees throughout the forty-eight-hour grinding cycle. This prevents the volatilisation of aroma compounds and eliminates the metallic taint of steel mills.' },
  { num: '04', title: 'Aura temper', body: 'We seed the molten chocolate with pre-crystallised cocoa butter at thirty-one degrees, then cool it through a series of precise thermal cycles on Italian marble slabs. The final polish is applied by hand — a technique called tablage — which aligns the Type V crystals into a uniform matrix that produces the mirror-like surface gloss we call the aura.' },
];

export default function LuminaProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#ffd700]" /><span className="text-xs font-medium tracking-[0.5em] text-[#ffd700] uppercase">The golden path</span></div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>From sunlight <br /><span className="italic text-[#ffd700]">to radiance.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-14 hover:border-white/20 transition-all duration-700 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-light text-white/10 group-hover:text-[#ffd700]/30 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.num}</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-[#ffd700] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</h3>
                  <p className="text-[#c4a882] text-lg font-light leading-[1.9]">{s.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
