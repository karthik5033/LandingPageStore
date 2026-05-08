'use client';
import { motion } from 'framer-motion';
import { Leaf, TreePine, Droplets, Mountain, Flame, Shield } from 'lucide-react';

const pillars = [
  { icon: Leaf, label: '01', title: 'Jungle floor fermentation', subtitle: 'In-Situ Processing', body: 'Our beans are fermented where they fall — on the forest floor, covered with banana leaves and surrounded by the natural microbial ecosystem of the jungle. The wild yeasts and bacteria present in the soil produce a fermentation profile that is impossible to replicate in a controlled environment. Every batch is unique, shaped by the specific ecology of its location.' },
  { icon: TreePine, label: '02', title: 'Wild genetics', subtitle: 'Undomesticated Varieties', body: 'We source from trees that were never planted by humans. These wild cacao trees colonised the forest understory naturally, dispersed by animals and pollinated by native midges. Their genetics are untouched by modern breeding programmes, retaining the full complexity and resilience that millennia of natural selection have produced.' },
  { icon: Mountain, label: '03', title: 'Volcanic stone press', subtitle: 'Cold-Press Extraction', body: 'We separate cocoa butter using a hydraulic press fitted with volcanic basalt plates. The stone naturally absorbs excess moisture while imparting a subtle mineral quality to the extracted butter. The pressing is done at ambient temperature — never heated — preserving the full spectrum of volatile flavour compounds.' },
  { icon: Droplets, label: '04', title: 'Zero processing aids', subtitle: 'Nothing Added', body: 'No lecithin. No vanilla. No PGPR. No emulsifiers of any kind. We achieve smooth texture through extended stone-grinding at low speed. The process takes ninety-six hours, but the result is a chocolate that owes its texture entirely to the bean itself, not to industrial chemistry.' },
  { icon: Flame, label: '05', title: 'Open-fire roast', subtitle: 'Traditional Heat', body: 'We roast over hardwood embers in a custom-built drum roaster. The radiant heat from the coals produces a roast curve that is fundamentally different from gas or electric — slower to rise, more variable, and richer in the Maillard products that give wood-fired food its distinctive depth. Each batch is attended continuously for the full sixty-minute cycle.' },
  { icon: Shield, label: '06', title: 'Provenance guarantee', subtitle: 'GPS-Verified Source', body: 'Every bar ships with GPS coordinates for the specific grove it came from, the name of the harvester, and the date of collection. This is not traceability as a marketing exercise — it is accountability. If the chocolate is not good, you know exactly where it came from and so do we.' },
];

export default function OriginFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#88b04b]" /><span className="text-xs font-medium tracking-[0.5em] text-[#88b04b] uppercase">The six roots</span></div>
          <h2 className="text-5xl md:text-7xl font-bold text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Syne', sans-serif" }}>Honesty is <span className="italic text-[#88b04b]">our method.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group">
              <div className="flex items-start gap-6"><div className="flex flex-col items-center gap-3 pt-1"><span className="text-xs tracking-[0.3em] text-[#88b04b]/60 font-mono">{p.label}</span><div className="w-[1px] h-8 bg-[#88b04b]/20 group-hover:h-14 group-hover:bg-[#88b04b]/50 transition-all duration-700" /><Icon className="w-4 h-4 text-[#88b04b]/40 group-hover:text-[#88b04b] transition-colors duration-500" /></div>
                <div className="flex-1"><h3 className="text-2xl font-bold text-white premium-text-shadow mb-1 tracking-wide group-hover:text-[#88b04b] transition-colors duration-500" style={{ fontFamily: "'Syne', sans-serif" }}>{p.title}</h3><span className="text-xs tracking-[0.3em] text-white/30 uppercase block mb-5">{p.subtitle}</span><p className="text-white/50 text-lg font-light leading-[1.9]">{p.body}</p></div></div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
