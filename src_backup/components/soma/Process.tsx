'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Seasonal harvest', body: 'We harvest twice per year, aligned to the natural fruiting cycles of each origin. Pods are selected individually by hand, tested for ripeness by sound — a ripe pod resonates differently when tapped. The beans are extracted within one hour of harvest and immediately placed into fermentation boxes. Timing is everything; a delay of even four hours allows unwanted microbial colonisation.' },
  { num: '02', title: 'Site-specific fermentation', body: 'Each origin is fermented differently, using the naturally occurring microbial flora of its specific environment. Our Peruvian beans ferment in mahogany boxes surrounded by plantain and citrus. Our Belizean beans ferment in ceiba wood under a canopy of breadfruit. The wood, the air, the ambient microbiome — all of it shapes the final flavour in ways that cannot be replicated elsewhere.' },
  { num: '03', title: 'Sympathetic roast', body: 'We develop a bespoke roast profile for each origin through iterative testing — typically twelve to fifteen iterations before we find the curve that best translates the bean\'s potential into actual flavour. The profiles are documented and stored, but we re-verify at the start of each season, because the same tree does not produce identical beans year to year.' },
  { num: '04', title: 'Patient refinement', body: 'The roasted nibs are ground in granite melangers for ninety-six continuous hours. We add sugar at hour twenty-four and cocoa butter at hour forty-eight. The conche is monitored via viscosity measurement every twelve hours — we are looking for a specific flow curve that indicates the chocolate has reached the particle size and fat distribution that will produce a clean, persistent melt.' },
];

export default function SomaProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#d2691e]" /><span className="text-xs font-medium tracking-[0.5em] text-[#d2691e] uppercase">The translation process</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-[#f5e6d3] leading-[1.1] max-w-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>From spoken <br /><span className="italic text-[#d2691e]">to written.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-14 hover:border-white/20 transition-all duration-700 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-normal text-[#f5e6d3]/10 group-hover:text-[#d2691e]/30 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</span>
                <div className="flex-1"><h3 className="text-2xl md:text-3xl font-normal text-[#f5e6d3] mb-4 group-hover:text-[#d2691e] transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3><p className="text-[#c4956a] text-lg font-light leading-[1.9]">{s.body}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
