'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Heritage selection', body: 'We begin each season with a survey of our partner groves, identifying trees that have reached peak production maturity — typically between eighty and one hundred and twenty years. Each tree is assessed for pod density, bean size, and aromatic intensity. Only the top fifteen percent of trees contribute to our final blend.' },
  { num: '02', title: 'Ceremonial fermentation', body: 'Harvested pods are opened by hand and the beans are placed in cedar boxes that have been in continuous use for over forty years. The wood has absorbed decades of microbial culture, creating a fermentation environment that is impossible to replicate. Nine days of anaerobic processing, with daily turning and temperature monitoring via embedded probes.' },
  { num: '03', title: 'Stone milling', body: 'We grind on unpolished granite from the Andes — stones selected for their mineral content and thermal properties. The mill runs at fourteen revolutions per minute for ninety-six hours. The low speed prevents frictional heating, while the extended duration achieves a particle size of twelve microns without the metallic contamination that steel rollers inevitably introduce.' },
  { num: '04', title: 'Vault maturation', body: 'Tempered bars are placed in our underground vaults — converted wine cellars maintained at eighteen degrees and sixty-five percent humidity. For one hundred and eighty days, the chocolate undergoes a slow transformation: the tannins soften, the volatile acids dissipate, and the flavour compounds rearrange into a harmonious whole. We taste at thirty-day intervals to track the evolution.' },
];

export default function AeonProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#c5a059]" /><span className="text-xs font-medium tracking-[0.5em] text-[#c5a059] uppercase">The ancient ritual</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-[#f4f1ea] leading-[1.1] max-w-3xl" style={{ fontFamily: "'Cinzel', serif" }}>From root <br /><span className="italic text-[#c5a059]">to relic.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-14 transition-all duration-700">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-normal text-[#f4f1ea]/10 group-hover:text-[#c5a059]/30 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Cinzel', serif" }}>{s.num}</span>
                <div className="flex-1"><h3 className="text-2xl md:text-3xl font-normal text-[#f4f1ea] mb-4 group-hover:text-[#c5a059] transition-colors duration-500" style={{ fontFamily: "'Cinzel', serif" }}>{s.title}</h3><p className="text-[#a89080] text-lg font-light leading-[1.9]">{s.body}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
