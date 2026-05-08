'use client';
import { motion } from 'framer-motion';
import { Box, Shield, Layers, Gauge, Gem, Ruler } from 'lucide-react';

const pillars = [
  { icon: Box, label: '01', title: 'Material density', subtitle: 'Mineral-Rich Source', body: 'We source from the heart of the Venezuelan Amazon, selecting beans for their mineral density rather than flavour alone. Dense beans contain more cocoa butter in a tighter cellular matrix, which translates directly to structural integrity in the finished bar. A denser bean makes a stronger bar — and a stronger bar makes a better melt.' },
  { icon: Gauge, label: '02', title: 'Zero tolerance', subtitle: '0.5° Precision', body: 'Our entire tempering process operates within a half-degree margin of error. We use industrial-grade platinum RTD sensors embedded directly in the chocolate mass, feeding real-time temperature data to a PID controller. Any excursion beyond our specification triggers an automatic re-melt. Most chocolatiers temper by feel. We temper by engineering.' },
  { icon: Shield, label: '03', title: 'Crystal purity', subtitle: 'Type V Exclusive', body: 'There are six polymorphic forms of cocoa butter crystal. Only Type V produces the combination of snap, gloss, and shelf stability that defines premium chocolate. Our nitrogen-assisted tempering protocol achieves ninety-eight percent Type V purity — compared to the seventy to eighty percent typical of hand-tempered bars.' },
  { icon: Layers, label: '04', title: 'Block forging', subtitle: 'Hydraulic Compression', body: 'After tempering, we pour the chocolate into precision-machined stainless steel moulds and apply two hundred kilopascals of hydraulic pressure for exactly ninety seconds. This eliminates microscopic air pockets that would compromise the bar\'s structural integrity and create weak points during fracture. The result is a monolithic block with zero internal voids.' },
  { icon: Gem, label: '05', title: 'Surface refining', subtitle: 'Mirror Finish', body: 'The surface of an Obelisk bar is polished to a roughness average of less than one micron. We achieve this not through lacquer or coating, but through the crystal structure itself — when Type V crystals are perfectly aligned, they self-organise into a surface that reflects light like polished obsidian. The mirror finish is not applied. It emerges.' },
  { icon: Ruler, label: '06', title: 'Geometric mould', subtitle: 'Precision Engineering', body: 'Our moulds are CNC-machined from surgical-grade stainless steel to a tolerance of fifteen microns. Each bar is a perfect rectangular prism with edges sharp enough to cast a clean shadow. We inspect every mould after fifty uses and retire any that show measurable wear. The geometry is the brand.' },
];

export default function ObeliskFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-white/40" /><span className="text-xs font-medium tracking-[0.5em] text-white/60 uppercase">The six tolerances</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Syncopate', sans-serif" }}>Precision is <span className="italic text-white/30">not optional.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => { const Icon = p.icon; return (
            <motion.article key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.9 }} className="group">
              <div className="flex items-start gap-6"><div className="flex flex-col items-center gap-3 pt-1"><span className="text-xs tracking-[0.3em] text-white/30 font-mono">{p.label}</span><div className="w-[1px] h-8 bg-white/10 group-hover:h-14 group-hover:bg-white/30 transition-all duration-700" /><Icon className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors duration-500" /></div>
                <div className="flex-1"><h3 className="text-2xl font-normal text-white premium-text-shadow mb-1 tracking-wide group-hover:text-white/80 transition-colors duration-500" style={{ fontFamily: "'Syncopate', sans-serif" }}>{p.title}</h3><span className="text-xs tracking-[0.3em] text-white/20 uppercase block mb-5">{p.subtitle}</span><p className="text-white/40 text-lg font-light leading-[1.9]">{p.body}</p></div></div>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
