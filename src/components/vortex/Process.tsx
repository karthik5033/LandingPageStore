'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Impact roasting', body: 'Beans enter a preheated chamber at two hundred and twenty degrees and are immediately subjected to rapid convection pulses. Three seconds of intense heat followed by seven seconds of ambient cooling. This staccato rhythm caramelises the outer sugars while preserving the volatile terpenes and pyrazines trapped deep within the nib. Total cycle time: fifty-five minutes.' },
  { num: '02', title: 'Vortex conching', body: 'The roasted nibs are ground and fed into our custom high-speed conche — a four-blade impeller spinning at four thousand eight hundred RPM inside a jacketed vessel. Nitrogen gas is injected continuously at twelve litres per minute. The combination of shear force and inert gas aeration strips acetic acid from the mass at a rate that would take a traditional conche five days to match.' },
  { num: '03', title: 'Sonic tempering', body: 'The refined mass is cooled to twenty-eight degrees and seeded with pre-crystallised cocoa butter while being subjected to sixty-hertz vibration. The resonant frequency encourages uniform nucleation of Type V crystals throughout the mass. We verify crystal distribution using cross-polarised microscopy before allowing the mass to proceed to moulding.' },
  { num: '04', title: 'Pressure moulding', body: 'Tempered chocolate is deposited into CNC-machined moulds and vibrated at one hundred and twenty hertz for fifteen seconds to eliminate air inclusions. The filled moulds pass through a cooling tunnel at a descent rate of one degree per minute, arriving at a final temperature of fourteen degrees. Bars are ejected with a burst of compressed air and immediately wrapped in gas-barrier foil.' },
];

export default function VortexProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#ccff00]" /><span className="text-xs font-medium tracking-[0.5em] text-[#ccff00] uppercase">The velocity pipeline</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Krona One', sans-serif" }}>From raw nib <span className="italic text-[#ccff00]">to kinetic bar.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-14 transition-all duration-700">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-light text-white/10 group-hover:text-[#ccff00]/30 transition-colors duration-700 shrink-0">{s.num}</span>
                <div className="flex-1"><h3 className="text-2xl md:text-3xl font-normal text-white premium-text-shadow mb-4 group-hover:text-[#ccff00] transition-colors duration-500" style={{ fontFamily: "'Krona One', sans-serif" }}>{s.title}</h3><p className="text-white/50 text-lg font-light leading-[1.9]">{s.body}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
