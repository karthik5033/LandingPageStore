'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Selection protocol', body: 'We source from a network of twelve estates across five countries. Each harvest is sampled, cupped, and scored before purchase. The scoring criteria are weighted toward inherent complexity, not quantity — a farm producing thirty bags of exceptional cacao will always rank above one producing three hundred bags of good cacao.' },
  { num: '02', title: 'Controlled roast', body: 'Each origin receives a bespoke roast profile developed through iterative testing. We log temperature at fifteen-second intervals via embedded thermocouples, creating a detailed thermal map of each batch. The roast is complete when the internal bean temperature reaches a target specific to that origin — typically between one hundred and thirty and one hundred and forty-five degrees.' },
  { num: '03', title: 'Stone refinement', body: 'After winnowing, the nibs enter our granite melangers for seventy-two continuous hours. The granite stones apply shear force at twenty revolutions per minute — slow enough to prevent frictional heating but fast enough to achieve a sub-fourteen-micron particle size. We add sugar at hour twenty-four and cocoa butter at hour forty-eight, integrating each in sequence.' },
  { num: '04', title: 'Marble tempering', body: 'The refined chocolate is poured onto Italian marble slabs and worked by hand until it reaches the precise crystallisation point. Our chocolatier uses a combination of temperature reading and tactile feedback — the resistance of the mass against the palette knife, the sheen of the surface, the rate of cooling at the edges. Each batch takes between thirty and forty minutes of continuous hand-work.' },
];

export default function ValorProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#94a3b8]" /><span className="text-xs font-medium tracking-[0.5em] text-[#94a3b8] uppercase">The forge</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Cinzel', serif" }}>From raw bean <br /><span className="italic text-[#94a3b8]">to final form.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-14 transition-all duration-700">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-normal text-white/10 group-hover:text-[#94a3b8]/30 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Cinzel', serif" }}>{s.num}</span>
                <div className="flex-1"><h3 className="text-2xl md:text-3xl font-normal text-white premium-text-shadow mb-4 group-hover:text-[#94a3b8] transition-colors duration-500" style={{ fontFamily: "'Cinzel', serif" }}>{s.title}</h3><p className="text-[#94a3b8] text-lg font-light leading-[1.9]">{s.body}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
