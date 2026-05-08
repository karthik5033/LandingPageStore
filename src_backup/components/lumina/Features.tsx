'use client';
import { motion } from 'framer-motion';
import { Sun, Leaf, Timer, Gem, Droplets, Mountain } from 'lucide-react';

const pillars = [
  { icon: Sun, label: '01', title: 'Solar integrity', subtitle: 'Photon-Preserved', body: 'The polyphenols in cacao are photosynthetic products — complex molecules built from sunlight. Every degree of unnecessary heat destroys them. Our ultra-low-temperature processing preserves the full spectrum of sun-captured nutrients, delivering a chocolate that is not just flavourful but genuinely alive with antioxidant activity.' },
  { icon: Mountain, label: '02', title: 'Wild altitude', subtitle: 'Cloud Forest Origin', body: 'We source exclusively from unmapped groves above one thousand two hundred metres, where the thin atmosphere and intense ultraviolet light force the cacao trees to produce denser, more complex beans as a form of self-defence. The flavanols are more concentrated, the esters more volatile, the terroir more extreme.' },
  { icon: Timer, label: '03', title: 'Sacred rest', subtitle: '90-Day Ageing', body: 'Our bars are aged for ninety days in cedar-lined vaults at a constant eighteen degrees. During this period, the cocoa butter crystals undergo a slow polymorphic transition — migrating from unstable Type IV to the ideal Type V configuration. The result is a bar with a deeper gloss, a cleaner snap, and a flavour profile that has settled into perfect equilibrium.' },
  { icon: Leaf, label: '04', title: 'Floral complexity', subtitle: 'Criollo-First Selection', body: 'We prioritise the high-frequency floral esters found exclusively in rare Criollo strains. These compounds — linalool, geraniol, phenylethyl alcohol — are the same molecules that give roses and jasmine their fragrance. They are fragile, easily destroyed by aggressive roasting, and they are the reason our chocolate smells like a garden, not a factory.' },
  { icon: Droplets, label: '05', title: 'Zero synthetic', subtitle: 'Pure Expression', body: 'No lecithin. No vanilla extract. No PGPR. We achieve smooth viscosity through extended conching, not through the addition of flow agents. The only fat in our chocolate is the cocoa butter that was already present in the bean. This is not minimalism for its own sake — it is a refusal to compromise on transparency.' },
  { icon: Gem, label: '06', title: 'Marble grind', subtitle: 'Stone-Milled Finish', body: 'Our cacao mass is ground on unpolished Carrara marble to prevent the metallic flavour transfer that steel roller mills inevitably introduce. The marble surface provides a natural coolant, keeping the chocolate below critical temperature thresholds during grinding and preserving the full aromatic complexity of the roasted nib.' },
];

export default function LuminaFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#ffd700]" /><span className="text-xs font-medium tracking-[0.5em] text-[#ffd700] uppercase">The six principles</span></div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Light is <br /><span className="italic text-[#ffd700]">our ingredient.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-5%' }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-xl">
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center gap-3 pt-1">
                  <span className="text-xs tracking-[0.3em] text-[#ffd700]/60 font-mono">{p.label}</span>
                  <div className="w-[1px] h-8 bg-[#ffd700]/20 group-hover:h-14 group-hover:bg-[#ffd700]/50 transition-all duration-700" />
                  <Icon className="w-4 h-4 text-[#ffd700]/40 group-hover:text-[#ffd700] transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-normal text-white mb-1 tracking-wide group-hover:text-[#ffd700] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                  <span className="text-xs tracking-[0.3em] text-white/30 uppercase block mb-5">{p.subtitle}</span>
                  <p className="text-[#c4a882] text-lg font-light leading-[1.9]">{p.body}</p>
                </div>
              </div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
