'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Wild extraction', body: 'Pods are harvested by hand from wild trees and opened within one hour. The pulp-covered beans are placed directly onto the jungle floor, covered with banana leaves, and left to ferment using the naturally occurring microbiome of the forest. No starter cultures, no temperature control — just the ecosystem doing what it has done for millennia.' },
  { num: '02', title: 'Canopy drying', body: 'Fermented beans are spread on bamboo mats elevated one metre above the forest floor. The canopy filters direct sunlight while allowing warm air to circulate freely. Drying takes fourteen to eighteen days depending on humidity — far longer than mechanical alternatives. The slow moisture reduction allows continued enzymatic development of flavour precursors.' },
  { num: '03', title: 'Stone friction', body: 'We grind using volcanic basalt stones that weigh three hundred kilograms each, rotating at just eight revolutions per minute. The low speed prevents heat generation while the rough stone surface efficiently fractures the cacao particles. Ninety-six hours of continuous grinding achieves a fourteen-micron finish without any metallic contamination.' },
  { num: '04', title: 'Raw tempering', body: 'The ground mass is cooled on polished river stones collected from the same watershed as our cacao. We seed with hand-scraped cocoa butter at twenty-nine degrees — slightly lower than industry standard — to encourage the formation of dense Type V crystals. The result is a bar with a deep, earthy snap and a melt that is slow and deliberate.' },
];

export default function OriginProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#88b04b]" /><span className="text-xs font-medium tracking-[0.5em] text-[#88b04b] uppercase">The extraction cycle</span></div>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] max-w-3xl" style={{ fontFamily: "'Syne', sans-serif" }}>From soil <span className="italic text-[#88b04b]">to surface.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-14 hover:border-white/20 transition-all duration-700 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-bold text-white/10 group-hover:text-[#88b04b]/30 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Syne', sans-serif" }}>{s.num}</span>
                <div className="flex-1"><h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#88b04b] transition-colors duration-500" style={{ fontFamily: "'Syne', sans-serif" }}>{s.title}</h3><p className="text-white/50 text-lg font-light leading-[1.9]">{s.body}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
