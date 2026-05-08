'use client';
import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Layers, Droplets, Activity } from 'lucide-react';

const pillars = [
  {
    icon: Cpu,
    label: '01',
    title: 'Source trace',
    subtitle: 'Blockchain Verified',
    body: 'Every pod is logged at the point of harvest with GPS coordinates, farmer identity, and ambient conditions. This data is hashed and stored on-chain, creating an immutable record from tree to bar. When you scan our QR code, you are not reading marketing copy — you are reading a cryptographic proof of provenance.',
  },
  {
    icon: Shield,
    label: '02',
    title: 'Static roast',
    subtitle: 'Convection-Free Heat',
    body: 'Conventional roasters use forced air to circulate heat, which strips volatile aroma compounds from the bean surface before they can migrate inward. Our proprietary static chamber eliminates convection entirely. Heat radiates evenly through ceramic tiles, preserving the delicate floral top notes that most roasters destroy in the first ninety seconds.',
  },
  {
    icon: Layers,
    label: '03',
    title: '120-hour conche',
    subtitle: 'Patience as Process',
    body: 'We run our granite rollers for five full days. At hour seventy-two, the acetic acids have evaporated. By hour ninety-six, particle size drops below fourteen microns — the threshold of human perception. The final twenty-four hours are pure refinement: the chocolate develops its signature long, clean finish that lingers without bitterness.',
  },
  {
    icon: Zap,
    label: '04',
    title: 'Cryo temper',
    subtitle: 'Crystal Engineering',
    body: 'Traditional tempering is slow and imprecise. Our rapid-cooling protocol uses food-grade nitrogen to crash the temperature from forty-five degrees to eighteen in under four seconds. This creates an exceptionally tight Type V crystal matrix — the result is a bar with a diamond-hard snap and a surface gloss that rivals polished stone.',
  },
  {
    icon: Droplets,
    label: '05',
    title: 'Zero additives',
    subtitle: 'Three Ingredients Only',
    body: 'Cacao mass, cane sugar, cocoa butter. That is the entire list. No soy lecithin to thin the viscosity. No vanillin to mask off-flavours. No emulsifiers to extend shelf life. We achieve smooth texture through time and pressure, not through chemistry. The ingredient list is confrontationally short by design.',
  },
  {
    icon: Activity,
    label: '06',
    title: 'Batch reports',
    subtitle: 'Chemical Transparency',
    body: 'Every release ships with a full analytical report: pH at fermentation, Brix at drying, particle distribution post-conche, and a sensory evaluation scored against our internal flavour matrix. This is not marketing — it is accountability. If we cannot measure it, we do not claim it.',
  },
];

export default function CoreFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-28"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-[#00f0ff]" />
            <span className="text-xs font-medium tracking-[0.5em] text-[#00f0ff] uppercase">
              The six parameters
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Precision is <br />
            <span className="italic text-[#00f0ff]">our method.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center gap-3 pt-1">
                    <span className="text-xs tracking-[0.3em] text-[#00f0ff]/60 font-mono">{p.label}</span>
                    <div className="w-[1px] h-8 bg-[#00f0ff]/20 group-hover:h-14 group-hover:bg-[#00f0ff]/50 transition-all duration-700" />
                    <Icon className="w-4 h-4 text-[#00f0ff]/40 group-hover:text-[#00f0ff] transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-normal text-white mb-1 tracking-wide group-hover:text-[#00f0ff] transition-colors duration-500"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <span className="text-xs tracking-[0.3em] text-white/30 uppercase block mb-5">{p.subtitle}</span>
                    <p className="text-[#7a8a9a] text-lg font-light leading-[1.9]">{p.body}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
