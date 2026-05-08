'use client';
import { motion } from 'framer-motion';
import { Eye, Shield, Leaf, Gem, Droplets, Heart } from 'lucide-react';

const pillars = [
  { icon: Eye, label: '01', title: 'Open cost model', subtitle: 'Full Price Breakdown', body: 'Every bar ships with a printed cost breakdown: farmer payment per kilogram, shipping, roasting, conching, packaging, distribution, and our margin. Nothing is hidden, nothing is rounded. The numbers are specific to each batch and are independently audited annually. If you want to know where your money went, we have already told you.' },
  { icon: Shield, label: '02', title: 'Direct sourcing', subtitle: 'No Intermediaries', body: 'We buy directly from farming cooperatives — no brokers, no commodity traders, no middlemen. This eliminates the layers of opacity that make it impossible for consumers to know what farmers actually received. Our purchase contracts are published on our website, including the price per kilogram, payment terms, and quality bonuses.' },
  { icon: Heart, label: '03', title: 'Living wage guarantee', subtitle: '4x Commodity Price', body: 'We pay a minimum of four dollars and twenty cents per kilogram of wet cacao — approximately four times the current commodity price. This figure is not arbitrary. It is derived from our own cost-of-production surveys in each origin, calculated to ensure that cacao farming provides a dignified livelihood rather than a subsistence existence.' },
  { icon: Leaf, label: '04', title: 'Agroforestry mandate', subtitle: 'Biodiversity First', body: 'All our partner farms operate under agroforestry systems — cacao grown alongside fruit trees, timber species, and nitrogen-fixing plants. This is not a certification requirement. It is an ecological necessity. Monoculture cacao depletes soil, requires chemical inputs, and produces inferior beans. Our mandate ensures both environmental integrity and flavour complexity.' },
  { icon: Droplets, label: '05', title: 'Zero waste processing', subtitle: 'Circular Production', body: 'Cacao shells are composted and returned to partner farms as soil amendment. Cocoa butter extracted during pressing is used entirely in our bars — none is sold to cosmetics or pharmaceutical companies. Packaging is made from post-consumer recycled paper with vegetable-based inks. Our factory runs on one hundred percent renewable energy.' },
  { icon: Gem, label: '06', title: 'Impact reporting', subtitle: 'Quarterly Accountability', body: 'We publish quarterly impact reports covering farmer payments, environmental metrics, and community programme outcomes. These reports are not marketing documents — they are financial statements, prepared by an independent auditor. If we claim to pay above market rate, the evidence is in the ledger. If we claim to be carbon neutral, the calculations are published.' },
];

export default function EthosFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-white" /><span className="text-xs font-medium tracking-[0.5em] text-white/60 uppercase">The six principles</span></div>
          <h2 className="text-5xl md:text-7xl font-light text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Transparency is <span className="italic text-white/40">our product.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group">
              <div className="flex items-start gap-6"><div className="flex flex-col items-center gap-3 pt-1"><span className="text-xs tracking-[0.3em] text-white/30 font-mono">{p.label}</span><div className="w-[1px] h-8 bg-white/10 group-hover:h-14 group-hover:bg-white/30 transition-all duration-700" /><Icon className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors duration-500" /></div>
                <div className="flex-1"><h3 className="text-2xl font-light text-white premium-text-shadow mb-1 tracking-wide group-hover:text-white/70 transition-colors duration-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3><span className="text-xs tracking-[0.3em] text-white/20 uppercase block mb-5">{p.subtitle}</span><p className="text-white/50 text-lg font-light leading-[1.9]">{p.body}</p></div></div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
