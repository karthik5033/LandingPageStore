'use client';
import { motion } from 'framer-motion';
import { TreePine, Timer, Leaf, Gem, Droplets, Shield } from 'lucide-react';

const pillars = [
  { icon: TreePine, label: '01', title: 'Heritage genetics', subtitle: 'Century-Old Trees', body: 'Our mother trees are between one hundred and one hundred and eighty years old. Their root systems extend twelve metres into ancient volcanic deposits, drawing minerals that younger trees cannot access. The beans are denser, more aromatic, and carry a complexity that can only develop over decades of genetic adaptation to a specific microclimate.' },
  { icon: Timer, label: '02', title: 'Extended fermentation', subtitle: '9-Day Anaerobic', body: 'We ferment for nine days in heirloom cedar boxes — three days longer than industry standard. The extended timeline allows a third fermentation phase to develop, where Lactobacillus bacteria convert residual sugars into lactic acid. This adds a creamy, yoghurt-like roundness that short fermentations cannot achieve and that distinguishes truly aged chocolate.' },
  { icon: Leaf, label: '03', title: 'Natural drying', subtitle: '21-Day Sun Cure', body: 'Our beans are dried on raised bamboo beds under a canopy of woven banana leaves. The leaves filter direct sunlight while allowing gentle air circulation. The process takes twenty-one days — three times longer than mechanical drying — but the slow moisture removal preserves the delicate enzymatic reactions that continue to develop flavour long after fermentation has ended.' },
  { icon: Shield, label: '04', title: 'Stone pressing', subtitle: 'Cold-Press Extraction', body: 'We separate cocoa butter using a traditional hydraulic stone press rather than modern expeller technology. The stone press operates at ambient temperature, preventing the thermal degradation of butter-soluble flavour compounds. The extracted butter is clear, golden, and carries the full aromatic fingerprint of its origin — not the neutral, deodorised product of industrial extraction.' },
  { icon: Droplets, label: '05', title: 'Vault ageing', subtitle: '180-Day Maturation', body: 'Every bar is aged for one hundred and eighty days in underground vaults maintained at exactly eighteen degrees and sixty-five percent humidity. During this extended rest, the volatile aromatic compounds undergo a slow equilibrium process — harsh notes soften, subtle flavours emerge, and the chocolate develops a cohesion and depth that freshly tempered bars simply cannot achieve.' },
  { icon: Gem, label: '06', title: 'Conservation fund', subtitle: 'Heritage Protection', body: 'Ten percent of every purchase is reinvested directly into heritage grove conservation. We fund tree surveys, genetic mapping, soil restoration, and the training of young farmers in traditional cultivation methods. Aeon is not just a chocolate brand — it is a preservation project, ensuring that the trees that survived a century will survive another.' },
];

export default function AeonFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#c5a059]" /><span className="text-xs font-medium tracking-[0.5em] text-[#c5a059] uppercase">The six principles</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-[#f4f1ea] leading-[1.1] max-w-3xl" style={{ fontFamily: "'Cinzel', serif" }}>Patience is <br /><span className="italic text-[#c5a059]">our method.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group">
              <div className="flex items-start gap-6"><div className="flex flex-col items-center gap-3 pt-1"><span className="text-xs tracking-[0.3em] text-[#c5a059]/60 font-mono">{p.label}</span><div className="w-[1px] h-8 bg-[#c5a059]/20 group-hover:h-14 group-hover:bg-[#c5a059]/50 transition-all duration-700" /><Icon className="w-4 h-4 text-[#c5a059]/40 group-hover:text-[#c5a059] transition-colors duration-500" /></div>
                <div className="flex-1"><h3 className="text-2xl font-normal text-[#f4f1ea] mb-1 tracking-wide group-hover:text-[#c5a059] transition-colors duration-500" style={{ fontFamily: "'Cinzel', serif" }}>{p.title}</h3><span className="text-xs tracking-[0.3em] text-[#f4f1ea]/30 uppercase block mb-5">{p.subtitle}</span><p className="text-[#a89080] text-lg font-light leading-[1.9]">{p.body}</p></div></div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
