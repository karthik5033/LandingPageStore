'use client';
import { motion } from 'framer-motion';

const collection = [
  {
    name: 'PIURA 85%',
    origin: 'Peru · Nacional Blanco',
    notes: 'Blackberry compote, smoked cedar, a whisper of dried fig.',
    weight: '75g',
    price: '$34',
    badge: 'Flagship',
  },
  {
    name: 'ALTO BENI 72%',
    origin: 'Bolivia · Wild Cacao',
    notes: 'Raw honey, toasted almond, sun-warmed tobacco leaf.',
    weight: '75g',
    price: '$38',
    badge: 'Limited',
  },
  {
    name: 'TUMACO 68%',
    origin: 'Colombia · Fino de Aroma',
    notes: 'Passion fruit acidity, caramel malt, lingering jasmine.',
    weight: '75g',
    price: '$32',
    badge: 'New',
  },
];

export default function CrestProducts() {
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
              <div className="w-16 h-[1px] bg-[#d4a054]" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#d4a054] uppercase">
                The Reserve
              </span>
            </div>
            <h2
              className="text-5xl md:text-7xl font-light text-white leading-[1.1]"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Three origins. <br />
              <span className="italic text-[#d4a054]">One standard.</span>
            </h2>
          </div>
          <p className="text-[#a89080] text-[15px] font-light leading-[1.9] max-w-md">
            Each bar is a portrait of place — a single origin, a single harvest, expressed through our unwavering process. No blending. No masking. Just the terroir, rendered in chocolate.
          </p>
        </motion.div>

        {/* Product cards — horizontal editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-10 md:p-12 flex flex-col hover:border-[#d4a054]/30 transition-all duration-700"
            >
              {/* Badge */}
              <span className="absolute top-6 right-6 text-[11px] tracking-[0.3em] uppercase text-[#d4a054]/70 border border-[#d4a054]/20 px-3 py-1">
                {p.badge}
              </span>

              {/* Name & Origin */}
              <h3
                className="text-3xl md:text-4xl font-light text-white mb-2 tracking-wide"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                {p.name}
              </h3>
              <span className="text-xs tracking-[0.3em] text-white/25 uppercase mb-8 block">{p.origin}</span>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/[0.06] mb-8 group-hover:bg-[#d4a054]/20 transition-colors duration-700" />

              {/* Tasting Notes */}
              <div className="mb-8 flex-1">
                <span className="text-[11px] tracking-[0.3em] text-[#d4a054]/50 uppercase block mb-3">Tasting Notes</span>
                <p className="text-white/50 text-base font-light leading-relaxed italic" style={{ fontFamily: "'EB Garamond', serif" }}>
                  &ldquo;{p.notes}&rdquo;
                </p>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.06]">
                <div>
                  <span className="text-2xl font-light text-white" style={{ fontFamily: "'EB Garamond', serif" }}>{p.price}</span>
                  <span className="text-xs text-white/30 ml-2 tracking-wider">{p.weight}</span>
                </div>
                <button className="text-xs font-medium tracking-[0.25em] uppercase text-[#d4a054] border border-[#d4a054]/30 px-6 py-3 hover:bg-[#d4a054] hover:text-[#0c0604] transition-all duration-500">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
