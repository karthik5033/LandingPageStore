'use client';
import { motion } from 'framer-motion';
import { Shield, Flame, Timer, Gem, Droplets, Mountain } from 'lucide-react';

const pillars = [
  { icon: Shield, label: '01', title: 'Uncompromising source', subtitle: 'Elite Selection', body: 'We reject ninety percent of the cacao we sample. Our selection criteria are brutally simple: the bean must have inherent complexity, structural density, and a fermentation profile that suggests the farmer understood what they were doing. We do not rescue mediocre beans with clever processing. We start with excellence and protect it.' },
  { icon: Flame, label: '02', title: 'Precision roasting', subtitle: 'Controlled Pyrolysis', body: 'Our roast profiles are developed through hundreds of iterations. Each origin gets a bespoke temperature curve, monitored via embedded thermocouples at fifteen-second intervals. We roast in small batches of eight kilograms, ensuring uniform heat distribution. The margin of error is plus or minus one degree. Any excursion beyond this triggers an automatic re-roast or discard.' },
  { icon: Timer, label: '03', title: '72-hour conche', subtitle: 'Extended Refinement', body: 'We conche for seventy-two hours — three full days. The first twenty-four hours strip volatile acids. The second twenty-four reduce particle size below fourteen microns. The final day is dedicated to flavour development, as the mechanical energy generates the Maillard products and caramelised notes that give our chocolate its signature depth and persistence.' },
  { icon: Gem, label: '04', title: 'Table tempering', subtitle: 'Hand-Seeded Crystals', body: 'Every batch is tempered by hand on Italian marble. Our chocolatier seeds Type V crystals at exactly thirty-one point five degrees, working the mass with a palette knife until the viscosity and sheen indicate perfect crystallisation. This is not a process that can be automated without loss. The hand knows what the thermometer cannot measure.' },
  { icon: Droplets, label: '05', title: 'Zero additives', subtitle: 'Radical Purity', body: 'Three ingredients: cacao mass, cane sugar, cocoa butter. No lecithin, no vanilla, no emulsifiers. We achieve smooth texture through extended conching, not through chemistry. If the chocolate needs additives to taste good, the problem is the chocolate, not the ingredient list.' },
  { icon: Mountain, label: '06', title: 'Batch inspection', subtitle: 'Sensory Verification', body: 'Our maître chocolatier tastes at every stage — post-roast, mid-conche, pre-temper, and final mould. Each evaluation is scored against our internal sensory matrix. Any batch scoring below ninety-two is re-processed or discarded. We have destroyed entire batches of otherwise excellent chocolate because it did not meet our standard. This is not waste. It is discipline.' },
];

export default function ValorFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#94a3b8]" /><span className="text-xs font-medium tracking-[0.5em] text-[#94a3b8] uppercase">The six standards</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Cinzel', serif" }}>Rigour is <br /><span className="italic text-[#94a3b8]">our tradition.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group">
              <div className="flex items-start gap-6"><div className="flex flex-col items-center gap-3 pt-1"><span className="text-xs tracking-[0.3em] text-[#94a3b8]/60 font-mono">{p.label}</span><div className="w-[1px] h-8 bg-[#94a3b8]/20 group-hover:h-14 group-hover:bg-[#94a3b8]/50 transition-all duration-700" /><Icon className="w-4 h-4 text-[#94a3b8]/40 group-hover:text-[#94a3b8] transition-colors duration-500" /></div>
                <div className="flex-1"><h3 className="text-2xl font-normal text-white premium-text-shadow mb-1 tracking-wide group-hover:text-[#94a3b8] transition-colors duration-500" style={{ fontFamily: "'Cinzel', serif" }}>{p.title}</h3><span className="text-xs tracking-[0.3em] text-white/30 uppercase block mb-5">{p.subtitle}</span><p className="text-[#94a3b8] text-lg font-light leading-[1.9]">{p.body}</p></div></div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
