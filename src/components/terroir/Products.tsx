'use client';
import { motion } from 'framer-motion';

const bars = [
  {
    name: 'AMAZONAS',
    percentage: '78%',
    origin: 'Peru · Bagua Province',
    character: 'Deep & Brooding',
    notes: ['Dark cherry', 'Smoked walnut', 'Earthy cacao'],
    price: '$36',
    weight: '80g',
  },
  {
    name: 'SOCONUSCO',
    percentage: '70%',
    origin: 'Mexico · Chiapas',
    character: 'Bright & Complex',
    notes: ['Citrus zest', 'Roasted agave', 'Warm spice'],
    price: '$42',
    weight: '80g',
  },
  {
    name: 'SAMBIRANO',
    percentage: '74%',
    origin: 'Madagascar · Northwest',
    character: 'Fruity & Vivid',
    notes: ['Red berry', 'Tangerine', 'Crisp acidity'],
    price: '$38',
    weight: '80g',
  },
];

export default function TerroirProducts() {
  return (
    <section id="harvest" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-xs font-medium tracking-[0.5em] text-[#b8845a] uppercase block mb-6">
            Current Harvest
          </span>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            This season&apos;s <span className="italic text-[#b8845a]">terroir.</span>
          </h2>
        </motion.div>

        {/* Horizontal product display — wide cards */}
        <div className="flex flex-col gap-6">
          {bars.map((bar, i) => (
            <motion.div
              key={bar.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-white/[0.04] bg-white/[0.015] backdrop-blur-sm p-8 md:p-12 hover:border-[#b8845a]/20 transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Name & Percentage */}
                <div className="md:w-1/4">
                  <div className="flex items-baseline gap-3">
                    <h3
                      className="text-3xl md:text-4xl font-light text-white group-hover:text-[#b8845a] transition-colors duration-500"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {bar.name}
                    </h3>
                  </div>
                  <span className="text-xs tracking-[0.3em] text-white/20 uppercase block mt-1">{bar.origin}</span>
                </div>

                {/* Percentage display */}
                <div className="md:w-1/6 flex flex-col items-center">
                  <span
                    className="text-5xl md:text-6xl font-light text-[#b8845a]/30 group-hover:text-[#b8845a]/60 transition-colors duration-500"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {bar.percentage}
                  </span>
                  <span className="text-[11px] tracking-[0.3em] text-white/15 uppercase mt-1">{bar.character}</span>
                </div>

                {/* Tasting notes */}
                <div className="md:w-1/3 flex gap-4 flex-wrap">
                  {bar.notes.map(note => (
                    <span key={note} className="text-xs tracking-[0.15em] text-[#a08a76] border border-white/[0.06] px-4 py-2 group-hover:border-[#b8845a]/15 transition-colors duration-500">
                      {note}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="md:w-1/4 flex items-center justify-end gap-6">
                  <div className="text-right">
                    <span className="text-2xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{bar.price}</span>
                    <span className="text-xs text-white/20 ml-1">{bar.weight}</span>
                  </div>
                  <button className="text-xs font-medium tracking-[0.2em] uppercase text-[#b8845a] border border-[#b8845a]/30 px-6 py-3 hover:bg-[#b8845a] hover:text-[#1c1410] transition-all duration-500">
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
