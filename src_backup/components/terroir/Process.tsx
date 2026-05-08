'use client';
import { motion } from 'framer-motion';

const stages = [
  {
    num: 'I',
    title: 'The Harvest',
    body: 'Between November and February, when the pods blush from green to amber, our farmers walk the rows at dawn. Each pod is hand-cut with a machete at a precise angle that protects the flower cushion for next season\'s growth. A single tree yields twenty to thirty pods — enough for just one kilogram of dried beans.',
  },
  {
    num: 'II',
    title: 'Fermentation',
    body: 'Fresh beans are heaped into cascading wooden boxes, covered with banana leaves, and left to ferment for seven days. The microbial transformation is profound: wild yeasts convert sugars to alcohol, then acetic acid bacteria take over, raising internal temperatures to 50°C. This is where chocolate flavour is born — not in the factory, but in these simple wooden boxes.',
  },
  {
    num: 'III',
    title: 'Sun Drying',
    body: 'Post-fermentation, beans are spread on raised bamboo mats and dried under equatorial sun for ten to fourteen days. Workers turn them by hand every four hours, ensuring even moisture reduction from sixty percent to seven percent. Rushing this stage with mechanical dryers produces flat, acidic chocolate.',
  },
  {
    num: 'IV',
    title: 'The Transformation',
    body: 'In our atelier, the dried beans undergo a careful dual-temperature roast, are cracked into nibs, winnowed of husks, then stone-ground for one hundred hours. The granite melangers reduce particle size to below seventeen microns while cocoa butter is released, creating the liquid that becomes our chocolate. Finally, hand-tempering on marble seeds the Type V crystals that give each bar its snap and sheen.',
  },
];

export default function TerroirProcess() {
  return (
    <section id="journey" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-28"
        >
          <span className="text-xs font-medium tracking-[0.5em] text-[#b8845a] uppercase block mb-6">
            From Pod to Palate
          </span>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Four acts of <br />
            <span className="italic text-[#b8845a]">transformation.</span>
          </h2>
        </motion.div>

        {/* Roman-numeral process — alternating left/right layout */}
        <div className="flex flex-col gap-28">
          {stages.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row gap-12 md:gap-20 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Large numeral */}
              <div className={`md:w-1/3 flex flex-col ${i % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                <span
                  className="text-[120px] md:text-[160px] leading-none font-light text-white/[0.04]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.num}
                </span>
                <h3
                  className="text-3xl md:text-4xl font-light text-white -mt-12 md:-mt-16"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.title}
                </h3>
              </div>

              {/* Content */}
              <div className="md:w-2/3 flex items-center">
                <div className={`border-l border-[#b8845a]/20 pl-10 ${i % 2 === 1 ? 'md:border-l-0 md:border-r md:border-[#b8845a]/20 md:pl-0 md:pr-10' : ''}`}>
                  <p className="text-[#a08a76] text-lg font-light leading-[2]">{s.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
