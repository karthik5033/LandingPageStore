'use client';
import { motion } from 'framer-motion';
import { Sparkles, Milk, Cherry, Snowflake } from 'lucide-react';

const virtues = [
  {
    icon: Milk,
    title: 'Cocoa Butter Purity',
    stat: '100%',
    body: 'IVOIRE begins with the rarest ingredient in chocolate: pure, undeodorised cocoa butter, cold-pressed from Arriba Nacional beans in Ecuador. Most white chocolate uses deodorised cocoa butter — stripped of its natural flavour to achieve consistency. We keep every volatile compound intact, preserving the delicate floral and nutty character that makes real cocoa butter extraordinary.',
  },
  {
    icon: Cherry,
    title: 'Madagascar Vanilla',
    stat: 'Grade A',
    body: 'We use whole Bourbon vanilla pods from Antalaha, Madagascar — the world\'s finest vanilla-growing region. Each pod is hand-pollinated, cured for nine months, and contains over two hundred distinct aroma compounds. One pod per batch. This is not vanillin extract. This is the real thing, and you can taste every layer of its complexity.',
  },
  {
    icon: Snowflake,
    title: 'Alpine Milk Powder',
    stat: '32%',
    body: 'Our milk powder comes from a single dairy in the Swiss Bernese Oberland, where Jersey cows graze at 1,400 metres on wildflower meadows. The high-altitude pasture produces milk with exceptional butterfat content and a sweet, almost caramelised flavour profile. We spray-dry at low temperature to preserve the delicate lactose crystals.',
  },
  {
    icon: Sparkles,
    title: 'Crystalline Sugar',
    stat: '<18μm',
    body: 'We use organic cane sugar from Mauritius, milled to below eighteen microns in our granite melangers. At this particle size, the crystals dissolve instantly on the tongue. Combined with our forty-eight-hour conche, the result is a texture so smooth it feels like cool silk — no grittiness, no granulation, just pure, liquid sweetness.',
  },
];

export default function IvoireFeatures() {
  return (
    <section id="craft" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-28"
        >
          <span className="text-xs font-medium tracking-[0.5em] text-[#6b4a2e] uppercase block mb-6">
            Four Ingredients. Nothing More.
          </span>
          <h2
            className="text-5xl md:text-7xl font-normal text-[#2a1f1a] leading-[1.1] max-w-4xl"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            The anatomy of <span className="italic text-[#6b4a2e]">purity.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {virtues.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-10 md:p-14 border border-[#2a1f1a]/[0.08] bg-[#f5efe6]/80 backdrop-blur-xl hover:border-[#6b4a2e]/25 transition-all duration-700 shadow-sm"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#6b4a2e]/20 flex items-center justify-center group-hover:border-[#6b4a2e]/50 transition-all duration-500">
                      <Icon className="w-4 h-4 text-[#6b4a2e]/50 group-hover:text-[#6b4a2e] transition-colors duration-500" />
                    </div>
                    <h3
                      className="text-xl md:text-2xl font-normal text-[#2a1f1a] group-hover:text-[#6b4a2e] transition-colors duration-500"
                      style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                      {v.title}
                    </h3>
                  </div>
                  <span
                    className="text-3xl font-light text-[#6b4a2e]/15 group-hover:text-[#6b4a2e]/30 transition-colors duration-500"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                  >
                    {v.stat}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[#2a1f1a]/[0.06] mb-8" />
                <p className="text-[#5a4d40] text-lg font-light leading-[1.9]">{v.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
