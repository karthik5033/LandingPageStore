'use client';
import { motion } from 'framer-motion';
import { Leaf, Flame, Timer, Gem, Droplets, Mountain } from 'lucide-react';

const pillars = [
  { icon: Mountain, label: '01', title: 'Place as ingredient', subtitle: 'Terroir-First Sourcing', body: 'We select our cacao not by variety or price, but by the specificity of its terroir. Every bean carries the mineral fingerprint of its soil, the microbial signature of its fermentation environment, and the climatic record of its growing season. These are the ingredients that no factory can replicate — and they are the only ingredients that matter.' },
  { icon: Leaf, label: '02', title: 'Honest fermentation', subtitle: '7-Day Natural Process', body: 'Fermentation is where flavour is born. We extend our fermentation to seven days — two days longer than industry standard — to allow the full development of flavour precursors. We use the naturally occurring yeasts and bacteria of each site, never adding commercial starter cultures. The result is a fermentation profile that is unique to each harvest and each location.' },
  { icon: Flame, label: '03', title: 'Gentle roast', subtitle: 'Low-Temperature Preservation', body: 'We roast at one hundred and thirty degrees for ninety minutes — temperatures that most commercial roasters would consider wastefully slow. But this gentle approach preserves the fragile floral and fruity esters that aggressive roasting destroys in the first sixty seconds. The bean arrives at the conche with its full aromatic spectrum intact.' },
  { icon: Timer, label: '04', title: 'Extended conche', subtitle: '96-Hour Translation', body: 'Our conche runs for ninety-six hours — four full days. The first forty-eight hours are devoted to volatile acid removal. The remaining forty-eight hours are pure flavour development, as the mechanical energy of the granite rollers generates Maillard reaction products that add depth, warmth, and a persistent finish to the chocolate.' },
  { icon: Droplets, label: '05', title: 'Radical simplicity', subtitle: 'Three Ingredients Only', body: 'Cacao mass, cane sugar, cocoa butter. That is the full list. We use no lecithin, no vanilla, no emulsifiers. We achieve smooth texture through extended conching, not through the addition of processing aids. The simplicity is not a constraint — it is a commitment to letting the terroir speak without interruption.' },
  { icon: Gem, label: '06', title: 'Narrative tasting notes', subtitle: 'Story-Form Description', body: 'Our tasting notes are written as narrative prose, not as flavour wheels or bullet points. We believe that the experience of chocolate is too complex and too personal to be reduced to a checklist. Each bar comes with a short essay describing what we tasted, what we remembered, and what the chocolate made us feel.' },
];

export default function SomaFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#d2691e]" /><span className="text-xs font-medium tracking-[0.5em] text-[#d2691e] uppercase">The six commitments</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-[#f5e6d3] leading-[1.1] max-w-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>Fidelity is <br /><span className="italic text-[#d2691e]">our method.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group">
              <div className="flex items-start gap-6"><div className="flex flex-col items-center gap-3 pt-1"><span className="text-xs tracking-[0.3em] text-[#d2691e]/60 font-mono">{p.label}</span><div className="w-[1px] h-8 bg-[#d2691e]/20 group-hover:h-14 group-hover:bg-[#d2691e]/50 transition-all duration-700" /><Icon className="w-4 h-4 text-[#d2691e]/40 group-hover:text-[#d2691e] transition-colors duration-500" /></div>
                <div className="flex-1"><h3 className="text-2xl font-normal text-[#f5e6d3] mb-1 tracking-wide group-hover:text-[#d2691e] transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3><span className="text-xs tracking-[0.3em] text-[#f5e6d3]/30 uppercase block mb-5">{p.subtitle}</span><p className="text-[#c4956a] text-lg font-light leading-[1.9]">{p.body}</p></div></div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
