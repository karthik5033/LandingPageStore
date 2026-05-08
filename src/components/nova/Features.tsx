'use client';
import { motion } from 'framer-motion';
import { Mountain, Sun, Timer, Leaf, Droplets, Gem } from 'lucide-react';

const pillars = [
  { icon: Mountain, label: '01', title: 'Altitude selection', subtitle: 'Above 2,000 Metres', body: 'We source exclusively from groves above two thousand metres, where reduced atmospheric pressure and intense UV radiation force cacao trees into a state of productive stress. The beans are smaller and denser, with a higher concentration of polyphenols and a more complex aromatic profile than anything grown at sea level.' },
  { icon: Sun, label: '02', title: 'Solar curing', subtitle: '14-Day Diffused Drying', body: 'Freshly fermented beans are spread on raised bamboo beds under translucent linen canopies. The fabric diffuses direct sunlight while allowing infrared radiation to pass through, creating a gentle thermal gradient that draws moisture from the bean\'s interior without case-hardening the surface. The process takes fourteen days — we never use mechanical dryers.' },
  { icon: Timer, label: '03', title: 'Extended conche', subtitle: '120-Hour Refinement', body: 'We run our granite rollers for one hundred and twenty continuous hours. The first seventy-two hours are dedicated to volatile acid removal — acetic and butyric acids that give raw chocolate its harshness. The remaining forty-eight hours are pure flavour development, as the mechanical energy generates Maillard products that add depth and complexity.' },
  { icon: Leaf, label: '04', title: 'Zero interference', subtitle: 'Three Ingredients Only', body: 'Cacao mass, unrefined cane sugar, cocoa butter. We use no lecithin, no vanilla, no emulsifiers of any kind. Smooth texture is achieved through the extended conche, not through chemical intervention. The purity is not a marketing position — it is a technical requirement for preserving the altitude-specific flavour compounds.' },
  { icon: Droplets, label: '05', title: 'Gravity tempering', subtitle: 'Natural Cooling Cycle', body: 'Rather than forcing rapid crystallisation through mechanical cooling, we allow our tempered chocolate to cool naturally on marble slabs at ambient temperature. The slow thermal decay promotes the growth of large, stable Type V crystals that interlock like a natural crystal lattice. The result is a bar with a deep, resonant snap.' },
  { icon: Gem, label: '06', title: 'Dark ageing', subtitle: '60-Day Rest Period', body: 'Every bar is rested for sixty days in a temperature-controlled vault at exactly eighteen degrees. During this period, the volatile aromatic compounds undergo a slow equilibrium process, settling into a harmonious balance that freshly tempered chocolate cannot achieve. The aged bar has a depth and cohesion that rewards patient tasting.' },
];

export default function NovaFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#e0e7ff]" /><span className="text-xs font-medium tracking-[0.5em] text-[#e0e7ff] uppercase">The six observations</span></div>
          <h2 className="text-5xl md:text-7xl font-light text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Fraunces', serif" }}>Altitude is <br /><span className="italic text-[#e0e7ff]">our terroir.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group">
              <div className="flex items-start gap-6"><div className="flex flex-col items-center gap-3 pt-1"><span className="text-xs tracking-[0.3em] text-[#e0e7ff]/60 font-mono">{p.label}</span><div className="w-[1px] h-8 bg-[#e0e7ff]/20 group-hover:h-14 group-hover:bg-[#e0e7ff]/50 transition-all duration-700" /><Icon className="w-4 h-4 text-[#e0e7ff]/40 group-hover:text-[#e0e7ff] transition-colors duration-500" /></div>
                <div className="flex-1"><h3 className="text-2xl font-normal text-white premium-text-shadow mb-1 tracking-wide group-hover:text-[#e0e7ff] transition-colors duration-500" style={{ fontFamily: "'Fraunces', serif" }}>{p.title}</h3><span className="text-xs tracking-[0.3em] text-white/30 uppercase block mb-5">{p.subtitle}</span><p className="text-[#8a8fa8] text-lg font-light leading-[1.9]">{p.body}</p></div></div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
