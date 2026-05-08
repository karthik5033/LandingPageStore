'use client';
import { motion } from 'framer-motion';

const collection = [
  {
    name: 'Core Noir 90',
    origin: 'Colombia · Fino de Aroma',
    notes: 'Charred cedar, black coffee, a long finish of smoked salt and dried fig.',
    weight: '75g',
    price: '$36',
    badge: 'Flagship',
  },
  {
    name: 'Core Noir 82',
    origin: 'Peru · Chuncho',
    notes: 'Tobacco leaf, forest floor, toasted hazelnut folding into dark caramel.',
    weight: '75g',
    price: '$38',
    badge: 'Limited',
  },
  {
    name: 'Core Noir 75',
    origin: 'Venezuela · Trinitario',
    notes: 'Dried cherry, Barolo tannins, raw cocoa butter and a persistent warmth.',
    weight: '75g',
    price: '$34',
    badge: 'New',
  },
];

export default function CoreProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
        >
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-[1px] bg-[#00f0ff]" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#00f0ff] uppercase">
                The archive
              </span>
            </div>
            <h2
              className="text-5xl md:text-7xl font-light text-white leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Three origins. <br />
              <span className="italic text-[#00f0ff]">One protocol.</span>
            </h2>
          </div>
          <p className="text-[#7a8a9a] text-[15px] font-light leading-[1.9] max-w-md">
            Each bar is a controlled experiment — a single origin, a single harvest, processed through our invariant pipeline. No blending. No correction. The bean speaks for itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-12 flex flex-col hover:border-white/20 transition-all duration-700 rounded-xl"
            >
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-[#00f0ff]/70 border border-[#00f0ff]/20 px-3 py-1">
                {p.badge}
              </span>

              <h3
                className="text-3xl md:text-4xl font-light text-white mb-2 tracking-wide"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {p.name}
              </h3>
              <span className="text-xs tracking-[0.3em] text-white/25 uppercase mb-8 block">{p.origin}</span>

              <div className="w-full h-[1px] bg-white/[0.06] mb-8 group-hover:bg-[#00f0ff]/20 transition-colors duration-700" />

              <div className="mb-8 flex-1">
                <span className="text-[11px] tracking-[0.3em] text-[#00f0ff]/50 uppercase block mb-3">Tasting notes</span>
                <p className="text-white/50 text-base font-light leading-relaxed italic" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  &ldquo;{p.notes}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.06]">
                <div>
                  <span className="text-2xl font-light text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.price}</span>
                  <span className="text-xs text-white/30 ml-2 tracking-wider">{p.weight}</span>
                </div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-[#00f0ff] border border-[#00f0ff]/30 px-6 py-3 hover:bg-[#00f0ff] hover:text-[#0f1115] transition-all duration-500">
                  Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
