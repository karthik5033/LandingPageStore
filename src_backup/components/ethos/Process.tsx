'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Verified harvest', body: 'Every pod is weighed at the farm gate and recorded with GPS coordinates, harvester identity, and date. The farmer receives immediate payment via mobile transfer — no delayed payments, no deductions, no intermediaries. The payment receipt is photographed and archived. This data forms the foundation of our traceability chain and is available to any customer who requests it.' },
  { num: '02', title: 'Community fermentation', body: 'Beans are fermented at cooperative-owned facilities built with Ethos-funded infrastructure grants. The fermentation protocol is developed collaboratively with our partners — respecting traditional methods while introducing temperature monitoring and quality controls. Fermentation data is logged and published alongside each batch release.' },
  { num: '03', title: 'Audited processing', body: 'Our roasting, grinding, and tempering facility operates under an open-door policy. Any customer, journalist, or auditor can visit without appointment. We publish our energy consumption, waste output, and water usage monthly. Our processing adds approximately six dollars and forty cents to the cost of each bar — a figure that is published on every wrapper.' },
  { num: '04', title: 'Transparent packaging', body: 'Our wrapper is designed as a financial document. The front carries the brand and origin. The back carries a complete cost breakdown — farm gate price, shipping, processing, packaging, distribution, and our margin. The QR code links to the full supply chain documentation, including the farmer payment receipt for the specific batch.' },
];

export default function EthosProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mb-28">
          <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#1a1a1a]" /><span className="text-xs font-medium tracking-[0.5em] text-[#1a1a1a]/60 uppercase">The open pipeline</span></div>
          <h2 className="text-5xl md:text-7xl font-light text-[#1a1a1a] leading-[1.1] max-w-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>From receipt <span className="italic text-[#1a1a1a]/40">to wrapper.</span></h2>
        </motion.div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group border border-black/10 bg-white/60 backdrop-blur-md p-10 md:p-14 hover:border-black/20 transition-all duration-700 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-light text-[#1a1a1a]/10 group-hover:text-[#1a1a1a]/20 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.num}</span>
                <div className="flex-1"><h3 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-4 group-hover:text-[#1a1a1a]/70 transition-colors duration-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3><p className="text-[#1a1a1a]/50 text-lg font-light leading-[1.9]">{s.body}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
