'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Celestial fermentation', body: 'Freshly harvested pods are opened at altitude and the beans are placed in cedar-lined fermentation boxes within one hour. The thin mountain air slows the fermentation process, extending it to seven days rather than the typical five. This extended timeline allows a more complete conversion of sugars to flavour precursors, producing a complexity that lowland fermentation cannot match.' },
  { num: '02', title: 'Radiant roasting', body: 'We roast with indirect heat at one hundred and thirty degrees for ninety minutes — a temperature low enough to preserve the fragile floral aldehydes that give highland cacao its distinctive brightness. The roast is monitored via embedded thermocouples in real-time, and the curve is adjusted dynamically based on the moisture content and bean density of each specific batch.' },
  { num: '03', title: 'Stone conching', body: 'Our granite rollers operate at twenty-eight revolutions per minute for one hundred and twenty continuous hours. The slow speed minimises frictional heating while the extended duration ensures complete particle refinement below fourteen microns. We do not add any flow agents — viscosity is managed purely through time and mechanical energy.' },
  { num: '04', title: 'Gravity tempering', body: 'The refined mass is seeded with pre-crystallised cocoa butter at thirty-one degrees, then allowed to cool naturally on polished marble slabs. We do not use cooling tunnels or forced air. The natural thermal gradient promotes the growth of large, well-ordered Type V crystals that give the finished bar its characteristic deep gloss and sustained, even melt.' },
];

export default function NovaProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#e0e7ff]" /><span className="text-xs font-medium tracking-[0.5em] text-[#e0e7ff] uppercase">The celestial path</span></div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl" style={{ fontFamily: "'Fraunces', serif" }}>From highland <br /><span className="italic text-[#e0e7ff]">to horizon.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-14 hover:border-white/20 transition-all duration-700 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-light text-white/10 group-hover:text-[#e0e7ff]/30 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Fraunces', serif" }}>{s.num}</span>
                <div className="flex-1"><h3 className="text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-[#e0e7ff] transition-colors duration-500" style={{ fontFamily: "'Fraunces', serif" }}>{s.title}</h3><p className="text-[#8a8fa8] text-lg font-light leading-[1.9]">{s.body}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
