'use client';
import { motion } from 'framer-motion';
import { Wind, Sun, Thermometer, TreePine, HandMetal, Clock } from 'lucide-react';

const elements = [
  {
    icon: Sun,
    title: 'Equatorial Light',
    detail: 'Our cacao grows within eight degrees of the equator, where twelve hours of daily sunlight drives aggressive photosynthesis. The trees produce more complex polyphenols as a natural sunscreen — and those polyphenols become the rich, layered flavour in your chocolate.',
    stat: '2,100',
    unit: 'hrs/yr sun',
  },
  {
    icon: Wind,
    title: 'Pacific Microclimate',
    detail: 'Coastal fog rolls in every dawn, wrapping the canopy in moisture. This natural humidity eliminates the need for irrigation and creates a slower fermentation pace. The beans develop deeper, more nuanced flavour compounds than their inland counterparts.',
    stat: '85%',
    unit: 'avg humidity',
  },
  {
    icon: TreePine,
    title: 'Shade-Grown Canopy',
    detail: 'Every cacao tree grows beneath a canopy of mango, banana, and mahogany. This agroforestry model mimics natural rainforest conditions, producing smaller yields but dramatically more complex beans. The shade slows maturation, allowing sugars and acids to develop in tandem.',
    stat: '60%',
    unit: 'canopy cover',
  },
  {
    icon: Thermometer,
    title: 'Volcanic Terroir',
    detail: 'The Andean volcanic soil is rich in potassium, phosphorus, and trace minerals that infuse the cacao with its distinctive mineral backbone. You can taste the geology — a subtle, almost saline quality beneath the fruit and chocolate notes.',
    stat: '14+',
    unit: 'trace minerals',
  },
  {
    icon: HandMetal,
    title: 'Hand-Sorted Nibs',
    detail: 'After cracking, every nib is hand-inspected. Flat nibs indicate under-fermentation. Purple nibs signal excess acidity. We select only the plump, mahogany-brown nibs that promise a clean, balanced roast. This step alone discards fifteen percent of the harvest.',
    stat: '85%',
    unit: 'yield rate',
  },
  {
    icon: Clock,
    title: 'Extended Fermentation',
    detail: 'While commercial operations ferment for three to four days, we extend to seven. The extra time allows complex ester chains to develop — the same chemistry that gives fine wine its depth. The fermentation boxes are turned every twelve hours by hand.',
    stat: '7',
    unit: 'day ferment',
  },
];

export default function TerroirFeatures() {
  return (
    <section id="philosophy" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-28"
        >
          <span className="text-xs font-medium tracking-[0.5em] text-[#b8845a] uppercase block mb-6">
            Nature&apos;s Blueprint
          </span>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The land writes <br />
            <span className="italic text-[#b8845a]">the recipe.</span>
          </h2>
        </motion.div>

        {/* 3x2 grid with alternating large/small rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {elements.map((el, i) => {
            const Icon = el.icon;
            return (
              <motion.div
                key={el.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-10 border border-white/[0.04] bg-white/[0.015] backdrop-blur-sm hover:border-[#b8845a]/20 transition-all duration-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon className="w-5 h-5 text-[#b8845a]/40 group-hover:text-[#b8845a] transition-colors duration-500" />
                  <div className="text-right">
                    <span className="text-2xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{el.stat}</span>
                    <span className="text-[11px] tracking-[0.2em] text-white/20 uppercase block">{el.unit}</span>
                  </div>
                </div>
                <h3
                  className="text-xl font-normal text-white mb-4 group-hover:text-[#b8845a] transition-colors duration-500"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {el.title}
                </h3>
                <p className="text-[#a08a76] text-base font-light leading-[1.85]">{el.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
