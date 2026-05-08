'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Molecular separation', body: 'We separate the cacao mass into its constituent components — butter, solids, and residual moisture — using centrifugal extraction at controlled temperature. Each fraction is purified independently before recombination at ratios determined by the specific structural requirements of the bar. This is not cooking. This is materials science.' },
  { num: '02', title: 'Static crystallisation', body: 'The recombined mass is held in total darkness at precisely twenty-eight degrees for forty-eight hours. During this period, cocoa butter molecules begin to self-organise into Type V crystal nuclei. We monitor crystal growth using polarised light microscopy, taking samples every four hours to verify the polymorph distribution is tracking to specification.' },
  { num: '03', title: 'Hydraulic forging', body: 'The tempered mass is poured into our precision moulds and subjected to two hundred kilopascals of hydraulic pressure. This forces the chocolate into every corner of the mould geometry while simultaneously expelling dissolved gases. The pressure is held for ninety seconds, then released in a controlled ramp-down that prevents stress fractures in the solidifying crystal matrix.' },
  { num: '04', title: 'Surface polishing', body: 'Each bar is released from the mould and inspected under a stereo microscope at twelve-times magnification. Any surface defect larger than fifty microns is grounds for rejection. Approved bars are placed on temperature-controlled platens at exactly twenty degrees for twenty-four hours, allowing the surface crystals to undergo a final self-polishing migration that produces the characteristic mirror finish.' },
];

export default function ObeliskProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-white/40" /><span className="text-xs font-medium tracking-[0.5em] text-white/60 uppercase">The fabrication</span></div>
          <h2 className="text-5xl md:text-7xl font-normal text-white premium-text-shadow leading-[1.1] max-w-3xl" style={{ fontFamily: "'Syncopate', sans-serif" }}>From raw mass <span className="italic text-white/30">to monolith.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-14 transition-all duration-700">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-normal text-white/5 group-hover:text-white/15 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Syncopate', sans-serif" }}>{s.num}</span>
                <div className="flex-1"><h3 className="text-2xl md:text-3xl font-normal text-white premium-text-shadow mb-4 group-hover:text-white/80 transition-colors duration-500" style={{ fontFamily: "'Syncopate', sans-serif" }}>{s.title}</h3><p className="text-white/40 text-lg font-light leading-[1.9]">{s.body}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
