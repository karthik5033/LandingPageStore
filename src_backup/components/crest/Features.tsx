'use client';
import { motion } from 'framer-motion';
import { Flame, Leaf, Gem, Timer, Mountain, Droplets } from 'lucide-react';

const pillars = [
  {
    icon: Mountain,
    label: '01',
    title: 'Single Origin',
    subtitle: 'Terroir-Driven Cacao',
    body: 'Every bar traces back to a single estate. We work with three generational farms in Piura, Peru, where the Nacional Blanco variety produces the rarest white-bean cacao on earth. The volcanic soil and Pacific fog create an irreplicable flavour fingerprint — bright citrus top notes folding into deep, almost wine-like tannins.',
  },
  {
    icon: Flame,
    label: '02',
    title: 'Fire Roasted',
    subtitle: 'Artisan Pyrolysis',
    body: 'Our roasting is an act of controlled destruction. We char the husks at 280°C for exactly eleven minutes before dropping the temperature to 140°C for a slow, three-hour drying curve. This dual-phase pyrolysis caramelises the outer sugars into a bitter lacquer while preserving the delicate floral aldehydes trapped deep within the nib.',
  },
  {
    icon: Timer,
    label: '03',
    title: '120-Hour Conche',
    subtitle: 'Patience as Ingredient',
    body: 'Most mass-market chocolate is conched for four to twelve hours. We run our granite rollers for five full days. At hour seventy-two, the volatile acetic acids have fully evaporated. By hour ninety-six, the particle size drops below fifteen microns. The final twenty-four hours are pure refinement — the chocolate develops its signature long, clean finish.',
  },
  {
    icon: Gem,
    label: '04',
    title: 'Hand Tempered',
    subtitle: 'Crystal Architecture',
    body: 'Tempering is the difference between chocolate and confectionery. We table-temper by hand on Italian marble, seeding Type V cocoa butter crystals at precisely 31.5°C. This produces the unmistakable snap, the mirror-gloss surface, and the slow, even melt that defines CREST.',
  },
  {
    icon: Leaf,
    label: '05',
    title: 'Zero Additives',
    subtitle: 'Radical Purity',
    body: 'Our ingredient list is confrontationally short: cacao, cane sugar, cocoa butter. No soy lecithin. No vanillin. No emulsifiers. We achieve smooth texture through time, not chemistry. The result is a chocolate that tastes of itself — unapologetically honest, with nothing to hide behind.',
  },
  {
    icon: Droplets,
    label: '06',
    title: 'Micro-Batch',
    subtitle: '200 Bars Per Run',
    body: 'Each batch begins with forty kilograms of raw cacao and yields exactly two hundred bars. Our maître chocolatier tastes at every stage — post-roast, mid-conche, pre-temper, and final mould. Any batch that does not meet the sensory profile is re-processed or discarded. We release only what we would serve at our own table.',
  },
];

export default function CrestFeatures() {
  return (
    <section id="atelier" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-28"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-[#d4a054]" />
            <span className="text-xs font-medium tracking-[0.5em] text-[#d4a054] uppercase">
              The Six Pillars
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Obsession is <br />
            <span className="italic text-[#d4a054]">our method.</span>
          </h2>
        </motion.div>

        {/* 2x3 Grid — editorial card layout */}
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
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center gap-3 pt-1">
                    <span className="text-xs tracking-[0.3em] text-[#d4a054]/60 font-mono">{p.label}</span>
                    <div className="w-[1px] h-8 bg-[#d4a054]/20 group-hover:h-14 group-hover:bg-[#d4a054]/50 transition-all duration-700" />
                    <Icon className="w-4 h-4 text-[#d4a054]/40 group-hover:text-[#d4a054] transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-normal text-white mb-1 tracking-wide group-hover:text-[#d4a054] transition-colors duration-500"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {p.title}
                    </h3>
                    <span className="text-xs tracking-[0.3em] text-white/30 uppercase block mb-5">{p.subtitle}</span>
                    <p className="text-[#a89080] text-lg font-light leading-[1.9]">{p.body}</p>
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
